function checkPalindrome(words) 
{

    let characters = words.split("");
    let reverse = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reverse = reverse + characters[i];
    }

    console.log("Original:", words);
    console.log("Reverse:", reverse);

    if (words === reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("official"));