// callback is a function passed to another function to be called later.
// A function passed as an argument to another function is called a callback function.
function greet(name, callback) {
	console.log(`Hello, ${name}!`);
	callback();
}

greet("Alok", function () {
	console.log("This runs after greeting.");
})

const x= 50;
function sum(y){
    console.log(typeof y)
}
sum(x);



// Callback function example where bye is callback function.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye Bye");
}

greet("Alok", bye);

// sir's example
function hello(b){
	 console.log(typeof b);
}
let a=function(){
  console.log("This is callback function");
}
let b= function(){
	  console.log("This is B function");
}
hello(a)
a();