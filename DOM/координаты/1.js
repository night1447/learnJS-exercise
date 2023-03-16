let coords = elem.getBoundingClientRect();

let leftTop = [coords.left, coords.top];
let rightBottom = [coords.right, coords.bottom];
let leftOuter = [coords.left + field.clientLeft, coords.top + field.clientTop]
let rightOuter =  [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
];