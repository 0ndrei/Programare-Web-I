console.log("Hello world!");

document.body.style.backgroundColor = "blue";

// EX.3.1

// 3.1(a)

const number = [1, 2, 3, 4, 5];
const values = number;
for (i = 0; i < values.length; i++) {
    console.log(values[i]);
}

//  3.1(b)

const number = [1, 2, 3, 4, 5];
for (const list in number) {
    console.log(list);
}

//  3.1(c)

const number = [1, 2, 3, 4, 5];
for (const list of number) {
    console.log(list);
}

//  3.1(d)

const number = [1, 2, 3, 4, 5];
number.forEach(element => console.log(element));

//  3.1(e)

const number = [1, 2, 3, 4, 5];
const mapFunction = number.map(x => x + 0);
console.log(mapFunction);

// 3.1(f)

const number = [1, 2, 3, 4, 5];
console.log(number);