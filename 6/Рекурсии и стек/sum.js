const sumTo = (defaultValue = 0) => {
    if (defaultValue === 0) {
        return defaultValue;
    }
    return defaultValue + sumTo(--defaultValue);
}
console.log(sumTo(100));