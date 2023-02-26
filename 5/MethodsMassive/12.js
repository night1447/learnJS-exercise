
//Оставить уникальные элементы массива
const unique = (array = []) => {
    let result = [];
    array.forEach(item => result.includes(item) ? '' : result.push(item));
    return result;
};

console.log(unique(["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
]));