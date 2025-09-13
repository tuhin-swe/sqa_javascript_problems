//Remove duplicate elements from an array

function removeDuplicate(array){
    return [...new Set(array)];   // Set automatically removes duplicates
}

//Test Case

console.log(removeDuplicate([10,20,33,50,20,15,10,20]));  //[ 10, 20, 33, 50, 15 ]