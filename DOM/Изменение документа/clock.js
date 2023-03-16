const createClock = (container) => {
    const hours = document.createElement('span');
    const minutes = document.createElement('span');
    const seconds = document.createElement('span');
    const clock = document.createElement('div');
    const start = document.createElement('button');
    const clockWrapper = document.createElement('div');
    const stop = document.createElement('button');
    start.innerHTML = 'start';
    stop.innerHTML = 'stop';

    clock.classList.add('clock');
    clockWrapper.classList.add('clock__wrapper');
    hours.classList.add('clock__hours');
    minutes.classList.add('clock__minutes');
    seconds.classList.add('clock__seconds');

    minutes.innerHTML = 'mm';
    hours.innerHTML = 'hh';
    seconds.innerHTML = 'ss';
    let interval;
    start.addEventListener('click', () => {
        interval = setInterval(() => {
            const date = new Date();
            let currentHours = date.getHours();
            let currentMinutes = date.getMinutes();
            let currentSeconds = date.getSeconds();
            minutes.innerHTML = currentMinutes.toString();
            hours.innerHTML = currentHours.toString();
            seconds.innerHTML = currentSeconds.toString();
        }, 1000);
    })
    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
    clockWrapper.append(hours);
    clockWrapper.append(minutes);
    clockWrapper.append(seconds);
    clock.append(clockWrapper);
    clock.append(start);
    clock.append(stop);
    container.append(clock);
}
createClock(document.body);