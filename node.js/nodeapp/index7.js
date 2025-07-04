//express static
import express from 'express'
const app =express();
app.use("/images",express.static("images"));//its a middle ware we used static because it is a static file
// app.use(express.static("images"));
app.use(express.static("public"));
app.listen(8080,()=>{
    console.log("Server running at port 8080");
});
app.get("/products",(req,res)=>{
    res.send("productlist");
});