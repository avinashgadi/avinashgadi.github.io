//arrays
// const score=[2,1,7,6,4];
// console.log(score);
// console.log(score[1]);
// console.log(score.length);
// const newScore=[...score,9]
// console.log(newScore)
// const cart ={
//     1:5,
//     5:3,
// };
// const newCart =({...cart,2:1,4:1})
// console.log(newCart)
// let cart = {};
// const products =[
//     { id:1,name:"phone",price:"10,000"},
//     { id:2,name:"charger",price:"2,000"},
//     { id:3,name:"Back cover",price:"1000"},
// ];
// //const newProducts=[...products,{id:4,name:"Screen Gaurd",price:500}]
// function addToCart(id){
//     cart ={...cart,[id]:1};
// }
// addToCart(1)
// addToCart(3)
// console.log(cart)
const score=[1,3,5,7,10];
// score.forEach((value)=>{
//     console.log(value);
// })
// score.map((value)=>{
//     console.log(value);
// })
// const newscore = score.map((value)=>{
//      return value+5
// });
// console.log(newscore);
// const newscore = score.map((value)=>{
//      return  5
// });
// console.log(newscore);
// const newscore = score.map((value)=>{
//      return value>2
// });
// console.log(newscore);
// const newscore = score.filter((value)=>{
//      return value>2;
// });
// console.log(newscore);
// const newscore = score.find((value)=>{
//      return value>2
// });
// console.log(newscore);
// const newscore = score.reduce((sum,value)=>  sum+value,0);
// console.log(newscore);
const newscore = score.find((value)=>
value===1);
console.log(newscore);