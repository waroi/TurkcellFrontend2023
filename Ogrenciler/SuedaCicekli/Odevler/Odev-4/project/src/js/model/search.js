class Search {
  static main() {
    searchInput.addEventListener('keyup', function (e) {
      searchKeyword = e.target.value;
      UI.addProductToUI();
    })

    searchInput.addEventListener('search', function (e) {
      searchKeyword = "";
      UI.addProductToUI();
    })
  }
}

const searchInput = document.querySelector('#searchInput');
let searchKeyword = "";


