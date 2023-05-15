const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookDate = document.getElementById("bookDate");
const bookCategory = document.getElementById("bookCategory");
const bookUrl = document.getElementById("bookUrl");

const bookNameUpdate = document.getElementById("bookNameUpdate");
const bookWriterUpdate = document.getElementById("bookWriterUpdate");
const bookDateUpdate = document.getElementById("bookDateUpdate");
const bookCategoryUpdate = document.getElementById("bookCategoryUpdate");
const bookUrlUpdate = document.getElementById("bookUrlUpdate");

const addBook = document.getElementById("addBook");
const updateBook = document.getElementById("updateBook");

const searchİnput = document.getElementById("search");
const bookList = document.getElementById("bookList");

const orderList = document.getElementById("sorter");

const categoryFilter = document.getElementById("category");
const writerFilter = document.getElementById("writer");

addBook.addEventListener("click", formClicked);
updateBook.addEventListener("click", bookUpdated);
searchİnput.addEventListener("keyup", searchBook);

let check = LocalConstructor.checkToLocalS();

if (check) {
  UIConstructor.showBook(check);
}

let flag = 0;

check.map((item) => {
  if (item.name == "Olasılıksız" || item.name == "Denemeler") {
    flag = 1;
  }
});

if (flag == 0) {
  addTwoObject();
}

function addTwoObject() {
  let books = [];
  let Object1 = new BookConstructor(
    "Olasılıksız",
    "Adam Fawer",
    "2005",
    "Bilim-Kurgu",
    "https://i.dr.com.tr/cache/500x400-0/originals/0000000204878-1.jpg",
    765
  );
  let Object2 = new BookConstructor(
    "Denemeler",
    "Montaigne",
    "1580",
    "Deneme",
    "https://www.iskultur.com.tr/dosyalar/2006/04/denemeler-5.png",
    181
  );
  books.push(Object1);
  books.push(Object2);
  check.push(Object1);
  check.push(Object2);
  LocalConstructor.changeBookToLocalS(check);
  UIConstructor.showBook(books);
}

function createFilter() {
  let setCategory = new Set();
  let setWriter = new Set();

  check.map((item) => {
    setCategory.add(item.category);
  });

  setCategory.forEach((item) => {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    categoryFilter.add(option);
  });

  check.map((item) => {
    setWriter.add(item.writer);
  });

  setWriter.forEach((item) => {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    writerFilter.add(option);
  });
}

createFilter();

categoryFilter.addEventListener("change", () => {
  if (categoryFilter.value == "Belirtilmemiş") {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.classList.remove("d-none");
      }
    });
  } else {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.classList.add("d-none");
      }
    });

    bookList.childNodes.forEach((child) => {
      if (
        categoryFilter.value ==
        child.childNodes[0].childNodes[1].childNodes[6].innerHTML
      ) {
        child.classList.remove("d-none");
      }
    });
  }
});

writerFilter.addEventListener("change", () => {
  if (writerFilter.value == "Belirtilmemiş") {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.classList.remove("d-none");
      }
    });
  } else {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.classList.add("d-none");
      }
    });

    bookList.childNodes.forEach((child) => {
      if (
        writerFilter.value ==
        child.childNodes[0].childNodes[1].childNodes[2].innerHTML
      ) {
        child.classList.remove("d-none");
      }
    });
  }
});

orderList.addEventListener("change", () => {
  switch (orderList.value) {
    case "AtoZ":
      let AtoZ = [];
      let list = LocalConstructor.checkToLocalS();
      let list2 = [];
      let list3 = [];

      list.map((item) => {
        AtoZ.push(item.name);
      });
      AtoZ = AtoZ.sort();

      for (let i = 0; i < AtoZ.length; i++) {
        list.map((item) => {
          if (AtoZ[i] === item.name) {
            list2.push(item);
          }
        });
      }

      let result = new Set(list2);

      result.forEach((item) => {
        list3.push(item);
      });
      LocalConstructor.changeBookToLocalS(list3);
      list = LocalConstructor.checkToLocalS();

      while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }

      UIConstructor.showBook(list);

      break;
    case "ZtoA":
      let ZtoA = [];
      let list4 = LocalConstructor.checkToLocalS();
      let list5 = [];
      let list6 = [];

      list4.map((item) => {
        ZtoA.push(item.name);
      });
      ZtoA = ZtoA.reverse();

      for (let i = 0; i < ZtoA.length; i++) {
        list4.map((item) => {
          if (ZtoA[i] === item.name) {
            list5.push(item);
          }
        });
      }

      let result2 = new Set(list5);

      result2.forEach((item) => {
        list6.push(item);
      });
      LocalConstructor.changeBookToLocalS(list6);
      list4 = LocalConstructor.checkToLocalS();

      while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }

      UIConstructor.showBook(list4);
      break;
    case "OnDate":
      let OnDate = [];
      let list7 = LocalConstructor.checkToLocalS();
      let list8 = [];
      let list9 = [];

      list7.map((item) => {
        OnDate.push(item.date);
      });
      OnDate = OnDate.sort();

      for (let i = 0; i < OnDate.length; i++) {
        list7.map((item) => {
          if (OnDate[i] === item.date) {
            list8.push(item);
          }
        });
      }

      let resultDate = new Set(list8);

      resultDate.forEach((item) => {
        list9.push(item);
      });

      LocalConstructor.changeBookToLocalS(list9);
      list7 = LocalConstructor.checkToLocalS();

      while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }

      UIConstructor.showBook(list7);
      break;
    default:
      let rand = LocalConstructor.checkToLocalS();
      let randList = rand.sort((a, b) => 0.5 - Math.random());
      LocalConstructor.changeBookToLocalS(randList);
      rand = LocalConstructor.checkToLocalS();

      while (bookList.firstChild) {
        bookList.removeChild(bookList.lastChild);
      }

      UIConstructor.showBook(rand);
      break;
  }
});

function formClicked() {
  let books = [];
  let bookİd = Date.now();
  let newBook = new BookConstructor(
    bookName.value,
    bookWriter.value,
    bookDate.value,
    bookCategory.value,
    bookUrl.value,
    bookİd
  );

  for (let key in newBook) {
    if (newBook.hasOwnProperty(key)) {
      if (newBook[key].value === "") {
        alert("Lütfen Boş Alan Bırakmayınız");
        return;
      }
      if (key == "date") {
        let min = 1500;
        let max = 2023;
        if (
          Number(newBook[key].value) < min ||
          Number(newBook[key].value) > max
        ) {
          alert("Lütfen 1800-2023 arası bir yıl girin");
          return;
        }
      }
    }
  }
  books.push(newBook);
  check.push(newBook);
  LocalConstructor.changeBookToLocalS(check);
  check = LocalConstructor.checkToLocalS();
  location.reload();
  UIConstructor.showBook(books);
}

function bookUpdated() {
  let list = LocalConstructor.checkToLocalS();
  list.map((item) => {
    if (bookNameUpdate.getAttribute("order") == item.id) {
      item.name = bookNameUpdate.value;
      item.writer = bookWriterUpdate.value;
      item.date = bookDateUpdate.value;
      item.category = bookCategoryUpdate.value;
      item.url = bookUrlUpdate.value;
    }
  });
  LocalConstructor.changeBookToLocalS(list);
  list = LocalConstructor.checkToLocalS();
  location.reload();
  UIConstructor.showBook(list);
}

function searchBook() {
  let list = LocalConstructor.checkToLocalS();
  let searchİnput = this.value.toLowerCase();
  let searchList = [];

  list.map((item) => {
    if (searchİnput == "") {
      bookList.childNodes.forEach((child) => {
        if (child.hasChildNodes()) {
          child.classList.remove("d-none");
        }
      });
      return;
    } else if (
      item.name.toLowerCase().indexOf(searchİnput) > -1 ||
      item.writer.toLowerCase().indexOf(searchİnput) > -1
    ) {
      bookList.childNodes.forEach((child) => {
        if (child.hasChildNodes()) {
          child.classList.add("d-none");
        }
      });
      searchList.push(item);
    }
  });

  searchList.map((item) => {
    bookList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        if (item.id == Number(child.childNodes[0].id)) {
          child.classList.remove("d-none");
        }
      }
    });
  });
}
