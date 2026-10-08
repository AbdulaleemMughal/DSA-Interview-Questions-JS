function generateHashtag(str) {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map((currElem) =>
    //first method: 
    // currElem.replace(currElem[0], currElem[0].toUpperCase()),

    //second method
    currElem.charAt(0).toUpperCase() + currElem.slice(1)
  );

  str = `#${str.join("")}`

  return str;
}

console.log(generateHashtag("the quick brown fox jumped over the lazy dog"));
