
const filterRange = (array = [], a = 0, b = 1) => array.filter(item => item >= a && item <= b);
const numbers = [5, 3, 8, 1,];
console.log(filterRange(numbers, 1, 4));
