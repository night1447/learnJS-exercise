new Promise(function (resolve, reject) {
    setTimeout(() => {
       throw new Error("Whoops!");
    }, 1000);
}).catch(e => {
    console.log(e);
});
// нет не выполнится асихнронная ошибка