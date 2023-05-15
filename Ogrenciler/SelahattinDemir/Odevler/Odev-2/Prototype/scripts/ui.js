function UI() {}

// Kitapları UI'a ekle
UI.prototype.formListenSubmitFromUI = function (e) {
  const id = Date.now();
  const bookName = document.getElementById("bookName").value.trim();
  const bookCategory= document.getElementById("bookCategory").value.trim();
  const bookDate = document.getElementById("bookDate").value.trim();
  const bookWriter = document.getElementById("bookWriter").value.trim();
  const ImageUrl = document.getElementById("imgUrl").value.trim();
  const button = document.getElementById("addOrEditButton");
  const title = document.getElementById("booksModalLabel");

  if (
    bookName === "" ||
    bookCategory=== "" ||
    bookDate === "" ||
    bookWriter === "" ||
    ImageUrl === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz.");
    return;
  }

  if (button.innerHTML === "Düzenle") {
    const bookEditId = button.dataset.editBookId;
    const book = new Books(
      bookEditId,
      ImageUrl,
      bookName,
      bookCategory,
      bookDate,
      bookWriter
    );
    storage.updateBookFromLocalStorage(book);
    // butonu düzenle
    button.innerHTML = "Ekle";
    button.className = "btn btn-success w-25";
    delete button.dataset.editBookId;

    // title düzenle
    title.innerHTML = "Kitap Ekle";
  } else {
    const book = new Books(
      id,
      ImageUrl,
      bookName,
      bookCategory,
      bookDate,
      bookWriter
    );
    saveLocalStorage(book);
  }
  e.preventDefault();
};

UI.prototype.editBookFromUI = function (e) {
  if (e.target.classList.contains("fa-pen-to-square")) {
    const book = e.target.closest(".col-lg-3");
    const bookChangeId = book.id;
    let books = storage.getBookFromLocalStorage();
    books.forEach((book) => {
      if (book.id == bookChangeId) {
        const button = document.getElementById("addOrEditButton");
        const title = document.getElementById("booksModalLabel");
        const bookName = document.getElementById("bookName");
        const bookCategory = document.getElementById("bookCategory");
        const bookDate = document.getElementById("bookDate");
        const bookWriter = document.getElementById("bookWriter");
        const ImageUrl = document.getElementById("imgUrl");
        const form = document.getElementById("book-form");

        form.id = book.id;
        ImageUrl.value = book.imageUrl;
        bookName.value = book.name;
        bookCategory.value = book.category;
        bookDate.value = book.date;
        bookWriter.value = book.writer;

        // butonu düzenle
        button.innerHTML = "Düzenle";
        button.className = "btn btn-warning w-25";
        button.dataset.editBookId = bookChangeId;

        // title düzenle
        title.innerHTML = "Kitap Düzenle";
      }
    });
  }
  e.preventDefault();
};

UI.prototype.deleteBookFromUI = function (e) {
  if (e.target.classList.contains("fa-trash")) {
    const book = e.target.closest(".col-lg-3");
    const bookDeleteId = book.id;
    if (confirm("Bu kitabı silmek istediğinize emin misiniz?")) {
      storage.deleteFromLocalStorage(bookDeleteId);
      book.remove();
    }
  }
  e.preventDefault();
};
