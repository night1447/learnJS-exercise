//Трансформировать в объекты

let Vasua = {name: "Вася", surname: "Пупкин", id: 1};
let Petya = {name: "Петя", surname: "Иванов", id: 2};
let Masha = {name: "Маша", surname: "Петрова", id: 3};

let userObjects = [Vasua, Petya, Masha];

let usersMapped = userObjects.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}))


console.log(usersMapped[0].fullName);
console.log(usersMapped[0].id);
