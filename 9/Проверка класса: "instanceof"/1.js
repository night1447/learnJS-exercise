function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // конструктор переопределяется в прототипе и instanceof сравнивает их