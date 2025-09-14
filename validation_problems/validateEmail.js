//Check if email format is valid using regex

function validateEmail(email){
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//Test Case 
console.log(validateEmail("email@example.com"));     //true
console.log(validateEmail("email.num@example.com")); //true
console.log(validateEmail("email@domain"));          //false
console.log(validateEmail("email@.com"));            //false