function createTable() {
    const rows = prompt("Input number of rows");
    const columns = prompt("Input number of columns");

    if (rows === null || columns === null || isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1) {
        alert("Please enter valid numbers greater than 0.");
        return;
    }

    // Get the table element by its ID
    const table = document.getElementById('myTable');

    // Clear any existing rows in the table
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
