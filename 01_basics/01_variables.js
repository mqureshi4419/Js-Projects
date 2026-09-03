// const accountId = 144553 // const can't be changed
// let accountEmail = "Hamza@gmail.com";  // prefer to use let
// var accountPassword = "12345"; // not preferable
// accountCity = "Brooklyn"; // not a good idea
// let accountState;

// // accountId = 2; // not allowed

// accountEmail = "billy@gmail.com";
// accountPassword = "21223221";
// accountCity = "Manhattan";

// /*
// Prefer not to use var - because of issue in block scope and functional scope
// */

// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



// restart Sep 3rd 2026

// const - cannot be reassigned
// let - can be reassigned 
// var - Prefer not to use = due to issue in block scope and functional scope
// {} this is called scope 
// let accountState; will show as undefined if ts not declared 

const accountId = 1444553;
let accountEmail = "Hamza@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2; // Const cannot be changed

accountEmail = "Bill@gmail.com" // let can be reassigned 

accountPassword = "28188181"
accountCity = "NewYork"

// console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

