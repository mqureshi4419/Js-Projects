const marvel_heros = ["thor", "Iron-Man", "Spider-Man"]
const dc_heros = ["super-Man", "Flash", "Bat-Man"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat - combine two or more arrays
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // spread out values
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity); // flat spread out array and depth can be given between # to infinity

console.log(real_another_array);

console.log(Array.isArray("Hamza"))
console.log(Array.from("Hamza")) // [ 'H', 'a', 'm', 'z', 'a' ]
console.log(Array.from({name: "Hamza"})) // [] - intresting case in interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// Study Array = isArray, from, of
