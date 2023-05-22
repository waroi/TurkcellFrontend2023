const addModal = document.querySelector("#addNewPostModal");
const postAuthorInput = document.querySelector("#postAuthorInput");
const postTitleInput = document.querySelector("#postTitleInput");
const postContentInput = document.querySelector("#postContentInput");
const postCategoryInput = document.querySelector("#postCategoryInput");
const urlInput = document.querySelector("#urlInput");
const datePublicationInput = document.querySelector("#datePublicationInput");
const addListButton = document.querySelector("#addListButton");
const postList = document.querySelector("#post-list");
const deleteButton = document.querySelector("#deletePost");
const updateButton = document.querySelector("#updatePost");
const readMore = document.querySelector("#readMore");
const searchInput = document.querySelector('#searchInput');
const categories = document.querySelector('.categories');
const mobileCategories = document.querySelector('.mobileCategories');
const goHome = document.querySelector('#goHome');
const sortAz = document.querySelector('#sortAz');
const sortZa = document.querySelector('#sortZa');
const sortLatest = document.querySelector('#latest');
const sortOldest = document.querySelector('#oldest');



const request = new Request("http://localhost:3000/posts");
const ui = new UI();

getAllItems();
eventListeners();

function eventListeners() {

    addListButton.addEventListener('click', addPost);
    postList.addEventListener('click', deletePost);
    postList.addEventListener('click', updatePost);
    postList.addEventListener('click', readMorePost);
    searchInput.addEventListener('keyup', searchPost);
    categories.addEventListener('click', filterPost);
    mobileCategories.addEventListener('click', filterPost);
    sortAz.addEventListener('click', sortPostAz);
    sortZa.addEventListener('click', sortPostZa);
    sortLatest.addEventListener('click', sortPostLatest);
    sortOldest.addEventListener('click', sortPostOldest);
}


function getAllItems() {
    request
        .get()
        .then((posts) => {
            ui.loadAllPostsToUI(posts);
        })
        .catch((err) => {
            console.log(err);
        });
}

function addPost(e) {
    const postAuthor = postAuthorInput.value.trim();
    const postTitle = postTitleInput.value.trim();
    const postContent = postContentInput.value.trim();
    const postCategory = postCategoryInput.value.trim();
    const url = urlInput.value.trim();
    const datePublication = datePublicationInput.value.trim();

    if (postAuthor === "" || postTitle === "" || postContent === "" || postCategory === "" || url === "" || datePublication === "") {
        ui.showAlert('Please fill in all fields!', 'danger');
    }
    else {
        request
            .post({
                author: postAuthor,
                title: postTitle,
                content: postContent,
                category: postCategory,
                url: url,
                date: datePublication,
            })
            .then((post) => {
                ui.addPostToUI(post);
                ui.showAlert('Post added successfully!', 'success');
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }

    e.preventDefault();
}

function deletePost(e) {
    if (e.target.id === 'deletePost') {
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        request
            .delete(id)
            .then((message) => {
                console.log(message);
                ui.deletePostFromUI(e.target);
                ui.showAlert('Post deleted successfully!', 'danger');
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }
    e.preventDefault();
};

function updatePost(e) {
    if (e.target.id === 'updatePost') {
        let updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
        updateModal.show();

        const updateAuthor = document.querySelector("#updateAuthor");
        const updateTitle = document.querySelector("#updateTitle");
        const updateContent = document.querySelector("#updateContent");
        const updateCategory = document.querySelector("#updateCategory");
        const updateUrl = document.querySelector("#updateUrl");
        const updateDate = document.querySelector("#updateDate");
        const updateButton = document.querySelector("#updateButton");
        const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
        const card = e.target.parentElement.parentElement.parentElement.parentElement;

        request
            .get()
            .then((posts) => {
                posts.forEach(post => {
                    if (post.id == id) {
                        updateAuthor.value = post.author;
                        updateTitle.value = post.title;
                        updateContent.value = post.content;
                        updateCategory.value = post.category;
                        updateUrl.value = post.url;
                        updateDate.value = post.date;
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });

        updateButton.addEventListener('click', function () {
            request
                .put(id, {
                    url: updateUrl.value,
                    author: updateAuthor.value,
                    title: updateTitle.value,
                    content: updateContent.value,
                    category: updateCategory.value,
                    date: updateDate.value

                })
                .then((post) => {
                    ui.updatePostFromUI(post, card);
                    ui.showAlert('Post updated successfully!', 'success');

                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            e.preventDefault();

        });
    }
    e.preventDefault();
}

function readMorePost(e) {
    if (e.target.id === 'readMore') {
        ui.readMorePostFromUI(e.target.parentElement.parentElement.parentElement);
    }
    e.preventDefault();
}

function searchPost(e) {
    const searchValue = e.target.value.toLowerCase();
    ui.searchPostInUI(searchValue);
}

const filteredPosts = [];

function filterPost(e, filteredPosts) {
    // goHome.addEventListener('click', getAllItems);
    this.filteredPosts = filteredPosts;
    filteredPosts = [];
    const category = e.target.id;
    ui.filterPostInUI(category, filteredPosts);
    e.preventDefault();
}

function sortPostAz(e) {
    const postList = document.querySelectorAll("#post-title");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    }
    );
    postListArray.map(function (post) {
        const card = post.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedPosts.push(card);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}
function sortPostZa(e) {
    const postList = document.querySelectorAll("#post-title");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    }
    );

    postListArray.map(function (post) {
        const card = post.parentElement.parentElement.parentElement;
        if (card.style.display !== "none") {
            sortedPosts.push(card);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}

function sortPostLatest(e) {
    const postList = document.querySelectorAll("#post-date");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return b.textContent.localeCompare(a.textContent);
    }
    );
    postListArray.map(function (post) {
        const card = post.parentElement;
        if (card.parentElement.parentElement.parentElement.style.display !== "none") {
            sortedPosts.push(card.parentElement.parentElement.parentElement);
        }
    });
    ui.sortPost(sortedPosts);
    e.preventDefault();
}

function sortPostOldest(e) {
    const postList = document.querySelectorAll("#post-date");
    const postListArray = Array.from(postList);
    const sortedPosts = [];
    postListArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    }
    );

    postListArray.map(function (post) {
        const card = post.parentElement;
        if (card.parentElement.parentElement.parentElement.style.display !== "none") {
            sortedPosts.push(card.parentElement.parentElement.parentElement);
        }
    });

    ui.sortPost(sortedPosts);
    e.preventDefault();
}