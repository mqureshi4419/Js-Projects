// // array - mix datatypes

// const myArr = [0, 1, 2, 3, 4, 5, true, "Hamza"]; // mix datatypes
// const myHeros = ["Spider-Man", "Iron-Man", "Thor"]

// const myArr2 = new Array(1, 2, 3, 4);
// // console.log(myArr[1]);

// // Array methods

// myArr.push(6);
// myArr.push(7); // push add to array // [ 0, 1, 2, 3, 4, 5, true, 'Hamza', 6, 7 ]
// myArr.pop(); // removes last array // [ 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]

// myArr.unshift(9); // add data to starting of array // [ 9, 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]
// myArr.shift(); // 0, 1, 2, 3, 4, 5, true, 'Hamza', 6 ]

// // console.log(myArr.includes(9)); // false // includes validate arrays
// // console.log(myArr.indexOf(3)); 

// const newArr = myArr.join(); // add all elemets of array into a string

// // console.log(myArr);
// // console.log(newArr); // 0,1,2,3,4,5,true,Hamza,6

// // slice, splice - which opperation munipluates

// console.log(" A", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log(" B", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log(myn2);

// Array Restart - sep 23 2026

// Array is an object, datatype and colletion of multiple items

//cannot be access using arbiturary string
// creates shallow copies - need to learn what is shallow copies and deep copies 

const myArr = [0, 1, 2, 3, 4, 5, true, "Ahmed"] // mix datatypes
const myHeros = ["Spider-Man", "Iron-Man", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // array index starts with 0

// Array Methods

// myArr.push(6) // push to array
// myArr.push(7)
// myArr.pop() // removes last value in array

myArr.unshift(9) // gets added at the starting of array 
myArr.shift() // removes the first array

console.log(myArr.includes(9)); // flase or boolean type of

console.log(myArr.indexOf(9)) // -1

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // joins and turns into string

// Slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // [ 1, 2 ]

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // [ 1, 2, 3 ]
console.log("C ", myArr);

console.log(myn2);

