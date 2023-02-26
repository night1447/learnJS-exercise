//Void
const isEmpty = (object) => {
    for (let key in object) {
        return false
    }
    return true;
}
console.log(isEmpty({}));
