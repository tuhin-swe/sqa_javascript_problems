//Check if a string is valid JSON
function isValidJSON(str){
    try {
        JSON.parse(str);
        return true;
    }catch(e){
        return false;
    }
}

//Test Case 
console.log(isValidJSON('{"name":"Alice"}')); //true
console.log(isValidJSON('{"name":Alice}'));   //false
console.log(isValidJSON('["a","b","c"]'));    //true