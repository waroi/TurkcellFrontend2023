class UI {
  loadAllPostsToUI(posts) {
    posts.forEach(function (post) {
      ui.addPostToUI(post);
    });
  }
  addPostToUI(post) {
    const postList = document.getElementById("post-list");
    postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center" id=${post.id}> 
        <div class="card mx-3 w-100" >
        <img
          src="${post.url}"
          class="card-img-top"
          alt="..."
          id="post-img"
        />
        <div class="card-body">
          <h5 class="card-title" id="post-title">${post.title}</h5>
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
          <p class="card-text" id="post-content">
          ${post.content}
          </p>

          <div class="d-flex justify-content-between">
          <a href="#" class="btn btn-primary" id="deletePost"
              >Delete</a
            >
            <a href="#" class="btn btn-primary" id="updatePost"
            >Update</a
          >
            <a href="#" class="btn btn-primary" id="readMore"
              >Read More</a
            >
            
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
    card.innerHTML = `<div class="col-md-6 mt-4 d-flex justify-content-center" id=${post.id}> 
        <div class="card mx-3 w-100" >
        <img
          src="${post.url}"
          class="card-img-top"
          alt="..."
          id="post-img"
        />
        <div class="card-body">
          <h5 class="card-title" id="post-title">${post.title}</h5>
          <div class="author-date text-info">
            <div id="post-author"> ${post.author} </div>
            <div id="post-date"> ${post.date} </div>
          </div>
          <p
            class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-25"
            id="post-category"
          >
          ${post.category}
          </p>
          <p class="card-text" id="post-content">
          ${post.content}
          </p>

          <div class="d-flex justify-content-between">
          <a href="#" class="btn btn-primary" id="deletePost"
              >Delete</a
            >
            <a href="#" class="btn btn-primary" id="updatePost"
            >Update</a
          >
            <a href="#" class="btn btn-primary" id="readMore"
              >Read More</a
            >
            
          </div>
        </div>
      </div>
      </div>
        `;


    // let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
    // updateModal.show();
    // console.log(e.parentElement.parentElement.children[1].children[1].textContent);

    // document.getElementById('updateTitle').value = e.parentElement.parentElement.children[0].textContent;
    // document.getElementById('updateAuthor').value = e.parentElement.parentElement.children[1].children[0].textContent;
    // document.getElementById('updateCategory').value = e.parentElement.parentElement.children[2].textContent;
    // document.getElementById('updateContent').value = e.parentElement.parentElement.children[3].textContent;
    // document.getElementById('updateUrl').value = e.parentElement.parentElement.parentElement.children[0].src;
    // document.getElementById('updateDate').value = e.parentElement.parentElement.children[1].children[1].textContent;

    // const updateButton = document.getElementById('updateButton');
    // updateButton.addEventListener('click', function () {
    //   const newPost = new Book();
    //   newBook.name = document.getElementById('editbooknameinput').value;
    //   newBook.author = document.getElementById('editbookauthorinput').value;
    //   newBook.category = document.getElementById('editbookcategoryinput').value;
    //   newBook.date = document.getElementById('editdatepublicationinput').value;
    //   newBook.url = document.getElementById('editurlinput').value;

    //   element.target.parentElement.parentElement.children[0].textContent = document.getElementById('editbooknameinput').value;
    //   element.target.parentElement.parentElement.children[1].textContent = document.getElementById('editbookauthorinput').value;
    //   element.target.parentElement.parentElement.children[2].textContent = document.getElementById('editbookcategoryinput').value;
    //   element.target.parentElement.parentElement.children[3].textContent = document.getElementById('editdatepublicationinput').value;
    //   element.target.parentElement.parentElement.parentElement.children[0].src = document.getElementById('editurlinput').value;
    //   editingModal.hide();


  };

  readMorePostFromUI(e) {
    const readMoreModal = new bootstrap.Modal(document.getElementById('readMoreModal'));
    readMoreModal.show();

    console.log(e.children[0].src);

    const imgUrl = e.children[0].src;
    const postTitle = e.children[1].children[0].textContent;
    const postAuthor = e.children[1].children[1].children[0].textContent;
    const postDate = e.children[1].children[1].children[1].textContent;
    const postCategory = e.children[1].children[2].textContent;
    const postContent = e.children[1].children[3].textContent;



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
  <div class="modal-body">
    <div class="row" id="postContentInModal">
     
        <img
          src="${imgUrl}"
          class="w-50 m-auto"
          alt=""
        />
    
      <div class="row" id="postInfo">
        <h2 id="postTitleInModal">${postTitle}</h2>
        <div class="div d-flex gap-4 text-info">
          <p id="postAuthorInModal">${postAuthor}</p>
          <p id="postDateInModal">${postDate}</p>
        </div>
        <p
          id="postCategoryInModal"
          class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-25"
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

  filterPostInUI(categoryName) {

    // console.log(categoryName);
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
      console.log(postListItem.parentElement.parentElement);
      console.log(postListItem.children[2].textContent.toLowerCase());
      const category = postListItem.children[2].textContent.toLowerCase();
      if (category.indexOf(categoryName) !== -1) {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : block');
      } else {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      }
    })




  };
  sortPostAz() {
    // const postList = document.getElementById('post-list');
    // const postListItems = postList.querySelectorAll('.card-body');
    // const postListItemsArray = Array.from(postListItems);
    // postListItemsArray.sort(function (post1, post2) {
    //   if (post1.children[0].textContent > post2.children[0].textContent) {
    //     return 1;
    //   } else {
    //     return -1;
    //   }
    // });
    // while (postList.firstChild) {
    //   postList.removeChild(postList.firstChild);
    // }
    // postListItemsArray.forEach(function (postListItem) {
    //   postList.appendChild(postListItem.parentElement.parentElement);
    // })
  };


}
