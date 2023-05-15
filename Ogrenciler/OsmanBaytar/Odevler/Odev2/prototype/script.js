const UI = new UserInterface();
const storage = new StorageConstructor();

addModal.addEventListener("click", UI.createModal);
isEdit = false;

function mainButton() {
    isEdit ? storage.editLocalStorage() : UI.addBook();
}

addBookArea.addEventListener("click", mainButton);

function getData() {
    let name = document.getElementById("addName").value;
    let writer = document.getElementById("addWriter").value;
    let category = document.getElementById("addCategory").value;
    let date = document.getElementById("addDate").value;
    let url = document.getElementById("addUrl").value;
    const newBook = new Book(name, writer, category, date, url);

    return newBook;
}

document.addEventListener("DOMContentLoaded", UI.loadUI);

const select = document.getElementById("sort-select");
select.addEventListener("click", UI.sortCards);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", UI.loadSearchedUI);

filterBy = document.getElementById("filter-by");
filterBy.addEventListener("click", UI.whichFilter);
const firstBox = document.getElementById("first-box")
firstBox.addEventListener("click", UI.loadIntersectedUI);