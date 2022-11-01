const itens = document.getElementById("itens-pop-up");
const produtosCardTemplate = document.getElementById("card-produto-template");
const listaProdutos = document.getElementById("lista-produtos-carrinho");

function itensPopUp() {
  let pop_up_itens = new bootstrap.Modal(itens);
  pop_up_itens.show();
}

function getAllItensFromLocalStorage() {
  let itensList = [];

  for (let i = 0; i < localStorage.length; i++) {
    let currentKey = localStorage.key(i);
    itensList.push(JSON.parse(localStorage.getItem(currentKey)));
  }
  return itensList;
}

function showProductsOnCart() {
  let allItens = getAllItensFromLocalStorage();
  listaProdutos.innerHTML = ""

  allItens.forEach((item) => {
    let li = document.createElement("li");
    listaProdutos.appendChild(li);

    let templateCopy = produtosCardTemplate.content.cloneNode(true)
    
    templateCopy.querySelector(".nome-produto").textContent = item["name"]
    templateCopy.querySelector(".preco-produto").textContent = item["price"]
    templateCopy.querySelector(".img-produto").src = item["src"]

    li.appendChild(templateCopy)
  });
}

function cleanProductsCart(){
  localStorage.clear()
  listaProdutos.innerHTML = ""
}

function addToCart(productName, price, imageSrc){
  const product = {
      name: productName,
      price: price,
      src: imageSrc
  }
  localStorage.setItem(productName, JSON.stringify(product));
  showProductsOnCart()
}

showProductsOnCart()

function goToPagamentoPage() {
  window.location.href = "pagamento.html";
}