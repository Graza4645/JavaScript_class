let y = [{
    id: 1,
    name:'vikas'
},
{
    id:2,
    name:'noushad'
},


]
let y1 = y.map((a)=>{
    return a.name
})
console.log(y1);

let arr = [1, 2, 3, 4];
let arr1 = arr.map((a, b, c, d) =>{
    return a + 2;

})
console.log(arr1);