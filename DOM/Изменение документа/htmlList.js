const insertHtmlList = (id) => {
    const ul = document.querySelector(`#${id}`);
    const first = ul.children[0];
    const last = ul.children[1];
    const firstId = +first.textContent;
    const lastId = +last.textContent;
    const documentFragment = new DocumentFragment();
    for (let i = firstId + 1; i < lastId; i++) {
        const li = document.createElement('li');
        li.innerHTML = i.toString();
        documentFragment.append(li);
    }
    first.after(documentFragment);
}
insertHtmlList('ul');