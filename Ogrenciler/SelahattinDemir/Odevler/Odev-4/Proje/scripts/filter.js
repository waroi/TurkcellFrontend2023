import Fetch from "./fetch.js";
import ViewGridCard from "./Components/viewGridCard.js";
import ViewListCard from "./Components/viewListCard.js";

const viewGridList = document.getElementById("viewGrid");
const viewList = document.getElementById("viewList");
const productTitle = document.getElementById("product-title");

let filteredArrayProducts = [];

class Filter {
  static async filterProductsFromFilter() {
    const productCategory = document
      .getElementById("productCategory")
      .value.toLowerCase();
    const productBrand = document
      .getElementById("productBrand")
      .value.toLowerCase();

    const request = new Fetch("http://localhost:3000/posts");
    const sort = document.getElementById("sort");

    const categoriesAndBrands = document.querySelectorAll(
      'input[name="categoriesandbrands"]:checked'
    );

    const selectedCategoriesAndBrands = Array.from(categoriesAndBrands).map(
      (input) => input.value.toLowerCase().replace(/ /g, "")
    );

    const products = await request.get();
    let filteredProducts = products;

    if (
      productCategory ||
      productBrand ||
      selectedCategoriesAndBrands.length > 0
    ) {
      filteredProducts = products.filter((product) => {
        const categoryMatch =
          !productCategory ||
          product.category.toLowerCase().includes(productCategory);
        const brandMatch =
          !productBrand || product.brand.toLowerCase().includes(productBrand);
        const categoriesAndBrandsMatch =
          selectedCategoriesAndBrands.length === 0 ||
          selectedCategoriesAndBrands.some((selected) =>
            [
              product.category.toLowerCase().replace(/ /g, ""),
              product.brand.toLowerCase().replace(/ /g, ""),
            ].includes(selected)
          );

        return categoryMatch && brandMatch && categoriesAndBrandsMatch;
      });
    }

    viewGridList.innerHTML = "";
    viewList.innerHTML = "";
    filteredProducts.forEach((product) => {
      ViewGridCard.addProductFromViewGridCard(product);
      ViewListCard.addProductFromViewListCard(product);
    });

    let productCount = filteredProducts.length;
    productTitle.innerHTML = "";
    productTitle.innerHTML += `Sonuç: ${productCount} Ürün Bulundu`;

    filteredArrayProducts = filteredProducts;

    this.sortProductsFromFilter(sort.value);

    return filteredArrayProducts;
  }

  static async searchProductsFromFilter(query) {
    try {
      const request = new Fetch("http://localhost:3000/posts");
      const sort = document.getElementById("sort");

      const products = await request.get();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      const categoriesAndBrands = Array.from(
        document.querySelectorAll('input[name="categoriesandbrands"]:checked')
      ).map((input) => input.value.toLowerCase().replace(/ /g, ""));

      let filteredProductsWithCategoriesAndBrands;

      if (categoriesAndBrands.length > 0) {
        filteredProductsWithCategoriesAndBrands = filteredProducts.filter(
          (product) => {
            const productCategoriesAndBrands = [
              product.category.replace(/ /g, "").toLowerCase(),
              product.brand.replace(/ /g, "").toLowerCase(),
            ];

            return categoriesAndBrands.some((selectedCategoryAndBrand) =>
              productCategoriesAndBrands.includes(selectedCategoryAndBrand)
            );
          }
        );
      } else {
        filteredProductsWithCategoriesAndBrands = [...filteredProducts];
      }

      viewGridList.innerHTML = "";
      viewList.innerHTML = "";
      filteredProductsWithCategoriesAndBrands.forEach((product) => {
        ViewGridCard.addProductFromViewGridCard(product);
        ViewListCard.addProductFromViewListCard(product);
      });

      const productCount = filteredProductsWithCategoriesAndBrands.length;
      productTitle.innerHTML = `Sonuç: ${productCount} Ürün Bulundu`;

      filteredArrayProducts = filteredProductsWithCategoriesAndBrands;

      this.sortProductsFromFilter(sort.value);
    } catch (error) {
      console.log(error);
    }
  }

  static async sortProductsFromFilter(sortType) {
    const request = new Fetch("http://localhost:3000/posts");

    let products;
    if (filteredArrayProducts.length === 0) {
      products = await request.get();
    } else {
      products = [...filteredArrayProducts];
    }

    let sortedProducts = [];

    switch (sortType) {
      case "alphabetical-asc":
        sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabetical-desc":
        sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts = products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts = products.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = products;
        break;
    }

    viewGridList.innerHTML = "";
    viewList.innerHTML = "";

    // Sıralanan ürünleri ürün listesine ekleyin
    sortedProducts.forEach((product) => {
      ViewGridCard.addProductFromViewGridCard(product);
      ViewListCard.addProductFromViewListCard(product);
    });
  }
}

export default Filter;
