// Function to check if a string is Palindrome
function isPalindrome(string){
    const reversed = string.split("").reverse().join("");
    return string === reversed;
}

//Test Case

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("ulil"));