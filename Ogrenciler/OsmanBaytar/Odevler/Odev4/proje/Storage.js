class StorageConstructor {

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
}