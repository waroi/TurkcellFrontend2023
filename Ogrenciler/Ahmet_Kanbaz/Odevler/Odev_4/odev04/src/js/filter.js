class Filter {
  static orientation4ShowProductsWithFilter() {
    crudProducts.get().then((datas) => {
      Filter.showProductsWithFilter(datas);
    });
  }

  static getCheckedCategoryFromDropDown = function (e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      selectedDropDown.push(value);
    } else {
      const index = selectedDropDown.indexOf(value);
      if (index > -1) {
        selectedDropDown.splice(index, 1);
      }
    }
    Filter.orientation4ShowProductsWithFilter();
    e.preventDefault();
  };

  static getSearchInput = function (e) {
    search = searchInput.value;
    Filter.orientation4ShowProductsWithFilter();
    e.preventDefault();
  };

  static getSortDropDown = function (e) {
    sort = e.target.id;
    Filter.orientation4ShowProductsWithFilter();
    e.preventDefault();
  };

  static showProductsWithFilter = function (products) {
    let filteredProducts = products;
    if (selectedDropDown.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedDropDown.includes(product.category)
      );
    }
    if (search !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sort !== "") {
      function sortProductsWithProductName(a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return;
      }

      function sortProductsWithProductPrice(a, b) {
        let x = a.price;
        let y = b.price;
        return x - y
      }

      if (sort === "productNameA_Z")
        filteredProducts.sort(sortProductsWithProductName);
      else if (sort === "productNameZ_A")
        filteredProducts.sort(sortProductsWithProductName).reverse();
      else if (sort === "productPriceGrow")
        filteredProducts.sort(sortProductsWithProductPrice);
      else if (sort === "productPriceDecrease")
        filteredProducts.sort(sortProductsWithProductPrice).reverse();
    }
    if (filteredProducts == "") {
      productList.innerHTML = "";
      UI.toastMessage(
        "Aramış olduğunuz ürün bulunamadı.\nLütfen farklı bir ürün arayınız."
      );
    } else {
      UI.updateDisplayForFilter(filteredProducts);
    }
  };
}
