function displayFilteredBlogs(blogs) {
  blogList.innerHTML = '';

  blogs.forEach(blog => {
    const listItem = document.createElement('div');
    listItem.classList = "card mb-3 blog-item";
    listItem.innerHTML = `
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img id="blogImage" src="${blog.image}" class="w-100 rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <a href="#">
                          <h2 class="card-title" data-bs-toggle="modal" data-bs-target="#contentModal">${blog.title}</h2>
                        </a>
                        <div class="d-flex justify-content-between my-4 blog-spans">
                          <span class="col-4"><i class="fa-solid fa-calendar-days"></i> ${blog.date}</span>
                          <span class="col-4"><i class="fa-regular fa-folder-open"></i> ${capitalize(blog.category)}</span>
                          <span class="col-3"><i class="fa-solid fa-feather-pointed"></i> ${capitalize(blog.author)}</span>
                        </div>
                        <p class="card-text">${blog.content}</p>
                        <button type="button" class="btn btn-primary edit-blog-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                          <i class="fa-regular fa-pen-to-square"></i> Edit
                        </button>
                        <button type="button" class="btn btn-primary delete-blog-btn">
                          <i class="fa-solid fa-trash"></i> Delete 
                        </button>
                      </div>
                      <div class="sticky-div">
                        <span class="sticky-span">${blog.id}</span>
                      </div>
                    </div>
                  </div>
                  `;
    blogList.appendChild(listItem);
  });
}

function updateCategoryList(category) {
  const categoryList = document.getElementById('categoryList');
  const existingCategory = categoryList.querySelector(`li div[data-category="${category}"]`);
  const capitalizedCategory = capitalize(category);

  if (!existingCategory) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
    listItem.innerHTML = `
      <div type="button" class="ms-2 me-auto blog-category" data-category="${category}">${capitalizedCategory}</div>
      <span class="badge bg-primary rounded-pill"></span>
    `;

    categoryList.appendChild(listItem);

    const blogs = Array.from(document.querySelectorAll('.blog-category'));
    const categoryCount = blogs.filter(blog => blog.dataset.category === category).length;
    const badge = listItem.querySelector('.badge');
    badge.textContent = categoryCount;
  }
}

document.addEventListener('click', (e) => {
  const contentModal = document.querySelector('#contentModal');
  if (e.target.classList.contains('card-title')) {
    e.preventDefault();
    const blogId = e.target.parentElement.parentElement.parentElement.parentElement;
    contentModal.innerHTML = `
    <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="contentModalLabel">${blogId.children[1].childNodes[1].childNodes[1].childNodes[1].textContent}</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${blogId.children[0].children[0].src}" alt=""
                            class="w-100">
                        <div class="d-flex flex-column">
                            <span class="my-2"><i class="fa-solid fa-calendar-days"></i> ${blogId.children[1].childNodes[1].children[1].children[0].textContent}</span>
                            <span class="my-2"><i class="fa-regular fa-folder-open"></i> ${blogId.children[1].childNodes[1].children[1].children[1].textContent}</span>
                            <span class="my-2"><i class="fa-solid fa-feather-pointed"></i> ${blogId.children[1].childNodes[1].children[1].children[2].textContent} </span>
                        </div>
                        <p class="card-text-modal border">${blogId.children[1].childNodes[1].children[2].textContent}</p>                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
    `
  }
});

