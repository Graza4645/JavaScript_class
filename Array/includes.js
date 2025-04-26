

/**
 * it will check the present value is in array return true/false
 */

const arr = ['vikas', 'pal', 'Naushad','vikas'];

console.log(arr.includes('vikas'));

function include(value){

for (let i = 0; i<= arr.length; i++){
if(value === arr[i]){

    return true
}else{
    return false
}
}

}
console.log(include('ramesh'));