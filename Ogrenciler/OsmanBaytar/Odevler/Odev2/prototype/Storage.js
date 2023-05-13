function StorageConstructor() { };

let tempData;

StorageConstructor.prototype.getLocalStorage = function () {
    return JSON.parse(localStorage.getItem("bookList"));
}

StorageConstructor.prototype.setLocalStorage = function (localData) {
    localStorage.setItem("bookList", JSON.stringify(localData));
}

StorageConstructor.prototype.deleteLocalStorage = function (name) {
    let localData = storage.getLocalStorage(); let index = localData.indexOf(localData.find((item) => item.name === name));
    localData.splice(index, 1);
    storage.setLocalStorage(localData);
}

StorageConstructor.prototype.editLocalStorage = function () {
    isEdit = false;
    let newBook = getData();
    let localData = storage.getLocalStorage();
    let index = localData.indexOf(
        localData.find((item) => item.name === tempData.name)
    );
    localData[index] = newBook;
    console.log(localData);
    StorageConstructor.prototype.setLocalStorage(localData);
    UI.clearValues()
    UI.loadUI();

    addBookArea.classList.replace("btn-primary", "btn-success");
    addBookArea.innerHTML = "Add Book";
}

StorageConstructor.prototype.getStableStorage = function () {
    const stableData1 = new Book("Devotion", "Hannah Kent", "Love Story", new Date("2021-10-26").toISOString().split('T')[0], "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVmVV46WYj9ZpJUwpCn8nP_8XX3O2GSw8PVdEqDYv3w1AxNOqI");
    const stableData2 = new Book("I'm Sorry You Feel That Way", "Rebecca Wait", "Tragicomedy", new Date("2022-07-07").toISOString().split('T')[0], "https://m.media-amazon.com/images/I/61IRb8fjicL.jpg");
    const stableData3 = new Book("Silver Sparrow", "Tayari Jones", "Novel", new Date("2020-10-22").toISOString().split('T')[0], "https://m.media-amazon.com/images/I/81+vgllO90L._AC_UF1000,1000_QL80_.jpg");
    let stableData = [];
    stableData.push(stableData1);
    stableData.push(stableData2);
    stableData.push(stableData3);

    return stableData;
}

StorageConstructor.prototype.getFullStorage = function () {
    const stableData = StorageConstructor.prototype.getStableStorage();
    const localData = StorageConstructor.prototype.getLocalStorage();
    let fullData = stableData.concat(localData);

    return fullData;
}

StorageConstructor.prototype.getFilteredCategoryStorage = function () {
    let fullData = storage.getFullStorage();
    let filteredCategoryData = [];
    let length = fullData.length;
    for (let i = 0; i < length; i++) {
        filteredCategoryData = filteredCategoryData.concat(fullData[i].category)
    }
    return filteredCategoryData;
}

StorageConstructor.prototype.getFilteredWriterStorage = function () {
    let fullData = storage.getFullStorage();
    let filteredWriterData = [];
    let length = fullData.length;
    for (let i = 0; i < length; i++) {
        filteredWriterData = filteredWriterData.concat(fullData[i].writer)
    }
    return filteredWriterData;
}
