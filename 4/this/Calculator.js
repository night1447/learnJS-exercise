//Calculator
let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    read: () => {
        this.firstNumber = +prompt('first Number?', 0);
        this.secondNumber = +prompt('second Number?', 0);
    },
    sum: () => {
        return this.firstNumber + this.secondNumber;
    },
    mul: () => {
        return this.firstNumber * this.secondNumber;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());