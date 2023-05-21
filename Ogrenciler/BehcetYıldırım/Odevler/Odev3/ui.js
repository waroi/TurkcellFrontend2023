class UI {
  getAllBlogsFromDB(blogs) {
    blogs.forEach(function (blog) {
      ui.addBlog(blog);
    });
  }
  addBlog(blog) {
    blogList.innerHTML += `
        <div class="col-md-4 justify-content-center m-2 deneme">
        <div class="card rounded-2 ">
          <img src="${blog.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="display:none">${blog.id}</p>
            <button id="card-category" type="button"class=" card-category btn bg-danger text-center text-white border-0 rounded-5 ps-2 pe-2 mt-2 mb-2">${blog.category}</button>
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text card-author"> ${blog.author}</p>
            <p class="card-text">Yayın Tarihi: ${blog.date}</p>
            <p class="card-text">${blog.preview}</p>
            <button id="readButton" type="button" class="btn btn-secondary" data-bs-toggle="modal"data-bs-target="#A${blog.id}">Devamını Görüntüle</button>
            <div class="d-flex flex-row mt-3">
              <button id="deleteBlog" type="button" class="btn bg-secondary text-light me-2">Sil</button>
              <button id="editBlog" type="button" class="btn bg-secondary text-light" data-bs-toggle="modal" data-bs-target="#editModal" >Düzenle</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade modal-lg" id="editModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title fs-5">Blog Yazısını Düzenle</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form id="editForm" name="form">
                  <div class="form-inputs row">
                  <div class="col-lg-12 mt-3">
                      <input
                      type="text"
                      class="form-control"
                      id="editTitle"
                      placeholder="Başlık Düzenle"
                      />
                  </div>
                  <div class="col-sm-12 col-lg-6 mt-3">
                      <input
                      type="text"
                      class="form-control"
                      id="editAuthor"
                      placeholder="Yazar İsmi Düzenle"
                      />
                  </div>
                  <div class="col-sm-12 col-lg-6 mt-3">
                      <select class="form-select" id="editCategory">
                      <option selected value="">Kategori</option>
                      <option value="News">News</option>
                      <option value="Dancers">Dancers</option>
                      <option value="Dances">Dances</option>
                      </select>
                  </div>
                  <div class="col-lg-12 mt-3">
                      <input
                      type="text"
                      class="form-control"
                      id="editImage"
                      placeholder="Görsel Linki Düzenle"
                      />
                  </div>
                  <div class="col-lg-12 mt-3">
                      <input
                      type="text"
                      class="form-control"
                      id="editPreview"
                      placeholder="Önyazı Düzenle"
                      />
                  </div>
                  <div class="col-lg-12 mt-3">
                      <textarea
                      class="form-control"
                      id="editBlogText"
                      rows="4"
                      placeholder="Blog Yazısı Düzenle"
                      ></textarea>
                  </div>
                  </div>
                  <button type="submit" class="btn btn-danger mt-3">Değişiklikleri Kaydet</button>
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
          </div>
          </div>
      </div>
      </div>
       
  
  <div
      class="modal fade modal-lg"
      id="A${blog.id}"
      tabindex="-1"
      aria-hidden="true"
      >
      <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5">
          ${blog.title}</h1>
          <button class="card-category btn bg-danger text-center text-white border-0 rounded-5 ps-2 pe-2 mt-2 mb-2">${blog.category}</button>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          ></button>
      </div>
      <img
      class="card-img-top img-fluid"
      src="${blog.image}"
      />
      <div class="card-body row p-3">
      <p class="card-text">
          ${blog.body}
      </p>
      <div class="card-footer">
          <p class="card-text">
          <small class="text-muted">Yazar: ${blog.author}</small>
          </p>
          <p class="card-text">
          <small class="text-muted">${blog.date}</small>
          </p>
          <div class="modal-footer">
          <button
          type="button"
          class="btn btn-dark"
          data-bs-dismiss="modal"
          >
          Kapat
          </button>
      </div>
  </div> 
  </div> 
  </div>
  </div>
  </div>
        `;
  }
  deleteBlog(e) {
    e.remove();
  }
  editBlog(blog, card) {
    blogList.innerHTML = `
            
      <img src="${blog.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text" style="display:none">${blog.id}</p>
        <button id="card-category" type="button"class=" card-category btn bg-danger text-center text-white border-0 rounded-5 ps-2 pe-2 mt-2 mb-2">${blog.category}</button>
        <h5 class="card-title">${blog.title}</h5>
        <p class="card-text card-author">${blog.author}</p>
        <p class="card-text">${blog.date}</p>
        <p class="card-text">${blog.preview}</p>
        <button id="readButton" type="button" class="btn btn-secondary" data-bs-toggle="modal"data-bs-target="#A${blog.id}">Devamını Görüntüle</button>
        <div class="d-flex flex-row mt-3">
          <button id="deleteBlog" type="button" class="btn bg-secondary text-light me-2">Sil</button>
          <button id="editBlog" type="button" class="btn bg-secondary text-light" data-bs-toggle="modal" data-bs-target="#editModal" >Düzenle</button>
        </div>
      </div>
  <div class="modal fade modal-lg" id="editModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-header">
          <h1 class="modal-title fs-5">Blog Yazısını Düzenle</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form id="edit-form" name="form">
              <div class="form-inputs row">
              <div class="col-lg-12 mt-3">
                  <input
                  type="text"
                  class="form-control"
                  id="edit-title"
                  placeholder="Başlık Düzenle"
                  />
              </div>
              <div class="col-sm-12 col-lg-6 mt-3">
                  <input
                  type="text"
                  class="form-control"
                  id="edit-author"
                  placeholder="Yazar İsmi Düzenle"
                  />
              </div>
              <div class="col-sm-12 col-lg-6 mt-3">
                  <select class="form-select" id="edit-category">
                  <option selected value="">Kategori</option>
                  <option value="News">News</option>
                  <option value="Dancers">Dancers</option>
                  <option value="Dances">Dances</option>
                  </select>
              </div>
              <div class="col-lg-12 mt-3">
                  <input
                  type="text"
                  class="form-control"
                  id="edit-image"
                  placeholder="Görsel Linki Düzenle"
                  />
              </div>
              <div class="col-lg-12 mt-3">
                  <input
                  type="text"
                  class="form-control"
                  id="edit-preview-text"
                  placeholder="Önyazı Düzenle"
                  />
              </div>
              <div class="col-lg-12 mt-3">
                  <textarea
                  class="form-control"
                  id="edit-blog-text"
                  rows="4"
                  placeholder="Blog Yazısı Düzenle"
                  ></textarea>
              </div>
              </div>
              <button type="submit" class="btn btn-danger mt-3">Değişiklikleri Kaydet</button>
          </form>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  
      </div>
      </div>
  </div>
  </div>
   
  
  <div
  class="modal fade modal-lg"
  id="A${blog.id}"
  tabindex="-1"
  aria-hidden="true"
  >
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
      <h1 class="modal-title fs-5">
      ${blog.title}</h1>
      <button class="card-category btn bg-danger text-center text-white border-0 rounded-5 ps-2 pe-2 mt-2 mb-2">${blog.category}</button>
      <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      ></button>
  </div>
  <img
  class="card-img-top img-fluid"
  src="${blog.image}"
  />
  <div class="card-body row p-3">
  <p class="card-text">
      ${blog.body}
  </p>
  <div class="card-footer">
      <p class="card-text">
      <small class="text-muted">Yazar: ${blog.author}</small>
      </p>
      <p class="card-text">
      <small class="text-muted">${blog.date}</small>
      </p>
      <div class="modal-footer">
      <button
      type="button"
      class="btn btn-dark"
      data-bs-dismiss="modal"
      >
      Kapat
      </button>
  </div>
  </div> 
  </div> 
  </div>
  </div>
  </div>`;
  }
  searchBlog(value, titles, author) {
    for (let i = 0; i < titles.length; i++) {
      const blogCard = titles[i].parentElement.parentElement;
      const blogTitle = titles[i].innerHTML.toLowerCase();
      const blogAuthor = author[i].innerHTML.toLowerCase();
      if (blogTitle.includes(value) || blogAuthor.includes(value)) {
        blogCard.style.display = "block";
      } else {
        blogCard.style.display = "none";
      }
    }
  }
  filterBlogCategory(selectedCategory, blogCategories) {
    blogCategories.forEach(function (category) {
      const text = category.innerText;
      if (text.indexOf(selectedCategory) === -1 && selectedCategory != "All") {
        category.parentElement.parentElement.parentElement.setAttribute(
          "style",
          "display:none !important"
        );
      } else {
        category.parentElement.parentElement.parentElement.setAttribute(
          "style",
          "display:block"
        );
      }
    });
  }
}
