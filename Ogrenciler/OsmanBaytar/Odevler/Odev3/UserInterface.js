let blogUI = document.getElementById("blogUI");
let filterBy = document.getElementById("filter-by");
let filterWith = document.getElementById("filter-with");
let addPostArea = document.getElementById("addPostArea");
let shortNews = document.getElementById("shortNews");


class UserInterface {
    addBlog = function () {
        let newBlog = getData();
        UI.addCard(newBlog);
        UI.clearValues();
    }

    findIdtoDelete = function (getData) {
        let title = getData.title;
        request.get()
            .then((data) => {
                data.forEach(function (item) {
                    if (item.title == title) {
                        request.delete(item.id)
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((err) => console.log(err));
                    }
                })
            })
            .catch((err) => console.log(err));
    }

    addCard = function (newBlog) {
        let card = newBlog.createCard();
        blogUI.appendChild(card);
        let cardImage = document.querySelector(".card-image");


        cardImage.addEventListener("click", UI.openDisplay);

        card.querySelector(".btn-danger").addEventListener("click", function () {
            UI.findIdtoDelete(newBlog);
            card.remove();
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
        document.getElementById("addTitle").value = blog.title;
        document.getElementById("addText").value = blog.text;
        document.getElementById("addWriter").value = blog.writer;
        document.getElementById("addCategory").value = blog.category;
        document.getElementById("addDate").value = blog.date;
        document.getElementById("addUrl").value = blog.url;

        window.scrollTo(0, document.body.scrollHeight)

        let editPostArea = document.getElementById("editPostArea");
        editPostArea.addEventListener("click", function () {
            let oldTitle = blog.title;
            request.get()
                .then((data) => {
                    data.forEach(function (item) {
                        if (item.title == oldTitle) {
                            request.put(item.id, getData())
                                .then((data) => {
                                    console.log(data);
                                })
                                .catch((err) => console.log(err));
                        }
                    })
                })
                .catch((err) => console.log(err));
        });
    }

    openDisplay = function () {
        let closeButton = document.querySelector(".btn-dark");
        closeButton.classList.remove("d-none");
        let pText = document.querySelector(".card-text");
        pText.classList.replace("d-none", "d-block");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-lg-4", "col-12");
        boxArea.classList.remove("col-md-6");
    }

    closeDisplay = function () {
        let closeButton = document.querySelector(".btn-dark");
        closeButton.classList.add("d-none");
        let pText = document.querySelector(".card-text");
        pText.classList.replace("d-block", "d-none");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-12", "col-lg-4");
        boxArea.classList.add("col-md-6");
    }

    loadSearchedUI = function (fullData) {

        const searchInputValueTitle = document.getElementById("search-input-title").value;
        const searchValueTitle = searchInputValueTitle.toLowerCase();
        let lengthTitle = fullData.length;
        let searchedDataTitle = [];
        for (let i = 0; i < lengthTitle; i++) {
            let title = fullData[i].title.toLowerCase();
            if (title.includes(searchValueTitle)) {
                searchedDataTitle = searchedDataTitle.concat(fullData[i])
            }
        }

        const searchInputValueWriter = document.getElementById("search-input-writer").value;
        const searchValueWriter = searchInputValueWriter.toLowerCase();
        let lengthWriter = fullData.length;
        let searchedDataWriter = [];
        for (let i = 0; i < lengthWriter; i++) {
            let writer = fullData[i].writer.toLowerCase();
            if (writer.includes(searchValueWriter)) {
                searchedDataWriter = searchedDataWriter.concat(fullData[i])
            }
        }

        let intersectedData = searchedDataTitle.filter(element => searchedDataWriter.includes(element));
        let filterValue = filterWith.value.toLowerCase();

        let filterValueCategory = filterWith.value.toLowerCase();
        let lengthFilterCategory = fullData.length;
        let filteredDataCategory = [];
        if (filterValue == "none" || filterValue == "") {
            filteredDataCategory = fullData;
        }
        else {
            for (let i = 0; i < lengthFilterCategory; i++) {
                let category = fullData[i].category.toLowerCase();
                if (category == filterValueCategory) {
                    filteredDataCategory = filteredDataCategory.concat(fullData[i])
                }
            }
        }

        let filterValueWriter = filterWith.value.toLowerCase();
        let lengthFilterWriter = fullData.length;
        let filteredDataWriter = [];
        if (filterValue == "none" || filterValue == "") {
            filteredDataWriter = fullData;
        }
        else {

            for (let i = 0; i < lengthFilterWriter; i++) {
                let writer = fullData[i].writer.toLowerCase();

                if (writer.includes(filterValueWriter)) {
                    filteredDataWriter = filteredDataWriter.concat(fullData[i])

                }
            }
        }

        if (filteredDataCategory.length != 0 && filteredDataCategory.length != fullData.length) {
            const findIntersection = intersectedData.filter(item => filteredDataCategory.includes(item));
            intersectedData = findIntersection;

        }
        else if (filteredDataWriter.length != 0 && filteredDataWriter.length != fullData.length) {
            const findIntersection = intersectedData.filter(item => filteredDataWriter.includes(item));
            intersectedData = findIntersection;

        }

        const select = document.getElementById("sort-select");
        const condition = select.options[select.selectedIndex].value;

        if (condition == "default") {
            intersectedData = intersectedData;
        }
        else if (condition == "title-a-z") {
            intersectedData = intersectedData.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (condition == "title-z-a") {
            intersectedData = intersectedData.sort((a, b) => b.title.localeCompare(a.title));
        }
        else if (condition == "writer-a-z") {
            intersectedData = intersectedData.sort((a, b) => a.writer.localeCompare(b.writer));
        }
        else if (condition == "writer-z-a") {
            intersectedData = intersectedData.sort((a, b) => b.writer.localeCompare(a.writer));
        }
        else if (condition == "dateNew") {
            intersectedData = intersectedData.sort((a, b) => b.date.localeCompare(a.date));
        }
        else if (condition == "dateOld") {
            intersectedData = intersectedData.sort((a, b) => a.date.localeCompare(b.date));
        }

        blogUI.innerHTML = "";
        intersectedData.map((data) => UI.addCard(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }

    clearFilter = function () {
        filterWith.innerHTML = "";
    }

    addFilteredCategory = function (data) {
        UI.clearFilter();
        let option = document.createElement("option");
        option.innerHTML = "None";
        filterWith.appendChild(option);
        for (let i = 0; i < data.length; i++) {
            option = document.createElement("option");
            option.innerHTML = data[i];
            filterWith.appendChild(option);
        }
    }

    addFilteredWriter = function (data) {
        UI.clearFilter();
        let option = document.createElement("option");
        option.innerHTML = "None";
        filterWith.appendChild(option);
        for (let i = 0; i < data.length; i++) {
            option = document.createElement("option");
            option.innerHTML = data[i];
            filterWith.appendChild(option);
        }
    }

    whichFilter = function (data) {
        if (filterBy.value == "category") {
            storage.getFilteredCategoryStorage(data);
        }
        else if (filterBy.value == "writer") {
            storage.getFilteredWriterStorage(data);
        }
        else {
            UI.clearFilter();
        }
    }

    addLatestNews = function (newLatest) {
        let newShort = newLatest.createLatestPost();
        shortNews.appendChild(newShort);
    }

    loadLatestNews = function (fullData) {
        fullData = fullData.sort((a, b) => b.date.localeCompare(a.date));
        let firstFive = fullData.slice(0, 5);
        shortNews.innerHTML = "";
        firstFive.map((data) => UI.addLatestNews(new Blog(data.title, data.text, data.writer, data.date, data.category, data.url)));
    }
}