// Immediately Invoked Function Expressions (IIFE)

(function candy() {
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // add () before and after the function follow with ()

( (name) => {
    //Unnamed IIFE
    console.log(`Db Connected TWO ${name}`);   
} )('Hamza');