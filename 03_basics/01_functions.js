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
// console.log(loginUserMessage()); // result: undefined just logged in

function calcCartPrice(val1, val2, ...num1) { /// ... rest operator or spread operator - packs in array
    return num1
}

// console.log(calcCartPrice(200, 300, 400, 2000));

const user = {
    username: "Hamza",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

