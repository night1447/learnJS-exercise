
function Calculator() {
    const methods = {
        '+': (first, second) => first + second,
        '-': (first, second) => first - second,
    }

    function addMethod(name, func) {
        this.methods[name] = func;
    }

    function calculate(str = '') {
        const massive = str.split(' ');
        return this.methods?.[massive.at(1)](+massive.at(0), +massive.at(2));
    }

    return {methods, addMethod, calculate};
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc);

let result = powerCalc.calculate("2 ** 3");
console.log(result);
