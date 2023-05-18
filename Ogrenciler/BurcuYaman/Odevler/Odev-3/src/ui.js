class UI {
    loadAllPostsToUI(posts) {
        posts.forEach(function (post) {
            ui.addPostToUI(post);
        });
    }
    addPostToUI(post) {
        const postList = document.getElementById("post-list");
        postList.innerHTML += `<div class="col-md-6 mt-4 d-flex justify-content-center"> 
        <div class="card mx-3 w-100" id=${post.id}>
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
        e.remove();
    }
    updatePostFromUI() { };
    fiterPostOnUI() { };
    searchPostInUI(searchValue) { };
    sortPostAZ() { };
    sortPostDate() { };

}