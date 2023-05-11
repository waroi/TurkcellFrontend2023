function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add("col-10", "col-sm-5", "col-lg-2", "mb-4", "mx-1", "card");
  card.innerHTML = `
      <div class="imgBx">
        <img src="${book.coverImage}" class="card-img-top" alt="Book Cover">
      </div>
      <div class="contentBx">
        <h2 class="title-tooltip">${book.title} <p class="tooltiptext">${book.title}</p></h2>
        <p class="author">${book.author}</p>
        <span class="genre">${book.category}</span>
        <span class="publication-year">${book.date}</span>
        <div class="card-btns">
          <button type="button" class="btn">Edit</button>
          <button type="button" class="btn">Delete</button>
        </div>
    </div>
  `;
  return card;
}
function renderBookList(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  for (let book of books) {
    const card = createBookCard(book);
    bookList.appendChild(card);
  }
}
const initialBooks = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    date: "1954",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg"
  },
  {
    title: "Marslı",
    author: "Andy Weir",
    category: "Horror",
    date: "2011",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478891721i/23681652.jpg"
  },
  {
    title: "Babil'in En Zengin Adamı",
    author: "Stephen King",
    category: "Horror",
    date: "1977",
    coverImage: "https://i.dr.com.tr/cache/500x400-0/originals/0001776496001-1.jpg"
  },
  {
    title: "Bilinçaltının Gücü",
    author: "Joseph Murphy",
    category: "Horror",
    date: "1941",
    coverImage: "https://i.dr.com.tr/cache/500x400-0/originals/0001831154001-1.jpg"
  },
  {
    title: "Satranç",
    author: "Stefan Zweig",
    category: "Horror",
    date: "2019",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618688118i/1220467.jpg"
  },
];

renderBookList(initialBooks);
