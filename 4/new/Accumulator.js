

//Accumulator
function Accumulator(defaultValue = 0) {
    let value = defaultValue;

    function read() {
        const number = +prompt('Значение, которое хотите добавить', 0);
        this.value += number;
    }

    return {read, value};
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений