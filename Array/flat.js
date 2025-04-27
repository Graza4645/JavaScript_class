/**
 * this Method is used to convert multi dimentional array to single dimentional Array.
 */

const arr = [87, 454,[[3, 4, 5, 7]], 567,[0, 0, 0], 3, 76];

let newArray = arr.flat(2); // argument is need to nested array and need to give  number of array.
console.log(newArray);


