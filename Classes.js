class Person {
    constructor(email,password,fName,lName,gender,birthday) {
        this.email = email;
        this.password = password;
        this.fName = fName;
        this.lName = lName;
        this.gender = gender;
        this.birthday = birthday;
    }
}
class Student extends Person{
    constructor(email,password,fName,lName,gender,birthday, faculty) {
        super(email,password,fName,lName,gender,birthday);
        this.faculty = faculty;
        this.classes = [];
    }
}
