const addNewButton = document.getElementById('addBlogBtn');
const modal = document.getElementById('cardModal');
const blogList = document.getElementById('blogList');
const confirmDeleteBtn = document.querySelector(".confirmDeleteBtn");
const deleteBlogBtns = document.querySelectorAll(".delete-blog-btn");
const confirmEditBtn = document.querySelector(".confirmEditBtn");
const editBlogBtns = document.querySelectorAll(".delete-blog-btn");

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
                <div class="col-md-4 overflow-hidden">
                  <img id="blogImage" src="${blog.image}"
                    class="w-100 rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a href="#">
                      <h2 class="card-title" data-bs-toggle="modal" data-bs-target="#contentModal">${blog.title}</h2>
                    </a>
                    <div class="d-flex justify-content-between my-4 blog-spans">
                      <span class="col-4" ><i class="fa-solid fa-calendar-days"></i> ${blog.date}</span>
                      <span class="col-4" ><i class="fa-regular fa-folder-open"></i> ${capitalize(blog.category)}</span>
                      <span class="col-3" ><i class="fa-solid fa-feather-pointed"></i> ${capitalize(truncate(blog.author, 30))}</span>
                    </div>
                    <p class="card-text">${blog.content}</p>
                    <div class="d-flex justify-content-end gap-3 me-4">
                      <button type="button" class="btn btn-primary edit-blog-btn" data-bs-toggle="modal" data-bs-target="#editModal">
                      <i class="fa-regular fa-pen-to-square"></i> Edit
                      </button>
                      <button type="button" class="btn btn-danger delete-blog-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i class="fa-solid fa-trash"></i> Delete 
                      </button>
                    </div>
                  </div>
                  <div class="sticky-div">
                    <span class="sticky-span">${blog.id}</span>
                  </div>
                </div>
              </div>
              `;
            updateCategoryList(blog.category);

            blogList.appendChild(listItem);
          });

          const searchInput = document.getElementById('searchInput');
          searchInput.addEventListener('keyup', () => {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();

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

const request = new Request();
request
  .get("http://localhost:3000/blogs")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });