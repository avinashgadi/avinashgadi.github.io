db.posts.aggregate([ 
    { $lookup: { from: "comments", localField: "_id", foreignField: "pid", as: "comm"} },
    {$unwind:"$comm"},
    {$project:{_id:0,post:1,"c.comment":1}}
])

db.comments.insertOne({_id:"c6",pid:"p1",comment:"This is comment "})

db.marks.insertMany([
    {name:"john",trem:"t1",subject:"maths",score:98},
    {name:"john",trem:"t1",subject:"maths",score:90},
    {name:"john",trem:"t3",subject:"maths",score:88},
    {name:"john",trem:"t1",subject:"science",score:92},
    {name:"john",trem:"t2",subject:"science",score:82},
    {name:"john",trem:"t3",subject:"science",score:82},
    {name:"cathy",trem:"t1",subject:"maths",score:92},
    {name:"cathy",trem:"t2",subject:"maths",score:92},
    {name:"cathy",trem:"t3",subject:"maths",score:82},
    {name:"cathy",trem:"t1",subject:"science",score:92},
    {name:"cathy",trem:"t2",subject:"science",score:82},
    {name:"cathy",trem:"t3",subject:"science",score:80}
])
//display the avg score of each student
db.marks.aggregate([
    {$group:{_id:"$name",Avgscore:{$avg:"$score"}}}
])


db.marks.aggregate([
  {
    $group: {
      _id: { name: "$name", trem: "$trem" },
      AvgScore: { $avg: "$score" }
    }
  }
])
db.marks.aggregate([
    {$group:{
        _id:{name:"john",trem:"$trem"},
        avgScore:{$avg:"$score"},
    }}
])
db.marks.match([
    {$group:{
        _id:{name:"john",trem:"$trem"},
        avgScore:{$avg:"$score"},
    }}
])

db.marks.aggregate([
  {
    $match: { name: "john" }
  },
  {
    $group: {
      _id: { trem: "$trem" }, 
      avgScore: { $avg: "$score" }
    }
  }
])

db.studentInfo.insertMany([
    {_id:"s1",name:"john"},
    {_id:"s2",name:"cathy"},
])

 db.marks.updateMany({},{$rename:{name:"sid"}})
db.marks.updateMany({sid:"john"},{$set:{sid:"s1"}})
db.marks.updateMany({sid:"cathy"},{$set:{sid:"s2"}})
db.studentInfo.aggregate([
    {$lookup:{from:"marks",localField:"_id",foreignField:"sid",as:"marks"}},
    {$unwind:"$marks"}
])
db.studentInfo.aggregate([
    {$lookup:{from:"marks",localField:"_id",foreignField:"sid",as:"marks"}},
    {$unwind:"$marks"},
    {$group:{_id:"$marks.trem",Avgscore:{$avg:"$marks.score"}}}
])


db.employees.aggregate([
  {$project:{_id:0,name:1,salary:1}}
])

db.employees.aggregate([
  {$project:{_id:0,name:1,salary:1,Grade:"Grade A"}}  //grade a is added into to employes data
])

db.employees.aggregate([
  {$project:{_id:0,name:1,salary:1,Grade:{$cond:[{gt:["$salary",30000]},"Grade A","Grade B"]}}}
])

db.employees.aggregate([
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["$salary",30000]},
      then:"Grade A",
      else:"Grade B"
    }}}}
])

db.employees.aggregate([
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["$salary",30000]},
      then:"Grade A",
      else:"Grade B"
    }}}
  },
  {$out:"Gradewisesalary"}      // it stores the data into a new collection
])

db.createview("viewname","collection name",)

db.createView("salaryview","employees",[
  {$project:{
    _id:0,
    name:1,
    salary:1,
    Grade:{$cond:{
      if:{$gt:["$salary",30000]},
      then:"Grade A",
      else:"Grade B"
    }}}
  },
])
