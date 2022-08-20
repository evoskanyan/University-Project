class Person {
    constructor(email,phone,fName,lName,gender,birthday) {
        this.email = email;
        this.phone = phone;
        this.fName = fName;
        this.lName = lName;
        this.gender = gender;
        this.birthday = birthday;
        this.lessons = [];
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
class Lessons {
    constructor(name, credit, time, lecturer, classroom) {
        this.name = name;
        this.credit = credit;
        this.time = time;
        this.lecturer = lecturer;
        this.classroom = classroom;
    }
}

class Event{
    constructor(name,description,date) {
        this._name = name;
        this._description = description;
        this._date = date;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }

    set date(value) {
        this._date = value;
    }
}
