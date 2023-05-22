class Search {
  static main() {
    searchInput.addEventListener('keyup', function (e) {
      searchKeyword = e.target.value;
      UI.addBlogToUI();
    })

    searchInput.addEventListener('search', function (e) {
      searchKeyword = "";
      UI.addBlogToUI();
    })
  }
}

const searchInput = document.querySelector('#searchInput');
let searchKeyword = "";


