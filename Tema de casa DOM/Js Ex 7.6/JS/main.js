// EX. 7.6
const tableRows = document.querySelectorAll('.Row');

for (let row in tableRows) {
    let tableCells = tableRows[row].cells;
    if (row % 2 == 1) {
        for (let cell in tableCells) {
            if (cell % 2 == 0) {
                tableCells[cell].classList.add('black');
            }
        }
    } else {
        for (let cell in tableCells) {
            if (cell % 2 == 1) {
                tableCells[cell].classList.add('black');
            }
        }
    }
}