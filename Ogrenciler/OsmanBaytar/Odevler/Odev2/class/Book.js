class Book {
    constructor(name, writer, category, date, url) {
        this.name = name;
        this.writer = writer;
        this.category = category;
        this.date = date;
        this.url = url;
    }
    createBox = function () {
        let cardBox = document.createElement("div");
        cardBox.className = "col-lg-4 col-md-6 my-3";
        let card = `
    <div class="card bg-light">
        <div class="card-img mx-auto">
            <img class="img-fluid card-image" src="${this.url}" />
        </div>
        <div class="card-body">
            <h5 class="name my-2 fs-3">${this.name}</h5>
            <p class="writer fs-5"><span class="fs-6">Writer:</span> ${this.writer}</p>
            <p class="category fs-5"><span class="fs-6">Category:</span> ${this.category}</p>
            <p class="date fs-5"><span class="fs-6">Date:</span> ${this.date}</p>
        </div>
        <div class="card-button mb-3">
              <div class="row">
                <div class="col-12">
                  <button class="btn btn-warning cardButton">Edit</button>
                  <button class="btn btn-danger cardButton">Delete</button>
                </div>
                <div class="col-sm-6"></div>
              </div>
    </div>`;
        cardBox.innerHTML = card;
        return cardBox;
    }
}


