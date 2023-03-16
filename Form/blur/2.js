let table = document.querySelector('#bagua-table');

let focusElement;

table.addEventListener('click', (event) => {

        let target = event.target.closest('.edit__cancel,.edit__okay,td');

        if (!table.contains(target)) return;

        if (target.className === 'edit__cancel') {
            edit(focusElement.element, false);
        } else if (target.className === 'edit__okay') {
            edit(focusElement.element, true);
        } else if (target.nodeName === 'TD') {
            if (focusElement) return; // уже редактируется

            createEditInterface(target);
        }
    }
);

function createEditInterface(td) {
    focusElement = {
        element: td,
        data: td.innerHTML
    };

    td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeend",
        '<div class="edit-controls"><button class="edit__okay">OK</button><button class="edit__cancel">CANCEL</button></div>'
    );
}

function edit(td, isOkay) {
    if (isOkay) {
        td.innerHTML = td.firstChild.value;
    }
    td.innerHTML = focusElement.data;
    td.classList.remove('edit-td');
    focusElement = null;
}