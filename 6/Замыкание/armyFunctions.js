const makeArmy = () => {
    let shooters = [];
    let index = 0;
    while (index < 10) {
        let tmp = index;
        let shooter = () => {
            console.log(tmp);
        }
        shooters.push(shooter);
        index++
    }
    return shooters;
};

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10