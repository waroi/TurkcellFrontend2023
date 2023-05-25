class Filter{
    static search(searchInput,filteredProductData){
        filteredProductData = filteredProductData.filter(product => {
            return product.name.toLowerCase().includes(searchInput);
        });
        return filteredProductData
    }

   static getSelectedCategories(){
        let selectedCategories = [];
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        checkboxes.forEach((checkbox) => {
            selectedCategories.push(checkbox.value);
        });
        return selectedCategories;
    }

    static categoryFilter(){
        const selectedCategories = this.getSelectedCategories();
        const queryString = selectedCategories.map(item => `category=${item}`).join('&');
        return queryString;
    }

    static sort(data,sortType){

        if(sortType === "nameAZ"){
            data = data.sort((a,b) => {
                return a.name.localeCompare(b.name);
            });
        }
        else if(sortType === "nameZA"){
            data = data.sort((a,b) => {
                return b.name.localeCompare(a.name);
            });
        }
        else if(sortType === "expensive"){
            data = data.sort((a,b) => {
                return b.totalPrice-a.totalPrice;  
            });
        }
        else if(sortType === "cheap"){
            data = data.sort((a,b) => {
                return a.totalPrice-b.totalPrice;
            });
        }
        return data;

    }
}