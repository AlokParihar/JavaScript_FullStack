 let  arr=[10,20,30,40,50];

 /*var a=10;
 let b=20;
 const c=30;*/

console.log(typeof arr);
/*console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(arr.length);
 */

// Destructuring of array means to unpack the values from an array and assign/store them to variables. 
// It is a convenient way to extract values from arrays or objects.
let [a,b,c,d,e]=arr;
console.log(a);

let ar=[100,"SISTEC",{name:"Alok",city:"Nagpur"},[200,245]];
console.log(arr.length);


let array=[20,35,[10,15]];
let array2=array.flat(); //flat() method is used to flatten the array and return a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(array2);


let str ="I am from Multai";
let str2=str.split(" "); //split() method is used to split a string into an array of substrings based on a specified separator. In this case, the separator is a space character (" "), so the string will be split into individual words.
console.log(str2); 