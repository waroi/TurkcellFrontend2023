const bookContainer = document.getElementById("bookContainer");

//UI Object
function UI(OneBook) {
    // console.log("UI nesnesi içindeki", OneBook);
}


UI.prototype.addBook = function (getBooks) {

    // console.log("localDan ui'a geldi ", OneBook)
    getBooks.forEach(getBook => {
        // bookContainer.innerHTML = createTag(getBook)
        bookContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="resim">
            <div class="card-body">
              <h3 class="card-title">${getBook.bookName}</h3>
              <h5 class="card-subtitle">${getBook.bookWriter}</h5>
              <p class="card-text">${getBook.bookPrice}</p>
              <p class="card-text">${getBook.bookType}</p>
              <p class="card-text">${getBook.bookID}</p>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
    });

}

function createTag(b) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "card");
    let img = document.createElement("img");
    // img.setAttribute("class","card-img-top");
    // img.setAttribute("src",b.url)
    let divBody = document.createElement("div");
    divBody.setAttribute("class", "card-body");
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "card-title");
    h3.innerHTML = b.bookName;
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card-subtitle");
    h5.innerHTML = b.bookWriter;
    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.innerHTML = b.bookPrice
    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.innerHTML = b.bookType;
    let p3 = document.createElement("p");
    p3.setAttribute("class", "card-text");
    p3.innerHTML = b.bookID;


    divBody.appendChild(h3)
    divBody.appendChild(h5);
    divBody.appendChild(p1);
    divBody.appendChild(p2);
    divBody.appendChild(p3);
    mainDiv.appendChild(divBody);
    bookContainer.appendChild(mainDiv);



}