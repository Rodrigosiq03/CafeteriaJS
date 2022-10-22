const minus = document.querySelector('.minus-btn');
const plus = document.querySelector('.plus-btn');
const counter = document.querySelector('.counter-text');

let a = 0;

minus.addEventListener('click', () => {
    if (a > 0) {
        a--;
        counter.innerHTML = a;
    }
});

plus.addEventListener('click', () => {
    a++;
    counter.innerHTML = a;
});