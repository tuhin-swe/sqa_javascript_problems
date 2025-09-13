//Find maximum and minimum numbers in an array

function maxMin(num){
    const max = Math.max(...num);
    const min = Math.min(...num);
    return {max, min};
}

//Test Case
console.log(maxMin([10,5,23,91,50,70,6]));      //{ max: 91, min: 5 }
console.log(maxMin([6,0.5,-6,50,98,45,63]));    //{ max: 98, min: -6 }