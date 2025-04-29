/** number to string */
let num = 123;
console.log(typeof num)
let numstr = num.toString()
console.log(typeof numstr)


// string - > number
let str1 ='100'
console.log('str1 -> ',typeof str1)
let y1 = Number(str1)
console.log('y1 -> ',typeof y1)


/** boolean to number */
let x1 = true
console.log('x1 -> ',typeof x1)
let x2 = Number(x1)
console.log('x2 -> ',typeof x2)


/** String to Object */
let str = 'Vikash'
console.log(typeof str)
let obj = str.split('')
console.log(typeof obj)


/** boolean to string */

let z1= true;
console.log('z1 -> ',typeof z1)
let z2= String(z1)
console.log('z2 ', typeof z2)


/** number to boolean  */
 let b1=20;
 let b2= Boolean(b1)
 console.log('b2 -> ',typeof b2)


// Object -> String


let a=2;
let b=3;
console.log(a*b)

/**
 * String  -> 2 bytes   [ ] [ ] ,   
 * Number ->  8 bytes,  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
 * Boolean -> 4 bytes   [ ] [ ] [ ] [ ]
 * 
 */



