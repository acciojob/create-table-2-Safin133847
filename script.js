function createTable() {
    const rows = prompt("Input number of rows:"); 
    const columns = prompt("Input number of columns:"); 

    if (rows === null || columns === null || isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1) {
        alert("Please enter valid numbers greater than 0.");
        return;
    }

    const table = document.getElementById('myTable');

    table.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            // Create a new cell
            const cell = document.createElement('td');
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
            // Append the cell to the row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}
