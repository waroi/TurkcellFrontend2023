class Filter {
  static main() {
    this.generateFilterOptions();
  }

  static generateFilterOptions() {

    let categories = Storage.getCategoriesFromStorage();
    categoryFilterLabel.innerHTML = "";
    categories.forEach((category) => {
      categoryFilterLabel.innerHTML += `
      <li class="dropdown-item form-check">
        <input class="form-check-input filterCheckbox" type="checkbox" value="" id=${category} />
        <label class="form-check-label" for=${category}>${category}</label>
      </li>
      `;
    });

    let writers = Storage.getWritersFromStorage();
    writerFilterLabel.innerHTML = "";
    writers.forEach((writer) => {
      if (writer) {
        writerFilterLabel.innerHTML += `
          <li class="dropdown-item form-check">
            <input class="form-check-input filterCheckbox" type="checkbox" value="" id=${writer.replace(" ", "_")} />
            <label class="form-check-label" for=${writer.replace(" ", "_")}>${writer}</label>
          </li>
        `;
      }
    });

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
            let index = selectedCategories.indexOf(checkbox.id);
            selectedCategories.splice(index, 1);
          } else {
            let index = selectedWriters.indexOf(checkbox.id);
            selectedWriters.splice(index, 1);
          }
        }
        console.log(selectedCategories, selectedWriters)
        UI.addBookToUI();
      });
    });
  }
}

const categoryFilterLabel = document.querySelector('#categoryFilterArea');
const writerFilterLabel = document.querySelector('#writerFilterArea');

let selectedCategories = [];
let selectedWriters = [];


