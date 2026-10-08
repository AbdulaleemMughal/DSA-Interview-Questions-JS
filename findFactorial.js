function findFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++ ) {
        fact = fact * i;
    }

    return fact;
}

console.log(findFactorial(5));
console.log(findFactorial(4));
console.log(findFactorial(3));