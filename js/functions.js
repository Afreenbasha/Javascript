/*  in js -> Fuctions are first class citizens
        meaning they can  be assigned to be variables, passed as arguments to other functions and returned from functions
*/

function great(){
    console.log("Hi there How are you!!!...")
}

function sqr(x){  //-> parameter 
    //console.log(x*x);
    return x*x;
}

great();
let a=sqr(2);// 2-> argument
console.log(a);




var sum=0;

var arr = [10,15,20,30];  

arr.forEach(function myFunction(element) 

{  

     sum= sum+element;  

});  

console.log(sum);