//Convert object to array and array to object
const obj={a:1, b:2, c:3};

const objToArray= Object.entries(obj);
console.log(objToArray); //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const arrayToObj =Object.fromEntries(objToArray);
console.log(arrayToObj); //{ a: 1, b: 2, c: 3 }