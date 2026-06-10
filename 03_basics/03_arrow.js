const user = {
    username: "Hamza-HQ",
    price: 3.99,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this); display current content
    }
}

user.welcomeMessage() // result: Hamza-HQ, Welcome to website
user.username = "Sam"
user.welcomeMessage() // result: Sam, Welcome to website

// console.log(this); //  {} window object diplays

function coffee(){
    let username = "Hamz"
    console.log(this.username);
}

coffee()

const mocha = function() {
    let username = "Hamz"
    console.log(this);
}

mocha()

// const addTwo = (num1, num2) => { // basic
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2 )// implicit return - no need to write return
const addTwo = (num1, num2) => ({username: "Hamza"} ) //object in ({})
console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})