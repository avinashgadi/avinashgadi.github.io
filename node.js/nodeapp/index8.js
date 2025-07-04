import bcrypt from 'bcrypt'
// const pass="pass1234"
// const hashpass=await bcrypt.hash(pass,10)
// console.log(hashpass);
const check =await bcrypt.compare("pass1234","$2b$10$hSEJsrNeJYuUvQC6/KxvTOSnrkRUR4q5Or5Hmx.5F7Mu/WsCT0/9a");
console.log(check);