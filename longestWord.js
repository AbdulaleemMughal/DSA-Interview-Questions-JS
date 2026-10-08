// Finding the longest word in the sentence

function findLongestWord(str) {

    if(str.trim("").length === 0) {
        return false;
    }

  let words = str.split(" ");
  let longestWord = "";

  longestWord = words.sort((a, b) => b.length - a.length);
  return longestWord[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
