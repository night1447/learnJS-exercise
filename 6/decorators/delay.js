function f(x) {
    console.log(x);
}

function delay(func, ms) {
    return function (...args) {
        setTimeout(() => {
            func.apply(this, args);
        }, ms)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000('test');
f1500('test');