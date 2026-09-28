/* Rest operator is used to collect the remaining elements of an array into a new array.
It is denoted by three dots (...) followed by the name of the new array. 
The rest operator can be used in function parameters to collect all remaining arguments into an array. 
Rest element must be the last element in the destructuring assignment. */

let [x,y,...z]=arr;
console.log(x);
console.log(y);
console.log(z);