const extractCurrencyValue = (str = '') => +str.slice(1);
console.log(extractCurrencyValue('$112321312'));