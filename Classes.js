class Person {
    constructor(email, fName, lName, gender, birthday) {
        this._lessons = [];
        this._email = email;
        this._fName = fName;
        this._lName = lName;
        this._gender = gender;
        this._birthday = birthday;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }


    get fName() {
        return this._fName;
    }

    set fName(value) {
        this._fName = value;
    }

    get lName() {
        return this._lName;
    }

    set lName(value) {
        this._lName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }

    get lessons() {
        return this._lessons;
    }

    set lessons(value) {
        this._lessons = value;
    }
}

class Student extends Person {
    constructor(email, fName, lName, gender, birthday, faculty, password) {
        super(email, fName, lName, gender, birthday);
        this._faculty = faculty;
        this._password = password;
    }

    get faculty() {
        return this._faculty;
    }

    set faculty(value) {
        this._faculty = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}

class Lecturer extends Person {
    constructor(email, phone, fName, lName, gender, birthday, faculties) {
        super(email, fName, lName, gender, birthday);
        this.faculties = [];
        this._faculties = faculties;
        this.phone = phone;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get faculties() {
        return this._faculties;
    }

    set faculties(value) {
        this._faculties = value;
    }
}

class Lessons {
    constructor(name, credit, time, lecturer, classroom) {
        this._name = name;
        this._credit = credit;
        this._time = time;
        this._lecturer = lecturer;
        this._classroom = classroom;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get credit() {
        return this._credit;
    }

    set credit(value) {
        this._credit = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }

    get lecturer() {
        return this._lecturer;
    }

    set lecturer(value) {
        this._lecturer = value;
    }

    get classroom() {
        return this._classroom;
    }

    set classroom(value) {
        this._classroom = value;
    }
}

class Event {
    constructor(name, description, date) {
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


