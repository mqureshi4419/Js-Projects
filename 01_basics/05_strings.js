const name = "Hamza";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // outdated no used in modern day

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hamza-htc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase(gameName)); // all letter uppercase
console.log(gameName.charAt(2)); // which position is the character
console.log(gameName.indexOf('t')); // what is the character position 

// learn string method - important!!

const newString = gameName.substring(0, 4); // can't give negative value
console.log(newString);

const anotherString = gameName.slice(-8,4); // slice can be give neg value
console.log(anotherString);

const newStringOne = "    Hamza    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim white spaces

const url = "https://Hamza.com/Hamza%20Hammy";
console.log(url.replace('%20', '-')); // for replace
console.log(url.includes('cute')); // validate if the char is there

console.log(gameName.split('-'));


