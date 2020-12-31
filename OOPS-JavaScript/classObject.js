const User = require("./classjs");

const abhay = new User("abhay", "abhay123@gmail.com");
abhay.enrollCourses("Java");
abhay.enrollCourses("Python");
console.log(abhay.getInfo());
console.log(abhay.getCourseList());
console.log(abhay.courseList); // print undefined becoz it is private and cannot be accessed by object of class directly but can only be accessed through getters
