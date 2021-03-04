//Ex 1
const a = prompt('Enter a number: ');
if (a < 0) {
    alert(-1);
} else if (a == 0) {
    alert(0);
} else if (a > 0) {
    alert(1);
} else {
    alert('Error');
}

//Ex 2
/* var userAge = prompt('Crare este virtsa ta? ');
if (userAge >= 14 && userAge <= 90) 
    alert('True');
    else alert('False'); */

var userAge = prompt('Crare este virtsa ta? ');
if (!(userAge >= 14 && userAge <= 90))
    alert('False');
else alert('True');


//Ex 3
const validLoghin = '2020';
const validPassword = '20';

const inputLoghin = document.getElementById('form_login');
const inputPassword = document.getElementById('form_password');
const submit = document.getElementById('form_submit');

const checkInput = () => {
    if (inputLoghin.value !== validLoghin && inputPassword.value == validPassword) {
        alert('Incorrect login');
    }

    if (inputLoghin.value == validLoghin && inputPassword.value !== validPassword) {
        alert('Incorrect password');
    }

    if (inputLoghin.value !== validLoghin && inputPassword.value !== validPassword) {
        alert('Validation error');
    }
}

submit.addEventListener('click', () => {
    checkInput();
});

//Ex 4
const b = prompt("Enter minimum number: ");
const c = prompt("Enter maximum number: ");

let calc = () => {
    let sum = 0;
    for (let i = b; i <= c; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

document.body.style.backgroundColor = "cyan";