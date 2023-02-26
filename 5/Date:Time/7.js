//Сколько секунд осталось до завтра?
const getSecondsToTomorrow = () => {
    const date = new Date();
    return (24 - date.getHours()) * 3600 - date.getMinutes() * 60 - date.getSeconds();
}
console.log(getSecondsToTomorrow());
