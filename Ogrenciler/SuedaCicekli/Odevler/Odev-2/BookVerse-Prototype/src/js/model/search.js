function Search() { }

const searchInput = document.querySelector('#searchInput');
let searchKeyword = "";

Search.prototype.main = function () {
  searchInput.addEventListener('keyup', function (e) {
    searchKeyword = e.target.value;
    ui.addBookToUI();
    console.log("serach tetikledi");
  })
}