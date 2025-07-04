//closure function when we aree caalling the child function it will takes the parent function too 
function main(){
    let b=1;// here we defined the b
    function sub(){
        return b++;// but in this we are just incrementing it
    }
    return sub;// here we are calling the sub function which only prints the b 
}
const f1=main();
console.log(f1());
console.log(f1());