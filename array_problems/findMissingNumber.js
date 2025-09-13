//Find missing number in a sequence (1..N)
function findMissingNum(arr,n){
    let total=0;
    let sum=0;

    for(let i=1;i<=n;i++){
        total += i;
    }
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return total-sum;
}

//Test Case
console.log(findMissingNum([1,3,4,5],5));
console.log(findMissingNum([1,2,3,4,5,6,8],8));