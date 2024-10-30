function createTable() {
    const rows = prompt("Input number of rows:");
    const columns = prompt("Input number of columns:");

    const table = document.getElementById('myTable');

    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}