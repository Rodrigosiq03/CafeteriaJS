var adress = document.getElementsByClassName("adress-cafeteria");
var date = document.getElementsByClassName("date-ordered");
var time = document.getElementsByClassName("time-ordered");
var pedidoInt = document.getElementsByClassName("randomInt");

var get_adress = JSON.parse(localStorage.getItem("informacoes"));
console.log(get_adress.unidade);
adress[0].innerHTML = get_adress.unidade;

var get_date = JSON.parse(localStorage.getItem("informacoes"));
console.log(get_date.data);
date[0].innerHTML = get_date.data;

var get_time = JSON.parse(localStorage.getItem("informacoes"));
console.log(get_time.horario);
time[0].innerHTML = get_time.horario;

var get_num_pedido = JSON.parse(localStorage.getItem("informacoes"));
console.log(get_num_pedido.num_pedido);
pedidoInt[0].innerHTML = get_num_pedido.num_pedido;
