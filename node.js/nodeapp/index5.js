import express from 'express';
const app=express();
app.listen(8080,()=>{
 console.log("Server started");
});
app.use(express.json())
let products=[];
app.post('/',(req,res)=>{
    products.push(req.body);
    res.json( {message:"product created"});
// })
// app.post("/",(req,res)=>{
// res.json(req.body);
// });
// app.get("/",(req,res)=>{
// res.json(req.body);
});
app.get('/',(req,res)=>{
    res.json(products);
});
