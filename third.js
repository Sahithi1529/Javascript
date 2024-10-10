let res = document.getElementById("1");
let ans = document.getElementById("2");
let head = document.getElementById("heading");


const performAdd = () =>{
    let a = Number(res.value);
    let b = Number(ans.value);
    head.innerText = a+b;
     
};
const performSubtract = () =>{
    let a = Number(res.value);
    let b = Number(ans.value);
    head.innerText = a-b;
     
};
const performMultiply = () =>{
    let a = Number(res.value);
    let b = Number(ans.value);
    head.innerText = a*b;
     
};