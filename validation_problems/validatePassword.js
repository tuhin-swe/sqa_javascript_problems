//Validate strong password (min 8 chars, 1 uppercase, 1 number, 1special char)
function validatePass(pass){
    const regex =/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pass);
}

//Test Case
console.log(validatePass("Password1!")); // true
console.log(validatePass("pass1234"));   // false
console.log(validatePass("PASSword"));   // false
console.log(validatePass("Strong@123")); // true