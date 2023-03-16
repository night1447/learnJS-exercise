const printList = (list = {}) => {
    let obj = list;
    while (obj) {
        console.log(obj.value);
        obj = obj?.next;
    }
}
const recursionPrintList = (list = {}) => {
    console.log(list.value);
    if (list.next !== null) {
        recursionPrintList(list.next);
    }
}
recursionPrintList({value: 1, next: {value: 2, next: {value: 3, next: null}}})