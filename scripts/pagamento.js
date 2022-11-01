// MODALS 
unity_modal = document.getElementById("unityModal");
let pop_up_unidade = new bootstrap.Modal(unity_modal);

payment_modal = document.getElementById("paymentModal");
let pop_up_payment = new bootstrap.Modal(payment_modal);

// MODAL FOR CHOOSE THE UNITY 

function unityModal() {
    pop_up_unidade.show();
}

var adress = document.getElementsByClassName("adress-cafeteria");
var adress_id = document.getElementById("cafeteriajs-adress");

var adress_unity_sbc = 'CafeteriaJS SBC - Av. Dr Rudge Ramos, 512';
function unitySelectedSBC() {
    adress[0].innerHTML = adress_unity_sbc;
    pop_up_unidade.hide();
    adress_id.classList.remove("visually-hidden");
}

var adress_unity_suzano = 'Rua Benjamin Constant, 189 - Suzano';
function unitySelectedSuz() {
    adress[0].innerHTML = adress_unity_suzano;
    pop_up_unidade.hide();
    adress_id.classList.remove("visually-hidden");
}

var adress_unity_santos = 'Av. Pres. Wilson, 9 - Santos';
function unitySelectedSantos() {
    adress[0].innerHTML = adress_unity_santos;
    pop_up_unidade.hide();
    adress_id.classList.remove("visually-hidden");
}

// PAYMENT FUNCTIONS
function paymentModal() {
    pop_up_payment.show();
}

var name_payment = document.getElementsByClassName("name-payment-selection");
var credit_card_selected = document.getElementsByClassName("credit-card-selected");
var pix_selected = document.getElementsByClassName("pix-selected");
var close_button = document.getElementsByClassName("payment-close-button");
function creditCardSelected() {
    name_payment[0].innerHTML = "Cartão de Crédito";
    credit_card_selected[0].classList.remove("visually-hidden");
    pix_selected[0].classList.add("visually-hidden");
}
function pixSelected() {
    name_payment[0].innerHTML = "Pix";
    pix_selected[0].classList.remove("visually-hidden");
    credit_card_selected[0].classList.add("visually-hidden");
}
function onDelivery() {
    name_payment[0].innerHTML = "Pagamento na entrega";
    credit_card_selected[0].classList.add("visually-hidden");
    pix_selected[0].classList.add("visually-hidden");
}

function setHidden() {
    credit_card_selected[0].classList.add("visually-hidden");
    pix_selected[0].classList.add("visually-hidden");
    name_payment[0].innerHTML = "Escolha aqui";

}


// DATA & TIME FUNCTIONS
function selectData(element) {
    var date_1 = document.getElementById("date-1");
    var date_2 = document.getElementById("date-2");
    var date_3 = document.getElementById("date-3");
    var date_4 = document.getElementById("date-4");

    var container_date = document.getElementById("day-month");

    if (element.id == "date-1") {
        date_1.classList.add("card-date-button-selected");
        date_2.classList.remove("card-date-button-selected");
        date_3.classList.remove("card-date-button-selected");
        date_4.classList.remove("card-date-button-selected");
        var weekday = document.getElementById("weekday");
        weekday.innerHTML = "Terça-feira,";
        var day = document.getElementById("day-for-data");
        day.innerHTML = "4";
        var month = document.getElementById("month-for-data");
        month.innerHTML = "Outubro";
        container_date.classList.remove("visually-hidden");
    } else if (element.id == "date-2") {   
        date_1.classList.remove("card-date-button-selected");
        date_2.classList.add("card-date-button-selected");
        date_3.classList.remove("card-date-button-selected");
        date_4.classList.remove("card-date-button-selected");
        var weekday = document.getElementById("weekday");
        weekday.innerHTML = "Quarta-feira,";
        var day = document.getElementById("day-for-data");
        day.innerHTML = "5";
        var month = document.getElementById("month-for-data");
        month.innerHTML = "Outubro";
        container_date.classList.remove("visually-hidden");
    } else if (element.id == "date-3") {
        date_1.classList.remove("card-date-button-selected");
        date_2.classList.remove("card-date-button-selected");
        date_3.classList.add("card-date-button-selected");
        date_4.classList.remove("card-date-button-selected");
        var weekday = document.getElementById("weekday");
        weekday.innerHTML = "Quinta-feira,";
        var day = document.getElementById("day-for-data");
        day.innerHTML = "6";
        var month = document.getElementById("month-for-data");
        month.innerHTML = "Outubro";
        container_date.classList.remove("visually-hidden");
    } else {
        date_1.classList.remove("card-date-button-selected");
        date_2.classList.remove("card-date-button-selected");
        date_3.classList.remove("card-date-button-selected");
        date_4.classList.add("card-date-button-selected");
        var weekday = document.getElementById("weekday");
        weekday.innerHTML = "Sexta-feira,";
        var day = document.getElementById("day-for-data");
        day.innerHTML = "7";
        var month = document.getElementById("month-for-data");
        month.innerHTML = "Outubro";
        container_date.classList.remove("visually-hidden");
    }
    
}


var time_1 = document.getElementById("time-1");
var time_2 = document.getElementById("time-2");
var time_3 = document.getElementById("time-3");
var time_4 = document.getElementById("time-4");
var time_5 = document.getElementById("time-5");
var time_6 = document.getElementById("time-6");
var time_7 = document.getElementById("time-7");
var time_8 = document.getElementById("time-8");
var time_9 = document.getElementById("time-9");
var time_10 = document.getElementById("time-10");

var timeSelected = document.getElementById("time-for-data");
var time_complement = document.getElementById("time-complement");

function selectTime(element) {
    
    if (element.id == "time-1") {
        time_1.classList.add("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "08:00 - 08:30";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-2") {   
        time_1.classList.remove("radio-button-selected");
        time_2.classList.add("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "08:30 - 09:00";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-3") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.add("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "09:00 - 09:30";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-4") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.add("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "09:30 - 10:00";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-5") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.add("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "10:00 - 10:30";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-6") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.add("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "10:30 - 11:00";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-7") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.add("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "11:00 - 11:30";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-8") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.add("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "11:30 - 12:00";
        time_complement.classList.remove("visually-hidden");
    } else if (element.id == "time-9") {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.add("radio-button-selected");
        time_10.classList.remove("radio-button-selected");
        timeSelected.innerHTML = "12:00 - 12:30";
        time_complement.classList.remove("visually-hidden");
    } else {
        time_1.classList.remove("radio-button-selected");
        time_2.classList.remove("radio-button-selected");
        time_3.classList.remove("radio-button-selected");
        time_4.classList.remove("radio-button-selected");
        time_5.classList.remove("radio-button-selected");
        time_6.classList.remove("radio-button-selected");
        time_7.classList.remove("radio-button-selected");
        time_8.classList.remove("radio-button-selected");
        time_9.classList.remove("radio-button-selected");
        time_10.classList.add("radio-button-selected");
        timeSelected.innerHTML = "12:30 - 13:00";
        time_complement.classList.remove("visually-hidden");
    }
}

var weekday = document.getElementById("weekday");
var day = document.getElementById("day-for-data");
var complement_day = document.getElementById("just-complement-day")
var month = document.getElementById("month-for-data");
var complement_time = document.getElementById("just-complement-time")
var num_pedido = Math.floor(Math.random() * 10000000)

function goToOrderDone() {
    var informacoes = {
        unidade: adress[0].innerHTML,
        data: weekday.innerHTML + ' ' + day.innerHTML + ' ' + complement_day.innerHTML + ' ' +  month.innerHTML,
        horario: complement_time.innerHTML + ' ' + timeSelected.innerHTML,
        num_pedido: num_pedido
    }
    localStorage.setItem("informacoes", JSON.stringify(informacoes));
    window.location.href = "confirmacao_pedido.html";
}


function goToMenuPage() {
    window.location.href = "cardapio.html";
}
function goToCartPage() {
    window.location.href = "carrinho.html";
}
