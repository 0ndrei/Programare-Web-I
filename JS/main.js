//Ex 1
var a = prompt('Enter a number: ');
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
/*var userAge = prompt('Crare este virtsa ta? ');
if (userAge >= 14 && userAge <= 90) 
    alert('True');
    else alert('False');*/

var userAge = prompt('Crare este virtsa ta? ');
if (!(userAge >= 14 && userAge <= 90)) 
    alert('False');
    else alert('True');

//Ex 3


//Ex 4
let b = prompt('Introdu b: ');
let c = prompt('Introdu c: ');

for (let i = b; i <= c; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}



console.log("Hello world!");

document.body.style.backgroundColor = "cyan";

setTimeout(function() {
    document.body.style.backgroundColor = "yellow";
}, 3000);

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

document.getElementById("Bt1").addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});
document.getElementById("Bt2").addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});
document.getElementById("Bt3").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});