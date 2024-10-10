count1 = 0;
count2 = 0;
count3 = 0;



const first = () =>{
    let p1 = document.getElementById("party1");
    let b1 = p1.children[3].children[0];
    b1.disabled = true;
    count1++;
    setTimeout(() => {
        b1.disabled = false;
    }, 5000);
    
    
};


const second = () =>{
    let p2 = document.getElementById("party2");
    let b2 = p2.children[3].children[0];
    b2.disabled = true;
    count2++;
    setTimeout(() => {
        b2.disabled = false;
    }, 5000);
};


const third = () =>{
    let p3 = document.getElementById("party3");
    let b3 = p3.children[3].children[0];
    b3.disabled = true;
    count3++;
    setTimeout(() => {
        b3.disabled = false;
    }, 5000);
};

 
const showResult = () =>{
    let sres = document.getElementById("sRes");
    if(count1>count2 && count1>count3){
        sres.innerText = "Congress WON!";
    }
    if(count2>count1 && count2>count3){
        sres.innerText = "BSP WON!";
    }
    if(count3>count1 && count3>count2){
        sres.innerText = "BJP WON!";
    }
    


};




