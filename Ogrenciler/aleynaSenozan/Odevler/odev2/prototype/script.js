// Kitap nesnesi için prototip (yapıcı fonksiyon)
function Book(title, author, category, year, cover) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.year = year;
  this.cover = cover;
}

// Local Storage işlemleri için prototip
function Storage() {}

// Local Storage'dan kitapları çeker
Storage.prototype.getBooksFromStorage = function () {
  let books;

  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  return books;
};

// Kitabı Local Storage'a ekler
Storage.prototype.addBookToStorage = function (newBook) {
  let books = this.getBooksFromStorage();

  books.push(newBook);

  localStorage.setItem("books", JSON.stringify(books));
};

// Kitabı tabloya ve filtreleme alanlarını ekler
Storage.prototype.addBookToUI = function (book) {
  const table = document.querySelector("table tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td><input type="checkbox"></td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.category}</td>
  <td>${book.year}</td>
  <td><span class="zoom-icon" data-img="${
    book.cover
  }"><i class="btn bi bi-zoom-in"></i></span></td>
  <td><button id="update-${book.title.replace(
    /\s+/g,
    "-"
  )}" class="btn btn-primary"><i class="bi bi-pencil-fill"></i> Upd</button></td>
`;
  // Büyüteç ikonuna tıklama olayı ekler
  const zoomIcon = row.querySelector(".zoom-icon");
  zoomIcon.addEventListener("click", function () {
    // Modalı açmak için verileri alır
    const img = zoomIcon.getAttribute("data-img");
    const largeImg = zoomIcon.getAttribute("data-large-img");

    // Modal içindeki img elementinin src özelliğini günceller
    const coverImage = document.getElementById("coverImage");
    coverImage.src = largeImg;

    // Modalı açar
    const coverModal = new bootstrap.Modal(
      document.getElementById("coverModal")
    );
    coverModal.show();
  });

  table.appendChild(row);

  // Filtreleme alanlarına yazar, kategori ve yıl bilgilerini ekler
  const authorFilter = document.getElementById("author-filter");
  const categoryFilter = document.getElementById("category-filter");
  const yearFilter = document.getElementById("year-filter");

  const addFilterItem = (filterElement, value) => {
    if (
      !Array.from(filterElement.querySelectorAll("input")).some(
        (input) => input.value === value
      )
    ) {
      const div = document.createElement("div"); // Yeni bir div oluşturur
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.type = "checkbox";
      input.id = value;
      input.name = value;
      input.value = value;
      label.htmlFor = value;
      label.textContent = value;

      div.appendChild(input); // input ve label'ı div'in içine ekler
      div.appendChild(label);
      filterElement.appendChild(div); // div'i filtrelere ekle
    }
  };

  addFilterItem(authorFilter, book.author);
  addFilterItem(categoryFilter, book.category);
  addFilterItem(yearFilter, book.year.toString());
};

document.getElementById("save-button").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const year = document.getElementById("year").value;
  const cover = document.getElementById("cover").value;

  // Yeni kitabı oluşturur
  const newBook = new Book(title, author, category, year, cover);

  // Kitabı Local Storage'a ekler
  const storage = new Storage();
  storage.addBookToStorage(newBook);

  // Kitabı UI'ya ekler
  storage.addBookToUI(newBook);

  // Formu temizle
  document.getElementById("book-form").reset();

  // Modalı kapatır
  var myModal = bootstrap.Modal.getInstance(
    document.getElementById("addBookModal")
  );
  myModal.hide();
});

// Kitabı Local Storage'dan siler
Storage.prototype.deleteBookFromStorage = function (title) {
  let books = this.getBooksFromStorage();

  books.forEach(function (book, index) {
    if (book.title === title) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};
// Kitabı UI'dan siler
Storage.prototype.deleteBookFromUI = function (element) {
  element.remove();
};
document.getElementById("delete-button").addEventListener("click", function () {
  const storage = new Storage();
  const checkboxes = document.querySelectorAll(
    "table tbody input[type=checkbox]:checked"
  );

  checkboxes.forEach(function (checkbox) {
    const row = checkbox.parentElement.parentElement;
    const title = row.getElementsByTagName("td")[1].textContent;

    storage.deleteBookFromStorage(title);
    storage.deleteBookFromUI(row);
  });
});

document.getElementById("search").addEventListener("input", function (e) {
  const searchString = e.target.value.toLowerCase();
  const table = document.querySelector("table tbody");
  const books = Array.from(table.querySelectorAll("tr"));

  books.forEach(function (book) {
    const title = book.getElementsByTagName("td")[1].textContent.toLowerCase();
    const author = book.getElementsByTagName("td")[2].textContent.toLowerCase();

    if (title.includes(searchString) || author.includes(searchString)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});

// Local Storage'dan kitapları çeker
function getBookFromStorage(title) {
  const books = JSON.parse(localStorage.getItem("books"));

  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      return books[i];
    }
  }

  return null;
}

// Kitabı güncelleme işlevi
document.addEventListener("click", function (e) {
  // "Güncelle" butonuna tıklanırsa
  if (e.target.id.startsWith("update-")) {
    // Kitabın başlığını alır
    const title = e.target.id.substring(7).replace(/-/g, " ");

    // Kitabın mevcut bilgilerini alır
    const book = getBookFromStorage(title);

    if (book) {
      // Modalı doldurur
      document.getElementById("update-title").defaultValue = book.title;
      document.getElementById("update-author").defaultValue = book.author;
      document.getElementById("update-category").defaultValue = book.category;
      document.getElementById("update-year").defaultValue = book.year;
      document.getElementById("update-cover").defaultValue = book.cover;

      // Modalı açar
      var myModal = new bootstrap.Modal(
        document.getElementById("updateBookModal")
      );
      myModal.show();
    }
  }
});
// Kitabı Local Storage'da günceller
Storage.prototype.updateBookInStorage = function (oldTitle, updatedBook) {
  let books = this.getBooksFromStorage();

  books.forEach(function (book, index) {
    if (book.title === oldTitle) {
      books[index] = updatedBook;
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};
// Kitabı UI'da günceller
Storage.prototype.updateBookInUI = function (oldTitle, updatedBook) {
  const table = document.querySelector("table tbody");
  const rows = Array.from(table.querySelectorAll("tr"));

  rows.forEach(function (row) {
    const title = row.getElementsByTagName("td")[1].textContent;

    if (title === oldTitle) {
      row.getElementsByTagName("td")[1].textContent = updatedBook.title;
      row.getElementsByTagName("td")[2].textContent = updatedBook.author;
      row.getElementsByTagName("td")[3].textContent = updatedBook.category;
      row.getElementsByTagName("td")[4].textContent = updatedBook.year;
      row.getElementsByTagName("td")[5].textContent = updatedBook.cover;
    }
  });
};
document.getElementById("update-button").addEventListener("click", function () {
  const oldTitle = document.getElementById("update-title").defaultValue;
  const newTitle = document.getElementById("update-title").value;
  const author = document.getElementById("update-author").value;
  const category = document.getElementById("update-category").value;
  const year = document.getElementById("update-year").value;
  const cover = document.getElementById("update-cover").value;

  // Güncellenmiş kitabı oluşturur
  const updatedBook = new Book(newTitle, author, category, year, cover);

  // Kitabı Local Storage'da ve UI'da günceller
  const storage = new Storage();
  storage.updateBookInStorage(oldTitle, updatedBook);
  storage.updateBookInUI(oldTitle, updatedBook);

  // Modalı kapatır
  var myModal = bootstrap.Modal.getInstance(
    document.getElementById("updateBookModal")
  );
  myModal.hide();
});

// Aktif filtreleri saklamak için bir dizi
let activeFilters = [];

// Filtreleme özelliği
["author-filter", "category-filter", "year-filter"].forEach((filterId) => {
  document.getElementById(filterId).addEventListener("change", function (e) {
    if (e.target.tagName === "INPUT") {
      // Filtrelerin güncellenmiş listesini alır
      activeFilters = Array.from(
        document.querySelectorAll(
          "#author-filter input:checked, #category-filter input:checked, #year-filter input:checked"
        )
      ).map((checkbox) => checkbox.value);

      // Filtreleme fonksiyonunu çağırır
      filterBooks();
    }
  });
});

// Kitapları filtreleme fonksiyonu
function filterBooks() {
  const table = document.querySelector("table tbody");
  const books = Array.from(table.querySelectorAll("tr"));

  // Kitapları göster
  books.forEach((book) => (book.style.display = ""));

  // Her aktif filtre için kitapları filtreler
  activeFilters.forEach((filter) => {
    books.forEach((book) => {
      const td = book.querySelectorAll("td");

      const author = td[2].textContent;
      const category = td[3].textContent;
      const year = td[4].textContent;

      if (author !== filter && category !== filter && year !== filter) {
        book.style.display = "none";
      }
    });
  });
}

// Sayfa yüklendiğinde kitapları alır ve ekranı doldurur
document.addEventListener("DOMContentLoaded", function () {
  const storage = new Storage();
  const books = storage.getBooksFromStorage();

  books.forEach((book) => storage.addBookToUI(book));
});

// Sıralama durumunu tutmak için bir nesne
const sortState = {
  title: 0,
  author: 0,
  category: 0,
  year: 0,
};

// Sıralama işlevi
function sortTable(column, num) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector("table");
  switching = true;

  // Durumun tersini al (artan/azalan)
  sortState[column] = sortState[column] === 0 ? 1 : 0;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      // "num" sütununda iki elementi karşılaştır
      x = rows[i].getElementsByTagName("TD")[num];
      y = rows[i + 1].getElementsByTagName("TD")[num];

      // Artan sıralama yapılıyorsa
      if (sortState[column] === 1) {
        if (num !== 4) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (num !== 4) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// İkonları tıklandığında sıralama işlevini tetikler
document.querySelectorAll(".bi-caret-up-fill, .bi-caret-down-fill").forEach(function (icon) {
    icon.addEventListener("click", function (e) {
      const column = e.target.getAttribute("data-column");
      const num = Number(e.target.getAttribute("data-num"));
      sortTable(column, num);

      // Tüm ikonları varsayılan duruma döndürür
      document
        .querySelectorAll(".bi-caret-up-fill, .bi-caret-down-fill")
        .forEach(function (icon) {
          icon.classList.add("bi-caret-up-fill");
          icon.classList.remove("bi-caret-down-fill");
        });

      // Tıklanan ikonu günceller
      e.target.classList.toggle("bi-caret-up-fill");
      e.target.classList.toggle("bi-caret-down-fill");
    });
  });

// Kitap kapak modalı ve resim elementini seçer
const coverModal = document.getElementById("coverModal");
const coverImage = document.getElementById("coverImage");

// Modal açıldığında çalışacak fonksiyonu tanımlar
coverModal.addEventListener("show.bs.modal", function (event) {
  // Resme tıkladığımızda resmin URL'sini ve büyük resim URL'sini alır
  const button = event.relatedTarget;
  const imgUrl = button.getAttribute("data-img");
  const largeImgUrl = button.getAttribute("data-large-img");
  const bookUrl = button.getAttribute("data-url");

  // Modal içindeki img elementinin src özelliğini günceller
  coverImage.src = largeImgUrl;
});