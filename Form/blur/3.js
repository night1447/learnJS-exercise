mouse.addEventListener('click', () => {
        mouse.style.left = mouse.getBoundingClientRect().left + 'px';
        mouse.style.top = mouse.getBoundingClientRect().top + 'px';

        mouse.style.position = 'fixed';
    }
);

mouse.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            mouse.style.left = parseInt(mouse.style.left) - mouse.offsetWidth + 'px';
            return;
        case 'ArrowUp':
            mouse.style.top = parseInt(mouse.style.top) - mouse.offsetHeight + 'px';
            return;
        case 'ArrowRight':
            mouse.style.left = parseInt(mouse.style.left) + mouse.offsetWidth + 'px';
            return;
        case 'ArrowDown':
            mouse.style.top = parseInt(mouse.style.top) + mouse.offsetHeight + 'px';
            return;
    }
});