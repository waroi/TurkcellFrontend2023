class UI {
  static createNewBlogToUI = function (blog) {
    const newBlogCol = document.createElement("div");
    newBlogCol.id = blog.id;
    newBlogCol.className = "col-lg-4 mb-4";
    newBlogCol.innerHTML = `
      <div class="card blogCards shadow">
        <div class="innerBlogCard w-100 h-100 position-relative">
          <div class="blogCardFront w-100 h-100 position-absolute">
            <img
              src="${blog.imageUrl}"
              alt="${blog.name}" class="px-1 pt-1 img-fluid object-fit-cover blogCardsImage h-100">
          </div>
          <div
            class="blogCardBack w-100 h-100 d-flex justify-content-evenly align-items-center position-absolute">
            <span class="px-3 py-2 rounded fa-solid fa-edit" data-bs-toggle="modal" data-bs-target="#addAndUpdateBlogModal"></span>
            <span class="fa-solid fa-eye px-3 py-2 rounded" data-bs-toggle="modal" data-bs-target="#infoBlogModal"></span>
            <span class="fa-solid fa-trash px-3 py-2 rounded"></span>
          </div>
        </div>
      </div>
    `;
    blogsList.appendChild(newBlogCol);
  };

  static alertMessage = function(message) {
    alert(message);
  }

  static toastMessage = function(message) {
    const toastBody = `<div class="toast-header">
    <strong class="me-auto">Blog Page</strong>
      <small>${new Date().toLocaleTimeString()}</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      ${message}
    </div>`;
    toast.innerHTML = toastBody;
    const toastMessage = new bootstrap.Toast(toast);
    toastMessage.show();
  }

  static clearModalForm = function() {
    updateBlogButton.style.display = 'none';
    createNewBlogButton.style.display = 'block'
    modalTitle.textContent = 'Yeni Blog Ekle'
    modalBlogName.value = '';
    modalAuthorName.value = '';
    modalBlogCategoryName.value = '';
    modalBlogContent.value = '';
    modalBlogImageUrl.value = '';
  }

  static detailBlogToUI = function(detailBlog) {
    infoModalTitle.textContent = detailBlog.name;
    infoModalImage.src = detailBlog.imageUrl;
    infoModalCategory.textContent = detailBlog.category;
    infoModalDate.textContent = detailBlog.date;
    infoModalBlogContent.textContent = detailBlog.content;
    infoModalAuthor.textContent = detailBlog.author;
  }

  static updateBlogToUI = function(updateBlogDetail) {
    modalTitle.textContent = 'Blog Güncelle';
    modalBlogName.value = updateBlogDetail.name;
    modalAuthorName.value = updateBlogDetail.author;
    modalBlogCategoryName.value = updateBlogDetail.category;
    modalBlogContent.value = updateBlogDetail.content;
    modalBlogImageUrl.value = updateBlogDetail.imageUrl;
    updateBlogButton.style.display = 'block';
    createNewBlogButton.style.display = 'none';
    const currentDate = new Date();
    updateBlogButton.addEventListener('click', function(e) {
      let updateBlog = {
        id: updateBlogDetail.id,
        name: modalBlogName.value,
        author: modalAuthorName.value,
        category: modalBlogCategoryName.value,
        content: modalBlogContent.value,
        imageUrl: modalBlogImageUrl.value,
        date:
          currentDate.getDate() +
          "/" +
          (currentDate.getMonth() + 1) +
          "/" +
          currentDate.getFullYear() +
          " " +
          currentDate.getHours() +
          ":" +
          currentDate.getMinutes() +
          ":" +
          currentDate.getSeconds()
        };
        Request.updateBlogFromRequest(updateBlog.id, updateBlog);
      e.preventDefault();
    })
  }

  static deleteBlogFromUI = function(deleteBlog) {
    deleteBlog.remove();
  }

  static showFilterCategories = function() {
    const allBlogs = crud.get();
    console.log(allBlogs);
  }
}
