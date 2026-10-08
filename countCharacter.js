const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    const totalCount = word.split("").reduce((acc, currVal) => {
        if(currVal === char) {
            acc++;
        }
        return acc;
    }, 0);

    return totalCount;
}

console.log(countChar("abdulaleem", "A"));