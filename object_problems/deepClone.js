//Deep clone an object so original is not affected
const original={
    name:"Honda",
    specs:{
        wheel:4,
        color:"black"
    }
};
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
const clone=deepClone(original);
clone.specs.color="White";
clone.specs.color="Blue";

//Test Case
console.log(original.specs.color);
console.log(clone.specs.color);