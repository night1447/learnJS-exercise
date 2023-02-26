const userLogin = prompt("Напишите свой логин", '');
if (userLogin === 'Админ') {
    const password = prompt('Введите свой пароль', '');
    if (password === 'Я главный') {
        alert('Здравствуйте');
    } else if (!password) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (!userLogin) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}