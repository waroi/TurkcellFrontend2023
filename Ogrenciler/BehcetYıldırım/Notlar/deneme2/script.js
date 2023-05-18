const postList = document.querySelector(".post-list");
const AddPostForm = document.querySelector(".add-post-form");
const authorValue = document.querySelector("#author-value");
const categoryValue = document.querySelector("#category-value");
const postValue = document.querySelector("#post-value");
const thumbnailValue = document.querySelector("#thumbnail-value");
const dateValue = document.querySelector("#date-value");

const url = "http://localhost:3000/posts";
//class Request{
//     constructor(url) {
//         this.url = url;
//       }

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      postList.innerHTML += `
        <div class="card col-md-5 bg-light mt-4 mx-lg-3">
          <div class="card-body" data-id=${post.id}>
          <img src="${post.thumbnail}" class="card-img-top img-fluid rounded" alt="..." />
            <h5 class="card-title my-2">${post.author}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${post.category}</h6>
            <p class="card-text">
              ${post.post}
            </p>
            <h6 class="text-muted card-date">${post.date}</h6>
            <a href="#" class="card-link btn btn-info" id="edit">Edit</a>
            <a href="#" class="card-link btn btn-danger mx-2" id="delete">Delete</a>
          </div>
        </div>
        `;
    });
  });

AddPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      author: authorValue.value,
      category: categoryValue.value,
      post: postValue.value,
      thumbnail: thumbnailValue.value,
      date: dateValue.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  authorValue.value = "";
  categoryValue.value = "";
  postValue.value = "";
  thumbnailValue.value = "";
  dateValue.value = "";
});

postList.addEventListener("click", (e) => {
  e.preventDefault();
  let id = e.target.parentElement.dataset.id;
  if (e.target.id === "delete") {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => location.reload());
  }
  if (e.target.id === "edit") {
    const parent = e.target.parentElement;
    let authorContent = parent.querySelector(".card-title").textContent;
    let categoryContent = parent.querySelector(".card-subtitle").textContent;
    let postContent = parent.querySelector(".card-text").textContent;
    let thumbnailContent = parent.querySelector(".card-img-top").textContent;
    let dateContent = parent.querySelector(".card-date").textContent;

    authorValue.value = authorContent;
    categoryValue.value = categoryContent;
    postValue.value = postContent;
    thumbnailValue.value = thumbnailContent;
    dateValue.value = dateContent;
  }

  document.getElementById("add-post-btn").addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        author: authorValue.value,
        category: categoryValue.value,
        post: postValue.value,
        thumbnail: thumbnailValue.value,
        date: dateValue.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => location.reload());

    // authorValue.value = "";
    // categoryValue.value = "";
    // postValue.value = "";
    // thumbnailValue.value = "";
    // dateValue.value = "";
  });
});

//const request = new Request("http://localhost:3000/posts");

document.querySelector("#filter").addEventListener("keyup", filterPosts);
function filterPosts(e) {
  //console.log(e.target.value);
  const filterValue = e.target.value.toLowerCase();
  let postItems = document.querySelectorAll(".card-subtitle");
  postItems.forEach((postItems) => {
    let text = postItems.textContent.toLowerCase();
    console.log(text.indexOf(filterValue));
    if (text.indexOf(filterValue) === -1) {
      postItems.parentElement.parentElement.setAttribute(
        "style",
        "display:none !important"
      );
    } else {
      postItems.parentElement.parentElement.setAttribute(
        "style",
        "display:block"
      );
    }
  });

  // );
}
