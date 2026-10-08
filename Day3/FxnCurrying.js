/* Currying means converting a function that takes multiple arguments into a series of functions that take one
argument at a time. */

function sum(x,y,z)
{
    return x + y + z;
}
let r = sum(5,4,3);
console.log(typeof r);
console.log(r);
 
// different way to write the above function using currying
function sumCurry(a){
    return function(b){
        return function(c){
         //addition   return a + b + c;
         return a * b * c; // multiplicatione
        }
    }
}
let p=sumCurry(100);
let s=p(832);
let t=s(23);
console.log(t);