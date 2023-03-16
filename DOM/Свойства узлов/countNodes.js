const elementsList = document.querySelectorAll('li');
elementsList.forEach(item => {
    console.log(item);
    console.log('text: ', item.textContent);
    console.log('length inner li: ', item.querySelectorAll('li').length);
})


console.log(document.body.lastChild.nodeType); // 1
