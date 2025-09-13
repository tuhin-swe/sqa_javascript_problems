//Merge two arrays and remove duplicates and Sort

function mergeArray(arr1,arr2, order="asc"){
    let combined = arr1.concat(arr2);
    let uniqueArray =[...new Set(combined)];
    
    if(order === "asc"){
        uniqueArray.sort((a,b) => a-b);
    }else{
        uniqueArray.sort((a,b)=> b-a );
    }
    return uniqueArray;
}

//Test Case
console.log(mergeArray([1,5,7],[2,5,9]));           //[  1, 2, 5, 7, 9 ]
console.log(mergeArray(["a","b"],["b","B","c"]));   //[ 'a', 'b', 'B', 'c' ]
console.log(mergeArray([],[2,5,1]));                //[  1, 2, 5 ]
console.log(mergeArray([10,-9,7],[2,5,1],"asc"));   //[ -9, 1, 2, 5, 7, 10 ]
console.log(mergeArray([9,25,-1],[2,5,1],"desc"));  //[ 25, 9, 5, 2, 1, -1 ]
