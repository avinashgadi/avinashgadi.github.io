//regularfunctions
// function greet(){
//     console.log("Hello Good AfterNoon");
// }
// greet()
//Immideatley invoke function
// (function greet(){
//     console.log("Hello Good AfterNoon");
// })()
// function add(a,b){
//     console.log(a+b)
// }
// add(4,5)
// function add(a,b){
//     return a+b
// }
// const result = add(4,5);
// console.log(result)
// function add(){
//     console.log(arguments)// its a function which automatically prints all the arguments
// }
// add(5,4)
function add(){
    console.log(arguments[1])// its a function which automatically prints all the arguments
}
add(5,4)