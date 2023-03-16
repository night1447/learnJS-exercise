let hamster = {
    eat(food) {
        this.stomach = this.stomach ? this.stomach : [];
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

//происходила запись в один и тот же массив который
//для нового объекта не создавался новый а записывался в старый то есть они ссылались на один и тот же массив