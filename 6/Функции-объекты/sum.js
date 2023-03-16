function sum(first = 0) {
    let sum = first;

    function getSum(second = 0) {
        sum += second;
        return getSum;
    }

    //переопределение метода
    getSum.toString = function () {
        return sum;
    }

    return getSum;
}

console.log(sum(1)(2)(3).toString());


