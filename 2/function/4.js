
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

const x = +prompt('Введите число, возводимое в степень');
const n = +prompt('Введите степень, возводимого числа');
console.log(pow(x, n));
