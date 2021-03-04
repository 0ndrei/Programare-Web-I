document.body.style.backgroundColor = "red";

// EX.3.2

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
};

console.log(sum);