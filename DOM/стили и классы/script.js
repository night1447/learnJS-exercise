const showNotification = (settings = {top: 0, right: 0}) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    for (let key in settings) {
        switch (key) {
            case 'top':
            case 'left':
            case 'right':
            case 'bottom':
                notification.style[key] = `${settings[key]}px`;
                break;
            case 'html':
                notification.innerHTML = settings[key];
                break;
            case 'className':
                notification.classList.add(settings[key]);
                break;
        }
    }
    document.body.append(notification);
    setTimeout(() => {
        notification.remove()
    }, 1500);
}
showNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});