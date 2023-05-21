const blogList = document.getElementById("blogList");
let search = document.getElementById("search");
const title = document.getElementById("blogName");
const author = document.getElementById("authorName");
const category = document.getElementById("category");
const preview = document.getElementById("preview");
const photo = document.getElementById("blogImgUrl");
const blogText = document.getElementById("blog");

const addBtn = document.getElementById("saveBlog");
const categories = document.getElementById("selectCategory");

const request = new Request("http://localhost:3000/blogs");
const ui = new UI();

eventListeners();
defaultBlogs();

function eventListeners() {
  addBtn.addEventListener("click", addBlog);
  blogList.addEventListener("click", deleteBlog);
  blogList.addEventListener("click", editBlog);
  search.addEventListener("keyup", searchBlog);
  categories.addEventListener("click", filterCategory);
}
//!
function defaultBlogs() {
  request
    .get()
    .then((blogs) => {
      ui.getAllBlogsFromDB(blogs);
    })
    .catch((err) => {
      console.log(err);
    });
}

//! Blog Ekleme
function addBlog(e) {
  const blogTitle = title.value.trim();
  const blogAuthor = author.value.trim();
  const BlogCategory = category.value;
  const blogPreview = preview.value.trim();
  const blogImg = photo.value.trim();
  const blogBody = blogText.value.trim();
  const time = Date();

  if (
    blogTitle === "" ||
    blogAuthor === "" ||
    BlogCategory === "" ||
    blogPreview === "" ||
    blogImg === "" ||
    blogBody === ""
  ) {
    alert("Lütfen Tüm Alanları Doldurun");
  } else {
    request
      .post({
        image: blogImg,
        title: blogTitle,
        body: blogBody,
        author: blogAuthor,
        preview: blogPreview,
        category: BlogCategory,
        date: time,
      })
      .then((blog) => {
        ui.addBlog(blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  title.value = "";
  author.value = "";
  category.value = "";
  photo.value = "";
  preview.value = "";
  blogText.value = "";

  e.preventDefault();
}

//! Blog Silme
function deleteBlog(e) {
  if (e.target.id === "deleteBlog") {
    const id =
      e.target.parentElement.parentElement.firstElementChild.textContent;
    request
      .delete(id)
      .then(() => {
        ui.deleteBlog(
          e.target.parentElement.parentElement.parentElement.parentElement
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
//! Blod Edit
function editBlog(e) {
  if (e.target.id === "editBlog") {
    let form = document.getElementById("editForm");
    let title = document.getElementById("editTitle");
    let name = document.getElementById("editAuthor");
    let category = document.getElementById("editCategory");
    let img = document.getElementById("editImage");
    let preview = document.getElementById("editPreview");
    let blogText = document.getElementById("editBlogText");

    let card = e.target.parentElement.parentElement;
    let id = e.target.parentElement.parentElement.firstElementChild.textContent;
    let time = Date();

    request
      .get()
      .then((blogs) => {
        blogs.forEach(function (blog) {
          if (blog.id == id) {
            img.value = blog.image;
            title.value = blog.title;
            blogText.value = blog.body;
            name.value = blog.author;
            category.value = blog.category;
            preview.value = blog.preview;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    form.addEventListener("submit", function (e) {
      request
        .put(id, {
          title: title.value,
          author: name.value,
          image: img.value,
          category: category.value,
          preview: preview.value,
          body: blogText.value,
          date: time,
        })
        .then((blogs) => {
          ui.editBlog(blogs, card);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
//! Blog Arama
function searchBlog(e) {
  const text = e.target.value.toLowerCase();
  const title = document.querySelectorAll(".card-title");
  const author = document.querySelectorAll(".card-author");
  ui.searchBlog(text, title, author);
}

//! Kategori Ekleme
async function createFilters() {
  let allArticle = await request.get();
  let categories = new Set(allArticle.map((article) => article.category));
  Array.from(categories).forEach((category) => {
    const deneme = document.getElementById("selectCategory");
    deneme.innerHTML += `
    <button
          id="${category}"
          type="button"
          class="btn col-md-2 col-5 bg-secondary text-center text-white border-0 rounded-5 mt-2 me-2 p-1"
        >
        ${category}
        </button>`;
  });
}
createFilters();

function filterCategory(e) {
  const blogCategories = document.querySelectorAll(".card-category");
  const selectedCategory = e.target.innerText;
  ui.filterBlogCategory(selectedCategory, blogCategories);
}
