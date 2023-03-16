const table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const item = row.cells[i];
    item.style.backgroundColor = 'red';
}