//Создайте объект с ключами из массива

const groupById = (array = []) => array.reduce((previousValue, currentValue) => ({
    ...previousValue,
    [currentValue.id]: currentValue
}), {});

let group = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(groupById(group));
