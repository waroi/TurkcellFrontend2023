import Fetch from "./fetch.js";
import ViewGridCard from "./Components/viewGridCard.js";
import ViewListCard from "./Components/viewListCard.js";

const viewGridList = document.getElementById("viewGrid");
const viewList = document.getElementById("viewList");

let filteredArrayProducts = [];

class Filter {
  // static async filterProductsFromFilter() {
  //   const productCategory = document.getElementById("productCategory").value;
  //   const productBrand = document.getElementById("productBrand").value;

  //   const request = new Fetch("http://localhost:3000/posts");
  //   const sort = document.getElementById("sort");

  //   const categoriesAndBrands = document.querySelectorAll(
  //     'input[name="categoriesandbrands"]:checked'
  //   );
  //   const selectedCategoriesAndBrands = Array.from(categoriesAndBrands).map(
  //     (input) => input.value
  //   );

  //   const products = await request.get();
  //   let filteredProducts = products;

  //   if (
  //     productCategory ||
  //     productBrand ||
  //     selectedCategoriesAndBrands.length > 0
  //   ) {
  //     filteredProducts = products.filter((product) => {
  //       const categoryMatch =
  //         !productCategory ||
  //         product.category === productCategory;
  //       const brandMatch =
  //         !productBrand ||
  //         product.brand.toLowerCase() === productBrand.toLowerCase();
  //       const categoriesAndBrandsMatch =
  //         selectedCategoriesAndBrands.length === 0 ||
  //         selectedCategoriesAndBrands.some((selected) =>
  //           [product.category, product.brand]
  //             .map((item) => item.replace(/ /g, "").toLowerCase())
  //             .includes(selected)
  //         );
  //       console.log(selectedCategoriesAndBrands);
  //       console.log(productCategory);
  //       console.log(product.category);

  //       return categoryMatch && brandMatch && categoriesAndBrandsMatch;
  //     });
  //   }

  //   viewGridList.innerHTML = "";
  //   viewList.innerHTML = "";
  //   filteredProducts.forEach((product) => {
  //     ViewGridCard.addProductFromViewGridCard(product);
  //     ViewListCard.addProductFromViewListCard(product);
  //   });

  //   filteredArrayProducts = filteredProducts;

  //   // let selectedSortOption;
  //   // for (const option of sortOptions) {
  //   //   if (option.checked) {
  //   //     selectedSortOption = option.value;
  //   //     break;
  //   //   }
  //   // }

  //   // if (!selectedSortOption) {
  //   //   console.error("Sort seçeneği belirtilmedi.");
  //   //   return;
  //   // }

  //   this.sortProductsFromFilter(sort.value);

  //   return filteredArrayProducts;
  // }

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

    filteredArrayProducts = filteredProducts;

    this.sortProductsFromFilter(sort.value);

    return filteredArrayProducts;
  }

  static async searchProductsFromFilter(query) {
    const request = new Fetch("http://localhost:3000/posts");
    const sort = document.getElementById("sort");

    const products = await request.get();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    const categoriesAndBrands = document.querySelectorAll(
      'input[name="categoriesandbrands"]:checked'
    );
    const selectedCategoriesAndBrands = Array.from(categoriesAndBrands).map(
      (input) => input.value
    );

    let filteredProductsWithCategoriesAndBrands = [];

    if (selectedCategoriesAndBrands.length > 0) {
      filteredProductsWithCategoriesAndBrands = filteredProducts.filter(
        (product) => {
          const productCategoriesAndBrands = [
            product.category.replace(/ /g, "").toLowerCase(),
            product.brand.replace(/ /g, "").toLowerCase(),
          ];
          const matchingCategoriesAndBrands =
            selectedCategoriesAndBrands.filter((selectedCategoryAndBrand) =>
              productCategoriesAndBrands.includes(selectedCategoryAndBrand)
            );
          return matchingCategoriesAndBrands.length > 0;
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

    filteredArrayProducts = filteredProductsWithCategoriesAndBrands;

    this.sortProductsFromFilter(sort.value);
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
