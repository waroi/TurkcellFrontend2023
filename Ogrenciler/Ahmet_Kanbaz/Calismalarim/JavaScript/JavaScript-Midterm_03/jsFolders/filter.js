let selectedList = [];
let selectedDropDown = [];
let search = "";
let sort = "";
class Filter {
  static getCheckedCategory = function(e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      selectedList.push(value);
    } else {
      const index = selectedList.indexOf(value);
      if (index > -1) {
        selectedList.splice(index, 1);
      }
    }
    Filter.showBlogsWithFilter();
    e.preventDefault();
  };

  static getCheckedCategoryFromDropDown = function(e) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      selectedDropDown.push(value);
    } else {
      const index = selectedDropDown.indexOf(value);
      if (index > -1) {
        selectedDropDown.splice(index, 1);
      }
    }
    Filter.showBlogsWithFilter();
    e.preventDefault();
  }

  static getSearchInput = function(e) {
    search = searchInput.value;
    Filter.showBlogsWithFilter();
    e.preventDefault();
  };

  static getSortDropDown = function(e) {
    sort = e.target.textContent;
    Filter.showBlogsWithFilter();
    e.preventDefault();
  };

  static showBlogsWithFilter() {
    let blogs;
    if (selectedList.length > 0 || selectedDropDown.length > 0) {
      console.log(
        "Bir seçim yapıldı. Burda tüm kitaplar yerine filtrelenmiş kitaplar getirilmeli.",
        selectedList,
        selectedDropDown
      );
      blogs = Request.getBlogsFromRequestForCategory(selectedList);
      console.log(blogs);
    } else {
        console.log('Hello');
    //   books = Storage.getBooksFromStorage();
    }

    if (search !== "") {
        console.log(search);
    //   books = books.filter((book) => {
    //     // Arama kelimesi kitap adında veya yazar adında geçiyorsa true döndürür
    //     return (
    //       book.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    //       book.author.toLowerCase().includes(searchKeyword.toLowerCase())
    //     );
    //   });
    }

    // Sorting.sortBooks(books);

    // bookListArea.innerHTML = "";
    // books.forEach((book) => {
    //   bookListArea.innerHTML += `
    
    // `;
    // });
  }
}
