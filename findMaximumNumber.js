function findMax(arr) {
    // console.log(...arr); // ...arr convert the array into number. For Example: [1,2,3,4,5] should be converted into 1,2,3,4,5
    return Math.max(...arr);
}

console.log(findMax([2]));
console.log(findMax([3, 4, 56, 7, 2]));
console.log(findMax([-3, -4, -56, -7, -2]));