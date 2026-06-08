// singleton - construtor is single object 
// Object.create
// object literals - 

const mySym = Symbol("key1");

const JsUser = {
    name: "Hamza",
    "full name": "Muhammad Hamza",
    [mySym]: "mykey1",
    age: 23,
    location: "New York",
    email: "Hamza@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "M.Hamza@google.com"
// Object.freeze(JsUser) // freeze - unable to change
JsUser.email = "m.Hamza@microsoft.com"
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
