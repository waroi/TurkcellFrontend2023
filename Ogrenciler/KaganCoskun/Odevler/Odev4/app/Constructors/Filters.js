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
        let SortedDAta = [];
       if(sortType === "nameAZ"){
        SortedDAta = [...data].sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            
        }
        else if(sortType === "nameZA"){
            SortedDAta = [...data].sort((a,b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
            
        }
        else if(sortType === "expensive"){
            SortedDAta = data.sort((a,b) => {
                return b.totalPrice-a.totalPrice;  
            });
            
        }
        else if(sortType === "cheap"){
            SortedDAta = data.sort((a,b) => {
                return a.totalPrice-b.totalPrice;
            });
            
        }
        return SortedDAta;

    }
}