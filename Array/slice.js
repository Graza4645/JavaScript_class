/**
 * this method is used to extract the part of an array.
 * it will work with negative index also
 * it returns the extracted element 
 */

const arr = ['vikas', 3, 5, 7, 9 ];
let newArr = arr.slice(2, 3);// it will start from the n index and gives us n-1 index

console.log(newArr);