const filterRangeInPlace = (array, a = 0, b = 1) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < a || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(numbers, 1, 4);
console.log(numbers);
