// Primitive Data Type
// 7 types : String, Number, Boolean, null, undefined, Symbol, bigInt

const score = 100;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 334838823838838223232n


// Reference Type (Non Primitive)
//  Array, Objects (Master this), Functions

const heros = ["SpiderMan", "Thor", "IronMan"]
let myObj = {
    name: "Hamza",    // Objects
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof id); // 

/**
     1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
 */


// ****************************************************

// Stack (Primitive), 
// Heap (Non-Primitive) - u get reference

let myYoutubeName = "HamzaGoneMad";

let anotherYtName = myYoutubeName;

anotherYtName = "ChaiaurHamza"

console.log(anotherYtName);


// Heap (Non-Primitive) but they go inside in stack 
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}


let userTwo = userOne;

userTwo.email = "Hamza@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);