document.body.style.backgroundColor = "red";

// EX. 6.2

class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    getName() {
        return this._name;
    }

    getSurname() {
        return this._surname;
    }

    setSurname(value) {
        return this._surname = value;
    }
}

let person = new Person('Lungu', 'Andrei');
console.log(person.getName());
console.log(person.getSurname());
console.log(person.setSurname("Andreii"));
console.log(person.getSurname());
