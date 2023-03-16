let form = document.forms.calculator;
let initial = form.money.value, interest = form.interest.value * 0.01, years = +form.months.value / 12;
form.money.addEventListener('input', () => {
    calculate('money');
});
form.months.addEventListener('change', () => {
    calculate('month');
});
form.interest.addEventListener('input', () => {
    calculate('interest');
});

function calculate(type) {
    if (type === 'money') {
        initial = +form.money.value;
    }
    if (type === 'interest') {
        interest = +form.interest.value * 0.01;
    }
    if (type === 'month') {
        years = +form.months.value / 12;
    }
    let result = Math.round(initial * (1 + interest) ** years);
    document.querySelector('#height-after').style.height = result / form.money.value * 110 + 'px';
    document.querySelector('#money-before').innerHTML = form.money.value;
    document.querySelector('#money-after').innerHTML = result.toString();
}

calculate();