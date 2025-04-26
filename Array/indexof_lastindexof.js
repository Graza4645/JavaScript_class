/** it will give the index of the given element
 *note it always provide index of first accured element if we have two same values
*/

let x= [9, 7, 3, 5, 3, 5, 6, 7, 3];
// let value = 7 
console.log(x.indexOf(9))
console.log(x.indexOf(7));

console.log(x.lastIndexOf(6))
function lastIndexOf_(value){
for ( let i = x.length-1 ; i >=0; i--){
if(value == x[i]){

console.log(x[i],'i got final value');
break;
}
}
}
lastIndexOf_(6);
