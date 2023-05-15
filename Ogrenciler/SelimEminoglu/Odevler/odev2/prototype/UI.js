function UIConstructor() {}

UIConstructor.prototype.showBook = function (books) {
  books.map((book) => {
    book = {
      name: book.name,
      writer: book.writer,
      date: book.date,
      category: book.category,
      url: book.url,
      id: book.id,
    };

    const col = document.createElement("div");
    col.classList.add(
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3",
      "col-xxl-2"
    );

    const card = document.createElement("div");
    card.classList.add("card", "my-3");
    card.id = book.id;

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `${book.url}`;
    img.alt = "images";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    const h5Text = document.createTextNode(`${book.name}`);
    h5.appendChild(h5Text);

    const h6Writer = document.createElement("h6");
    const h6WriText = document.createTextNode("Yazar:");
    h6Writer.appendChild(h6WriText);

    const pWriter = document.createElement("p");
    pWriter.classList.add("card-text");
    const pWriText = document.createTextNode(`${book.writer}`);
    pWriter.appendChild(pWriText);

    const h6Date = document.createElement("h6");
    const h6DateText = document.createTextNode("Yazım Yılı:");
    h6Date.appendChild(h6DateText);

    const pDate = document.createElement("p");
    pDate.classList.add("card-text");
    const pDateText = document.createTextNode(`${book.date}`);
    pDate.appendChild(pDateText);

    const h6Category = document.createElement("h6");
    const h6CategoryText = document.createTextNode("Kategori:");
    h6Category.appendChild(h6CategoryText);

    const pCategory = document.createElement("p");
    pCategory.classList.add("card-text");
    const pCategoryText = document.createTextNode(`${book.category}`);
    pCategory.appendChild(pCategoryText);

    const row = document.createElement("div");
    row.classList.add("row", "justify-content-center");

    const col5 = document.createElement("div");
    col5.classList.add("col-5", "col-xxl-6");

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("btn", "btn-success");
    updateBtn.type = "button";
    updateBtn.setAttribute("data-bs-toggle", "modal");
    updateBtn.setAttribute("data-bs-target", "#updateBookModal");
    const updateBtnText = document.createTextNode("Güncelle");
    updateBtn.appendChild(updateBtnText);

    const col5Flex = document.createElement("div");
    col5Flex.classList.add(
      "col-5",
      "col-xxl-6",
      "d-flex",
      "justify-content-center"
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.type = "button";
    const deleteBtnText = document.createTextNode("Sil");
    deleteBtn.appendChild(deleteBtnText);

    col.appendChild(card);

    card.appendChild(img);
    card.appendChild(cardBody);

    cardBody.appendChild(h5);
    cardBody.appendChild(h6Writer);
    cardBody.appendChild(pWriter);
    cardBody.appendChild(h6Date);
    cardBody.appendChild(pDate);
    cardBody.appendChild(h6Category);
    cardBody.appendChild(pCategory);
    cardBody.appendChild(row);

    row.appendChild(col5);
    col5.appendChild(updateBtn);
    row.appendChild(col5Flex);
    col5Flex.appendChild(deleteBtn);

    bookList.appendChild(col);

    updateBtn.addEventListener("click", updateBtnClick);
    deleteBtn.addEventListener("click", deleteBtnClick);
  });

  function updateBtnClick() {
    let list = LocalConstructor.prototype.checkToLocalS();
    let place = 0;
    list.map((item) => {
      if (
        item.id == Number(this.parentNode.parentNode.parentNode.parentNode.id)
      ) {
        bookNameUpdate.value = item.name;
        bookWriterUpdate.value = item.writer;
        bookDateUpdate.value = item.date;
        bookCategoryUpdate.value = item.category;
        bookUrlUpdate.value = item.url;
        place = item.id;
      }
    });
    bookNameUpdate.setAttribute("order", place);
  }

  function deleteBtnClick() {
    let list = LocalConstructor.prototype.checkToLocalS();

    list = list.filter((item) => {
      return (
        item.id !== Number(this.parentNode.parentNode.parentNode.parentNode.id)
      );
    });

    LocalConstructor.prototype.changeBookToLocalS(list);
    list = LocalConstructor.prototype.checkToLocalS();

    while (bookList.firstChild) {
      bookList.removeChild(bookList.lastChild);
    }

    UIConstructor.prototype.showBook(list);
  }
};
