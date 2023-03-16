function debounce(func, ms) {
    let isTime = true;

    function debounceWrapper(...args) {
        if (isTime) {
            func.apply(this, args);
            isTime = false;
            setTimeout(() => {
                isTime = true;
            }, ms)
        }
    }

    return debounceWrapper;
}

let f = debounce((x) => {
    console.log(x)
}, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)