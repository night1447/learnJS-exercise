let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (object) => Object.entries(object).reduce((previousValue, currentValue) => previousValue + currentValue[1], 0);
console.log(sumSalaries(salaries));