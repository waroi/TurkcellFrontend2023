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
        } else {
          // Hiçbir checkbox seçilmediyse, varsayılan olarak birini seçili hale getir
          let isAnyCheckboxSelected = Array.from(sortingCheckbox).some((checkbox) => checkbox.checked);
          if (!isAnyCheckboxSelected) {
            // Varsayılan olarak ilk checkbox'i seçili hale getir
            sortingCheckbox[0].checked = true;
            shorthingType = "default"
            UI.addBookToUI();
          }
        }
      });
    });
    sortingCheckbox.forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          shorthingType = this.id;
          UI.addBookToUI();
        }
      });
    });
  }

  static sortBooks(books) {
    switch (shorthingType) {
      case "a-z":
        return books.sort((a, b) => {
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
      case "z-a":
        return books.sort((a, b) => {
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
          return 0;
        });
      case "oldest-date":
        return books.sort((a, b) => {
          if (a.year && b.year) {
            return a.year - b.year;
          }
          return 0;
        });
      case "latest-date":
        return books.sort((a, b) => {
          if (a.year && b.year) {
            return b.year - a.year;
          }
          return 0;
        });
      default:
        return books;
    }
  }


}

const sortingCheckbox = document.querySelectorAll('.sortingCheckbox');
let shorthingType = "default";

