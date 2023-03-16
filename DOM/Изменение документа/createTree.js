let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};
const createTree = (container, object) => {
    const createUl = () => document.createElement('ul');
    const createLi = (value) => {
        const li = document.createElement('li');
        li.innerHTML = value;
        return li;
    }

    const list = createUl();
    const createList = (obj, list) => {
        for (let key in obj) {
            const li = createLi(key);
            list.append(li);
            if (Object.keys(obj[key]).length) {
                const ul = createUl();
                createList(obj[key], ul);
                li.append(ul);
            }
        }
    }
    createList(object, list);
    container.append(list);
}
createTree(document.body, data);