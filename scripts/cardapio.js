// MODALS
const expresso = document.getElementById('expressoModal');
const capuccino = document.getElementById('capuccinoModal');


// FUNCTIONS OF MODALS WITH COFFEES

function expressoModal() {
    let pop_up_expresso = new bootstrap.Modal(expresso);
    pop_up_expresso.show();
}
function capuccinoModal() {
    let pop_up_capuccino = new bootstrap.Modal(capuccino);
    pop_up_capuccino.show();
}

