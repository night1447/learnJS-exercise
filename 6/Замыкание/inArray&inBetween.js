let arr = [1, 2, 3, 4, 5, 6, 7];
const inBetween = (first = 0, second = 0) => (number = 0) => number >= first && number <= second;
const inArray = (array = []) => (number = 0) => array.includes(number);
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2