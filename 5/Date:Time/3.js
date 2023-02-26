
let europeanDate = new Date(2012, 0, 3);
const getLocalDay = (date = new Date()) => date.getDay() === 0 ? 7 : date.getDay();
console.log(getLocalDay(europeanDate));