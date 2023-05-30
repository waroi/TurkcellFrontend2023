const productArea = document.querySelector(".productCollection");
const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const productQuantity = document.querySelector("#productStock");
const productCategory = document.querySelector("#productCategory");
const productUrl = document.querySelector("#productUrl");
const addProductButton = document.querySelector(".add-product");
const basketDropdown = document.querySelector("#basketDropdownButton");
const editProductButton = document.querySelector("#editProductButton");
const filterForm = document.getElementById("filterForm");
const searchForm = document.getElementById("searchForm");
const sortForm = document.getElementById("sortForm");

let basketMenu = document.querySelector(".basketMenu");

const dataProduct = new Data("http://localhost:4000/product");

let count = 0;

eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", getProdudcts);
  window.addEventListener("DOMContentLoaded", getBaskets);

  addProductButton.addEventListener("click", addProduct);
  productArea.addEventListener("click", deleteProduct);
  productArea.addEventListener("click", editProducts);

  filterForm.addEventListener("submit", filterProducts);
  searchForm.addEventListener("submit", searchOnProducts);
  sortForm.addEventListener("submit", sortProducts);

  productArea.addEventListener("click", addToBasket);
  productArea.addEventListener("click", function (e) {
    if (e.target.classList.contains("increase")) {
      count += 1;
      e.target.parentElement.children[2].textContent = count;
    } else if (e.target.classList.contains("decrease")) {
      if (count > 0) {
        count -= 1;
        e.target.parentElement.children[2].textContent = count;
      }
    }
  });
  basketMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("deleteOneFromBasket")) {
      let baskets = dataProduct
        .getBaskets()
        .then((basket) => {
          let curBasket = basket.find(
            (product) =>
              product.id ===
              Number(e.target.parentElement.parentElement.parentElement.id)
          );
          dataProduct.deleteFromBasket(
            `http://localhost:4000/basket/${e.target.parentElement.parentElement.parentElement.id}`
          );

          let products = dataProduct
            .getPost()
            .then((data) => {
              let curData = data.find((item) => item.name === curBasket.name);
              dataProduct.editData(curData.id, {
                name: curData.name,
                price: curData.price,
                category: curData.category,
                url: curData.url,
                stock: curData.stock + curBasket.count,
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  });
  basketMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("buyItem")) {
      dataProduct
        .getBaskets()
        .then((basket) => {
          basket.forEach((product) => {
            dataProduct.deleteFromBasket(
              `http://localhost:4000/basket/${product.id}`
            );
          });
        })
        .catch((err) => console.log(err));
    }

    e.preventDefault();
  });
}

function getProdudcts() {
  dataProduct
    .getPost()
    .then((data) => {
      data.forEach((product) => {
        if (product.stock > 0) {
          UI.createPostCard(product);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function addProduct(e) {
  const name = productName.value;
  const price = Number(productPrice.value);
  const url = productUrl.value;
  const category = productCategory.value;
  const stock = Number(productQuantity.value);

  const product = {
    name,
    price,
    url,
    category,
    stock,
  };

  if (
    name === "" ||
    price === "" ||
    url === "" ||
    category === "" ||
    stock === ""
  ) {
    UI.displayMessage("Please fill all inputs that given !", "danger");
  } else {
    UI.displayMessage("Successfull", "success");
    dataProduct.addData(product);
  }

  e.preventDefault();
}
function deleteProduct(e) {
  if (e.target.classList.contains("product-delete")) {
    dataProduct.deleteData(
      e.target.parentElement.parentElement.parentElement.id
    );
  }
}
function editProducts(e) {
  if (e.target.classList.contains("product-edit")) {
    const postId = Number(
      e.target.parentElement.parentElement.parentElement.id
    );
    console.log(postId);

    const editName = document.getElementById("editName");
    const editPrice = document.getElementById("editPrice");
    const editStock = document.getElementById("editStock");
    const editCategory = document.getElementById("editCategory");
    const editUrl = document.getElementById("editUrl");

    dataProduct
      .getPost()
      .then((response) => {
        let curPost = response.find((data) => data.id === postId);

        editName.value = curPost.name;
        editPrice.value = curPost.price;
        editStock.value = curPost.stock;
        editCategory.value = curPost.category;
        editUrl.value = curPost.url;

        editProductButton.addEventListener("click", function (e) {
          dataProduct.editData(postId, {
            name: editName.value,
            price: Number(editPrice.value),
            category: editCategory.value,
            url: editUrl.value,
            stock: Number(editStock.value),
          });
        });
      })
      .catch((err) => console.log(err));
  }

  e.preventDefault();
}
function addToBasket(e) {
  if (e.target.classList.contains("addBasket")) {
    dataProduct.getPost().then((data) => {
      let curData = data.find(
        (item) =>
          item.id ===
          Number(e.target.parentElement.parentElement.parentElement.id)
      );
      console.log("dfmsfpdosdfp", curData);
      dataProduct.getBaskets().then((data) => {
        var valueExists = data.some(function (obj) {
          console.log(obj.name);
          return obj.name === curData.name;
        });
        if (count > 0) {
          if (!valueExists) {
            if (count > curData.stock) {
              UI.basketErrorMessage(
                `Stokta yalnizca ${curData.stock} urun var`,
                "danger"
              );
            } else {
              dataProduct.editData(curData.id, {
                name: curData.name,
                price: curData.price,
                url: curData.url,
                category: curData.category,
                stock: curData.stock - count,
              });

              dataProduct.addBasket({
                name: curData.name,
                price: curData.price,
                url: curData.url,
                category: curData.category,
                stock: curData.stock - count,
                count: count,
                total: curData.price * count,
              });
            }
          } else {
            if (count > curData.stock) {
              UI.basketErrorMessage(
                `Stokta yalnizca ${curData.stock} urun var`,
                "danger"
              );
            } else {
              dataProduct.editData(curData.id, {
                name: curData.name,
                price: curData.price,
                url: curData.url,
                category: curData.category,
                stock: curData.stock - count,
              });

              let editBasketData = data.find(
                (item) => item.name === curData.name
              );

              dataProduct.editBasketData(
                `http://localhost:4000/basket/${editBasketData.id}`,
                {
                  name: editBasketData.name,
                  price: editBasketData.price,
                  url: editBasketData.url,
                  category: editBasketData.category,
                  stock: editBasketData.stock - count,
                  count: editBasketData.count + count,
                  total: editBasketData.price * (editBasketData.count + count),
                }
              );
            }
          }
        }
      });
    });
  }

  e.preventDefault();
}
function filterProducts(e) {
  const selectElement = this.elements["filterCategory"];
  const selectedOption =
    selectElement.options[selectElement.selectedIndex].value;

  UI.filterPosts(selectedOption);
  e.preventDefault();
}
function searchOnProducts(e) {
  let searchInputValue = document.getElementById("searchInput").value;

  UI.searchProducts(searchInputValue);
  e.preventDefault();
}
function sortProducts(e) {
  const selectFilterElement = filterForm.elements["filterCategory"];
  const selectedOption =
    selectFilterElement.options[selectFilterElement.selectedIndex].value;
  const selectElement = this.elements["sortShape"];
  const selectElement2 = this.elements["sortCategory"];

  const sortShape = selectElement.options[selectElement.selectedIndex].value;

  const sortCategory =
    selectElement2.options[selectElement2.selectedIndex].value;
  UI.sortProducts(sortShape, sortCategory);

  e.preventDefault();
}
function getBaskets() {
  let total = 0;
  dataProduct.getBaskets().then((data) => {
    basketDropdown.textContent += data.length;
    data.map((product) => {
      total += product.total;

      console.log(product.id);
      basketMenu.innerHTML += `
        <li  class="list-style-none p-2 w-100 basketItem" id="${product.id}">
        <div class="row">
        <div class="col-md-3">
        <div><img style="max-width: 80px" class="img-fluid" src="${
          product.url
        }" alt="" /></div>
        </div>
        <div class="col-md-7">
        <div class="ms-4 ">
            <h5> Name: ${product.name}</h5>
            <strong  class="d-block ">Price: ${product.price} $</strong>
            <strong class="d-block">Sum: ${product.count}</strong>
            <strong>Remaining Stock: ${product.stock}</strong>
            <strong class="d-block">Toplam: ${
              product.price * product.count
            } $</strong>
          </div>
        </div>
        <div class="col-md-2 d-flex justify-content-end ">
        <button class="btn btn-danger ms-1 deleteOneFromBasket"><i class="fa-solid fa-trash"></i></button> 
        </div>
        </div>
        
      </li>

        `;
    });
    basketMenu.innerHTML += `
    <div class="row  d-flex justify-content-center mt-3">
    <button class="btn btn-success col-lg-4 buyItem"> Buy (${total}$) </button>
    
     </div>
    
    
    `;
  });
}
