function Filter() { }

var filterModal = document.getElementById("filterModal");
const categoryFilterLabel = document.querySelector('#categoryFilterArea');
const writerFilterLabel = document.querySelector('#writerFilterArea');

let selectedCategories = [];
let selectedWriters = [];


Filter.prototype.main = function () {
  this.generateFilterOptions();
}

Filter.prototype.generateFilterOptions = function () {

  let categories = storage.getCategoriesFromStorage();
  categoryFilterLabel.innerHTML = "";
  categories.forEach((category) => {
    categoryFilterLabel.innerHTML += `
    <li class="dropdown-item form-check">
      <input class="form-check-input filterCheckbox" type="checkbox" value="" id=${category} />
      <label class="form-check-label" for=${category}>${category}</label>
    </li>
    `;
  });


  //yazarların buldunduğu arrayi ls'den çek ve ekrana bas
  //input id ve label for attribute'ları aynı olmalı
  let writers = storage.getWritersFromStorage();
  writerFilterLabel.innerHTML = "";
  writers.forEach((writer) => {
    writerFilterLabel.innerHTML += `
    <li class="dropdown-item form-check">
  <input class="form-check-input filterCheckbox" type="checkbox" value="" id=${writer.replace(" ", "_")} />
  <label class="form-check-label" for=${writer.replace(" ", "_")}>${writer}</label>
</li>
    `;
  });

  //yazar ve kategori bulunan checkboxların checked değişim durumu dinlenir

  let filterCheckbox = document.querySelectorAll('.filterCheckbox');

  filterCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      console.log(checkbox.id + "ye tıklandı. Durumu " + checkbox.checked)
      if (checkbox.checked) {
        if (categories.includes(checkbox.id)) {
          selectedCategories.push(checkbox.id);
        } else {
          selectedWriters.push(checkbox.id.replace("_", " "));
        }
      } else {
        if (categories.includes(checkbox.id)) {
          index = selectedCategories.indexOf(checkbox.id);
          selectedCategories.splice(index, 1);
        } else {
          index = selectedWriters.indexOf(checkbox.id);
          selectedWriters.splice(index, 1);
        }
      }
      console.log(selectedCategories, selectedWriters)
      ui.addBookToUI();
    });
  });
}
