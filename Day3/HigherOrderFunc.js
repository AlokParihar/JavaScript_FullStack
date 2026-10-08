// A Higher Order Function is a function that takes another function as an argument
// or returns a function as a result.
// In JavaScript, functions are first-class citizens, which means they can be treated like any other
// value. This allows us to create higher-order functions that can accept functions as parameters or 
// return functions as output.

function sum()
{
    return 50;
}
let r=sum();
console.log(r);
console.log(typeof r);

// Higher Order Function that takes a function as an argument


// Higher Order Function that returns a function as a result
function greet(name) {
    return function (message) {
        console.log(`Hello, ${name}! ${message}`);
    };
}
greet("Alok")("How are you?");