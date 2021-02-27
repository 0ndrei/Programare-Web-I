document.body.style.backgroundColor = "red";

// EX.3.8
const weekDays = {
    "Mo": "Понедельник",
    "Tu": "Вторник",
    "We": "Среда",
    "Th": "Четверг",
    "Fr": "Пятница",
    "Sa": "Суббота",
    "Su": "Воскресенье",
};

let translate = (days) => {
    const romDays = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Simbata', 'Duminica'];
    const newDays = Object.entries(days);
    for (let n in newDays) {
        newDays[n][1] = romDays[n];
    }

    return Object.fromEntries(newDays);
}

console.log(translate(weekDays));