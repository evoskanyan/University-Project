class Person {
    constructor(email,phone,fName,lName,gender,birthday) {
        this.email = email;
        this.phone = phone;
        this.fName = fName;
        this.lName = lName;
        this.gender = gender;
        this.birthday = birthday;
        this.classes = [];
    }
}
class Student extends Person{
    constructor(email,phone,fName,lName,gender,birthday,faculty,password) {
        super(email,phone,fName,lName,gender,birthday);
        this.password = password;
        this.faculty = faculty;
    }
}
class Lecturer extends  Person{
    constructor(email,phone,fName,lName,gender,birthday,faculties){
        super(email,phone,fName,lName,gender,birthday);
        this.faculties = [];
    }
}
