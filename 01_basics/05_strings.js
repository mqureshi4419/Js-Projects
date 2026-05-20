const name = "Hamza";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // outdated no used in modern day

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hamza-htc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase(gameName));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// learn string method

const newString = gameName.substring(0, 4);
console.log(newString);

