/**
 * The  Method returns a new Array with all elements that pass the test defined by the given function.
 * filter does not change the original array.
 * filter does not execute a call back for array elements without values.
 * We can perform compare action only.
 */

const arr = [33, 55, 65, 778, 45];

let newArray = arr.filter((a, b, c) =>{
    console.log(c)
return a > 50;


})

console.log(newArray);