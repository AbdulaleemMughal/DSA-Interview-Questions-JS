 const obj = {
    name: "Abdulaleem",
    age: 30,
    city: "pune"
}

// convert object into array
let entries = Object.entries(obj);
console.log(entries);
console.log(entries.flat());

// convert object into array
let newObj = Object.fromEntries(entries);
console.log(newObj);