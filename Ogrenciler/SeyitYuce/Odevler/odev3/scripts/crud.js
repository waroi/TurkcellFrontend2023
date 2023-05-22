window.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("delete-blog-btn")) {
        const deleteButton = e.target;
        const listItem = deleteButton.closest(".blog-item");
        const blogId = listItem.querySelector(".sticky-span").textContent;

        confirmDeleteBtn.dataset.blogId = blogId;
        console.log(blogId)
    }

    if (e.target.classList.contains("edit-blog-btn")) {
        const editButton = e.target;
        const listItem = editButton.closest(".blog-item");
        const blogId = listItem.querySelector(".sticky-span").textContent;

        fetch(`http://localhost:3000/blogs/${blogId}`)
            .then((response) => response.json())
            .then((blogData) => {
                const editModal = document.getElementById("editModal");

                const titleValue = editModal.querySelector('#editBlogTitle');
                const contentValue = editModal.querySelector('#editBlogContent')
                const authorValue = editModal.querySelector('#editBlogAuthor')
                const categoryValue = editModal.querySelector('#editBlogCategory')
                const imageValue = editModal.querySelector('#editBlogImageUrl')

                titleValue.value = blogData.title
                contentValue.value = blogData.content
                authorValue.value = blogData.author
                categoryValue.value = blogData.category
                imageValue.value = blogData.image


                confirmEditBtn.dataset.blogId = blogId;

            })
            .catch((err) => {
                console.error("Failed to fetch blog data:", err);
            });
    }

});
confirmDeleteBtn.addEventListener("click", () => {
    const blogId = confirmDeleteBtn.dataset.blogId;
    console.log(blogId)
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
confirmEditBtn.addEventListener("click", () => {
    const blogId = confirmEditBtn.dataset.blogId;

    if (blogId) {
        const updatedBlog = {
            title: document.getElementById("editBlogTitle").value,
            content: document.getElementById("editBlogContent").value,
            author: document.getElementById("editBlogAuthor").value,
            category: document.getElementById("editBlogCategory").value,
            image: document.getElementById("editBlogImageUrl").value,
            date: new Date().toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })
        };

        request
            .put(blogId, updatedBlog)
            .then((updatedData) => {
                console.log("Blog updated:", updatedData);
            })
            .catch((err) => {
                console.error("Failed to update blog:", err);
            });
    } else {
        console.error("Failed to retrieve blogId");
    }
});
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
