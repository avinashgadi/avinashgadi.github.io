import express from 'express'
const Router=express.Router();
Router.get("/show",(req,res)=>{
    res.send("products")
});
Router.delete("/:id",(req,res)=>{
    res.send("id")
});
export default Router