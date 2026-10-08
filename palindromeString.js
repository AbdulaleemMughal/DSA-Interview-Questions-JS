function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  const rev_str = str.split("").reverse().join("");

  return str === rev_str ? true : false;
}

console.log(isPalindrome("hello")); // output: false
console.log(isPalindrome("Racecar")); // output: true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // output: true
