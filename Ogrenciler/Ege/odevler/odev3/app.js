import Request from "./Classes/request.js";
import Blog from "./Classes/blog.js";
import blogCard from "./Constructors/blogCard.js";

const blogRow = document.querySelector("#blog-row");
const blogBody = document.querySelector("#blog-body");

const url = "http://localhost:3000/blogs";
let blogs = [];

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
    if (e.target.id === "see-blog") {
      const blogCard = e.target.closest(".col-lg-6");
      console.log(blogCard.id);
      Request.get(url)
        .then(
          (data) =>
            (blogBody.textContent = data.find(
              (item) => item.id == blogCard.id
            ).text)
        )
        .catch((err) => console.log(err));
    }
  });
}
