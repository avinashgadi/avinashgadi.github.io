db.employees.find({name:{$regex:"a"}})
db.employees.find({name:{$regex:"naruto"}})
db.employees.find({name:{$regex:"naruto",$options:"u"}})
db.employees.find({name:{$regex:"^N",$options:"i"}})//begin with letter c
db.employees.find({name:{$regex:"o$",$options:"i"}})//ends with o
