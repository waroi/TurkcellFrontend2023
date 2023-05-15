let tempData;

class StorageConstructor {

    getLocalStorage = function () {
        return JSON.parse(localStorage.getItem("bookList"));
    }
    setLocalStorage = function (localData) {
        localStorage.setItem("bookList", JSON.stringify(localData));
    }
    deleteLocalStorage = function (name) {
        let localData = storage.getLocalStorage(); let index = localData.indexOf(localData.find((item) => item.name === name));
        localData.splice(index, 1);
        storage.setLocalStorage(localData);
    }
    editLocalStorage = function () {
        isEdit = false;
        let newBook = getData();
        let localData = storage.getLocalStorage();
        let index = localData.indexOf(
            localData.find((item) => item.name === tempData.name)
        );
        localData[index] = newBook;
        storage.setLocalStorage(localData);
        UI.clearValues()
        UI.loadUI();

        addBookArea.classList.replace("btn-primary", "btn-success");
        addBookArea.innerHTML = "Add Book";
    }
    getStableStorage = function () {
        const stableData1 = new Book("Devotion", "Hannah Kent", "Love Story", new Date("2021-10-26").toISOString().split('T')[0], "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVmVV46WYj9ZpJUwpCn8nP_8XX3O2GSw8PVdEqDYv3w1AxNOqI");
        const stableData2 = new Book("I'm Sorry You Feel That Way", "Rebecca Wait", "Tragicomedy", new Date("2022-07-07").toISOString().split('T')[0], "https://m.media-amazon.com/images/I/61IRb8fjicL.jpg");
        const stableData3 = new Book("Silver Sparrow", "Tayari Jones", "Novel", new Date("2020-10-22").toISOString().split('T')[0], "https://m.media-amazon.com/images/I/81+vgllO90L._AC_UF1000,1000_QL80_.jpg");
        const stableData4 = new Book("Burial Rites", "Hannah Kent", "Novel", new Date("2013-11-09").toISOString().split('T')[0], "https://m.media-amazon.com/images/I/81LL9anKoWL._AC_UF894,1000_QL80_.jpg")
        const stableData5 = new Book("An American Marriage", "Tayari Jones", "Love Story", new Date("2018-04-17").toISOString().split('T')[0], "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1491493625i/33590210.jpg")
        let stableData = [];
        stableData.push(stableData1);
        stableData.push(stableData2);
        stableData.push(stableData3);
        stableData.push(stableData4);
        stableData.push(stableData5);

        return stableData;
    }
    getFullStorage = function () {
        const stableData = storage.getStableStorage();
        const localData = storage.getLocalStorage();
        let fullData = stableData.concat(localData);

        return fullData;
    }
    getFilteredCategoryStorage = function () {
        let fullData = storage.getFullStorage();
        let filteredCategoryData = [];
        let length = fullData.length;
        for (let i = 0; i < length; i++) {
            filteredCategoryData = filteredCategoryData.concat(fullData[i].category)
        }
        let uniqueFilteredCategoryData = filteredCategoryData.filter(function (item, index) {
            return filteredCategoryData.indexOf(item) === index;
        });
        return uniqueFilteredCategoryData;
    }
    getFilteredWriterStorage = function () {
        let fullData = storage.getFullStorage();
        let filteredWriterData = [];
        let length = fullData.length;
        for (let i = 0; i < length; i++) {
            filteredWriterData = filteredWriterData.concat(fullData[i].writer)
        }
        let uniqueFilteredWriterData = filteredWriterData.filter(function (item, index) {
            return filteredWriterData.indexOf(item) === index;
        });
        return uniqueFilteredWriterData;
    }
    getIntersectedStorage = function () {
        let intersectedData = [];
        let searchedData = UI.search();
        let filteredCategoryData = UI.filterCategory();
        let filteredWriterData = UI.filterWriter();

        if (filteredCategoryData.length != 0) {
            intersectedData = searchedData.filter(function (item1) {
                return filteredCategoryData.some(function (item2) {
                    return item1.name === item2.name;
                });
            });
        }
        else if (filteredWriterData.length != 0) {
            intersectedData = searchedData.filter(function (item1) {
                return filteredWriterData.some(function (item2) {
                    return item1.name === item2.name;
                });
            });
        }
        return intersectedData;
    }
}
