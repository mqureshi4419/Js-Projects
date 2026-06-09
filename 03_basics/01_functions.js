function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("Z");
    console.log("A");
}

// sayMyName()

// function addTwoNumber(number1, number2) { // parameter are in (number1, number2)
//     console.log(number1 + number2);
// }

// // addTwoNumber(3, 5) // arguments 

// const result = addTwoNumber(3, 5)

// console.log("Result: ", result);

function addTwoNumber(number1, number2) { 
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumber(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Hamza")); // result: Hamza just logged in
console.log(loginUserMessage()); // result: undefined just logged in