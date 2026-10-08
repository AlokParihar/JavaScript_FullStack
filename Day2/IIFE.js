// IIFE Function is Immediately Invoked Function Expression.
(function () {
    console.log("This is IIFE Function");
})(); //here () is used to call the function immediately after defining it.
// HOW does it work?
// 1. It is a function that runs as soon as it is defined.
// 2. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains 
// two major parts.
// 3. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// 4. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 5. The second part creates the immediately invoked function expression () through which the 
// JavaScript engine will directly interpret the function.

