const search = document.getElementsByClassName("search-div");
const hiddenBtn = document.getElementsByClassName("search-button");
const searchİnput = document.getElementsByClassName("search-input");

const authorList = document.getElementById("authorList");
const blogList = document.getElementById("blogList");

const addButton = document.getElementById("addButton");

const blogName = document.getElementById("blogName");
const blogWriter = document.getElementById("blogWriter");
const blogAuthorPicture = document.getElementById("blogAuthorPicture");
const blogDate = document.getElementById("blogDate");
const blogCategory = document.getElementById("blogCategory");
const blogUrl = document.getElementById("blogUrl");
const blogType = document.getElementById("blogType");

// Request.getAuthors()
//   .then((response) => UI.showAuthors(response))
//   .catch((err) => alert(err));

// Request.getBlogs()
//   .then((response) => UI.showBlogs(response))
//   .catch((err) => alert(err));

addButton.addEventListener("click", addBlog);

function addBlog() {
  let blog = [];
  let id = Date.now();
  let newBlog = new Blog(
    id,
    blogName.value,
    blogType.value,
    blogWriter.value,
    blogDate.value,
    blogCategory.value,
    blogUrl.value,
    blogAuthorPicture.value
  );
}

// UI.showBlogs();
// UI.showAuthors();

hiddenBtn[0].addEventListener("click", () => {
  console.log(search[0]);
  if (search[0].className == "col-2 search-div") {
    search[0].classList.add("active");
  } else {
    search[0].classList.remove("active");
  }
  searchİnput[0].focus();
});
