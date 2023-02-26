
//multiple number *2
// до вызова функции
const multiplyNumeric = (object = {}) => {
    for (let key in object) {
        if (typeof object[key] === 'number') {
            object[key] *= 2;
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);
