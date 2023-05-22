const submitButton = document.querySelector("#add-book");
const postTitle = document.getElementById("postTitle");
const postAuthor = document.getElementById("postAuthor");
const postContent = document.getElementById("postContent");
const postUrl = document.getElementById("postUrl");
const postCategory = document.getElementById("postCategory");
const postsArea = document.querySelector(".postCollection");
const addPostButton = document.getElementById("addPostButton");
const editBookButton = document.getElementById("edit-book");
const filterButton = document.getElementById("filterButton");
const filterForm = document.getElementById("filterForm");
const sortForm = document.getElementById("sortForm");
const searchForm = document.getElementById("searchForm");

var date = "2014-01-02T00:00:00.000Z";
date = date.substring(0, 10).split("-");
date = date[1] + "-" + date[2] + "-" + date[0];
console.log(date);

// console.log(cardItem);
// postsArea.children.forEach((card) => {
//   console.log(card);
// });

const data = new Data("http://localhost:3000/posts");

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", getData);
  submitButton.addEventListener("click", addPost);
  postsArea.addEventListener("click", deletePost);
  filterForm.addEventListener("submit", filterPosts);
  sortForm.addEventListener("submit", sortPosts);
  searchForm.addEventListener("submit", searchOnPosts);
}
function addPost(e) {
  const title = postTitle.value;
  const author = postAuthor.value;
  const content = postContent.value;
  const url = postUrl.value;
  const category = postCategory.value;

  const newPost = new Post(title, author, content, category, url);
  if (
    title === "" ||
    author === "" ||
    content === "" ||
    url === "" ||
    category === ""
  ) {
    UI.displayMessage("Please fill all inputs that given !", "danger");
  } else {
    data
      .addData(newPost)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  e.preventDefault();
}
function getData() {
  data
    .getPost()
    .then((resp) => {
      resp.forEach((post) => {
        console.log("asd");
        UI.createPostCard(post);
      });
    })
    .catch((err) => console.log(err));
}
function deletePost(e) {
  if (e.target.classList.contains("post-delete")) {
    data.deleteData(e.target.parentElement.parentElement.parentElement.id);
  } else if (e.target.classList.contains("post-edit")) {
    addPostButton.click();
    submitButton.style.display = "none";
    editBookButton.style.display = "block";
    let postId = e.target.parentElement.parentElement.parentElement.id;
    console.log(postId);
    let curPost = data.getPost().then((response) => {
      response.map((post) => {
        let curPost = response.find((data) => data.id === Number(postId));
        postTitle.value = curPost.title;
        postAuthor.value = curPost.author;
        postContent.value = curPost.content;
        postUrl.value = curPost.url;
        postCategory.value = curPost.category;
        editBookButton.addEventListener("click", function (e) {
          console.log(postTitle.value);
          const editPost = new Post(
            postTitle.value,
            postAuthor.value,
            postContent.value,
            postCategory.value,
            postUrl.value
          );
          data.editData(postId, editPost);
          e.preventDefault();
        });
      });
    });

    // data.editPost(postId);
  }
  if (e.target.parentElement.parentElement.classList.contains("cardItem")) {
    let detailTitle = document.querySelector(".detailTitle");
    let detailBody = document.querySelector(".detailBody");
    let detailImage = document.querySelector(".detailImage");
    let detailContent = document.querySelector(".detailContent");
    let detailAuthor = document.querySelector(".detailAuthor");
    let detailDate = document.querySelector(".detailDate");
    let detailCategory = document.querySelector(".detailCategory");

    console.log(detailTitle);

    let dataE = data.getPost().then((res) => {
      res.forEach((data) => {
        console.log(data.id);
        let curData = res.find(
          (data) => data.id === Number(e.target.parentElement.parentElement.id)
        );
        const options = {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        const formattedDate = new Date(curData.date).toLocaleDateString(
          "en-US",
          options
        );
        detailImage.attributes.src.textContent = curData.url;
        detailTitle.textContent = curData.title.toUpperCase();
        detailAuthor.textContent = curData.author;
        detailContent.textContent = curData.content;
        detailDate.textContent = formattedDate;
        detailCategory.textContent = curData.category;

        console.log(fo);

        console.log(formattedDate);

        // // strong.classList.add("ps-3");

        // console.log(strong);
      });
    });
    // console.log(dataE);

    // console.log(e.target.parentElement.parentElement.id);
  }
}
function filterPosts(e) {
  const selectElement = this.elements["filterCategory"];
  const selectedOption =
    selectElement.options[selectElement.selectedIndex].value;
  UI.filterPosts(selectedOption);

  e.preventDefault();
}
function sortPosts(e) {
  const selectFilterElement = filterForm.elements["filterCategory"];
  const selectedOption =
    selectFilterElement.options[selectFilterElement.selectedIndex].value;

  const selectElement = this.elements["sortShape"];
  const selectElement2 = this.elements["sortCategory"];
  const sortShape = selectElement.options[selectElement.selectedIndex].value;
  const sortCategory =
    selectElement2.options[selectElement2.selectedIndex].value;

  console.log(sortCategory);
  UI.sortPosts(sortShape, sortCategory);

  UI.filterPosts(selectedOption);

  e.preventDefault();
}
function searchOnPosts(e) {
  const selectElement = document.getElementById["filterCategory"];

  let searchInputValue = document.getElementById("searchInput").value;
  UI.searchOnPosts(searchInputValue);

  e.preventDefault();
}
