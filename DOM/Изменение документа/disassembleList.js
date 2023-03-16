const disassembleList = (list) => {
    const allLi = list.querySelectorAll('li');
    for (let item of allLi) {
        const length = item.querySelectorAll('li').length;
        if (length) item.firstChild.data += `[${length}]`;
    }
}
const list = document.querySelector('ul');
disassembleList(list);