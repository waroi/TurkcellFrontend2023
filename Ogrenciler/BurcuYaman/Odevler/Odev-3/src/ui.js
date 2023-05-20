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
        <div class="card-body">
          <h5 class="card-title overflow-hidden" id="post-title">${post.title}</h5>
          <div class="author-date text-info">
            <div id="post-author"> ${post.author} </div>
            <div id="post-date"> ${post.date} </div>
          </div>
          <p
            class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50 bg-secondary"
            id="post-category"
          >
          ${post.category}
          </p>
          <p class="card-text overflow-hidden" id="post-content">
          ${post.content}
          </p>

          <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-start gap-1">
          <a href="#" class="btn btn-sm btn-danger  d-flex justify-content-center align-items-center" id="deletePost"
              >Delete</a
            >
            <a href="#" class="btn btn-sm  btn-success  d-flex justify-content-center align-items-center" id="updatePost"
            >Update</a
          >
          </div>
          <div class="d-flex justify-content-end">
            <a href="#" class="btn btn-sm btn-outline-primary" id="readMore"
              >Read More</a
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
    e.parentElement.parentElement.parentElement.parentElement.remove();
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
        class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50"
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
      <div class="d-flex justify-content-end">
        <a href="#" class="btn btn-outline-primary" id="readMore"
          >Read More</a
        >
        </div>
      </div>
    </div>
  </div>
  </div>
    `;

  };

  readMorePostFromUI(e) {
    const readMoreModal = new bootstrap.Modal(document.getElementById('readMoreModal'));
    readMoreModal.show();

    const imgUrl = e.parentElement.children[0].src;
    const postTitle = e.children[0].textContent;
    const postAuthor = e.children[1].children[0].textContent;
    const postDate = e.children[1].children[1].textContent;
    const postCategory = e.children[2].textContent;
    const postContent = e.children[3].textContent;



    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
    <div class="modal-header bg-secondary text-light">
    <h1 class="modal-title fs-5" id="readMoreModalLabel"></h1>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body p-5">
    <div class="row" id="postContentInModal">
     
        <img
          src="${imgUrl}"
          class="w-50 m-auto"
          alt=""
        />
    
      <div class="row" id="postInfo">
        <h2 id="postTitleInModal" class="fw-bold mt-4">${postTitle}</h2>
        <div class="div d-flex gap-4 text-info">
          <p id="postAuthorInModal">${postAuthor}</p>
          <p id="postDateInModal">${postDate}</p>
        </div>
        <p
          id="postCategoryInModal"
          class="border border-primary mt-3 ms-2 px-3 py-1 rounded-end-4 w-25 bg-secondary"
        >${postCategory}</p>
        <p id="postContentInModal"> ${postContent}</p>
      </div>
    </div>
  </div>

    `;


  }
  searchPostInUI(searchValue) {
    const postList = document.getElementById('post-list');
    const postListItems = postList.querySelectorAll('.card-body');

    postListItems.forEach(function (postListItem) {
      const title = postListItem.children[0].textContent.toLowerCase();
      const author = postListItem.children[1].textContent.toLowerCase();
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

    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `
    <li class="breadcrumb-item">
    <a href="./index.html" id="goHome">Home</a>
  </li>
<li class="breadcrumb-item active" aria-current="page">${categoryName}</li>
`;

    postListItems.forEach(function (postListItem) {
      const category = postListItem.children[2].textContent.toLowerCase();
      if (category.indexOf(categoryName) !== -1) {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : block');
        filteredPosts.push(postListItem.parentElement.parentElement);

      } else {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      }
    })

  };
  sortPost(sortedPosts) {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";
    // console.log(sortedPosts);

    sortedPosts.forEach(function (post) {
      console.log(post);
      const id = post.getAttribute('id');
      const url = post.children[0].children[0].src;
      const title = post.children[0].children[1].children[0].textContent;
      const author = post.children[0].children[1].children[1].children[0].textContent;
      const date = post.children[0].children[1].children[1].children[1].textContent;
      const category = post.children[0].children[1].children[2].textContent;
      const content = post.children[0].children[1].children[3].textContent;

      postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${id}> 
      <div class="card mx-3 w-100 " >
      <img
        src="${url}"
        class="card-img-top overflow-hidden"
        alt="..."
        id="post-img"
      />
      <div class="card-body">
        <h5 class="card-title overflow-hidden" id="post-title">${title}</h5>
        <div class="author-date text-info">
          <div id="post-author"> ${author} </div>
          <div id="post-date"> ${date} </div>
        </div>
        <p
          class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50"
          id="post-category"
        >
        ${category}
        </p>
        <p class="card-text overflow-hidden" id="post-content">
        ${content}
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
        <div class="d-flex justify-content-end">
          <a href="#" class="btn btn-outline-primary" id="readMore"
            >Read More</a
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

