let tempData;

class StorageConstructor {

    getStoragefromJson = function () {
        request.get()
            .then((data) => {
                const finalData = data;
                console.log(finalData);
                return finalData;
            })
            .catch((err) => console.log(err));
    }

    editStoragefromJson = function () {
        isEdit = false;
        let newBlog = getData();
        let data = storage.getStoragefromJson();
        let index = data.indexOf(
            data.find((item) => item.name === tempData.name)
        );
        data[index] = newBlog;
        UI.clearValues()
        UI.loadUI();

        addPostArea.classList.replace("btn-primary", "btn-success");
        addPostArea.innerHTML = "Add Post";
    }

    getFilteredCategoryStorage = function () {
        let fullData = storage.getStoragefromJson();
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
        let fullData = storage.getStoragefromJson();
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
        let searchedTitleData = UI.searchTitle();
        let searchedWriterData = UI.searchWriter();
        let filteredCategoryData = UI.filterCategory();
        let filteredWriterData = UI.filterWriter();

        if (filteredCategoryData.length != 0) {
            intersectedData = searchedTitleData.filter(element => {
                return searchedWriterData.includes(element) && filteredCategoryData.includes(element);
            })
        }
        else if (filteredWriterData.length != 0) {
            intersectedData = searchedTitleData.filter(element => {
                return searchedWriterData.includes(element) && filteredWriterData.includes(element);
            })
        }
        return intersectedData;
    }

    getLatestNewsStorage = function () {
        let data = storage.getStoragefromJson();
        return data.slice(0.5);
    }
}
