const search = document.getElementsByClassName("search-div");
const hiddenBtn = document.getElementsByClassName("search-button");
const searchİnput = document.getElementsByClassName("search-input");

const authorList = document.getElementById("authorList");
const blogList = document.getElementById("blogList");

const addButton = document.getElementById("addBlog");

const blogName = document.getElementById("blogName");
const blogWriter = document.getElementById("blogWriter");
const blogAuthorPicture = document.getElementById("blogAuthorPicture");
const blogDate = document.getElementById("blogDate");
const blogHour = document.getElementById("blogHour");
const blogCategory = document.getElementById("blogCategory");
const blogUrl = document.getElementById("blogUrl");
const blogType = document.getElementById("blogType");

const updateButton = document.getElementById("updateBlog");

const blogNameUpdate = document.getElementById("blogNameUpdate");
const blogWriterUpdate = document.getElementById("blogWriterUpdate");
const blogAuthorPictureUpdate = document.getElementById(
  "blogAuthorPictureUpdate"
);
const blogDateUpdate = document.getElementById("blogDateUpdate");
const blogHourUpdate = document.getElementById("blogHourUpdate");
const blogCategoryUpdate = document.getElementById("blogCategoryUpdate");
const blogUrlUpdate = document.getElementById("blogUrlUpdate");
const blogTypeUpdate = document.getElementById("blogTypeUpdate");

addButton.addEventListener("click", addBlog);

Request.getAuthors()
  .then((response) => UI.showAuthors(response))
  .catch((err) => alert(err));

Request.getBlogs()
  .then((response) => UI.showBlogs(response))
  .catch((err) => alert(err));

function addBlog() {
  let id = Date.now();

  Request.postBlogsAndAuthors("http://localhost:3000/authors", {
    id: id,
    author: blogWriter.value,
    authorPicture: blogAuthorPicture.value,
  });

  Request.postBlogsAndAuthors("http://localhost:3000/blogs", {
    id: id,
    title: blogName.value,
    body: blogType.value,
    author: blogWriter.value,
    date: blogDate.value,
    hour: blogHour.value,
    category: blogCategory.value,
    url: blogUrl.value,
    authorPicture: blogAuthorPicture.value,
  });
}

hiddenBtn[0].addEventListener("click", () => {
  console.log(search[0]);
  if (search[0].className == "col-2 search-div") {
    search[0].classList.add("active");
  } else {
    search[0].classList.remove("active");
  }
  searchİnput[0].focus();
});
