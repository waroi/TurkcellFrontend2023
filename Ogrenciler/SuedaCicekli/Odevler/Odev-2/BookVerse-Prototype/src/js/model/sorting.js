function Sorting() { }

const sortingCheckbox = document.querySelectorAll('.sortingCheckbox');
let shorthingType = "default";

Sorting.prototype.main = function () {
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
          ui.addBookToUI();
        }
      }
    });
  });
  sortingCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        shorthingType = this.id;
        ui.addBookToUI();
      }
    });
  });
}

Sorting.prototype.sortBooks = function (books) {
  switch (shorthingType) {
    case "a-z":
      return books.sort((a, b) => a.name.localeCompare(b.name));
    case "z-a":
      return books.sort((a, b) => b.name.localeCompare(a.name));
    case "oldest-date":
      return books.sort((a, b) => a.year - b.year);
    case "latest-date":
      return books.sort((a, b) => b.year - a.year);
    default:
      return books;
  }
}