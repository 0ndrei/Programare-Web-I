console.log("Hello world!");

document.body.style.backgroundColor = "blue";

// EX.3.3

//3.3(a)

// const music = ['Djaz', 'Blues'];
// console.log(music);

//3.3(b)

// const music = ['Djaz', 'Blues'];
// music.push('Rock-n-Roll');
// console.log(music);

//3.3(c)

const music = ['Djaz', 'Blues', 'Rock-n-Roll'];
music[Math.floor((music.length - 1) / 2)] = 'Classics';
console.log(music);

//3.3(d)

// const music = ['Djaz', 'Classic', 'Rock-n-Roll'];
// music.shift();
// console.log(music);

//3.3(e)

// const music = ['Djaz'];
// music.push('Classic', 'Rock-n-Roll');
// music.unshift('Rap', 'Raggy');
// console.log(music);