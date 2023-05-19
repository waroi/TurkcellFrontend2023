import Request from "./Classes/request.js";
import Blog from "./Classes/blog.js";
import blogCard from "./Constructors/blogCard.js";
import createOption from "./Constructors/option.js";

const blogRow = document.querySelector("#blog-row");
const blogBody = document.querySelector("#blog-body");
const blogHeading = document.querySelector("#blog-heading");
const blogAuthorInp = document.querySelector("#blog-author");
const blogTitleInp = document.querySelector("#blog-title");
const blogTextInp = document.querySelector("#blog-text");
const blogImgInp = document.querySelector("#blog-image");
const blogCatInp = document.querySelector("#blog-category");
const submitEditBtn = document.querySelector("#edit-btn");
const addBtn = document.querySelector("#add-btn");
const blogForm = document.querySelector("#blog-form");
const categorySelect = document.querySelector("#category-select");

const url = "http://localhost:3000/blogs";

let currentBlog;
let currentBlogs = [];

// Request.get(url)
//   .then((data) => (currentBlogs = [...data]))
//   .then((a) => console.log(currentBlogs))
//   .catch((err) => console.log(err));

// setTimeout(() => {
//   console.log(currentBlogs);
// }, 3000);

// console.log(currentBlogs);
updateDisplay();
makeUniques();
handleEventListeners();

function addBooksToUI(blogs) {
  console.log("I am in addBooksToUI");
  blogRow.innerHTML = "";
  blogRow.innerHTML += blogs.map((blog) => blogCard(blog)).join("");
  // blogRow.innerHTML += blogs
  //   .filter((blog) => blog.isVisible)
  //   .map((blog) => blogCard(blog))
  //   .join("");
}

function updateDisplay() {
  console.log("I am in updateDisplay");
  Request.get(url)
    .then((data) => addBooksToUI(data))
    .catch((err) => console.log(err));
}

function handleEventListeners() {
  blogRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("see-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      console.log(blogCard.id);
      Request.get(url)
        .then((data) => {
          const blog = data.find((item) => item.id == blogCard.id);
          blogBody.textContent = blog.text;
          blogHeading.textContent = `In ${blog.title}, ${blog.author} says...`;
        })
        .catch((err) => console.log(err));
    } else if (e.target.classList.contains("edit-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      console.log("do edit", blogCard.id);
      Request.get(`${url}/${blogCard.id}`)
        .then((data) => {
          blogAuthorInp.value = data.author;
          blogTitleInp.value = data.title;
          blogTextInp.value = data.text;
          blogImgInp.value = data.image;
          blogCatInp.value = data.category;
          currentBlog = data;
          submitEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
            submitEdit(currentBlog);
            updateDisplay();
          });
        })
        .catch((err) => console.log(err));
    } else if (e.target.classList.contains("delete-blog")) {
      const blogCard = e.target.closest(".col-lg-6");
      console.log("do delete", blogCard.id);
      Request.delete(url, blogCard.id)
        .then((response) => {
          console.log("Response:", response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      updateDisplay();
    }
  });
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const today = new Date();
    const postData = new Blog(
      blogAuthorInp.value,
      blogTitleInp.value,
      blogTextInp.value,
      blogCatInp.value,
      today.getDate(),
      today.getHours(),
      blogImgInp.value
    );
    Request.post(url, postData)
      .then((response) => {
        console.log(response);
        blogForm.reset();
      })
      .catch((error) => {
        console.error(error);
      });
    updateDisplay();
  });
  categorySelect.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      updateDisplay();
    } else filterByCategory(e.target.value);
    console.log("I am in event listener");
  });
}

function submitEdit(blog) {
  const editedPostData = {
    author: blogAuthorInp.value,
    title: blogTitleInp.value,
    text: blogTextInp.value,
    category: blogCatInp.value,
    releaseDate: blog.releaseDate,
    releaseTime: blog.releaseTime,
    image: blogImgInp.value,
    isVisible: blog.isVisible,
    id: blog.id,
  };
  Request.put(url, editedPostData, blog.id)
    .then((response) => {
      console.log("Response:", response);
      blogForm.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function uniqueCategories(blogs) {
  const categoriesSet = new Set(
    blogs.map((blog) => blog.category.toUpperCase())
  );
  categorySelect.innerHTML = "";
  categorySelect.innerHTML += `<option value="">All</option>`;
  categorySelect.innerHTML += Array.from(categoriesSet)
    .map((category) => {
      return createOption(category);
    })
    .join("");
}

function makeUniques() {
  Request.get(url)
    .then((data) => uniqueCategories(data))
    .catch((err) => console.log(err));
}

function filterByCategory(selectedCategory) {
  console.log("I am in filterByCategory");
  Request.get(url).then((data) => {
    data.map((blog) => {
      const blogCard = document.getElementById(`${blog.id}`);
      if (blog.category.toLowerCase() != selectedCategory.toLowerCase()) {
        blogCard.classList.add("d-none");
        console.log(blogCard);
      } else {
        // document.getElementById(`${blog.id}`).style.display = "unset";
        blogCard.classList.remove("d-none");
      }
    });
  });
}
