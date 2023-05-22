const cards = document.getElementById("card-area");
let filter = document.getElementById("filter");
const categories = document.getElementById("categoryFilter");
const form = document.getElementById("blog-form");
const title = document.getElementById("blogName");
const writer = document.getElementById("writerName");
const category = document.getElementById("category");
const preview = document.getElementById("preview");
const photo = document.getElementById("img");
const blogText = document.getElementById("blog");

const request = new Request("http://localhost:3000/blogs");
const ui = new UI();

eventListeners();
defaultBlogs();

function eventListeners() {
  form.addEventListener("submit", addBlog);
  cards.addEventListener("click", deleteBlog);
  cards.addEventListener("click", editBlog);
  filter.addEventListener("keyup", filterBlog);
  categories.addEventListener("click", filterCategory);
  blogName.addEventListener("keyup", console.log(blogName.value));
}

function defaultBlogs() {
  request
    .get()
    .then((blogs) => {ui.addAllBlogs(blogs);})
    .catch((err) => {console.log(err);});
}

function addBlog(e) {
  const blogTitle = title.value.trim();
  const blogWriter = writer.value.trim();
  const BlogCategory = category.value;
  const blogPreview = preview.value.trim();
  const blogImg = photo.value.trim();
  const blogBody = blogText.value.trim();
  const time = Date();
  if (blogTitle === "" ||blogWriter === "" ||BlogCategory === ""||blogPreview === "" ||blogImg === "" ||blogBody === ""
  ) {
    alert("Lütfen Tüm Alanları Doldurun");
  } else {
    request
      .post({
        image: blogImg,
        title: blogTitle,
        body: blogBody,
        author: blogWriter,
        preview: blogPreview,
        category: BlogCategory,
        date: time,
      })
      .then((blog) => {ui.addBlog(blog);})
      .catch((err) => {console.log(err);});
  }
  title.value = "";
  writer.value = "";
  category.value = "default";
  photo.value = "";
  preview.value= "";
  blogText.value = "";
  e.preventDefault();
}

function deleteBlog(e) {
  if (e.target.id === "deleteBlog") {
    const id =e.target.parentElement.parentElement.firstElementChild.textContent;
    request
      .delete(id)
      .then((message) => {ui.deleteBlog(e.target.parentElement.parentElement.parentElement.parentElement);})
      .catch((err) => {console.log(err);});
  }
}

function editBlog(e) {
  if (e.target.id === "editBlog") {
    let form = document.getElementById("edit-form");
    let title = document.getElementById("edit-title");
    let name = document.getElementById("edit-author");
    let category = document.getElementById("edit-category");
    let img = document.getElementById("edit-image");
    let blogText = document.getElementById("edit-blog-text");
    let preview = document.getElementById("edit-preview-text");
    console.log(e.target.parentElement.parentElement)
    let card = e.target.parentElement.parentElement;
    let id =e.target.parentElement.parentElement.firstElementChild.textContent;
    let time = Date();

    request
      .get()
      .then((blogs) => {blogs.forEach(function (blog) {
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
      .catch((err) => {console.log(err);});

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
        .then((blogs) => {ui.editBlog(blogs, card);})
        .catch((err) => {console.log(err);});
    });
  }
}
function filterBlog(e) {
  const text = e.target.value.toLowerCase();
  const title = document.querySelectorAll(".card-title");
  ui.filterBlog(text, title);
}
function filterCategory(e) {
  console.log(e.target.innerText)
  const filterCategory = document.querySelectorAll(".card-category");
  const category = e.target.innerText;
  ui.filterBlogCategory(category, filterCategory);
}
