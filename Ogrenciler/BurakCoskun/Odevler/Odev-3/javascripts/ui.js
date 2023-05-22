class UI {
  addPostToUI() {
    request
      .get()
      .then((posts) => {
        posts.map((post) => {
          blogList.innerHTML += `
          <div class="col-lg-3 col-md-6">
          <div class="card mb-4 bg-transparent border-0" data-id="${post.id}">
            <div class="card-image">
            <img
              src="${post.image}"
              class="card-img-top"
              alt="..."
              height="300"
            />
            <div class="card-overlay">
              <div class="card-overlay-content">
                <button onClick="post.deletePost(${post.id})" type="button" class="btn btn-danger">
                  <i onClick="post.deletePost(${post.id})" class="fas fa-trash-alt"></i>
                </button>
                <button onClick="post.editPost(${post.id})" type="button" data-bs-toggle="modal" data-bs-target="#create-modal" class="btn btn-warning ">
                  <i onClick="post.editPost(${post.id})" data-bs-toggle="modal" data-bs-target="#create-modal" class="fas fa-edit"></i>
                </button>
                <button onClick="ui.popUpPost(${post.id})" type="button" data-bs-toggle="modal" data-bs-target="#detail-modal" class="btn btn-primary">
                  <i onClick="ui.popUpPost(${post.id})" data-bs-toggle="modal" data-bs-target="#detail-modal" class="fas fa-info-circle"></i>
                </button>
            </div>
            </div>
            </div>
            <div class="card-body text-white">
             <a href="#" onClick="ui.popUpPost(${post.id})"  data-bs-toggle="modal" data-bs-target="#detail-modal" class="d-block card-title fw-bold text-decoration-none">${post.title}</a>
              <p class="d-none">${post.content}</p>
              <p class="author m-0">${post.author}</p>
              <p class="date">${post.date}</p>
              <p class="d-none category">Category: ${post.category}</p>
            </div>
        `;
        });
        ui.filterCategories(posts);
      })
      .catch((err) => console.log(err));
  }
  clearInputs() {
    titleInput.value = "";
    contentInput.value = "";
    authorInput.value = "";
    categoryInput.value = "";
    imageInput.value = "";
  }
  fillInputs(id) {
    request
      .get()
      .then((posts) => {
        posts.map((post) => {
          if (post.id == id) {
            titleInput.value = post.title;
            contentInput.value = post.content;
            authorInput.value = post.author;
            categoryInput.value = post.category;
            imageInput.value = post.image;
          }
        });
      })
      .catch((err) => console.log(err));
  }
  filterCategories(posts) {
    categoryList.innerHTML = "";
    const categories = posts.map((post) => post.category);
    const uniqueCategories = Array.from(new Set(categories));
    categoryList.innerHTML += `
    <li
                  class="list-group-item d-flex justify-content-between align-items-center active"
                >
                  All
                  <span class="badge rounded-pill">${posts.length}</span>
                </li>
    `;
    uniqueCategories.forEach((category) => {
      let count = 0;
      posts.forEach((post) => {
        if (post.category == category) {
          count++;
        }
      });
      categoryList.innerHTML += `<li
      class="list-group-item d-flex justify-content-between align-items-center"
                >${category}
                  <span class="badge rounded-pill">${count}</span>
                </li>
      `;
    });
  }
  filterAndSearchPosts() {
    const posts = document.querySelectorAll(".card");
    const activeItem = categoryList.querySelector(".list-group-item.active");
    const activeCategories = activeItem
      ? activeItem.childNodes[0].textContent.trim()
      : "All";
    const filterValue = searchInput.value.toLowerCase();

    posts.forEach((post) => {
      const postCategory = post
        .querySelector(".category")
        .textContent.split("Category:")[1]
        .trim();
      const postTitle = post
        .querySelector(".card-title")
        .textContent.toLowerCase();

      if (activeCategories === "All" || activeCategories === postCategory) {
        if (postTitle.includes(filterValue)) {
          post.parentElement.style.display = "block";
        } else {
          post.parentElement.style.display = "none";
        }
      } else {
        post.parentElement.style.display = "none";
      }
    });
  }
  sortPosts() {
    const posts = Array.from(document.querySelectorAll(".card"));
    const sortValue = sortSelect.value;

    const sortedPosts = posts.sort((a, b) => {
      const aId = a.getAttribute("data-id");
      const bId = b.getAttribute("data-id");
      const aDate = parseDate(a.querySelector(".date").textContent.trim());
      const bDate = parseDate(b.querySelector(".date").textContent.trim());
      if (sortValue === "titleAZ") {
        return a
          .querySelector(".card-title")
          .textContent.localeCompare(
            b.querySelector(".card-title").textContent
          );
      } else if (sortValue === "titleZA") {
        return b
          .querySelector(".card-title")
          .textContent.localeCompare(
            a.querySelector(".card-title").textContent
          );
      } else if (sortValue === "authorAZ") {
        return a
          .querySelector(".author")
          .textContent.localeCompare(b.querySelector(".author").textContent);
      } else if (sortValue === "authorZA") {
        return b
          .querySelector(".author")
          .textContent.localeCompare(a.querySelector(".author").textContent);
      } else if (sortValue === "newest") {
        return bDate - aDate;
      } else if (sortValue === "oldest") {
        return aDate - bDate;
      } else {
        return aId - bId;
      }
    });

    blogList.innerHTML = "";
    sortedPosts.forEach((post) => {
      const div = document.createElement("div");
      if (post.parentElement.style.display == "none") {
        div.style.display = "none";
      }
      div.className = "col-lg-3 col-md-6";
      div.appendChild(post);
      blogList.appendChild(div);
    });
  }
  popUpPost(id) {
    request
      .get()
      .then((posts) => {
        posts.map((post) => {
          if (post.id == id) {
            document.querySelector(
              "#detail-title"
            ).textContent = `${post.title}`;
            const lines = post.content.split("\n");
            const formattedContent = lines.join("<br>");
            document.querySelector("#detail-content").innerHTML =
              formattedContent;
            document.querySelector(
              "#detail-author"
            ).textContent = `Author: ${post.author}`;
            document.querySelector(
              "#detail-date"
            ).textContent = `Date: ${post.date}`;
            document.querySelector(
              "#detail-category"
            ).textContent = `Category: ${post.category}`;
            document.querySelector("#detail-image").src = `${post.image}`;
            deleteBtn.setAttribute("onclick", `deletePost(${post.id})`);
            editBtn.setAttribute("onclick", `editPost(${post.id})`);
          }
        });
      })
      .catch((err) => console.log(err));
  }
  clearAllPosts() {
    blogList.innerHTML = "";
    request
      .clearAll()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  showAlert(type, message) {
    const alertContainer = document.querySelector(".alert-container");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alertContainer.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}
