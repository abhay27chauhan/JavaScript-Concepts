class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = [] // private variable

    getInfo(){
        return {name: this.name, email: this.email};
    }

    enrollCourses(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    static login(){        // private property of class cannot be accessed by subAdmin
        return "You are logged in";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email); // give the access to properties and mthods of User to subAdmin
    }

    getAdminInfo(){
        return "I am subadmin"
    }

    login(){    // overriding login method of User class
        return "login for admin only"
    }
}

module.exports = User;


const rock = new SubAdmin("rock", "rock123@gmail.com");
rock.enrollCourses("Python");
rock.enrollCourses("JavaScript");
console.log(rock.getInfo());
console.log(rock.login());
console.log(rock.getAdminInfo());
console.log(rock.getCourseList());