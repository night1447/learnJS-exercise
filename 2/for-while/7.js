//===7===
const n = +prompt('Введите конечную цифру интервала');
for (let i = 2; i < n; i++) {
    let number = i;
    let isPrime = 1;
    for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number % j === 0) {
            isPrime = 0;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}