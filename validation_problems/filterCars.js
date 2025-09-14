//Filter car objects by property (e.g., color or wheel)
const cars = [
  { name: "BMW", color: "white", wheel: 4 },
  { name: "Honda", color: "black", wheel: 4 },
  { name: "Toyota", color: "white", wheel: 4 }
];

function filterByColor(arr,color){
    return arr.filter(car => car.color === color);
}

//Test Case
console.log(filterByColor(cars, "white"));
/*[
  { name: 'BMW', color: 'white', wheel: 4 },
  { name: 'Toyota', color: 'white', wheel: 4 }
]*/
