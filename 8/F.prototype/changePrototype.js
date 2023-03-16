"use strict";
function Rabbit() {
}

Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
Rabbit.prototype = {};// true -> true
console.log(rabbit.eats);
Rabbit.prototype.eats = false; // true-> true
console.log(rabbit.eats);
delete rabbit.eats;// true -> true
console.log(rabbit.eats);
delete Rabbit.prototype.eats;//true-> true
console.log(rabbit.eats);