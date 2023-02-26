// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function () {
//         alert("Вы согласились.");
//     },
//     function () {
//         alert("Вы отменили выполнение.");
//     }
// );

const ask = (question, agreeFunc, disagreeFunc) => confirm(question) ? agreeFunc() : disagreeFunc();


ask(
    "Вы согласны?",
    function () {
        alert("Вы согласились.");
    },
    function () {
        alert("Вы отменили выполнение.");
    }
);
