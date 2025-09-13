//Sort an array in ascending or descending order

function sortArray(arr,order ="asc"){
    return arr.sort((a,b) =>(order === "asc" ? a-b : b-a));
}

//Test Case
console.log(sortArray([3,5,8,1,9,4,2],"asc"));  //[1,2,3,4,5,8,9]
console.log(sortArray([3,5,8,1,9,4,2],"desc")); //[9,8,5,4,3,2,1]