document.body.style.backgroundColor = "red";

// EX. 6.5

class User {
    constructor(name, surname, year) {
        this._name = name;
        this._surname = surname;
        this._year = year;
    }

    getFullName() {
        return `${this._name} ${this._surname}`;
    }

    getCourse() {
        let today = new Date();
        let currentyear = today.getFullYear();
        return currentyear - this._year;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super();
        this._name = name;
        this._surname = surname;
        this._year = year;
    }
}

const user = new User('Lungu', 'Andrei', 2019);
console.log(user);

const student = new Student('Lungu', 'Andrei', 2019);
console.log(student);
console.log(student._name);
console.log(student._surname);
console.log(student.getFullName());
console.log(student._year);
console.log(`Cursul ${student.getCourse()}`);