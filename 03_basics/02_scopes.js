
let a = 300;

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];  
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Hamza-HQ"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true) {
    const username = "Hamza-HQ1"
    if (username === "Hamza-HQ1") {
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website); will show error

}
// console.log(username); will show error

// ++++++++++++++++++++++ Intresting ++++++++++++++++++++++
console.log(addone(5)); // works 

function addone(num) {
    return num + 1
}
addTwo(5) // Error - how function is declared and called hoisting
const addTwo = function(num) {
    return num + 2
}
addTwo(5)