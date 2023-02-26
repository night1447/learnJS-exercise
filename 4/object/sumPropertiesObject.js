//Sum properties object
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const calculateSumSalaries = (salaries = {}) => {
    if (isEmpty(salaries)) {
        return 0;
    }
    let result = 0;
    for (let key in salaries) {
        result += salaries[key];
    }
    return result;
}
console.log(calculateSumSalaries(salaries));