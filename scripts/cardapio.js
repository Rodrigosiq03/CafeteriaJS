// BUTTONS
let minus = document.querySelectorAll('button.minus-btn');
let plus = document.querySelectorAll('button.plus-btn');
console.log(minus);
console.log(plus);
// COUNTERS
const counter = document.querySelector('.counter-text');
const price_change_expresso = document.getElementById('counter-expresso');
const price_change_capuccino = document.getElementById('counter-capuccino');


const counter_cifrao = document.querySelector('.counter-cifrao');
const counter_money = document.querySelector('.counter-money');


let price_expresso = document.getElementsByClassName('price-expresso');
price_expresso = price_expresso[0].innerHTML;

let price_capuccino = document.getElementsByClassName('price-capuccino');
price_capuccino[price_capuccino.length - 1] = parseInt(price_capuccino);



// MODALS
const expresso = document.getElementById('expressoModal');
const capuccino = document.getElementById('capuccinoModal');


let counter_num = 0;
let price_num = 0;

// FUNCTIONS OF COFFEES

function addOne_expresso() {
    if (counter_num >= 0) {
        counter_num++;
        price_num += 8;
        counter.innerHTML = counter_num;
        price_change_expresso.innerHTML = price_num;
    }
}
function subtractOne_expresso() {
    if (counter_num > 0) {
        counter_num--;
        price_num -= 8;
        counter.innerHTML = counter_num;
        price_change_expresso.innerHTML = price_num;
    }
}
function addOne_capuccino() {
    if (counter_num >= 0) {
        counter_num++;
        price_num += 10;
        counter.innerHTML = counter_num;
        price_change_capuccino.innerHTML = price_num;
    }
}
function subtractOne_capuccino() {
    if (counter_num > 0) {
        counter_num--;
        price_num -= 10;
        counter.innerHTML = counter_num;
        price_change_capuccino.innerHTML = price_num;
    }
}

// FUNCTIONS OF MODALS WITH COFFEES

function expressoModal() {
    let pop_up_expresso = new bootstrap.Modal(expresso);
    pop_up_expresso.show();

    plus.forEach((btn) => {
        btn.addEventListener('click', addOne_expresso);
    });
    
    minus.forEach((btn) => {
        btn.addEventListener('click', subtractOne_expresso);
    });
   
}
function capuccinoModal() {
    let pop_up_capuccino = new bootstrap.Modal(capuccino);
    pop_up_capuccino.show();

    plus.forEach((btn) => {
        btn.addEventListener('click', addOne_capuccino);
    });
    
    minus.forEach((btn) => {
        btn.addEventListener('click', subtractOne_capuccino);
    });
    
}

