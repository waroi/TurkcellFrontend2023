// Get the "Add New" button element
const addNewButton = document.querySelector('a.btn.btn-outline-secondary');

// Get the modal element
const modal = document.getElementById('cardModal');

// Fetch blogs from JSON-Server API
fetch('http://localhost:3000/blogs')
    .then(response => response.json())
    .then(data => {
        // Process the blog data and generate HTML
        const blogList = document.getElementById('blogList');
        data.forEach(blog => {
            // Create a new list item for each blog
            const listItem = document.createElement('div');
            listItem.classList = "card mb-3 blog-item";

            // Add the blog details to the list item
            listItem.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${blog.image}"
                    class="w-100 h-100 rounded-start" alt="...">
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
                    <p class="card-text">${blog.post}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                         <i class="fa-regular fa-pen-to-square"></i> Edit
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="fa-solid fa-trash"></i> Delete 
                    </button>
                </div>
            </div>
        </div>
            `;

            // Update the category filter list
            updateCategoryList(blog.category);

            // Append the list item to the blog list
            blogList.appendChild(listItem);
        });

        // Update the category filter list
        function updateCategoryList(category) {
            const categoryList = document.getElementById('categoryList');
            const existingCategories = Array.from(categoryList.children)
                .map(item => item.textContent.trim());

            // Check if the category already exists in the filter list
            if (!existingCategories.includes(category)) {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
                listItem.innerHTML = `<div class="ms-2 me-auto">${category}</div>
        <span class="badge bg-primary rounded-pill">14</span>`;

                categoryList.appendChild(listItem);
            }
        }
    })
