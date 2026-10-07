/* In JavaScript, Array is a data structure that can hold multiple values at a time.
   It is a collection of similar type of data items stored at contiguous memory locations.
   It is a non-primitive data type in JavaScript. */

let data =50;
console.log(typeof data);

let data1=[];
console.log(typeof data1);

let data2=[10,20,30,40,50,"Alok"];
console.log(data2[0]);
console.log(data2[1]);
console.log(data2[2]);
console.log(data2[3]);
console.log(data2[4]);
console.log(data2[5]);
console.log(typeof data2[5]);
data2.push(60);
//Methods of Array
console.log(data2);
data2.push("Sanika"); // to add an element at the end of the array
console.log(data2);
data2.unshift("Pewpewpew_akuu"); // to add an element at the beginning of the array
console.log(data2);
data2.pop();   // to remove an element from the end of the array
console.log(data2);
data2.shift();   // to remove an element from the beginning of the array
console.log(data2);


// Array object 
let person={
    name:"Alok", // left side is key and right side is value
    age:20,
    city:"Nagpur",
    log : function(){
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    }
}
console.log(person);
console.log(person.name);
console.log(person.age); // gives the value of age key only