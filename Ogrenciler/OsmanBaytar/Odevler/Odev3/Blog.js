class Blog {
    constructor(title, text, writer, date, category, url) {
        this.title = title;
        this.text = text;
        this.writer = writer;
        this.date = date;
        this.category = category;
        this.url = url;
    }

    createCard = function () {
        let cardBox = document.createElement("div");
        cardBox.className = "col-lg-4 col-sm-6 card border-0 mx-auto mt-5";
        let card = `
        <div class="row image-and-p">
            <img
                class="img-fluid card-image col-lg-3"
                src="${this.url}"   
            />
            <p class="card-text d-none col-lg-9">${this.text}</p>
        </div>
        <div class="card-body">
            <h6 class="fw-bold">${this.title}</h6>
            <p>Category: ${this.category}</p>
            
            <span class="shortNews-writer">${this.writer}</span>
            <span class="shortNews-date float-end">${this.date}</span>
            <div class="my-3">
                <button class="btn btn-dark">Close</button>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </div>
            
        </div>`;
        cardBox.innerHTML = card;
        return cardBox;
    }

    createLatestPost = function () {
        let postBox = document.getElementById("shortNews");
        postBox.className = "shortNews-box mt-3";
        let post = `
        <h5 class="mb-3">
        ${this.title}
        </h5>
        <span class="shortNews-writer">${this.writer}</span>
        <span class="shortNews-date float-end">${this.date}</span>`;
        postBox.innerHTML = post;
        return postBox;
    }
}