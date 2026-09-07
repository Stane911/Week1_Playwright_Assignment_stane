// exercise 1//

function lastWordLength(s) {

    let words = s.split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lastWordLength("Hello World"));


//------------------------//

//--exercise 2//--

function lastWordLength(s) 
{
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lastWordLength(" fly me to the moon "));


//--------------------------//

//--exercise 3--//--

function isAnagram(word1, word2) 
{
    let first = word1.replaceAll(" ", "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    let second = word2.replaceAll(" ", "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    return first === second;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

