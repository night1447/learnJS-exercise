//Фильтрация уникальных элементов массива
const unique = (array = []) => Array.from(new Set(array));

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));