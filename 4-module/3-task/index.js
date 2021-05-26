function highlight(table) {
    
    let headRows = table.rows[0];
    let columnsIndex = {};

    console.log(headRows);
    for (let i = 0; i < headRows.cells.length; i++) {
        columnsIndex[headRows.cells[i].textContent] = i;
    }

    for (let i = 1; i < table.rows.length; i++) {
        let tdNew = document.createElement('td');
        let row = table.rows[i];
        let name = row.cells[columnsIndex.Name];
        let age = row.cells[columnsIndex.Age];
        let gender = row.cells[columnsIndex.Gender];
        let status = row.cells[columnsIndex.Status];

        for (cell of row.cells) {
            if (cell.dataset.available) {
                cell.hidden = true;
            }
        }

        status.dataset.available == true ? status.classList.add('available') : status.classList.add('unavailable');
        console.log(status);

        gender.textContent == 'm' ? gender.classList.add('male') : gender.classList.add('female');
        console.log(gender);

        +
        (age.textContent) < 18 ? age.style.textDecoration = 'line-through' : age.style.textDecoration = '';
        console.log(age);
    }
}
