// Function to find frequency of each character

function charFrequency(str){
    const frequency={};
    for(let char of str){
        frequency[char]=(frequency[char] || 0) + 1;
    }
    return frequency;
}

console.log(charFrequency("Hello"));