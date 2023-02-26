function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}

//Answer: не обязателен, так как else это все варианты кроме age > 18, функция прерывается на return

