document.body.style.backgroundColor = "blue";

// EX.3.8

const colors = ['red', 'green', 'blue'];

function checkColor() {
    const a = prompt('Enter a color: ');
    if (a == 'red') {
        alert(colors.indexOf("red"));
    } else if (a == 'green') {
        alert(colors.indexOf("green"));
    } else if (a == 'blue') {
        alert(colors.indexOf("blue"));
    } else {
        alert(-1);
    }
}
checkColor(colors);