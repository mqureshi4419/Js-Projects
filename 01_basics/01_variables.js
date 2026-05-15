const accountId = 144553 // const can't be changed
let accountEmail = "Hamza@gmail.com";  // prefer to use let
var accountPassword = "12345"; // not preferable
accountCity = "Brooklyn"; // not a good idea
let accountState;

// accountId = 2; // not allowed

accountEmail = "billy@gmail.com";
accountPassword = "21223221";
accountCity = "Manhattan";

/*
Prefer not to use var - because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
