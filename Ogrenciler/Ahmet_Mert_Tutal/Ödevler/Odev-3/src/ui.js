class UI {


  loadAllPostsToUI(posts) {
    posts.forEach(function (post) {
      ui.addPostToUI(post);
    });
  }
  addPostToUI(post) {
    const postList = document.getElementById("post-list");
    postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${post.id}> 
        <div class="card mx-3 w-100 " >
        <img
          src="${post.url}"
          class="card-img-top overflow-hidden"
          alt="..."
          id="post-img"
        />
        <div class="card-body text-white">
          <h5 class="card-title overflow-hidden text-white" id="post-title">${post.title}</h5>
          <div class="author-date text-info">
            <div id="post-author"class="text-white"> ${post.author} </div>
            <div id="post-date" class="text-white"> ${post.date} </div>
          </div>
          <p
            class="text-start mt-3 px-3 py-1"
            id="post-category"
          >
          ${post.category}
          </p>
          <p class="card-text overflow-hidden" id="post-content">
          ${post.content}
          </p>

          <div class="d-flex justify-content-end">
          <div class="d-flex justify-content-start gap-1">
          <a href="#" class="btn btn-sm btn-danger  d-flex justify-content-center align-items-center" id="deletePost"
              >Delete</a
            >
            <a href="#" class="btn btn-sm  btn-success  d-flex justify-content-center align-items-center" id="updatePost"
            >Update</a
          >
          </div>
          </div>
        </div>
      </div>
      </div>
        `;

  }
  clearInputs(element1, element2, element3, element4, element5, element6, element7) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
    element6.value = "";
    element7.value = "";
  }

  deletePostFromUI(e) {
    e.closest(".postCard").remove();
  }

  deleteAllPostFromUI() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";
  }

  updatePostFromUI(post, card) {
    card.innerHTML = `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${post.id}> 
    <div class="card mx-3 w-100 " >
    <img
      src="${post.url}"
      class="card-img-top overflow-hidden"
      alt="..."
      id="post-img"
    />
    <div class="card-body">
      <h5 class="card-title overflow-hidden" id="post-title">${post.title}</h5>
      <div class="author-date text-info">
        <div id="post-author"> ${post.author} </div>
        <div id="post-date"> ${post.date} </div>
      </div>
      <p
        class="mt-3 px-3 py-1 text-start"
        id="post-category"
      >
      ${post.category}
      </p>
      <p class="card-text overflow-hidden" id="post-content">
      ${post.content}
      </p>

      <div class="d-flex justify-content-between">
      <div class="d-flex justify-content-start gap-1">
      <a href="#" class="btn btn-danger rounded-circle d-flex justify-content-center align-items-center" id="deletePost"
          ><i class="fa-solid fa-trash-can"></i></a
        >
        <a href="#" class="btn btn-success rounded-circle d-flex justify-content-center align-items-center" id="updatePost"
        ><i class="fa-solid fa-square-pen"></i></a
      >
      </div>
      </div>
    </div>
  </div>
  </div>
    `;

  };

  searchPostInUI(searchValue) {
    const postList = document.getElementById('post-list');
    const postListItems = postList.querySelectorAll('.card-body');

    postListItems.forEach(function (postListItem) {
      const title = postListItem.querySelector("#post-title").textContent.toLowerCase();
      const author = postListItem.querySelector("#post-author").textContent.toLowerCase();
      if (title.indexOf(searchValue) === -1 && author.indexOf(searchValue) === -1) {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      } else {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : block');
      }
    })

  };


  filterPostInUI(categoryName, filteredPosts) {

    const postList = document.getElementById('post-list');
    const postListItems = postList.querySelectorAll('.card-body');
    postListItems.forEach(function (postListItem) {
      const category = postListItem.children[2].textContent;
      console.log(category.toLowerCase().trim())
      console.log(categoryName.toLowerCase().trim())
      if (category.toLowerCase().trim() == categoryName.toLowerCase().trim()) {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : block');
        // filteredPosts.push(postListItem.parentElement.parentElement);

      } else {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      }
    })

  };
  sortPost(sortedPosts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";

    sortedPosts.forEach(function (post) {
      const id = post.getAttribute('id');
      const url = post.querySelector("#post-img").src;
      const title = post.querySelector("#post-title").textContent;
      const author = post.querySelector("#post-author").textContent;
      const date = post.querySelector("#post-date").textContent;
      const category = post.querySelector("#post-category").textContent;
      const content = post.querySelector("#post-content").textContent;

      postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${id}> 
      <div class="card mx-3 w-100 " >
      <img
        src="${url}"
        class="card-img-top overflow-hidden"
        alt="..."
        id="post-img"
      />
      <div class="card-body text-white">
        <h5 class="card-title overflow-hidden text-white" id="post-title">${title}</h5>
        <div class="author-date text-info">
          <div id="post-author"class="text-white"> ${author} </div>
          <div id="post-date" class="text-white"> ${date} </div>
        </div>
        <p
          class="text-start mt-3 px-3 py-1"
          id="post-category"
        >
        ${category}
        </p>
        <p class="card-text overflow-hidden" id="post-content">
        ${content}
        </p>

        <div class="d-flex justify-content-end">
        <div class="d-flex justify-content-start gap-1">
        <a href="#" class="btn btn-sm btn-danger  d-flex justify-content-center align-items-center" id="deletePost"
            >Delete</a
          >
          <a href="#" class="btn btn-sm  btn-success  d-flex justify-content-center align-items-center" id="updatePost"
          >Update</a
        >
        </div>
        </div>
      </div>
    </div>
    </div>
      `;

    }
    );
  };

  showAlert(message, type) {
    const alert = document.getElementById('alert');
    alert.innerHTML += ` 
    <div class="alert text-center alert-${type}" role="alert">
    ${message}
  </div>
    `;
    setTimeout(function () {
      alert.innerHTML = '';
    }
      , 3000);
  }

}

