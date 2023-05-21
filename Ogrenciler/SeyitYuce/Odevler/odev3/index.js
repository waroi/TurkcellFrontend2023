const addNewButton = document.getElementById('addBlogBtn');
const modal = document.getElementById('cardModal');
const blogList = document.getElementById('blogList');
const confirmDeleteBtn = document.querySelector(".confirmDeleteBtn");
const deleteBlogBtns = document.querySelectorAll(".delete-blog-btn");

function filterBlogs() {
  const blogCategories = document.querySelectorAll('.blog-category');
  for (const category of blogCategories) {
    category.addEventListener('click', async (e) => {
      const clickedCategory = e.target.dataset.category;
      const clickedCategoryId = e.target.dataset;
      console.log(clickedCategoryId)
      console.log(clickedCategory)
      try {
        let response;
        if (clickedCategory === "all") {
          response = await fetch(`http://localhost:3000/blogs`);
        } else {
          response = await fetch(`http://localhost:3000/blogs?category=${clickedCategory}`);
          sortBlogs()
        }
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        console.log(data);
        displayFilteredBlogs(data);
      } catch (error) {
        console.error(error);
      }
    });
  }
}
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
                        <div class="d-flex justify-content-between me-5 my-4">
                          <span><i class="fa-solid fa-calendar-days"></i> ${blog.date}</span>
                          <span><i class="fa-regular fa-folder-open"></i> ${capitalize(blog.category)}</span>
                          <span><i class="fa-solid fa-feather-pointed"></i> ${capitalize(blog.author)}</span>
                        </div>
                        <p class="card-text">${blog.content}</p>
                        <button type="button" class="btn btn-primary edit-blog-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                          <i class="fa-regular fa-pen-to-square"></i> Edit
                        </button>
                        <button type="button" class="btn btn-primary delete-blog-btn">
                          <i class="fa-solid fa-trash"></i> Delete 
                        </button>
                      </div>
                    </div>
                  </div>`;

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
async function sortBlogs() {
  const sortBlog = document.querySelectorAll('.blog-sort');

  sortBlog.forEach((sort) => {
    sort.addEventListener('click', async (e) => {
      const sortValue = e.target.innerText;
      const response = await fetch('http://localhost:3000/blogs');
      const data = await response.json();
      // if (sortValue === "Newer first") {
      //   data.sort((a, b) => {
      //     const dateA = new Date(a.date);
      //     const dateB = new Date(b.date);
      //     return dateB - dateA;
      //   })
      // } else if (sortValue === "Older first") {
      //   data.sort((a, b) => {
      //     const dateA = new Date(a.date);
      //     const dateB = new Date(b.date);
      //     return dateA - dateB;
      //   })
      // }
      // if (sortValue === "Title(ascending)") {
      //   data.sort((a, b) => {
      //     return a.title.localeCompare(b.title);
      //   })

      // } else if (sortValue === "Title(descending)") {
      //   data.sort((a, b) => {
      //     return b.title.localeCompare(a.title);
      //   })
      // }
      // if (sortValue === "Author(ascending)") {
      //   data.sort((a, b) => {
      //     let authorAscending = a.author.localeCompare(b.author);
      //     console.log(authorAscending);
      //     return authorAscending;
      //   })
      // } else if (sortValue === "Author(descending)") {
      //   data.sort((a, b) => {
      //     return b.author.localeCompare(a.author);
      //   })
      // }
      switch (sortValue) {
        case " Newer first":
          data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
          })
          break;
        case " Older first":
          data.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
          })
          break;
        case " Title(ascending)":
          data.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
          break;
        case "Title(descending)":
          data.sort((a, b) => {
            return b.title.localeCompare(a.title);
          })
          break;
        case " Author(ascending)":
          data.sort((a, b) => {
            let authorAscending = a.author.localeCompare(b.author);
            return authorAscending;
          })
          break;
        case " Author(descending)":
          data.sort((a, b) => {
            return b.author.localeCompare(a.author);
          })
          break;
      }

      displayFilteredBlogs(data);
    });
  });
}

window.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("delete-blog-btn")) {
    const deleteButton = e.target;
    const listItem = deleteButton.closest(".blog-item");
    const blogId = listItem.querySelector(".sticky-span").textContent;

    confirmDeleteBtn.dataset.blogId = blogId;
    console.log(blogId)
  }

});
confirmDeleteBtn.addEventListener("click", () => {
  const blogId = confirmDeleteBtn.dataset.blogId;
  request
    .delete(blogId)
    .then(() => {
      console.log("Blog deleted:", blogId);
      const listItem = document.querySelector(`.blog-item .sticky-span[data-blog-id="${blogId}"]`).closest(".blog-item");
      listItem.remove(); 
    })
    .catch((error) => {
      console.error("Failed to delete blog:", error);
    });
});

class Request {
  get() {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/blogs')
        .then((response) => response.json())
        .then(data => {
          data.forEach(blog => {
            const listItem = document.createElement('div');
            listItem.classList = "card mb-3 blog-item position-relative";
            listItem.innerHTML = `
              <div class="row g-0">
                <div class="col-md-4">
                  <img id="blogImage" src="${blog.image}"
                    class="w-100 rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="#">
                      <h2 class="card-title" data-bs-toggle="modal" data-bs-target="#contentModal">${blog.title}</h2>
                    </a>
                    <div class="d-flex justify-content-between me-5 my-4">
                      <span><i class="fa-solid fa-calendar-days"></i> ${blog.date}</span>
                      <span><i class="fa-regular fa-folder-open"></i> ${capitalize(blog.category)}</span>
                      <span><i class="fa-solid fa-feather-pointed"></i> ${capitalize(blog.author)}</span>
                    </div>
                    <p class="card-text">${blog.content}</p>
                    <button type="button" class="btn btn-primary edit-blog-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                       <i class="fa-regular fa-pen-to-square"></i> Edit
                    </button>
                    <button type="button" class="btn btn-primary delete-blog-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i class="fa-solid fa-trash"></i> Delete 
                    </button>
                  </div>
                  <div class="sticky-div">
                    <span class="sticky-span">${blog.id}</span>
                  </div>
                </div>
              </div>`;
            updateCategoryList(blog.category);

            blogList.appendChild(listItem);
          });

          const searchInput = document.getElementById('searchInput');
          searchInput.addEventListener('keyup', () => {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();

            // Filter blogs based on title or author match
            const filteredBlogs = data.filter(blog => {
              const title = blog.title.toLowerCase();
              const author = blog.author.toLowerCase();
              return title.includes(searchInput) || author.includes(searchInput);
            });

            displayFilteredBlogs(filteredBlogs);
          });

          filterBlogs()
          sortBlogs()

        })
        .catch((err) => reject(new Error("Veri alınamadı")));
    });
  }
  post(blogData) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    })
  }
  put(blogId, updatedBlog) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
          console.log("Blog updated:", blogId);
        })
        .catch((err) => reject(err));
    });
  }

  delete(blogId) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/blogs/${blogId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            resolve();
            console.log("Blog deleted:", blogId);
          } else {
            reject(new Error("Failed to delete blog"));
          }
        })
        .catch((err) => reject(err));
    });
  }

}

function capitalize(str) {
  const words = str.trim().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

addNewButton.addEventListener('click', (e) => {
  e.preventDefault()

  const titleValue = document.getElementById('addBlogTitle').value.trim();
  const contentValue = document.getElementById('addBlogContent').value.trim();
  const authorValue = document.getElementById('addBlogAuthor').value.trim();
  const categoryValue = capitalize(document.getElementById('addBlogCategory').value);
  const imageValue = document.getElementById('addBlogImageUrl').value;

  const date = new Date()

  const blogData = {
    image: imageValue,
    title: titleValue,
    content: contentValue,
    author: authorValue,
    category: categoryValue,
    date: date.toLocaleString("en-US", {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }),
  };

  request
    .post(blogData)
    .then((response) => {
      console.log('Blog added:', response);
    })
    .catch((error) => {
      console.error('Error adding blog:', error);
    });
});

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
                            <span><i class="fa-solid fa-calendar-days"></i> ${blogId.children[1].childNodes[1].children[1].children[0].textContent}</span>
                            <span><i class="fa-regular fa-folder-open"></i> ${blogId.children[1].childNodes[1].children[1].children[1].textContent}</span>
                            <span><i class="fa-solid fa-feather-pointed"></i> ${blogId.children[1].childNodes[1].children[1].children[2].textContent} </span>
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

const request = new Request();
request
  .get("http://localhost:3000/blogs")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });