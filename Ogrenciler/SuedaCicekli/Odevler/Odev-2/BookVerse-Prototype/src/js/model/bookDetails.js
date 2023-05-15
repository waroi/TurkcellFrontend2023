function BookDetails() { }

const bookDetails = new BookDetails();
const storage = new Storage();

const detailsTitle = document.querySelector('#details-title');
const detailsAuthor = document.querySelector('#details-author');
const detailsYear = document.querySelector('#details-year');
const detailsCategory = document.querySelector('#details-category');
const detailsSummary = document.querySelector('#details-summary');
const detailsUrl = document.querySelector('#details-url');
const detailsRank = document.querySelector('#details-rank');
const detailsEditor = document.querySelector('#details-editor');
const detailsLanguage = document.querySelector('#details-language');
const detailsReview = document.querySelector('#details-review');
const breadCrumbName = document.querySelector('#breadcrumb-book-name');


BookDetails.prototype.main = function () {
  //urldeki parametreleri almak için URLSearchParams kullanılır
  var urlParams = new URLSearchParams(window.location.search);
  //urlParams.get('id') ile id parametresinin değeri alınır
  let id = urlParams.get('id');

  let book = storage.getBookById(id);
  console.log(book);
  this.fillDetailPage(book);
}


BookDetails.prototype.fillDetailPage = function (book) {
  stars = "";
  for (let i = 0; i < book.rank; i++) {
    stars += `<img
    src="./src/Assets/Icon/star.png" alt="">`
  }
  breadCrumbName.innerHTML = book.name;
  detailsTitle.innerHTML = book.name;
  detailsAuthor.innerHTML = book.author;
  detailsYear.innerHTML = book.year;
  detailsCategory.innerHTML = book.category;
  detailsSummary.innerHTML = book.summary;
  detailsUrl.innerHTML = `<img class="banner-img " src=${book.url || "../Assets/images/defaultBookImage.png"}
  class="img-fluid rounded-start" alt="...">`
  detailsRank.innerHTML = stars;
  detailsEditor.innerHTML = book.editor;
  detailsLanguage.innerHTML = book.language;
  detailsReview.innerHTML = book.review;
}

// sayfa yüklendikten sonra main fonksiyonu çalıştırılır ve sayfadaki bilgiler doldurulur 
window.addEventListener('load', function () {
  bookDetails.main();
});