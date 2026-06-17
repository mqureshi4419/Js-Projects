// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} + currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 3)

// const myTotal = myNums.reduce((accumulator, currentValue) => accumulator+currentValue, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 69.99
    },
    {
        itemName: "Py Course",
        price: 96.99
    },
    {
        itemName: "Mobile Dev Course",
        price: 39.99
    },
    {
        itemName: "Data Science Course",
        price: 129.99
    },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(Math.round(total));
