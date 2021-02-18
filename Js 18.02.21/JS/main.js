console.log("Hello world!");

document.body.style.backgroundColor = "blue";

/*const calculate = (x, y) => {
    return 2 * x + y;
}
console.log(calculate(5, 4));*/

/*
const sum = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
const result = sum.reduce(add);
console.log(result);

const media = [8, 8, 9, 7, 9];
const average = media => media.reduce((a, b) => a + b) / media.length;
const rezult = average(media);
console.log(rezult);*/

/*const array = [3, 2, 6, 5, 4];
let sum = 0;
array.forEach(element => {
    sum += element;
});
console.log(sum);*/

const notes = [8, 8, 9, 7, 9];
let sum = 0;
notes.forEach(element => {
    sum += element;
});
const average = sum/notes.length;
console.log(average);