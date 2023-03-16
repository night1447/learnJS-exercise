function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    function spyWrapper(...args) {
        spyWrapper.calls.push([...args]);
        return func.apply(this, args);
    }

    spyWrapper.calls = [];
    return spyWrapper;
}

let works = spy(work);
works(1, 2);
works(3, 4);
works(5, 6);
works(1, 8);
works(1, 3);
for (let args of works.calls) {
    console.log('call:' + args.join());
}