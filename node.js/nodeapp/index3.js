import express from 'express'
const app =express()
app.listen(8080,()=>{
console.log("Server Started")
});
// app.get("/",(req,res)=>{
//     res.send("Hii");
// });
// app.get("/user",(req,res)=>{
//     res.send("Hello User");
// });
// app.get("/ab*cd",(req,res)=>{//wild card entry use can use anything in the place of the *
// res.send("Hi this is abcd");
// });
// app.get("/products",(req,res)=>{
// res.json({name:"product1",price:45});
// });
// app.get("/products",(req,res)=>{
// res.status(201).json({name:"product1",price:45});//we can set status in between 200-299
// });
// app.get("/products",(req,res)=>{
//     const products = [
//         {name:"product1",price:45},
//         {name:"product2",price:46},        
//         {name:"product3",price:47},
//         {name:"product4",price:48},
//     ]
//     res.json(products);
// });
// app.get("/:name",(req,res)=>{
// res.send(req.params.name);
// });
//http://localhost:8080/avinash
// app.get("/:name",(req,res)=>{//:name works with any params 
// res.send("Hello");
// });
//http://localhost:8080/name
// app.get("/name",(req,res)=>{// but in this we need to give the name then only it will run 
// res.send("Hello");
// });
// app.get("/student/:name/age/:age",(req,res)=>{
// res.send(req.params.name+req.params.age);
// });
// app.get("/student/:name/:age",(req,res)=>{
// res.send(req.params.name+req.params.age);
// });
// app.get("/:name/:age",(req,res)=>{
// res.send(req.params.name+req.params.age);
// });
// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization);//bearer tocken number
// });
// app.get("/",(req,res)=>{
//     res.send(req.query.name+req.query.age);
// });
const products = [
        {id:1,name:"product1",price:45},
        {id:2,name:"product1",price:46},
        {id:3,name:"product1",price:47},
        {id:4,name:"product1",price:48},
    ]
app.get("/products/:id",(req,res)=>{
    const pid =req.params.id;
    const item =products.find((p)=>p.id==pid);
    res.json(item );
});