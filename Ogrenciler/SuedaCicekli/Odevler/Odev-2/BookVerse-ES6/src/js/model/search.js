class Search {
  static main() {
    searchInput.addEventListener('keyup', function (e) {
      searchKeyword = e.target.value;
      UI.addBookToUI();
      console.log("serach tetikledi");
    })
  }
}

const searchInput = document.querySelector('#searchInput');
let searchKeyword = "";


