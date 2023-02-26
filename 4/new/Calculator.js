
function Calculator() {
    let firstNumber, secondNumber;

    function read() {
        firstNumber = +prompt('firstNumber', 0);
        secondNumber = +prompt('secondNumber', 0);
    }

    function sum() {
        return firstNumber + secondNumber;
    }

    function mul() {
        return firstNumber * secondNumber;
    }

    return {read, mul, sum}
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
