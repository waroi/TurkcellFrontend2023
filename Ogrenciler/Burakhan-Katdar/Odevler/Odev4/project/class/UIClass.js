import ProductCard from "../components/ProductCard.js";
import filterFn from "../components/filterComponent.js";
class UI {
  constructor(degisiklik, filterTur, degistirmekIcinTiklananBlog) {
    this.degisiklik = degisiklik;
    this.filterTur = filterTur;
    this.degistirmekIcinTiklananBlog = degistirmekIcinTiklananBlog;
  }

  formSifirla() {
    productForm.reset();
  }

  blogToggle() {
    this.degisiklik = !this.degisiklik;
  }

  screen(products) {
    shared.innerHTML = products
      .filter((product) => {
        if (this.filterTur == "Tümü") return true;
        return this.filterTur ? product.productCategory == this.filterTur : true;
      })
      .filter((product) => {
        
        return (
          product.productName.toLowerCase().includes(search.value.toLowerCase())
        );
      })
      .map((product) => {
        return ProductCard(product, this.degisiklik);
      })
      .join("");

    
    const KATEGORI_SET = new Set(products.map((product) => product.productCategory));
    mfFilter.innerHTML = Array.from(KATEGORI_SET)
      .sort()
      .map((category) => {
        return filterFn(category);
      })
      .join("");

    mfFilter.innerHTML += `<li class="years" ><a>Tümü</a></li>`;
  }
}

export default UI;