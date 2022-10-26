var data_expresso = localStorage.getItem('expresso');
var data_capuccino = localStorage.getItem('capuccino');

data_expresso = JSON.parse(data_expresso);
data_capuccino = JSON.parse(data_capuccino);

console.log(data_expresso.name);
console.log(data_capuccino.name);

