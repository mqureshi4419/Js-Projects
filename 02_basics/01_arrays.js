// array - mix datatypes

const myArr = [0, 1, 2, 3, 4, 5, true, "Hamza"]; // mix datatypes
const myHeros = ["Spider-Man", "Iron-Man", "Thor"]

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// Array methods

myArr.push(6);
myArr.push(7); // push add to array // [ 0, 1, 2, 3, 4, 5, true, 'Hamza', 6, 7 ]
myArr.pop(); // removes last array // [ 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]

myArr.unshift(9); // add data to starting of array // [ 9, 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]
myArr.shift(); // 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]

console.log();

console.log(myArr);

