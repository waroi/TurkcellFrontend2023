const search = document.getElementsByClassName("search-div");
const hiddenBtn = document.getElementsByClassName("search-button");
const searchİnput = document.getElementsByClassName("search-input");

const authorList = document.getElementById("authorList");
const blogList = document.getElementById("blogsList");

UI.showBlogs();
UI.showAuthors();

hiddenBtn[0].addEventListener("click", () => {
  console.log(search[0]);
  if (search[0].className == "col-2 search-div") {
    search[0].classList.add("active");
  } else {
    search[0].classList.remove("active");
  }
  searchİnput[0].focus();
});
