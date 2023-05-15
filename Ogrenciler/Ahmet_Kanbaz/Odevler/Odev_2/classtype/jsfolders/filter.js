class Filter {
  static searchBook2UI = function(getAllBooksName, getAllDirectors, searchWord) {
    for(let i = 0; i < getAllBooksName.length; i++) {
      const bookCard = getAllBooksName[i].parentElement.parentElement.parentElement.parentElement.parentElement;
      const bookNames = getAllBooksName[i].innerHTML.toLowerCase();
      const directorNames = getAllDirectors[i].innerHTML.toLowerCase();
      if(bookNames.includes(searchWord) || directorNames.includes(searchWord)) {
        bookCard.style.display = 'block';
      }
      else {
        bookCard.style.display = 'none';
      }
    }
  }

  static sortBook2UI = function(value) {
    const uiAllBooks4SortBooks = UI.allBooks4UIScreen();
  
    function sortBooksWithName(a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return;
    }
    
    function sortBooksWithDate(a, b) {
      let x = a.date;
      let y = b.date;
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return;
    }
  
    if(value === 'A - Z') uiAllBooks4SortBooks.sort(sortBooksWithName);
    else if(value === 'Z - A') uiAllBooks4SortBooks.sort(sortBooksWithName).reverse();
    else if(value === 'Eskiden Yeniye') uiAllBooks4SortBooks.sort(sortBooksWithDate);
    else if(value === 'Yeniden Eskiye') uiAllBooks4SortBooks.sort(sortBooksWithDate).reverse();
    UI.updateDisplay(uiAllBooks4SortBooks);
  }

  static listOfSameCategoriesBooks = function(e) {
    const categoryName = e.target.value;
    const books = Storage.getBooksFromLocalStorage(); 
    const filterBooks4Name = books.filter((book) => book.category === categoryName);
    UI.updateDisplay(filterBooks4Name);
    e.preventDefault();
  }

  static listOfDirectorBooks = function(e) {
    const directorName4Books = e.target.value;
    const books = Storage.getBooksFromLocalStorage();
    const filteredBooks = books.filter((book) => book.author === directorName4Books);
    UI.updateDisplay(filteredBooks);
    e.preventDefault();
  }
}