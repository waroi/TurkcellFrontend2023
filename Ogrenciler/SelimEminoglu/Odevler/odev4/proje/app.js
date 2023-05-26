const productList = document.getElementById("productList");
const showİnfoModal = document.getElementById("showİnfoModal");

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDescription = document.getElementById("productType");
const productCount = document.getElementById("productCount");
const productİmage = document.getElementById("productİmage");

let refs = [];

refs.push(productName);
refs.push(productPrice);
refs.push(productCategory);
refs.push(productDescription);
refs.push(productCount);
refs.push(productİmage);

const addProductButton = document.getElementById("addProduct");

const productNameUpdate = document.getElementById("productNameUpdate");
const productPriceUpdate = document.getElementById("productPriceUpdate");
const productCategoryUpdate = document.getElementById("productCategoryUpdate");
const productCountUpdate = document.getElementById("productCountUpdate");
const productDescriptionUpdate = document.getElementById("productTypeUpdate");
const productİmageUpdate = document.getElementById("productİmageUpdate");

const updateProductButton = document.getElementById("updateProduct");
const updateModal = document.getElementById("updateProductModal");

const orderList = document.getElementById("sorter");
const categoryFilter = document.getElementById("filter");

const basketList = document.getElementById("basketList");

addProductButton.addEventListener("click", addProduct);
updateProductButton.addEventListener("click", updateProduct);

function createFilter() {
  let categoryList = [];

  Json.getProducts().then((response) => {
    response.map((item) => {
      categoryList.push(item.category);
    });

    let setCategory = new Set(categoryList);

    setCategory.forEach((item) => {
      let option = document.createElement("option");
      option.text = item;
      option.value = item;
      categoryFilter.add(option);
    });
  });
}

createFilter();

categoryFilter.addEventListener("change", () => {
  if (categoryFilter.value == "Belirtilmemiş") {
    productList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        console.log(child);
        child.classList.remove("d-none");
      }
    });
  } else {
    productList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.classList.add("d-none");
      }
    });

    productList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        if (
          child.childNodes[1].childNodes[3].childNodes[9].innerHTML
            .toLowerCase()
            .indexOf(categoryFilter.value.toLowerCase()) > -1
        ) {
          child.classList.remove("d-none");
        }
      }
    });
  }
});

orderList.addEventListener("change", () => {
  switch (orderList.value) {
    case "AtoZ":
      Json.getProducts().then((response) => {
        let AtoZ = [];
        let list = response;
        let list2 = new Set();
        let list3 = [];

        list.map((item) => {
          AtoZ.push(item.name);
        });
        AtoZ = AtoZ.sort();

        for (let i = 0; i < AtoZ.length; i++) {
          list.map((item) => {
            if (AtoZ[i] === item.name) {
              list2.add(item);
            }
          });
        }
        list2.forEach((item) => {
          list3.push(item);
        });

        while (productList.firstChild) {
          productList.removeChild(productList.lastChild);
        }

        UI.showProducts(list3);
      });
      break;
    case "ZtoA":
      Json.getProducts().then((response) => {
        let ZtoA = [];
        let list = response;
        let list2 = new Set();
        let list3 = [];

        list.map((item) => {
          ZtoA.push(item.name);
        });
        ZtoA = ZtoA.sort().reverse();

        for (let i = 0; i < ZtoA.length; i++) {
          list.map((item) => {
            if (ZtoA[i] === item.name) {
              list2.add(item);
            }
          });
        }
        list2.forEach((item) => {
          list3.push(item);
        });

        while (productList.firstChild) {
          productList.removeChild(productList.lastChild);
        }

        UI.showProducts(list3);
      });
      break;
    case "price":
      Json.getProducts().then((response) => {
        let onPrice = [];
        let list = response;
        let list2 = new Set();
        let list3 = [];

        list.map((item) => {
          onPrice.push(parseFloat(item.price));
        });
        onPrice = onPrice.sort(function (a, b) {
          return a - b;
        });

        for (let i = 0; i < onPrice.length; i++) {
          list.map((item) => {
            if (onPrice[i] === parseFloat(item.price)) {
              list2.add(item);
            }
          });
        }
        list2.forEach((item) => {
          list3.push(item);
        });

        while (productList.firstChild) {
          productList.removeChild(productList.lastChild);
        }

        UI.showProducts(list3);
      });
      break;
    default:
      Json.getProducts().then((response) => {
        let rand = response;
        let randList = rand.sort((a, b) => 0.5 - Math.random());
        while (productList.firstChild) {
          productList.removeChild(productList.lastChild);
        }

        UI.showProducts(randList);
      });
      break;
  }
});

function updateProduct() {
  let updateİd = updateModal.children[0].id;

  Json.putProducts("http://localhost:3000/products/" + updateİd, {
    id: updateİd,
    name: productNameUpdate.value,
    price: productPriceUpdate.value,
    category: productCategoryUpdate.value,
    count: productCountUpdate.value,
    description: productDescriptionUpdate.value,
    image: productİmageUpdate.value,
  }).then(() => {
    while (productList.firstChild) {
      productList.removeChild(productList.lastChild);
    }
    showList();
  });
}

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

  while (productList.firstChild) {
    productList.removeChild(productList.lastChild);
  }

  Json.postProducts("http://localhost:3000/products", newProduct).then(
    (response) => {
      console.log(response);
      showList();
    }
  );

  refs.map((item) => {
    item.value = "";
  });
}

function showList() {
  Json.getProducts().then((data) => {
    UI.showProducts(data);
  });
}

showList();
