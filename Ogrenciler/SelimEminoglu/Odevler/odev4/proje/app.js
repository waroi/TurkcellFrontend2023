const productList = document.getElementById("productList");
const showİnfoModal = document.getElementById("showİnfoModal");

function showList() {
  Json.getProducts()
    .then((data) => {
      UI.showProducts(data);
    })
    .catch((err) => console.log(err));
}

showList();
