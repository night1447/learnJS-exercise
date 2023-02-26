
//Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
const topSalary = (salaries = {}) => {
    if (!Object.keys(salaries).length) {
        return null;
    }
    const massive = Object.entries(salaries);
    let maximumValueName = '';
    let maximum = 0;
    for (let [name, value] of massive) {
        if (maximum < value) {
            maximum = value;
            maximumValueName = name;
        }
    }
    return maximumValueName;
}

console.log(topSalary(salaries));