function checkTriangleType(a,b,c) {
    if(a === b && b === c) return "Equilaterel";
    if(a === b || b === c || c === a) return "isosceles";
    return "scalene";
}

console.log(checkTriangleType(3, 3, 8));
console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 8, 6));