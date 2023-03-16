function F(name) {
    this.name = name;
}

let obj = new F('John');

let obj2 = new obj.constructor('Mike');

//поведет неправильно:
F.prototype = {}
let obj3 = new F('Pe');
let obj4 = new obj3.constructor('Petr');
console.log(obj4.name);
