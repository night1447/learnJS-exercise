function f(a) {
    console.log(a)
}

function throttle(func, ms) {
    let isTimeout = false;
    let savedValue;

    function throttleWrapper(...args) {
        savedValue = args;
        if (isTimeout) {
            return;
        }

        func.apply(this, args);
        isTimeout = true;

        setTimeout(() => {
            isTimeout = false;
            func.apply(this, savedValue);
        }, ms)
    }

    return throttleWrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано