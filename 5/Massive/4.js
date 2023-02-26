const sumInput = () => {
    let sum = 0;
    let numbers = [];
    while (true) {
        const number = prompt('number', '');
        if (number && !Number.isNaN(+number)) {
            sum += +number;
            numbers.push(+number);
        } else {
            break;
        }
    }
    return sum;
}

console.log(sumInput());