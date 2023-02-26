
//Получить средний возраст
const getAverageAge = (array = []) => Math.round(array.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0) / array.length);

console.log(getAverageAge(users));
