// greet()// hosting we can call the fun bef creating it 
// function greet(){
//     console.log("Hello")
// }
//hoisting
// x=10
// console.log(x)
// var x
// x=10
// console.log(x)
// let x// we can't acces usinhg let in hoisting
//arrow function
// const greet = () =>{console.log("Hello")};
// greet() // hoisting dont works with arrow function
// const add =(a,b)=>{
//     console.log(a+b)
// }
// add(4,5)
//reference type= it occupies the space only once
// const add =(a,b)=>{
//     return a+b
// }
// const result = add(4,5)
// console.log(result)
const add = (...args)=>{//spread operator in the fun to keep array
    console.log(args)
}
add(4,5,6,7)
