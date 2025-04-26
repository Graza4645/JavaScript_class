
function f1(a,b){

    console.log(' i am function f1');
    console.log(a,b)
  
}

function f2(){
    console.log('i am function f2');
     return 10;
}

console.log(f2())
f1(5,f2())

// const check=f2()
// console.log(check)
// f1(f2());   // f1 (hi)   f2() call back
