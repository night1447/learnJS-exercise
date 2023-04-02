function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    alert(this.name);
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();// Rabbit
Rabbit.prototype.sayHi();// ---
Object.getPrototypeOf(rabbit).sayHi(); // ---
rabbit.__proto__.sayHi();              // ---