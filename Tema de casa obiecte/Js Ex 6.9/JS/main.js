document.body.style.backgroundColor = "red";

// EX.3.9

const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
};

let reverseElements = (days) => {
    const n = {};

    Object.keys(days).forEach(function(value) {
        let key = days[value];
        n[key] = value;
    });
    return n;


}

console.log(reverseElements(weekDays));