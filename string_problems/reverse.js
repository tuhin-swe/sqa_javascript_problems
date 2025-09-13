// Function to reverse a string

function stringReverse(string){
    return string.split("").reverse().join("");
}

//Test case                                 

console.log(stringReverse("Hello"));    //olleh
console.log(stringReverse("World"));    //dlrow
console.log(stringReverse("SQA"));      //AQS

