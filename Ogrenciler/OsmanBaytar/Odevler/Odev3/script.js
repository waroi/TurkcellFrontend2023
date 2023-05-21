const UI = new UserInterface();
const storage = new StorageConstructor();
isEdit = false;

function mainButton() {
    isEdit ? storage.editStoragefromJson() : UI.addBlog();
}
addPostArea.addEventListener("click", mainButton);

function getData() {
    let name = document.getElementById("addTitle").value;
    let text = document.getElementById("addText").value;
    let writer = document.getElementById("addWriter").value;
    let category = document.getElementById("addCategory").value;
    let date = document.getElementById("addDate").value;
    let url = document.getElementById("addUrl").value;

    const newBlog = new Blog(name, text, writer, date, category, url);

    return newBlog;
}

// addPostArea = document.getElementById("addPostArea");
// addPostArea.addEventListener("click", UI.addBlog);

// document.addEventListener("DOMContentLoaded", UI.loadUI);

// const select = document.getElementById("sort-select");
// select.addEventListener("click", UI.sortCards);

// const searchInputTitle = document.getElementById("search-input-title");
// const searchInputWriter = document.getElementById("search-input-writer");
// searchInputTitle.addEventListener("keyup", UI.loadSearchedUI);
// searchInputWriter.addEventListener("keyup", UI.loadSearchedUI);

// filterBy = document.getElementById("filter-by");
// filterBy.addEventListener("click", UI.whichFilter);

// const firstBox = document.getElementById("first-box")
// firstBox.addEventListener("click", UI.loadIntersectedUI);

document.addEventListener("DOMContentLoaded", UI.clearValues);

filterBy.addEventListener("click", function () {
    request.get()
        .then((data) => {
            UI.whichFilter(data);
        })
        .catch((err) => console.log(err));
})

const searchInputTitle = document.getElementById("search-input-title");
searchInputTitle.addEventListener("keyup", function () {
    request.get()
        .then((data) => {
            UI.loadSearchedUI(data);
        })
        .catch((err) => console.log(err));
})

const searchInputWriter = document.getElementById("search-input-writer");
searchInputWriter.addEventListener("keyup", function () {
    request.get()
        .then((data) => {
            UI.loadSearchedUI(data);
        })
        .catch((err) => console.log(err));
})

filterWith.addEventListener("click", function () {
    request.get()
        .then((data) => {
            UI.loadSearchedUI(data);
        })
        .catch((err) => console.log(err));
})

const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("click", function () {
    request.get()
        .then((data) => {
            UI.loadSearchedUI(data);
        })
        .catch((err) => console.log(err));
})

addPostArea = document.getElementById("addPostArea");
addPostArea.addEventListener("click", function () {
    request.post(getData())
        .then((responseData) => {
            console.log('POST:', responseData);
        })
        .catch((error) => {
            console.log('POST Error:', error);
        });
})