import express from 'express'
const app = express()
app.listen(8080,()=>{
console.log("Server Started");
});

// const logger=(req,res,next)=>{
//     req.msg ="Hello";
//     next();
// };
// //app.use(logger);

// app.get('/',(req,res)=>{
// res.send(req.msg+" World");
// });
// app.get('/products',logger,(req,res)=>{
// res.send(req.msg+"products");
// });
 const auth =(req,res,next)=>{
    const name = req.params.name;
    if(name ==="john"){
        next();
    }
    else{
        res.send("404 error")
    }
 };
app.get('/:name' ,auth,(req,res)=>{
    res.send("hii");
});
