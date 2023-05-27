class UI {


  loadAllPostsToUI(posts) {
    posts.forEach(function (post) {
      ui.addPostToUI(post);
    });
  }
  addPostToUI(post) {
    const postList = document.getElementById("post-list");
    postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${post.id}> 
    <div class="card card-main mb-4 product-wap rounded-0">
    <div class="card-header rounded-0 position-relative overflow-hidden">
    <img
    src="${post.url}"
    class="card-img-top overflow-hidden"
    alt="..."
    id="post-img"
  />
        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
            <ul class="list-unstyled card-items">
                <li><a class="btn btn-primary text-white mt-2" href=""><i class="far fa-heart"></i></a></li>
                <li><a class="btn btn-primary text-white mt-2" href=""><i class="far fa-eye"></i></a></li>
                <li><a href="#" class="btn btn-primary text-white mt-2" id="updatePost"
                ><i id="updatePost" class="fas fa-cart-plus"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="card-body text-center">
    <h5 class="card-title overflow-hidden" id="post-title">${post.author}</h5>
    <p class="card-text overflow-hidden" id="post-content">
            ${post.content}
            </p>
        <ul class="w-100 list-unstyled d-flex justify-content-center mb-0">
        <p
        class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50 bg-secondary"
        id="post-category"
      >
      ${post.category}
      </p>
            
        </ul>
        <ul class="list-unstyled d-flex justify-content-center mb-1">
            <li>
                <i class="text-warning fa fa-star"></i>
                <i class="text-warning fa fa-star"></i>
                <i class="text-warning fa fa-star"></i>
                <i class="text-warning fa fa-star"></i>
                <i class="text-warning fa fa-star"></i>
            </li>
        </ul>
        <p class="text-center mb-0" id="post-price">${post.price}$</p>
        <div class="d-flex justify-content-center mt-2 gap-1">
        <button href="#" class="btn btn-sm  btn-success" id="updatePost"             >Update Card</>
        <button href="#" class="btn btn-sm addCartButton   btn-warning" id="addListButton"             >Add to Card</>
        <button href="#" class="btn btn-sm btn-danger  d-flex justify-content-center align-items-center" id="deletePost"             >Delete</           ></div>
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

  };

  searchPostInUI(searchValue) {
    const postList = document.getElementById('post-list');
    const postListItems = postList.querySelectorAll('.card-body');

    postListItems.forEach(function (postListItem) {
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

    sortedPosts.forEach(function (post) {
      const cardImg=document.querySelectorAll('.card-img-top');
      const authorText = document.querySelectorAll('#post-author');
      const categoryText = document.querySelectorAll('#post-category');
      const contentText = document.querySelectorAll('#post-content');
      const priceText = document.querySelectorAll('#post-price');
      const id = post.getAttribute('id');
      const url = cardImg.src;
      const author = authorText.textContent;
      const category = categoryText.textContent;
      const content = contentText.textContent;
      const price = priceText.textContent;

      postList.innerHTML += `<div class="col-md-4 mt-4 d-flex justify-content-center postCard" id=${id}> 
      <div class="card card-main mb-4 product-wap rounded-0">
      <div class="card-header rounded-0 position-relative overflow-hidden">
      <img
      src="${url}"
      class="card-img-top overflow-hidden"
      alt="..."
      id="post-img"
    />
          <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul class="list-unstyled card-items">
                  <li><a class="btn btn-primary text-white mt-2" href=""><i class="far fa-heart"></i></a></li>
                  <li><a class="btn btn-primary text-white mt-2" href=""><i class="far fa-eye"></i></a></li>
                  <li><a href="#" class="btn btn-primary text-white mt-2" id="updatePost"
                  ><i id="updatePost" class="fas fa-cart-plus"></i></a></li>
              </ul>
          </div>
      </div>
      <div class="card-body text-center">
      <h5 class="card-title overflow-hidden" id="post-title">${author}</h5>
      <p class="card-text overflow-hidden" id="post-content">
              ${content}
              </p>
          <ul class="w-100 list-unstyled d-flex justify-content-center mb-0">
          <p
          class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50 bg-secondary"
          id="post-category"
        >
        ${category}
        </p>
              
          </ul>
          <ul class="list-unstyled d-flex justify-content-center mb-1">
              <li>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
                  <i class="text-warning fa fa-star"></i>
              </li>
          </ul>
          <p class="text-center mb-0">${price}$</p>
          <div class="d-flex justify-content-center mt-2 gap-1" id="updatePost">
          <button href="#" class="btn btn-sm  btn-success" id="updatePost"             >Update Card</>
          <button href="#" class="btn btn-sm  btn-warning" id="addListButton"             >Add to Card</>
          <button href="#" class="btn btn-sm btn-danger  d-flex justify-content-center align-items-center" id="deletePost"             >Delete</           ></div>
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

