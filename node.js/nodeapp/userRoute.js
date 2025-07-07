import express from 'express';
const Router = express.Router();
Router.get("/show",(req,res)=>{
    res.send("show")
});
Router.get("/register",(req,res)=>{
    res.send("register")
});
Router.get("/login",(req,res)=>{
    res.send("login")
});
export default Router
 