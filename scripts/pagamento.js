function selectData(element) {
    if (element.className == "card-date-button") {
        element.className = "card-date-button-selected";
    } else {
        element.className = "card-date-button";
    }
    var dates = document.getElementsByClassName("card-date-button");
    for (var i = 0; i < dates.length; i++) {
        dates[i].className = "card-date-button";
    }

}
function selectTime(element) {
    if (element.className == "radio-button") {
        element.className = "radio-button-selected";
    } else {
        element.className = "radio-button";
    }
    var times = document.getElementsByClassName("radio-button");
    for (var i = 0; i < times.length; i++) {
        times[i].className = "radio-button";
    }

}
function goToMenuPage() {
    window.location.href = "cardapio.html";
}
function goToCartPage() {
    window.location.href = "carrinho.html";
}
