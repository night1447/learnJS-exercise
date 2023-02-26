//Неверный код
// it("Возводит x в степень n", function() {
//     let x = 5;
//
//     let result = x; -- изменение result как неверна лучше писать const value in result снизу приведу правильное решение
//     assert.equal(pow(x, 1), result); -- result = 5 должен
//
//     result *= x;
//     assert.equal(pow(x, 2), result); -- result = 25 должен
//
//     result *= x;
//     assert.equal(pow(x, 3), result); -- result = 125 должен
// });

//Верный код
// it("Возводит x в степень n", function() {
//
//     assert.equal(pow(5, 1), 5);
//
//     assert.equal(pow(5, 2), 25);
//
//     assert.equal(pow(5, 3), 125);
// });
