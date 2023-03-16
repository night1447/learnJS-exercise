function sum(first = 0) {
    return function (second = 0) {
        return first + second;
    }
}

console.log(sum(1)(2));

console.log(sum(5)(-1));