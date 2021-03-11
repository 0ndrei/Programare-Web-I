// EX. 7.6

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'black';
}