//Перемешайте массив
let massive = [989, 285, 121, 559, 0];
const shuffle = (array) => {
    const createRandMassive = (max = 1, min = 0, length) => {
        let index = 0;
        let result = [];
        while (length > index) {
            const random = +Math.floor(Math.random() * (max + 1 - min) + min);
            if (result.indexOf(random) === -1) {
                result.push(random);
                index++;
            }
        }
        return result;
    }
    const indexMassive = createRandMassive(array.length - 1, 0, array.length);
    indexMassive.forEach((current, index) => {
        const temp = array[current];
        array[current] = array[index];
        array[index] = temp;

    })
}
shuffle(massive);
console.log(massive);
shuffle(massive);
console.log(massive);
shuffle(massive);
console.log(massive);
shuffle(massive);
console.log(massive);
