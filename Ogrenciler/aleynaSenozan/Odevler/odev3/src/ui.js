class UI {
  loadAllTravelsToUI(travels) {
    travels.forEach(function (travel) {
      ui.addTravelToUI(travel);
    });
  }
  addTravelToUI(travel) {
    const travelList = document.getElementById("travel-list");
    const card = document.createElement("div");
    
    card.classList.add(
      "col-md-12",
      "mt-4",
      "d-flex",
      "justify-content-center",
      "travelCard"
    );
    card.id = travel.id;
    card.dataset.fullText = travel.text;
    const cardHTML = `
      <div class="card mx-3 w-100">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${travel.url}" class="card-img-top img-fluid" alt="Post Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title title-s">${travel.title}</h5>
              <p class="card-text">${travel.text.slice(0, 200)}...</p>
              <div class="author-date">
                <p class="card-text author-s"><small class="text-muted">Author: ${travel.author}</small></p>
                <p class="card-text"><small class="text-muted">${travel.date}</small></p>
                <p class="card-text"><small class="text-muted">Category: ${travel.category}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <div>
              <a href="#" class="btn btn-sm btn-link p-0 mr-2" id="deletePost"><i class="bi bi-trash text-dark" style="font-size: 1.3rem;"></i></a>
              <a href="#" class="btn btn-sm btn-link p-0 mr-2" id="updatePost"><i class="bi bi-pencil text-dark" style="font-size: 1.3rem;"></i></a>
            </div>
            <div class="seeMore">
              <a href="#" class="btn btn-sm btn-link text-decoration-none readMoreBtn" id="readMore" style="display: flex; align-items: center;">
                <u><span class="text-dark">Read More</span></u><i class="bi bi-arrow-right text-dark ml-1" style="font-size: 1.3rem;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    card.innerHTML = cardHTML;
    travelList.appendChild(card);
    const readMoreBtn = card.querySelector(".readMoreBtn");
    readMoreBtn.addEventListener("click", () => this.readMorePostFromUI(card));
    const img = card.querySelector(".card-img-top");
    img.style.maxHeight = "200px";
  }
  
  searchPostInUI(searchValue) {
    const postList = document.getElementById('travel-list');
    const postListItems = postList.querySelectorAll('.card-body');

    postListItems.forEach(function (postListItem) {
      const title = postListItem.children[0].textContent.toLowerCase();
      const author = postListItem.children[2].textContent.toLowerCase();
      if (title.indexOf(searchValue) === -1 && author.indexOf(searchValue) === -1) {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : none !important');
      } else {
        postListItem.parentElement.parentElement.setAttribute('style', 'display : block');
      }
    })
  }
readMorePostFromUI(card) {
  const readMoreModal = new bootstrap.Modal(document.getElementById('readMoreModal'));
  readMoreModal.show();

  const imgUrl = card.querySelector('img')?.getAttribute('src');
  const postTitle = card.querySelector('.card-title')?.textContent;
  const postAuthor = card.querySelector('.author-s > small')?.textContent.replace('Author: ', '');
  const postDate = card.querySelector('.author-s + p')?.textContent;
  const postCategory = card.querySelector('.text-muted:last-child')?.textContent.replace('Category: ', '');
  const postContent = card.dataset.fullText;

  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
    <div class="modal-header bg-secondary text-light">
      <h1 class="modal-title fs-5" id="readMoreModalLabel">${postTitle}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body p-5">
      <div class="row">
        <div class="col-md-6">
          ${imgUrl ? `<img src="${imgUrl}" class="w-100 rounded" alt="" />` : ''}
        </div>
        <div class="col-md-6">
          <h2 class="fw-bold mt-4">${postTitle}</h2>
          <div class="d-flex gap-4 text-info">
            <p class="author-s">${postAuthor}</p>
            <p>${postDate}</p>
          </div>
          <p class="border border-primary mt-3 px-3 py-1 rounded-end-4 w-50 bg-secondary">${postCategory}</p>
          <div class="mt-4">${postContent}</div>
        </div>
      </div>
    </div>`;
}

editItemOnUI(data) {
  const modalContent = document.getElementById('edit-modal-content');
  modalContent.innerHTML = `
    <div class="modal-header bg-secondary text-light">
      <h1 class="modal-title fs-5" id="editModalLabel">Edit Post</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body p-5">
      <form id="edit-form">
        <div class="mb-3">
          <label for="editImgUrl" class="form-label">Image URL</label>
          <input type="text" class="form-control" id="editImgUrl" value="${data.imgUrl}">
        </div>
        <div class="mb-3">
          <label for="editPostTitle" class="form-label">Title</label>
          <input type="text" class="form-control" id="editPostTitle" value="${data.postTitle}">
        </div>
        <div class="mb-3">
          <label for="editPostAuthor" class="form-label">Author</label>
          <input type="text" class="form-control" id="editPostAuthor" value="${data.postAuthor}">
        </div>
        <div class="mb-3">
          <label for="editPostDate" class="form-label">Date</label>
          <input type="text" class="form-control" id="editPostDate" value="${data.postDate}">
        </div>
        <div class="mb-3">
          <label for="editPostCategory" class="form-label">Category</label>
          <input type="text" class="form-control" id="editPostCategory" value="${data.postCategory}">
        </div>
        <div class="mb-3">
          <label for="editPostContent" class="form-label">Content</label>
          <textarea class="form-control" id="editPostContent">${data.postContent}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </form>
    </div>
  `;

  const editModal = new bootstrap.Modal(document.getElementById('editModal'));
  editModal.show();
}

}