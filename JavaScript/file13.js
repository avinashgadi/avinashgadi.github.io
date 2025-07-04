//json
const student='{"name": "Hi" ,"age":10}'
const newstudent=JSON.parse(student)
console.log(newstudent.name)
console.log(JSON.stringify(newstudent))