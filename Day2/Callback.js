// callback is a function passed to another function to be called later.

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
sum(x)