// if statement

if (true) { //condition: true = code execute // false = code will not execute

}

const isUserLoggedIn = true
const temperature = 41


// if (temperature === 39){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// < less than
// > greater than
// <= less than or equal
// >= greater than or equal
// == equal
// != not equal (negative check)
// === check data type (ex: 2 === "2")
// !== negative sign check

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
//     console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); not recommended

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3 ) { // && both statements needs to be true
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || multiple condition - either can be true
    console.log("User logged in");
    
}