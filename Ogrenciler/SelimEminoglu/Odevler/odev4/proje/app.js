const productList = document.getElementById("productList");
const showİnfoModal = document.getElementById("showİnfoModal");

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productType");
const productCount = document.getElementById("productCount");
const productİmage = document.getElementById("productİmage");

const addProductButton = document.getElementById("addProduct");

addProductButton.addEventListener("click", addProduct);

function addProduct() {
  let id = Date.now();

  let newProduct = {
    id: id,
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
    count: productCount.value,
    image: productİmage.value,
  };

  for (let key in newProduct) {
    if (newProduct.hasOwnProperty(key)) {
      if (key === "price" || key === "count") {
        if (newProduct[key] < 0) {
          alert("Lütfen Pozitif Sayı Giriniz");
          return;
        }
      }
      if (newProduct[key] == "") {
        alert("Lütfen Boş Bırakmayınız");
        return;
      }
    }
  }

  Json.postProducts("http://localhost:3000/products", newProduct).then(
    (response) => {}
  );
}

function showList() {
  Json.getProducts().then((data) => {
    UI.showProducts(data);
  });
}

showList();
