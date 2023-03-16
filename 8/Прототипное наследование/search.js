let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};
console.log(bed.glasses);
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
//Ответ: так как pockets нужно спуститься по дереву элементов в прототипе, будет занимать дольше времени чем head.glasses


