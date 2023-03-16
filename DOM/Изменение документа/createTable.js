const createTable = (container, year, month) => {
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const table = document.createElement('table');
    let currentMonth = month - 1;
    const date = new Date(year, currentMonth);
    let max = new Date(year, currentMonth + 1, 0).getDate();

    function getDay(date) {
        let day = date.getDay();
        if (day === 0) day = 7;
        return day - 1;
    }

    const row = document.createElement('tr');
    days.forEach(item => {
        const th = document.createElement('th');
        th.innerHTML = item;
        row.append(th);
    });
    table.append(row);

    let currentDay = getDay(date);

    while (max > 0) {
        const tr = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            const td = document.createElement('td');
            if (currentDay <= i && max > 0) {
                td.innerHTML = date.getDate().toString();
                currentDay = 0;
                date.setDate(date.getDate() + 1);
                --max;
            }
            tr.append(td);
        }
        table.append(tr);
    }
    container.append(table);
}

createTable(document.body, 2012, 9);