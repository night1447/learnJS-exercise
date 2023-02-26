const ucFirst = (str = '') => str ? str.at(0).toUpperCase() + str.slice(1) : '';
console.log(ucFirst('vasya'));
console.log(ucFirst(''));