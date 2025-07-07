// const stName="john"
// console.log(stName);
const stName1=process.argv[2]||"Jhon"
// const stName2=process.argv[3]||"Jhon"
// console.log(`Hello ${stName1} and ${stName2}`)
import express from 'express'
const app=express();
let port = process.argv[3]
app.listen(port,()=>{
console.log(`Hello ${stName1} is runninig on port num ${port} `)
});