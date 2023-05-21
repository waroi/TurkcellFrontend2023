// window.addEventListener('DOMContentLoaded', () => {
//     let scrollPos = 0;
//     const mainNav = document.getElementById('mainNav');
//     const headerHeight = mainNav.clientHeight;
//     window.addEventListener('scroll', function() {
//         const currentTop = document.body.getBoundingClientRect().top * -1;
//         if ( currentTop < scrollPos) {
//             // Scrolling Up
//             if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-visible');
//             } else {
//                 console.log(123);
//                 mainNav.classList.remove('is-visible', 'is-fixed');
//             }
//         } else {
//             // Scrolling Down
//             mainNav.classList.remove(['is-visible']);
//             if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
//                 mainNav.classList.add('is-fixed');
//             }
//         }
//         scrollPos = currentTop;
//     });
// })

let dataID;

let category = document.getElementById("blogCategory");
let title = document.getElementById("blogTitle");
let fullName = document.getElementById("fullName");
let image = document.getElementById("blokImage");
let date = document.getElementById("date");
let content = document.getElementById("content");
let modalContent = document.getElementById("modalContent");
let myModal = document.getElementById("myModal");
let searchInput = document.getElementById("searchInput");
let filterSelect = document.getElementById("filterSelect");

let request = new BlogRequest();
let ui = new UserInterface();

let newBlogButton = document.getElementById("newBlog");
let updateBlogButton = document.getElementById("updateBlog")
let blogList = document.getElementById("blogList");
let editBlogTitle = document.getElementById("editBlogTitle");
let addBlogTitle = document.getElementById("addBlogTitle");

newBlogButton.addEventListener("click", addNewBlog);
blogList.addEventListener("click", deleteBlog);
blogList.addEventListener("click", editBlog);
blogList.addEventListener("click", showModal);
updateBlogButton.addEventListener("click", updateBlog);
searchInput.addEventListener("keyup", searchForABlog);
filterSelect.addEventListener("change", filterBlogs);

document.addEventListener("DOMContentLoaded", async function () {
    await getAllBlogsFromServer();
    getBlogCategories();
});

function addNewBlog(event) {
    event.preventDefault();
    let blogCategory = category.value;
    let blogTitle = title.value;
    let blogAuthor = fullName.value;
    let blogImage = image.value;
    let blogDate = date.value;
    let blogContent = content.value;

    let newBlogObject = new BlogObject(blogCategory, blogTitle, blogAuthor, blogImage, blogDate, blogContent);

    request.post(newBlogObject)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    clearInputs();
}

function deleteBlog(e) {
    //e.preventDefault();
    if (e.target.id == "deleteBlog" || e.target.parentElement.parentElement.id == "deleteBlog") {
        const parent = e.target.closest('.col-4');
        const dataID = parent.getAttribute('dataid');
        request.delete(dataID).then((data) => data).catch((err) => err);
        ui.deleteBlogFromUI(parent);
    }
}

function editBlog(e) {
    if (e.target.id == "editBlog" || e.target.parentElement.parentElement.id == "editBlog") {
        const parent = e.target.closest('.col-4');
        dataID = parent.getAttribute('dataid');

        newBlogButton.classList.add("d-none");
        addBlogTitle.classList.add("d-none");
        updateBlogButton.classList.remove("d-none");
        editBlogTitle.classList.remove("d-none");

        request.get().then((data) => {
            data.forEach((element) => {
                console.log(element)
                if (element.id == dataID) {
                    category.value = element.category;
                    title.value = element.title;
                    fullName.value = element.author;
                    image.value = element.image;
                    date.value = element.date;
                    content.value = element.content;
                }
            })
        })
    }
}

function updateBlog(event) {
    event.preventDefault();
    let blogCategory = category.value;
    let blogTitle = title.value;
    let blogAuthor = fullName.value;
    let blogImage = image.value;
    let blogDate = date.value;
    let blogContent = content.value;

    let updatedBlogObject = new BlogObject(blogCategory, blogTitle, blogAuthor, blogImage, blogDate, blogContent);

    request.put(dataID, updatedBlogObject).then((data) => data).catch((err) => err);
    ui.updateBlogUI(dataID, updatedBlogObject);

    newBlogButton.classList.remove("d-none");
    addBlogTitle.classList.remove("d-none");
    updateBlogButton.classList.add("d-none");
    editBlogTitle.classList.add("d-none");
    clearInputs();
}

async function getAllBlogsFromServer() {
    await request.get().then((data) => {
        data.forEach(element => {
            ui.addBlogToUI(element);
        });
    })
}


function searchForABlog(e) {
    const filterValue = e.target.value.toLowerCase();
    const books = document.querySelectorAll(".blog-item");
    books.forEach((blogItem) => {
        const text = blogItem.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            blogItem.classList.remove("d-none");
        }
        else {
            blogItem.classList.add("d-none");
        }
    })
}

function getBlogCategories() {
    const categories = document.querySelectorAll(".category");
    let categoryArray = [];
    categories.forEach((category) => {
        categoryArray.push(category.innerText);
    })
    categoryArray = Array.from(new Set(categoryArray));
    categoryArray.forEach((category) => {
        filterSelect.innerHTML += `<option>${category}</option>`;
    })
}

function filterBlogs() {
    const categoryValue = filterSelect.value.toLowerCase();
    const blogs = document.querySelectorAll(".blog-item");
    blogs.forEach(blog => {
        const category = blog.textContent.toLocaleLowerCase().includes(categoryValue) || categoryValue === "hepsi";
        if (category) {
            blog.classList.remove("d-none");
        } else {
            blog.classList.add("d-none");
        }
    });
}

async function showModal(e) {
    if (e.target.id == "seeMore") {
        let blogToShow;
        const parent = e.target.closest('.col-4');
        dataID = parent.getAttribute('dataid');

        try {
            const data = await request.get();
            data.forEach((element) => {
                if (element.id == dataID) {
                    blogToShow = {
                        category: element.category,
                        title: element.title,
                        author: element.author,
                        image: element.image,
                        date: element.date,
                        content: element.content
                    };
                }
            });

            ui.showModal(blogToShow);
        }
        catch (err) {
            console.error(err);
        }
    }
}

function clearInputs() {
    category.value = "";
    title.value = "";
    fullName.value = "";
    image.value = "";
    date.value = "";
    content.value = "";
}

