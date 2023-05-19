const addNewButton = document.getElementById('addBlogBtn');
const modal = document.getElementById('cardModal');
const blogList = document.getElementById('blogList');
let confirmDeleteBtns = document.querySelectorAll(".confirmDeleteBtn");
const deleteBlogBtns = document.getElementsByClassName("delete-blog-btn");

class Request {
    get() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/blogs')
                .then((response) => response.json())
                .then(data => {
                    // Process the blog data and generate HTML
                    data.forEach(blog => {
                        // Create a new list item for each blog
                        const listItem = document.createElement('div');
                        listItem.classList = "card mb-3 blog-item";
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
                                    <span><i class="fa-regular fa-folder-open"></i> ${blog.category}</span>
                                    <span><i class="fa-solid fa-feather-pointed"></i> ${blog.author}</span>
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
                        // Update the category filter list
                        updateCategoryList(blog.category);

                        // Append the list item to the blog list
                        blogList.appendChild(listItem);
                    });

                    // Update the category filter list
                    // Update the category filter list
                    // Update the category filter list
                    function updateCategoryList(category) {
                        const categoryList = document.getElementById('categoryList');
                        const existingCategory = categoryList.querySelector(`li div[data-category="${category}"]`);

                        // Check if the category already exists in the filter list
                        if (!existingCategory) {
                            const listItem = document.createElement('li');
                            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
                            listItem.innerHTML = `
                            <div type="button" class="ms-2 me-auto blog-category" data-category="${category}">${category}</div>
                            <span class="badge bg-primary rounded-pill"></span>
      `;

                            categoryList.appendChild(listItem);

                            const blogs = Array.from(document.querySelectorAll('.blog-category'));
                            const categoryCount = blogs.filter(blog => blog.dataset.category === category).length;
                            const badge = listItem.querySelector('.badge');
                            badge.textContent = categoryCount;
                        }
                    }
                    const request = new Request();
                    function filterBlogs() {
                        const blogCategories = document.querySelectorAll('.blog-category');
                        for (const category of blogCategories) {
                            category.addEventListener('click', async (e) => {
                                const clickedCategory = e.target.dataset.category;
                                try {
                                    let response;
                                    if (clickedCategory === "all") {
                                        response = await fetch(`http://localhost:3000/blogs`);
                                    } else {
                                        response = await fetch(`http://localhost:3000/blogs?category=${clickedCategory}`);
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
                        // Clear the existing blog list
                        blogList.innerHTML = '';

                        // Process the filtered blog data and generate HTML
                        blogs.forEach(blog => {
                            // Create a new list item for each blog
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
                                    <span><i class="fa-regular fa-folder-open"></i> ${blog.category}</span>
                                    <span><i class="fa-solid fa-feather-pointed"></i> ${blog.author}</span>
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

                            // Append the list item to the blog list
                            blogList.appendChild(listItem);
                        });
                    }
                    filterBlogs()



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
    delete(blogId) {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:3000/blogs/${blogId}`, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => {
                    resolve(data)
                    console.log(data)
                }
                )
                .catch((err) => reject(err));
        })
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


//Add new blog
addNewButton.addEventListener('click', (e) => {
    e.preventDefault()

    const titleValue = document.getElementById('addBlogTitle').value;
    const contentValue = document.getElementById('addBlogContent').value;
    const authorValue = document.getElementById('addBlogAuthor').value;
    const categoryValue = document.getElementById('addBlogCategory').value;
    const imageValue = document.getElementById('addBlogImageUrl').value;

    const date = new Date()

    const blogData = {
        image: imageValue,
        title: titleValue,
        content: contentValue,
        author: authorValue,
        category: categoryValue,
        date: date.toISOString(),
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
