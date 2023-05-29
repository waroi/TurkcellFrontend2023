class Filter {
  static main() {
    let filterButtons = document.querySelectorAll('.filterButton');
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        selectedCategory = this.getAttribute('id');
        UI.addProductToUI();
      });
    });

  }
}

let selectedCategory = "All";


