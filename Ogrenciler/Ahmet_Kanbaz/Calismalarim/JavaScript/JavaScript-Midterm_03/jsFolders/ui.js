class UI {
  static createNewBlogToUI = function (blog) {
    const newBlogCol = document.createElement("div");
    newBlogCol.id = blog.id;
    newBlogCol.className = "col-lg-4 col-md-6 mb-4";
    newBlogCol.innerHTML = `
      <div class="card blogCards shadow">
        <div class="innerBlogCard w-100 h-100 position-relative">
          <div class="blogCardFront h-100 position-absolute">
            <img
              src="${blog.imageUrl}"
              alt="${blog.name}" class="px-1 pt-1 img-fluid object-fit-cover blogCardsImage h-100">
          </div>
          <div
            class="blogCardBack w-100 h-100 position-absolute row align-items-center">
            <div class="col-12">
              <h5 class = "text-center pb-3">${blog.name}</h5>
              <div class = "d-flex justify-content-evenly align-items-center">
                <span class="px-3 py-2 rounded fa-solid fa-edit" data-bs-toggle="modal" data-bs-target="#addAndUpdateBlogModal"></span>
                <span class="fa-solid fa-eye px-3 py-2 rounded" data-bs-toggle="modal" data-bs-target="#infoBlogModal"></span>
                <span class="fa-solid fa-trash px-3 py-2 rounded"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    blogsList.appendChild(newBlogCol);
  };

  static alertMessage = function (message) {
    alert(message);
  };

  static toastMessage = function (message) {
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
  };

  static clearModalForm = function () {
    updateBlogButton.style.display = "none";
    createNewBlogButton.style.display = "block";
    modalTitle.textContent = "Yeni Blog Ekle";
    modalBlogName.value = "";
    modalAuthorName.value = "";
    modalBlogCategoryName.value = "";
    modalBlogContent.value = "";
    modalBlogImageUrl.value = "";
  };

  static detailBlogToUI = function (detailBlog) {
    infoModalTitle.textContent = detailBlog.name;
    infoModalImage.src = detailBlog.imageUrl;
    infoModalCategory.textContent = detailBlog.category;
    infoModalDate.textContent = detailBlog.date;
    infoModalBlogContent.textContent = detailBlog.content;
    infoModalAuthor.textContent = detailBlog.author;
  };

  static updateBlogToUI = function (updateBlogDetail) {
    modalTitle.textContent = "Blog Güncelle";
    modalBlogName.value = updateBlogDetail.name;
    modalAuthorName.value = updateBlogDetail.author;
    modalBlogCategoryName.value = updateBlogDetail.category;
    modalBlogContent.value = updateBlogDetail.content;
    modalBlogImageUrl.value = updateBlogDetail.imageUrl;
    updateBlogButton.style.display = "block";
    createNewBlogButton.style.display = "none";
    const currentDate = new Date();
    updateBlogButton.addEventListener("click", function (e) {
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
          currentDate.getSeconds(),
      };
      Request.updateBlogFromRequest(updateBlog.id, updateBlog);
      e.preventDefault();
    });
  };

  static deleteBlogFromUI = function (deleteBlog) {
    deleteBlog.remove();
  };

  static showFilterCategories = function () {
    const blogs = crud.getBlogsForCategories();
    categoriesFilterDropDown.innerHTML = "";
    categoriesFilter.innerHTML = "";
    const tempBlogs = [];
    blogs
      .then((blog) => {
        blog.forEach((element) => {
          tempBlogs.push(element.category);
        });
        const uniqueBlogs = [...new Set(tempBlogs)];
        uniqueBlogs.sort().map((element) => {
          const categoriesLi = document.createElement("li");
          categoriesLi.className = "mb-2";
          categoriesLi.innerHTML += `<input type="checkbox" id="${element}" value="${element}" class="btn-check" autocomplete="off">
          <label for="${element}" class="btn btn-outline-success px-5">${element}</label>`;
          const categoriesDropDownLi = document.createElement("li");
          categoriesDropDownLi.className = "ps-1";
          categoriesDropDownLi.innerHTML = `<input type="checkbox" id="${element}" value="${element}"">
          <label for="${element}">${element}</label>`;
          categoriesFilterDropDown.appendChild(categoriesDropDownLi);
          categoriesFilter.appendChild(categoriesLi);
        });
      })
      .catch((error) => this.alertMessage(error));
  };

  static updateDisplayForFilter = function(filteredBlogs) {
    blogsList.innerHTML = "";
    filteredBlogs.forEach((blog) => {
      UI.createNewBlogToUI(blog);
    });
  }

  static clearAllFilters = function() {
    searchInput.value = '';
    const checkedInputs = document.querySelectorAll('input[type="checkbox"]');
    checkedInputs.forEach((checkBox) => checkBox.checked ? checkBox.checked = false : null);
  }

  static showAllBlogsFromUI = function() {
    blogsList.innerHTML = "";
    crud.get().then((blogs) => {
      blogs.forEach((blog) => {
        UI.createNewBlogToUI(blog);
      });
    });
  }

}
