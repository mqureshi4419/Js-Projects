// for loops

/* steps for for loops

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

index = 0; - variable declared and set as 0
index < array.length; - condition check- ex:index length should be <array.length
const element = array[index]; -  execute this 
index++ - increase index by 1 
*/

for (let i = 0; i <= 10; i++) {
    const element = i; // prints 1 to 10
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i} `);
        // console.log(i + ' * ' + j + ' = ' + i*j );
    }
}


let myArray = ["Flash", "Bat-man", "Super-Man"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break; // control flow moves out and stops
//     }
//     console.log(`Value of i is: ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // continues after detecting if statement
    }
    console.log(`Value of i is: ${index}`);
}