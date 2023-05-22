import BlogCard from "../components/BlogCard.js";
import filterFn from "../components/filterComponent.js";
class UI {
  constructor(degisiklik, filterTur, degistirmekIcinTiklananBlog) {
    this.degisiklik = degisiklik;
    this.filterTur = filterTur;
    this.degistirmekIcinTiklananBlog = degistirmekIcinTiklananBlog;
  }

  formSifirla() {
    blogForm.reset();
  }

  blogToggle() {
    this.degisiklik = !this.degisiklik;
  }

  screen(bloglar) {
    shared.innerHTML = bloglar
      .filter((blog) => {
        if (this.filterTur == "Tümü") return true;
        return this.filterTur ? blog.category == this.filterTur : true;
      })
      .filter((blog) => {
        
        return (
          blog.title.toLowerCase().includes(search.value.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.value.toLowerCase())
        );
      })
      .map((blog) => {
        return BlogCard(blog, this.degisiklik);
      })
      .join("");

    
    const KATEGORI_SET = new Set(bloglar.map((blog) => blog.category));
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