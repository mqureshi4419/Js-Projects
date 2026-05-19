let score = true;

// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof (valueInNumber));
// "33" = 33

// console.log(valueInNumber);
// "33abc" -> NaN

// null = 0
// true -> 1; false -> 0


let isloggedIn = "Hamza";

let booleanIsLoggedIn = Boolean(isloggedIn);

// console.log(booleanIsLoggedIn);

// "" -> false
// "Hamza" -> true

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(stringNumber);

// ******************** Operations ********************

let value = 3
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2); // remainder

let str1 = "Hello ";
let str2 = "Hamza";

let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2); = 12
// console.log(1 + "2"); = 12
// console.log("1" + 2 + 2); = 122 // full conversion in string
// console.log(1 + 2 + "2"); = 32 // 

// console.log(true); = true
// console.log(+true); = 1
// console.log(+""); = 0 // --- not good for production

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 3; --- not good for production

// let gameCounter = 100;
// ++gameCounter;
// console.log(gameCounter);



/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

/*

// Link to Study
// https://262.ecma-international.org/#sec-abstract-operations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment