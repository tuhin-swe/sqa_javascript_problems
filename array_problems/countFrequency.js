//Count frequency of each element in an array

function countFrequency(arr){
    const freq ={};

    for(let item of arr){
        freq[item]=(freq[item] || 0) + 1;
    }
    return freq;
}
//Test Case

console.log(countFrequency([1,1,1,2,3,3])); //{'1': 3, '2': 1, '3': 2 }
console.log(countFrequency(["a","a","b","c","c"])); //{a: 2, b: 1, c: 2}
