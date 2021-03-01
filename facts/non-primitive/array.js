// arrays
// arrays-> array is a collection of homogeneous data types (in general)
// array -> array is a collection of any valid js type

// array declare
// let arr=[]; or
// var arr=[];

var arr = [
    1,
    1.1,
    "Abhay",
    'a',
    undefined,
    null,
    function sayHi(){
        console.log("Say Hi");
        return 1;
    },
    [1,2,3,45,6,8],
    {name: "Abhay", lastName: "Chauhan"},
];

console.log(arr.length);
console.log(arr[arr.length]);

arr[95] = "some value";
console.log(arr.length);
console.log(arr[84]);
console.log(arr);
console.log("''''''''''''''''''''''''");

// push => addLast
arr.push("Last Value");
console.log(arr);
console.log("''''''''''''''''''''''''");

// pop=> removedLast
arr.pop();
console.log(arr);
console.log("''''''''''''''''''''''''");

// unshift => addFirst
arr.unshift("First Value");
console.log(arr);
console.log("''''''''''''''''''''''''");

// shift => removedFirst
console.log(arr.shift());
console.log("''''''''''''''''''''''''");

// slice => Java Substring | Non Mutating Function
var slicedArray = arr.slice(2,6);
console.log(slicedArray);
console.log("Actual Array");
console.log(arr);
console.log("''''''''''''''''''''''''");

//Mutating method
// splice 
var splicearr = arr.splice(2,4);
console.log("Spliced array");
console.log(splicearr);
console.log("Orignal Array");
console.log(arr);
console.log("''''''''''''''''''''''''");

//includes => returns true or false
var includeArr = arr.includes("a");
console.log(includeArr);
console.log("''''''''''''''''''''''''");

// indexOf => 
var index = arr.indexOf(1.1);
console.log(index);
console.log(arr.indexOf("b"));
console.log("'''''''''''''''''''''''''''''")

// for loop - classic 

for (let i = 0; i < arr.length; i++) {
    console.log("index ", i, "value ", arr[i]);
}

// for of loop -> used for arrays

for(var val of arr){
    console.log(val);
}

// for in loop -> generally for objects

for(var key in arr){
    console.log(arr[key]);
}
console.log("'''''''''''''''''''''''''''''")

for(var key in arr){
    console.log(key + " : " + arr[key]);
}
