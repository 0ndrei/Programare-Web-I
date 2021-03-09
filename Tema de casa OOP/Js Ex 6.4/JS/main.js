document.body.style.backgroundColor = "red";

// EX. 6.4

class Validator {
    constructor(email, date, domain, phone) {
        this.email = email;
        this.date = date;
        this.domain = domain;
        this.phone = phone;
    }

    emailType = /\S+@\S+\.\S+/;
    domainType = /\S+\.\S+/;
    dateType = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/;
    phoneType = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,11}(\s*)?$/;

    isEmail() {
        if (this.emailType.test(this.email)) {
            return "The email is correct";
        }
        return "The email is incorrect";
    }

    isDomain() {
        if (this.domainType.test(this.domain)) {
            return "Domain is correct";
        }
        return "Domain is incorrect";
    }

    isDate() {
        if (this.dateType.test(this.date)) {
            return "Data is corect";
        }
        return "Data is not corect";
    }

    isPhone() {
        if (this.phoneType.test(this.phone)) {
            return "Phone is corect";
        }
        return "Phone is not corect";
    }
}

let validator = new Validator("LunguAndrei@mail.ru", "04.03.2021", "github.com", "+37369098833");

console.log(validator.isEmail());
console.log(validator.isDate());
console.log(validator.isDomain());
console.log(validator.isPhone());
