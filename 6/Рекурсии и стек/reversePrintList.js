const reversePrintList = (list = {}) => {
    let values = [];
    let obj = list;
    while (obj) {
        values.push(obj.value);
        obj = obj.next;
    }
    values.reverse().forEach(item => console.log(item));
}
const reverseRecursionPrintList = (list = {}) => {
    if (list !== null) {
        reverseRecursionPrintList(list.next);
    }
    if (list?.value) {
        console.log(list.value)
    }
}
reverseRecursionPrintList({value: 1, next: {value: 2, next: {value: 3, next: null}}})