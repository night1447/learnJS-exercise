
const currentDate = new Date(2023, 1, 22, 22, 3);//СР
const getWeekDay = (date = new Date()) => {
    switch (date.getDay()) {
        case 0:
            return 'ВС';
        case 1:
            return 'ПН';
        case 2:
            return 'ВТ';
        case 3:
            return 'СР';
        case 4:
            return 'ЧТ';
        case 5:
            return 'ПТ';
        case 6:
            return 'СБ';
    }
}
alert(getWeekDay(currentDate)); // CР