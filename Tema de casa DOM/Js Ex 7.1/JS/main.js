// EX. 7

// EX.7.1
document.body.style.background = "red";

// EX.7.2
setTimeout(() => document.body.style.background = "green", 3000);

// EX.7.3
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    const buttonElement = document.getElementById("b");
    console.log(buttonElement);
    buttonElement.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
    });
});

// EX.7.4
const listItems = document.getElementsByTagName("li");

let i = 1;
setInterval(() => {
    if (i <= 20) {
        const node = document.createElement("LI");
        const textNode = document.createTextNode(`Element ${i}`);
        node.appendChild(textNode);
        document.getElementById("listElement").appendChild(node);
        if (i % 2 === 0) {
            node.style.backgroundColor = "green";
        } else {
            node.style.backgroundColor = "violet";
        }
        i++;
    }
}, 2000);