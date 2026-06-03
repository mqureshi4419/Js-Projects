const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value - ecom application ex:100.00

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4)); //gives precise value - priotity before decimal 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en')); // add commas to value

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.abs(-4)); // absolute Value - neg to postive 
console.log(Math.round(4.6)); // round off
console.log(Math.ceil(4.2)); // higher Value
console.log(Math.floor(4.9)); // lower value
console.log(Math.min(4, 3, 5, 8)); // min Value
console.log(Math.max(4, 3, 5, 8)); // max Value


console.log(Math.random()); // between 0 and 1 
console.log(Math.random()*10 + 1); // set the range 
console.log(Math.floor(Math.random()*10) + 1); // set the range with ()

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

