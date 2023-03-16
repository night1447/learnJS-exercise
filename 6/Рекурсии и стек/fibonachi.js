const fibonachi = (number = 0) => {
    let firstNumber = 1,
        secondNumber = 1;
    for (let i = 3; i <= number; i++) {
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
    return secondNumber;
}

console.log(fibonachi(7));