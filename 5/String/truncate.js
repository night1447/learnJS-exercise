const truncate = (str = '', maxLength = 1) => str.length > maxLength ? str.slice(0, maxLength - 1) + '…' : str;
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
console.log(truncate("Всем привет!", 20))
