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







const request = new Request("http://localhost:3000/posts");
const ui = new UI();
getAllItems();
eventListeners();

function eventListeners() {
    addModal.addEventListener('shown.bs.modal', function () {
        addListButton.addEventListener('click', addPost); // Modal butonuna event listener ekleme
    });

    postList.addEventListener('click', deletePost);
    // postList.addEventListener('click', updatePost);
    // searchInput.addEventListener('keyup', searchBook);
    // sortAz.addEventListener('click', sortBookAz);
    // sortZa.addEventListener('click', sortBookZa);
    // sortLatest.addEventListener('click', sortBookLatest);
    // sortOldest.addEventListener('click', sortBookOldest);
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
        alert("Lütfen Boş Alan Bırakmayınız.");
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
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );



    }

    function deletePost(e) {
    }

    function updatePost(e) { }

    function filterPost(e) { }

    function searchPost(e) { }

    function sortPostAZ(e) { }

    function sortPostDate(e) { }


}

// function deletePost(e) {
//     if (e.target.id === "deletePost") {
//         const id = e.target.parentElement.parentElement.getAttribute("data-id");
//         request
//             .delete(id)
//             .then((message) => {
//                 ui.deletePostFromUI(e.target.parentElement.parentElement);
//                 console.log(e.target.parentElement.parentElement);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });


//     }
// }
