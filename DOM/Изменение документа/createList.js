const createList = () => {
    const list = document.createElement('ul');
    while (true) {
        const value = prompt("Введите содержимое");
        if (value) {
            const li = document.createElement('li');
            li.textContent = value;
            list.append(li);
        } else {
            document.body.append(list);
            return;
        }
    }
}

createList();