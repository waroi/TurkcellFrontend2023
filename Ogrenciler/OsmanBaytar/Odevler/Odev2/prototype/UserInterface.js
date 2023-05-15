function UserInterface() { };

let addModal = document.getElementById("addModal");
let modalBox = document.getElementById("modalBox");
let addBookArea = document.getElementById("addBookArea");
let bookUI = document.getElementById("bookUI");
let filterBy = document.getElementById("filter-by");
let filterWith = document.getElementById("filter-with");
let isModal = false;

UserInterface.prototype.createModal = function () {
    if (isModal == false && isEdit == false) {
        modalBox.classList.replace("d-none", "d-block");
        isModal = true;
    }
    else if (isModal == true && isEdit == false) {
        modalBox.classList.replace("d-block", "d-none");
        isModal = false;
    }
    else if (isModal == false && isEdit == true) {
        modalBox.classList.replace("d-none", "d-block");
        isModal = true;
    }
    else if (isModal == true && isEdit == true) {
        modalBox.classList.replace("d-none", "d-block");
        isModal = false;
    }
}


UserInterface.prototype.addBook = function () {
    let newBook = getData();
    let localData;
    storage.getLocalStorage() ? (localData = storage.getLocalStorage()) : (localData = []);
    localData.push(newBook);
    storage.setLocalStorage(localData);
    UI.addBox(newBook);
    UI.clearValues();
}

UserInterface.prototype.addBox = function (book) {
    let box = book.createBox();
    bookUI.appendChild(box);

    box.querySelector(".btn-danger").addEventListener("click", function () {
        box.remove();
        storage.deleteLocalStorage(book.name);
    })

    box.querySelector(".btn-warning").addEventListener("click", function () {
        UI.editBook(book);
        UI.createModal();
    })
}

UserInterface.prototype.clearValues = function () {
    document.getElementById("addName").value = "";
    document.getElementById("addWriter").value = "";
    document.getElementById("addCategory").value = "";
    document.getElementById("addDate").value = "";
    document.getElementById("addUrl").value = "";
}

UserInterface.prototype.editBook = function (book) {
    isEdit = true;
    document.getElementById("addName").value = book.name;
    document.getElementById("addWriter").value = book.writer;
    document.getElementById("addCategory").value = book.category;
    document.getElementById("addDate").value = book.date;
    document.getElementById("addUrl").value = book.url;

    addBookArea.classList.replace("btn-success", "btn-primary");
    addBookArea.innerHTML = "Save";

    tempData = book;
    window.scrollTo(0, 0);
}

UserInterface.prototype.loadUI = function () {
    filterBy.value = "none";
    let fullData = storage.getFullStorage();

    bookUI.innerHTML = "";
    fullData.map((data) => UI.addBox(new Book(data.name, data.writer, data.category, data.date, data.url)));
}

UserInterface.prototype.sortValues = function () {
    const select = document.getElementById("sort-select");
    const condition = select.options[select.selectedIndex].value;
    let data = storage.getIntersectedStorage();

    if (condition == "default") {
        return data;
    }
    else if (condition == "a-z") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (condition == "z-a") {
        data.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (condition == "dateNew") {
        data.sort((a, b) => b.date.localeCompare(a.date));
    }
    else if (condition == "dateOld") {
        data.sort((a, b) => a.date.localeCompare(b.date));
    }
    return data;
}

UserInterface.prototype.sortCards = function () {
    UserInterface.prototype.loadIntersectedUI();
}

UserInterface.prototype.search = function () {
    const searchInputValue = document.getElementById("search-input").value;
    const searchValue = searchInputValue.toLowerCase();
    let fullData = storage.getFullStorage();
    let length = fullData.length;
    let searchedData = [];
    for (let i = 0; i < length; i++) {
        let name = fullData[i].name.toLowerCase();
        if (name.includes(searchValue)) {
            searchedData = searchedData.concat(fullData[i])
        }
    }
    return searchedData;
}

UserInterface.prototype.loadSearchedUI = function () {
    let searchedData = UserInterface.prototype.search();
    if (UserInterface.prototype.sortValues()) {
        searchedData = UserInterface.prototype.sortValues();
    }
    bookUI.innerHTML = "";
    searchedData.map((data) => UI.addBox(new Book(data.name, data.writer, data.category, data.date, data.url)));
}

UserInterface.prototype.addFilteredCategory = function () {
    UI.clearFilter();
    let data = storage.getFilteredCategoryStorage();
    let option = document.createElement("option");
    option.innerHTML = "None";
    filterWith.appendChild(option);
    for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.innerHTML = data[i];
        filterWith.appendChild(option);
    }
}

UserInterface.prototype.addFilteredWriter = function () {
    UI.clearFilter();
    let data = storage.getFilteredWriterStorage();
    let option = document.createElement("option");
    option.innerHTML = "None";
    filterWith.appendChild(option);
    for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.innerHTML = data[i];
        filterWith.appendChild(option);
    }
}

UserInterface.prototype.clearFilter = function () {
    filterWith.innerHTML = "";
}

UserInterface.prototype.whichFilter = function () {
    if (filterBy.value == "category") {
        UI.addFilteredCategory();
    }
    else if (filterBy.value == "writer") {
        UI.addFilteredWriter();
    }
    else {
        UI.clearFilter();
    }
}

UserInterface.prototype.filterCategory = function () {
    let filterValue = filterWith.value.toLowerCase();
    let fullData = storage.getFullStorage();
    let length = fullData.length;
    let filteredData = [];
    if (filterValue == "none") {
        fullData = storage.getFullStorage();
        return fullData;
    }
    for (let i = 0; i < length; i++) {
        let category = fullData[i].category.toLowerCase();
        if (category == filterValue) {
            filteredData = filteredData.concat(fullData[i])
        }
    }
    return filteredData;
}

UserInterface.prototype.filterWriter = function () {
    let filterValue = filterWith.value.toLowerCase();
    let fullData = storage.getFullStorage();
    let length = fullData.length;
    let filteredData = [];
    if (filterValue == "none") {
        fullData = storage.getFullStorage();
        return fullData;
    }
    for (let i = 0; i < length; i++) {
        let writer = fullData[i].writer.toLowerCase();
        if (writer.includes(filterValue)) {
            filteredData = filteredData.concat(fullData[i])
        }
    }
    return filteredData;
}

UserInterface.prototype.loadIntersectedUI = function () {
    let data = storage.getIntersectedStorage();
    if (UserInterface.prototype.sortValues()) {
        data = UserInterface.prototype.sortValues();
    }
    bookUI.innerHTML = "";
    data.map((data) => UI.addBox(new Book(data.name, data.writer, data.category, data.date, data.url)));
}