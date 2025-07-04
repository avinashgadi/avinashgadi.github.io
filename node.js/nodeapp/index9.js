import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
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
const authenticate=(req,res,next)=>{
// res.json({message:"acces denied"});
try{
let token = req.headers.authorization;
token = token.split(" ")[1];
const user = jwt.verify(token,SECRET,{expiresIn:"1h"});
req.role=user.role
next();
}
catch(err){
    return res.json({message:"acces denied"});
}
};
const authorize=(role)=>{
return(req,res,next)=>{
if(req.role===role){
    next()
}
else{
    return res.json({message:"Unauthorized acess"})
}
};
};
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
app.get("/users",authenticate,authorize("admin"),(req ,res)=>{
res.json(users);
})
app.post("/register",(req,res)=>{
const {name,email,password,role}=req.body
const hashedpwd =bcrypt.hash(password,10);
const user ={
    name,
    email,
    password: hashedpwd,
    role,
};
users.push(user);
res.json(user);
});