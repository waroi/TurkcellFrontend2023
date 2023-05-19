import Request from "./Classes/request.js";
import Blog from "./Classes/blog.js";
import blogCard from "./Constructors/blogCard.js";

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

const url = "http://localhost:3000/blogs";

let currentBlog;

updateDisplay();
handleEventListeners();

function addBooksToUI(blogs) {
  blogRow.innerHTML = "";
  blogRow.innerHTML += blogs.map((blog) => blogCard(blog)).join("");
}

function updateDisplay() {
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
