
//Отсортировать пользователей по возрасту
const sortByAge = (array) => array.sort((first = {}, second = {}) => first.age - second.age);
sortByAge(users);
console.log(users);
