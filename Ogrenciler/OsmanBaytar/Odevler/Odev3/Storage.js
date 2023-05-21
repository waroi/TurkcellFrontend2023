let tempData;

class StorageConstructor {

    // getStoragefromJson = function () {
    //     request.get()
    //         .then((data) => {
    //             const finalData = data;
    //             return finalData;
    //         })
    //         .catch((err) => console.log(err));
    // }

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

    getFilteredCategoryStorage = function (fullData) {
        let filteredCategoryData = [];
        let length = fullData.length;
        for (let i = 0; i < length; i++) {
            filteredCategoryData = filteredCategoryData.concat(fullData[i].category)
        }
        let uniqueFilteredCategoryData = filteredCategoryData.filter(function (item, index) {
            return filteredCategoryData.indexOf(item) === index;
        });
        UI.addFilteredCategory(uniqueFilteredCategoryData);
    }

    getFilteredWriterStorage = function (fullData) {
        let filteredWriterData = [];
        let length = fullData.length;
        for (let i = 0; i < length; i++) {
            filteredWriterData = filteredWriterData.concat(fullData[i].writer)
        }
        let uniqueFilteredWriterData = filteredWriterData.filter(function (item, index) {
            return filteredWriterData.indexOf(item) === index;
        });
        UI.addFilteredWriter(uniqueFilteredWriterData);
    }
}
