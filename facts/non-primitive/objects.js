// key: value pair
// to declare an object
// let obj={}
// hashmap, dict,unordered map
// JSON -> Javscript object notation
// function fn() {
//     // console.log("outer");
// }
// 
// object -> variables -> property
// object ->functions -> method

var cap = {
    firstName: "Abhay",
    lastName: "Chauhan",
    movies: ["a", "b", "c"],
    address: {
        state: "D",
        city: "Delhi"
    },
    age: 18,
    10: "number is 10",
    sayHI: function(){
        console.log("cap says HI");
    }, 
    // key: "I am a Key"
};

console.log(cap[10]);
console.log("''''''''''''''''''''''''");

var variable = "age";
console.log(cap[variable]);
console.log("''''''''''''''''''''''''");

console.log(cap.age)
console.log("''''''''''''''''''''''''");

console.log(cap["age"]);
console.log("''''''''''''''''''''''''");

// for in loop - generally for objects
for(var key in cap){
    console.log(key + " : " + cap.key)
}
console.log("''''''''''''''''''''''''");

for(var key in cap){
    console.log(key + " : " + cap[key]);
}
console.log("''''''''''''''''''''''''");

// get
var variable = cap.firstName;
variable = cap.movies;
cap.sayHI();
console.log(variable);

//set
cap.friends = ["a", "b", "c"];
console.log(cap);

//delete
delete cap.movies;
console.log("''''''''''''''''''");

console.log(cap);
