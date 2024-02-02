const btn=document.getElementById("button");
const randomColour= ()=>{  //arrow function

    let val="0123456789ABCDEF";
    let cons="#";

    for(let i=0;i<6;i++){
     cons =cons + val[Math.floor(Math.random()*16)] ;  //Math.random =[0-0.99] to get values upto 15 then multiply with 16  , floor is used to roundof the value 10.4=10
    }
   return cons; 
};
//console.log(randomColour());
function changeRandomColor(){
    document.body.style.backgroundColor=randomColour();
}
btn.addEventListener("click",changeRandomColor);