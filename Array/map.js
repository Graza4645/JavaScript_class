/**
 * Map is an Array of higher order method which accept call back function as a parameter.
 * it is Used When Need to perform the common action in every Array elements.
 * Map method returns the updated new array and length will be original array.
 * This Method does not affect the original the Array
 */
const arr = [4, 5, 7, 3, 2, 87];

let m = arr.map(function f1(a, b, c, d){
    //console.log(a); // A = Element 
   // console.log(b); // b = index
    //console.log(c); // c = Array
    //console.log(d); // d = undefined
    return a * 5;
})

console.log(m);
console.log(arr)