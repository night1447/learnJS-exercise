
//Последнее число месяца?
const getLastDayOfMonth = (year = 2000, month = 10) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));