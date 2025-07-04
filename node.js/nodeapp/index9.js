import express from 'express'
import jwt from 'jsonwebtoken'
const app=express();
const SECRET ="sometext";
app.listen(8080,()=>{
console.log( "Server is running");
})
const users=[{
    name:"jhon",
    email:"jhon@email.com",
    role:"user",
    password:"1234",
},
{
    name:"jhon wife",
    email:"jw@email.com",
    role:"admin",
    password:"1234",
}];
app.use(express.json())
app.post("/login",(req,res)=>{
const{email,password}=req.body;
const found =users.find(
    (user)=>user.email===email&&user.password ===password
);
if(found){
const token = jwt.sign(found,SECRET);
res.status(200).json({user:found,token});
}
else{
    res.status(400).json({message:"AcessDenied"});
}
});