class UI {
  static showAuthors() {
    Request.get().then((response) => {
      response.map((author) => {
        authorList.innerHTML += `<div class="col-3 me-1">
        <div class="row flex-column">
          <div class="col-6 w-100 d-flex justify-content-center py-3">
            <div class="auhtor-picture" style="background-image:url("${author.url}")"></div>
          </div>
          <div class="col-6 w-100 text-center">
            <h4>${author.author}</h4>
          </div>
        </div>
      </div>`;
      });
    });
  }
}
