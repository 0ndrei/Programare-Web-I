document.body.style.backgroundColor = "red";

// EX.6.6

let point = [{
    x: 1,
    y: 2
}, {
    x: 3,
    y: 4
}, {
    x: null,
    y: 4
}, {
    x: 3,
    y: undefined
}, ];

const deleteIncorectPoint = (obj) => {
    return obj.filter((value, index) => typeof(obj[index].x) === 'number' && typeof(obj[index].y) === 'number');
}

console.log(deleteIncorectPoint(point));