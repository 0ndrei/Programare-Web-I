document.body.style.backgroundColor = "red";

// EX.6.3

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

console.log("Initial");
console.log(menu);

let multiplyNumeric = () => {
    for (let element in menu) {
        if (typeof menu[element] == "number") {
            menu[element] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log("Final");
console.log(menu);