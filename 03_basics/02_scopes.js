
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
        const website = "Youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);
