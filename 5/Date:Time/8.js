







//Форматирование относительной даты
const formatDate = (date = new Date()) => {
    const currentDate = new Date() - date;
    const second = Math.floor(currentDate / 1000);
    const minutes = Math.floor(currentDate / 60000);

    if (currentDate <= 1) {
        return "прямо сейчас";
    }
    if (second < 60) {
        return `${second} секунд назад`;
    }
    if (minutes < 60) {
        return `${minutes} минут назад`;
    }
    const checkValue = (value) => value > 9 ? value : '0' + value;
    return `${checkValue(date.getDate())}.${checkValue(date.getMonth() + 1)}.${date.getFullYear()} ${checkValue(date.getHours())}:${checkValue(date.getMinutes())}`
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));