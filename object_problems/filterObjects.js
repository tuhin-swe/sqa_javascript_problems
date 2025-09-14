//Filter array of objects by a property value
const users=[
    {name:"Abdullah", role:"admin"},
    {name:"Rahibul", role:"user"},
    {name:"Rakib", role:"admin"},
    {name:"Sakib", role:"user"},
    {name:"Shuvo", role:"admin"},
];

function filterByRole(arr,name){
    return arr.filter(user => user.name ===name);
}

//Test Case 
console.log(filterByRole(users, "Sakib"));