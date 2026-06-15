const userEmail = []

if (userEmail) {
    console.log("Email Confirmed");
} else {
    console.log("Email not Recieved!");
    
}

/* 
falsy Values
    false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy Values
    [], "0", 'false', " ", {}, function(){},  
*/

// if (userEmail.length === 0) {
//     console.log("Array is Empty!");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty!");   
}

// Nullish Coalescing Operator(??): null, undefined
/*
The nullish coalescing operator (??) is a logical operator that returns its right-hand operand only if its left-hand operand is null or undefined. Otherwise, it returns the left-hand operand
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary operator
/*
The ternary operator is a compact, one-line shorthand for writing if...else statements. It is called "ternary" because it is the only operator in most programming languages that takes three operands: a condition, a result for when the condition is true, and a result for when it is false. 
*/
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


