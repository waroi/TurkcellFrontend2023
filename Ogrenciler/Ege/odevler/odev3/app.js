import Request from "./Classes/request.js";
import Blog from "./Classes/blog.js";
import blogCard from "./Constructors/blogCard.js";

const blogRow = document.querySelector("#blog-row");

const url = "http://localhost:3000/blogs";

Request.get("http://localhost:3000/blogs")
  .then((data) => updateDisplay(data))
  .catch((err) => console.log(err));

function updateDisplay(blogs) {
  blogRow.innerHTML = "";

  blogRow.innerHTML += blogs.map((blog) => blogCard(blog));
}
