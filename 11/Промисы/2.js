function delay(ms) {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 3000);
        }
    )
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));