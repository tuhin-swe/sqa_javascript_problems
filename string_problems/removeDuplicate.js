// Function to remove duplicate characters from string

function removeDuplicate(str){
    return [...new Set(str)].join("");
}

//Test Case
console.log(removeDuplicate("Programming")) ;        //Progamin
console.log(removeDuplicate("University")) ;         //Universty 
console.log(removeDuplicate("International")) ;      //Interaiol

