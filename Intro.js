// No main
// left to right top to bottom 

console.log("Hello World :)");

// variable declare
// a is variable that can only contain an integer
// statically typed lang
// int a;

// dynamically typed  -> Javascript
// let -> a is variable that initially contains undefined
// Primitive types: number ,string ,boolean, undefined,null
// using ; is not mandatory in js

let a; // initally a = undefinded | scope - script
var b; // initially b = undefined | scope - global
const c = 10; // need to intialize at the time of declaration | scope - script

// const and let are block scoped
// var is function scoped
// scope -> { this is scope }

// Number
a = 10;
console.log("line 25", typeof a);
a = 10.1;
console.log("line 27", typeof a);

// string
a = "string";
console.log("line 31", typeof a);
a = 'also string';
console.log("line 33", typeof a);

a = null;
console.log("line 36", typeof a);
console.log("a is", a);

// falsy =>
var variable;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(variable));
console.log(Boolean(undefined)==Boolean(null));
console.log(null==undefined); // only checks the value, since both are false so true
console.log(null===undefined); // checks the data type also

// example 
let num = 23;
let flag = true;
for (let div = 2; div * div <= num; div++) {
    if (num % div == 0) {
        flag = false;
        break;
    }
}
if (flag == true) {
    console.log(num, "is prime");
} else {
    console.log(num, "is not prime");
}

// for writing in new line
for (var i=1; i<=10; i++){
    console.log("Number is " + i);
}

// for writing in different line
for (var i=1; i<=10; i++){
    process.stdout.write(" Number is " + i + "|");
}
