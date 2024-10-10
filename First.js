/*
let rand = 26;
let num = Number(prompt("Guess the number:"));
while(num !== rand){
    num = Number(prompt("Wrong guess,Try Again!"));
}
console.log("Congragulations, Your guess is correct..");
*/


/*
let fName = prompt("Enter full name:");
console.log(`@${fName}${fName.length}`);
*/

/*
let arr = [57,65,80,43,20];
let marks = 0;
for(let i of arr){
marks = marks+i;
}
let avg = marks/arr.length;
console.log(avg);
*/

/*
let arr = [250,645,300,900,50];
for(let i=0;i<arr.length;i++){
    arr[i] = 0.9*arr[i];
}
console.log(arr);
*/

/*
let com = ["A","B","C","D","E"];
com.shift(); //deleting first element
console.log(com);

// replace?
com.splice(1,1,"H"); 
console.log(com);

com.push("G");
console.log(com);

*/


/*
function noVowels(str){
    let count = 0;
    for(let i of str){
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
        {
            count++;
        }


    }
    return count;
}
console.log(noVowels("Sahithi"));
*/

/*
//using arrow
const noVowels = (str) => {
    let count = 0;
    for(let i of str){
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
        {
            count++;
        }
        

}
return count;
}
console.log(noVowels("Sahithi"));
*/

/*
let arr = [1,2,3,4,5];
arr.forEach((val) =>{
    console.log(val**2);
})
    */

/*
let res = document.getElementById("one");
console.dir(res);
console.log(res);

res.innerText = "Apna Coll"
*/

/*
const func = () =>{
    let res = document.getElementById("one");
    res.innerText = "Bye Java";
}
    */

/*
let res = document.getElementsByClassName("box");
console.log(res);
console.dir(res);
*/

/*
let ele = document.createElement("button");
ele.innerText = "Click Me!";
ele.style.backgroundColor = "red";
ele.style.color = "white";
let res = document.querySelector("body");
res.prepend(ele);
*/

/*can add new class or remove by using classList to keep before existing properties also*/

/* getAttribute, setAttribute*/



/*

let res = document.getElementById("btn");
res.style.backgroundColor="black";
res.style.color="white";

let h = document.getElementById("h");
let b = document.querySelector("body");


res.onclick = ()=>{
    if(res.innerText=="Dark"){
    res.style.backgroundColor="white";
    res.style.color="black";
    h.innerText="You are in Dark Mode";
    h.style.color="white";
    b.style.backgroundColor="black";
    res.innerText="Light";
}
else{
    res.style.backgroundColor="black";
    res.style.color="white";
    h.innerText="You are in Light Mode";
    h.style.color="black";
    b.style.backgroundColor="white";
    res.innerText="Dark";

}
}

*/







 
