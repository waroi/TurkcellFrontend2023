let blogUI = document.getElementById("blogUI");
let filterBy = document.getElementById("filter-by");
let filterWith = document.getElementById("filter-with");
let addPostArea = document.getElementById("addPostArea");
let shortNews = document.getElementById("shortNews");

class UserInterface {
    addBlog = function () {
        let newBlog = getData();
        let jsonData;
        storage.getStoragefromJson ? (jsonData = storage.getStoragefromJson()) : (jsonData = []);
        UI.addCard(newBlog);
        UI.clearValues();
    }

    addCard = function (newBlog) {
        let card = newBlog.createCard();
        blogUI.appendChild(card);
        let cardImage = document.querySelector(".card-image");

        cardImage.addEventListener("click", UI.openDisplay);
        card.querySelector(".btn-danger").addEventListener("click", function () {
            card.remove();
            // storage.deleteLocalStorage(book.name);
        })

        card.querySelector(".btn-warning").addEventListener("click", function () {
            UI.editBlog(newBlog);
        })


        card.querySelector(".btn-dark").addEventListener("click", function () {
            UI.closeDisplay();

        })
    }

    clearValues = function () {
        document.getElementById("addTitle").value = "";
        document.getElementById("addText").value = "";
        document.getElementById("addWriter").value = "";
        document.getElementById("addCategory").value = "";
        document.getElementById("addDate").value = "";
        document.getElementById("addUrl").value = "";
    }

    editBlog = function (blog) {
        isEdit = true;
        document.getElementById("addTitle").value = blog.title;
        document.getElementById("addText").value = blog.text;
        document.getElementById("addWriter").value = blog.writer;
        document.getElementById("addCategory").value = blog.category;
        document.getElementById("addDate").value = blog.date;
        document.getElementById("addUrl").value = blog.url;

        addPostArea.classList.replace("btn-success", "btn-primary");
        addPostArea.innerHTML = "Save";

        tempData = blog;
        // window.scrollTo(0, 0);
    }

    openDisplay = function () {
        let pText = document.querySelector(".card-text");
        pText.classList.replace("d-none", "d-block");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-lg-4", "col-12");
        boxArea.classList.remove("col-sm-6");
        let cardImage = document.querySelector(".card-image");
        cardImage.classList.add("w-25");
    }

    closeDisplay = function () {
        let pText = document.querySelector(".card-text");
        pText.classList.replace("d-block", "d-none");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-12", "col-lg-4");
        boxArea.classList.add("col-sm-6");
        let cardImage = document.querySelector(".card-image");
        cardImage.classList.remove("w-25");
    }

    loadUI = function () {
        filterBy.value = "none";
        fullData = storage.getStoragefromJson();
        blogUI.innerHTML = "";
        fullData.map((data) => UI.addCard(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }

    sortValues = function () {
        const select = document.getElementById("sort-select");
        const condition = select.options[select.selectedIndex].value;
        let data = storage.getIntersectedStorage();

        if (condition == "default") {
            return data;
        }
        else if (condition == "title-a-z") {
            data.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (condition == "title-z-a") {
            data.sort((a, b) => b.title.localeCompare(a.title));
        }
        else if (condition == "writer-a-z") {
            data.sort((a, b) => a.writer.localeCompare(b.writer));
        }
        else if (condition == "writer-z-a") {
            data.sort((a, b) => b.writer.localeCompare(a.writer));
        }
        else if (condition == "dateNew") {
            data.sort((a, b) => b.date.localeCompare(a.date));
        }
        else if (condition == "dateOld") {
            data.sort((a, b) => a.date.localeCompare(b.date));
        }
        return data;
    }

    sortCards = function () {
        UI.loadIntersectedUI();
    }

    searchTitle = function () {
        const searchInputValue = document.getElementById("search-input-title").value;
        const searchValue = searchInputValue.toLowerCase();
        let fullData = storage.getStoragefromJson();
        let length = fullData.length;
        let searchedData = [];
        for (let i = 0; i < length; i++) {
            let title = fullData[i].title.toLowerCase();
            if (title.includes(searchValue)) {
                searchedData = searchedData.concat(fullData[i])
            }
        }
        return searchedData;
    }

    searchWriter = function () {
        const searchInputValue = document.getElementById("search-input-writer").value;
        const searchValue = searchInputValue.toLowerCase();
        let fullData = storage.getStoragefromJson();
        let length = fullData.length;
        let searchedData = [];
        for (let i = 0; i < length; i++) {
            let writer = fullData[i].writer.toLowerCase();
            if (writer.includes(searchValue)) {
                searchedData = searchedData.concat(fullData[i])
            }
        }
        return searchedData;
    }

    loadSearchedUI = function () {
        let searchedDataTitle = UI.searchTitle();
        let searchedDataWriter = UI.searchWriter();
        let intersectedData = searchedDataTitle.filter(element => searchedDataWriter.includes(element));
        if (UI.sortValues()) {
            intersectedData = UI.sortValues();
        }
        bookUI.innerHTML = "";
        intersectedData.map((data) => UI.addCard(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }

    clearFilter = function () {
        filterWith.innerHTML = "";
    }

    addFilteredCategory = function () {
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

    addFilteredWriter = function () {
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

    whichFilter = function () {
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

    filterCategory = function () {
        let filterValue = filterWith.value.toLowerCase();
        let fullData = storage.getStoragefromJson();
        let length = fullData.length;
        let filteredData = [];
        if (filterValue == "none") {
            fullData = storage.getStoragefromJson();
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

    filterWriter = function () {
        let filterValue = filterWith.value.toLowerCase();
        let fullData = storage.getStoragefromJson();
        let length = fullData.length;
        let filteredData = [];
        if (filterValue == "none") {
            fullData = storage.getStoragefromJson();
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

    loadIntersectedUI = function () {
        let data = storage.getIntersectedStorage();
        if (UI.sortValues()) {
            data = UI.sortValues();
        }
        blogUI.innerHTML = "";
        data.map((data) => UI.addCard(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }

    addLatestNews = function (newLatest) {
        let newShort = newLatest.createLatestPost();
        shortNews.appendChild(newShort);
    }

    loadLatestNews = function () {
        fullData = storage.getLatestNewsStorage();
        shortNews.innerHTML = "";
        fullData.map((data) => UI.addLatestNews(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }
}


