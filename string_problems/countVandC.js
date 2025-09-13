//Function to count vowels and consonants

function countVowelAndConsonants(str){
    const vowel="aeiouAEIOU";
    let countVowel=0;
    let countConsonant=0;
    for(let char of str){
        if(/[a-zA-Z]/.test(char)){
            if(vowel.includes(char)){
                countVowel++;
            }else{
                countConsonant++;
            }
        }
    }
    return {vowel:countVowel ,consonant:countConsonant};
}

//Test case 
console.log(countVowelAndConsonants("Hello"));      //vowel: 2, consonant: 3
console.log(countVowelAndConsonants("Daffodil"));      //vowel: 3, consonant: 5
console.log(countVowelAndConsonants("University"));      //vowel: 4, consonant: 6
console.log(countVowelAndConsonants("Bangladesh"));      //vowel: 3, consonant: 7