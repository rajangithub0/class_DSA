// function add(a:number|string,b:number|string):number|string{
//     return a+b;
// }
// console.log(add(1,2))
// let s:string|number=add("rajan",24)
// console.log(s);
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // If both are numbers, perform addition
    }
    else {
        return String(a) + String(b); // Otherwise, concatenate them as strings
    }
}
console.log(add(1, 2)); // Output: 3
var s = add("rajan", 24);
console.log(s);
