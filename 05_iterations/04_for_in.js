// for-in object
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for-in Arrays
const programming = ["js","rb","py","java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
    
}
// for-in on MAP
const map = new Map(); // Maps are not iteratble 
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
    
}