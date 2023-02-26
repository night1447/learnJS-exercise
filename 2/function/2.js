
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

//N1
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
//N2
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}