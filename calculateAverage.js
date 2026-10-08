function calculateAverage(arr) {
  let total = arr.reduce((acc, num) => acc + num, 0);

  return Math.round(total / arr.length);
}

console.log(calculateAverage([5, 10, 2, 8]));
