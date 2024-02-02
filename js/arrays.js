let a=[1,2,3,"coding",false];
console.log(a);

let b=new Array("abc",8);
console.log(b);

/*  given array-> [11,21,33,44] 
       index/pos-> [0,1,2,3]
*/

console.log(a[4]);
a[4]=8;
console.log(a);

let arr=[1,2,3,4,5];
arr.push(6,7);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(9);
console.log(arr);

let a1=[1,2,3,4];
let a2=[4,5,6,7];
let a3=a1.concat(a2);
console.log(a1,a2,a3);

let s=a3.join(" ");
console.log(s)

a3.reverse();
console.log(a3);

console.log(a3.indexOf(99));


let arr1=[1,2,3,4,5,6];
console.log(arr.slice(2,5))

arr1.splice(2,1,11);
console.log(arr1);



