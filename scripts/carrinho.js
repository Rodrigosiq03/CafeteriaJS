const itens = document.getElementById('itens-pop-up');
console.log(itens);

function itensPopUp() {
    let pop_up_itens = new bootstrap.Modal(itens);
    pop_up_itens.show();
}
