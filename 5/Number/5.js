
const randomInteger = (min = 0, max = 0) => Number.parseInt((Math.random() * (max + 1 - min) + min).toString());
//Math.floor(Math.random() * (max + 1 - min) + min);
alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5

