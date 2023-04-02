function* getPseudoRandom(value) {
    let closestValue = value;
    while (true) {
        closestValue = closestValue * 16807 % 2147483647;
        yield closestValue;
    }
}

let generator = getPseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073