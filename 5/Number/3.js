
const readNumber = () => {
    while (true) {
        const number = prompt('number', '');
        if (number === null) {
            break;
        } else if (number) {
            return +number;
        }
    }
};

console.log(readNumber());