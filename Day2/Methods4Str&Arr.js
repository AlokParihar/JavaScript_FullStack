let array=[100,"SISTEC",{name:"Alok",city:"Nagpur"},[200,245]];
console.log(array.length);


let array1=[20,35,[10,15]];
let array2=array.flat(); /*flat() method is used to flatten the array and return a new array with all 
sub-array elements concatenated into it recursively up to the specified depth. */
console.log(array2);


let str ="I am from Multai";
let str2=str.split(" "); /*split() method is used to split a string into an array of substrings based on 
a specified separator. In this case, the separator is a space character (" "), so the string will be split into individual words. */
console.log(str2); 
console.log(array1);
console.log(array1.length);
console.log(str);
console.log(str.length);
