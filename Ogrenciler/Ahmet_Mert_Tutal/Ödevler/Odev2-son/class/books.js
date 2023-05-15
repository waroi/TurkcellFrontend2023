class Books{

  constructor(id, bookTitle, bookAuthor, bookYear, bookCategory, bookPoster) {
    this.id = id;  
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookYear = bookYear;
    this.bookCategory = bookCategory;
    this.bookPoster = bookPoster;
   
  }


  //Add Book to UI
addBook = function (e) {
  document.getElementById("editBookButton").classList.add("d-none");
  document.getElementById("addBookButton").classList.remove("d-none");
  document.getElementById("deleteBookButton").classList.add("d-none");
    console.log("addbook çalıştı.",e);
    const id = Date.now();
    const bookPoster = bookPosterInput.value.trim();//trim() metodu stringin başındaki ve sonundaki boşlukları siler.
    const bookTitle = bookTitleInput.value.trim();
    const bookCategory = bookCategoryInput.value.trim();
    const bookYear = bookYearInput.value.trim();
    const bookAuthor = bookAuthorInput.value.trim();
    console.log("lütfennn",bookPoster);
    let elifcik = false;
    const kayıtlikitaplar = storage.getBooksFromLocalStorage();
    kayıtlikitaplar.forEach(function (x) {
        if(x.bookTitle == bookTitle && x.bookAuthor == bookAuthor && x.bookYear == bookYear && x.bookCategory == bookCategory && x.bookPoster == bookPoster) {
            elifcik = true;
            
        }
      });
    console.log(kayıtlikitaplar);
    if(bookPoster === '' || bookTitle === '' || bookCategory === '' || bookYear === '' || bookAuthor === '') {
      ui.alertMessage('Lütfen tüm alanları doldurunuz.');
      ui.clearForm();
    }
    else if(elifcik){
        ui.alertMessage('Bu Kitap zaten var!!!!');
    }
    else {
      if (document.getElementById("changedBook").innerText!="") {
        let willdelete = document.getElementById("changedBook");
        console.log("buraya girdi");
        console.log("willdelete",willdelete);
        console.log(willdelete.innerText);
        storage.deleteBookFromLocalStorage(willdelete.innerText);
        document.getElementById(willdelete.innerText).remove();
        
        willdelete.innerText="";
      }

      const uiBook = new Books( id,bookTitle,bookAuthor,bookYear,bookCategory,bookPoster );
      
      ui.addBook(uiBook);
      storage.setBook2LocalStorage(uiBook);
      
      ui.clearForm();
      filterBooks();
    }
    
    e.preventDefault();
  }



  deleteBook = function (e) {


    
      if(confirm('Bu kitabı silmek istediğinize emin misiniz?')) {
       
        document.getElementById(document.getElementById("changedBook").innerText).remove();
        storage.deleteBookFromLocalStorage(document.getElementById("changedBook").innerText);
      }
    ui.clearForm();
    e.preventDefault();
  }


  editBook = function (e) {
    console.log("editlencek mi")

  }
  
  
 saveEditBook = function (e) {
    console.log("amo");
    const books = storage.getBooksFromLocalStorage();
    const bookChangeId = book.id;
    books.forEach(function (book) {
      if(book.id == bookChangeId) {
        bookPosterInput.value = book.bookPoster;
        bookTitleInput.value = book.bookTitle;
        bookCategoryInput.value = book.bookCategory;
        bookYearInput.value = book.bookYear;
        bookAuthorInput.value = book.bookAuthor;
        
      }
    });
  
    location.reload();
    e.preventDefault();
  }

}
function filterBooks() {
  const filterValue = filterInput.value.toLowerCase();
  const sorterSelect = document.getElementById('sorter');
  const sortValue = sorterSelect.value;
  const storedBooks = storage.getBooksFromLocalStorage();
  const filteredBooks = [];

  storedBooks.forEach(function (book) {
    const title = book.bookTitle.toLowerCase();
    const author = book.bookAuthor.toLowerCase();
    const category = book.bookCategory.toLowerCase();
    const bookYear = book.bookYear;

    if (title.includes(filterValue) || author.includes(filterValue) || category.includes(filterValue) || String(bookYear).includes(filterValue)) {
      filteredBooks.push(book);
    }
  });

  let sortedBooks = [...filteredBooks];
  if (sortValue === 'AtoZ') {
    sortedBooks.sort((a, b) => {
      if (a.bookTitle.toLowerCase() < b.bookTitle.toLowerCase()) return -1;
      if (a.bookTitle.toLowerCase() > b.bookTitle.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortValue === 'ZtoA') {
    sortedBooks.sort((a, b) => {
      if (a.bookTitle.toLowerCase() > b.bookTitle.toLowerCase()) return -1;
      if (a.bookTitle.toLowerCase() < b.bookTitle.toLowerCase()) return 1;
      return 0;
    });
  } else if (sortValue === 'OnDateAsc') {
    sortedBooks.sort((a, b) => a.bookYear - b.bookYear);
  } else if (sortValue === 'OnDateDesc') {
    sortedBooks.sort((a, b) => b.bookYear - a.bookYear);
  }

  storedBooks.forEach(function (book) {
    document.getElementById(book.id).style.display = 'none';
  });

  sortedBooks.forEach(function (book) {
    const bookItem = document.getElementById(book.id);
    document.getElementById(book.id).style.display = 'block';
    bookList.appendChild(bookItem);
  });
}

