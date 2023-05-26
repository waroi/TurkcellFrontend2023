class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    addCategoryToFilterUi(){
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${this.id}" id="${this.name}${this.id}">
            <label class="form-check-label" for="${this.name}${this.id}">${this.name}</label>
          </div>`;

        return listItem;
    }

    addCategoryToCreateProductModal(){
        let option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;

        return option;
    }
}