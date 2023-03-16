"use strict";

function sayHi() {
    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

console.log(bound.test); //undefined ибо мы переопределяем контекст function -> {name:"Вася"}
