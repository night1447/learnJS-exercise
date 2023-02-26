
const monthAgoDate = new Date(2015, 0, 2);
//Какой день месяца был много дней назад?
const getDateAgo = (date = new Date(), days = 0) => {
    const d = new Date(+date.getFullYear(), +date.getMonth(), +date.getDate() - days);
    return d.getDate();
}
console.log(getDateAgo(monthAgoDate, 2));