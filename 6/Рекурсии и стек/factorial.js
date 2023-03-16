const factorial = (n = 0) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(--n);
}
console.log(factorial(5));