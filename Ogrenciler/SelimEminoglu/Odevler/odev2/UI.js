function UIConstructor() {}

UIConstructor.prototype.addBook = function (book) {
  this.book = {
    name: book.name.value,
    writer: book.writer.value,
    date: book.date.value,
    category: book.category.value,
    url: book.url.value,
  };

  const col = document.createElement("div");
  col.classList.add("col-3");

  const card = document.createElement("div");
  card.classList.add("card", "my-3", "mx-2");
  card.getAttribute("style");
  card.style.width = "18rem";

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = `"${this.book.url}"`;
  img.alt = "images";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("card-title");
  const h5Text = document.createTextNode(`${this.book.name}`);
  h5.appendChild(h5Text);

  const h6Writer = document.createElement("h6");
  const h6WriText = document.createTextNode("Yazar:");
  h6Writer.appendChild(h6WriText);

  const pWriter = document.createElement("p");
  pWriter.classList.add("card-text");
  const pWriText = document.createTextNode(`${this.book.writer}`);
  pWriter.appendChild(pWriText);

  const h6Date = document.createElement("h6");
  const h6DateText = document.createTextNode("Yazım Yılı:");
  h6Date.appendChild(h6DateText);

  const pDate = document.createElement("p");
  pDate.classList.add("card-text");
  const pDateText = document.createTextNode(`${this.book.date}`);
  pDate.appendChild(pDateText);

  const h6Category = document.createElement("h6");
  const h6CategoryText = document.createTextNode("Kategori:");
  h6Category.appendChild(h6CategoryText);

  const pCategory = document.createElement("p");
  pCategory.classList.add("card-text");
  const pCategoryText = document.createTextNode(`${this.book.category}`);
  pCategory.appendChild(pCategoryText);

  const row = document.createElement("div");
  row.classList.add("row", "justify-content-center");

  const col5 = document.createElement("div");
  col5.classList.add("col-5");

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("btn", "btn-success");
  updateBtn.type = "button";
  const updateBtnText = document.createTextNode("Güncelle");
  updateBtn.appendChild(updateBtnText);

  const col5Flex = document.createElement("div");
  col5Flex.classList.add("col-5", "d-flex", "justify-content-center");

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
};
