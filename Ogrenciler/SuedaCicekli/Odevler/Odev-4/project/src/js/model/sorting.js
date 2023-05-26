class Sorting {
  static main() {
    sortingCheckbox.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          sortingCheckbox.forEach((otherCheckbox) => {
            if (otherCheckbox !== this) {
              otherCheckbox.checked = false;
            }
          });
          shorthingType = this.id;
          UI.addProductToUI();
        } else {
          // Hiçbir checkbox seçilmediyse, varsayılan olarak birini seçili hale getir
          let isAnyCheckboxSelected = Array.from(sortingCheckbox).some((checkbox) => checkbox.checked);
          if (!isAnyCheckboxSelected) {
            // Varsayılan olarak ilk checkbox'i seçili hale getir
            sortingCheckbox[0].checked = true;
            shorthingType = "default"
            UI.addProductToUI();
            console.log("Default Filtreye geçildi.", shorthingType);
          }
        }
      });
    });
  }
  static sortproducts(products) {
    switch (shorthingType) {
      case "cheap-expensive":
        return products.sort((a, b) => {
          if (a.price && b.price) {
            return a.price - b.price;
          }
          return 0;
        });
      case "expensive-cheap":
        return products.sort((a, b) => {
          if (a.price && b.price) {
            return b.price - a.price;
          }
          return 0;
        });
      case "a-z":
        return products.sort((a, b) => {
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
      case "z-a":
        return products.sort((a, b) => {
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
          return 0;
        });
      default:
        return products;
    }
  }

}

const sortingCheckbox = document.querySelectorAll('.sortingCheckbox');
let shorthingType = "default";

