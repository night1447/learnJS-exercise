const area = document.querySelector('.area');
let textarea;
area.addEventListener('click', () => {
    textarea = document.createElement('textarea');
    textarea.value = area.textContent;
    area.innerHTML = '';
    textarea.style.width = "100%";
    textarea.style.resize = "none";
    textarea.style.height = "100%";
    textarea.style.border = "1px solid red";
    area.append(textarea);
    textarea.focus();
    textarea.addEventListener('blur', () => {
        area.textContent = textarea.textContent;
        textarea.remove();
    })
    area.addEventListener('keydown', (event) => {
        if (event.key === "Enter" && textarea) {
            area.textContent = textarea.value;
            textarea.remove();
        }
    })
});


