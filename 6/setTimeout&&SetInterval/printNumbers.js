const printNumbers = (from = 0, to = 1) => {

    const id = setTimeout(() => {
        console.log(from);
        printNumbers(++from, to);
    }, 1000)
    if (from > to) {
        clearTimeout(id);
    }
}

const printIntervalNumbers = (from = 0, to = 1) => {
    const id = setInterval(() => {
        console.log(from);
        if (from === to) {
            clearInterval(id);
        }
        ++from;
    }, 1000);
}
printIntervalNumbers(2, 10);