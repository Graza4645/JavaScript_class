/**
 * obejct. keys: this method provides all the key value of an obeject 
 */

let car1 = {

    name: "CRETA",
    model: "Top",
    year : 2021
}

let result1 = Object.keys(car1)
console.log(result1);

/**
 * obejct. values: this method provides all the values data of an obeject 
 */

let car2 = {

    name: "CRETA",
    model: "Top",
    year : 2021
}

let result2 = Object.values(car2)
console.log(result2);

/**
 * object.entries: it provides both key and value pair and also it converts object into array.
 */

let book = {
    author: "noushad",
    publishDate: 2025,
    language: "hindi"
}

let output = Object.entries(book);
console.log(output);

/**
 * object.assign: it is used to add key and value pair for the object and also another object can be merged for the existing object
 */

let bike = {
    company: 'bajaj',
    model: 'avenger'
}

let pen = {
    brand: 'classmate',
    colore: 'black'

}

let result3 = Object.assign(bike,pen)
console.log(result3);