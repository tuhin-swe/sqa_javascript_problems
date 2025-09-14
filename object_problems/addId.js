//Add unique id dynamically to each object in an array
const cars=[
    { name: "BMW", color: "white" },
    { name: "Honda", color: "black" },
    { name: "Toyota", color: "red" }
];

function addId(arr){
    return arr.map((item, index) => ({
        id:index +1, ...item 
    }))
}
//Test Data
console.log(addId(cars));  

/*[
  { id: 1, name: 'BMW', color: 'white' },
  { id: 2, name: 'Honda', color: 'black' },
  { id: 3, name: 'Toyota', color: 'red' }
]*/