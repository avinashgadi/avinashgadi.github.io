// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     data.map(value=>{
//         console.log(value.name)
//     })
// })
// .catch((err)=>console.log(err));
const fetchData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();
    data.map((value)=>{
        console.log(value.name);
    });
};
fetchData();