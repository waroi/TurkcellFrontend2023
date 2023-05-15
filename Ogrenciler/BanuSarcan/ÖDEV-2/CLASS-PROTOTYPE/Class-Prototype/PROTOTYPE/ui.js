function UI() {}

UI.prototype.deleteBookList = function () {
  const ulDiv = document.querySelector(".list-group");
  ulDiv.innerHTML = "";
};

UI.prototype.deleteEachBook = function(e) {

    if (e.target.className === "fa fa-remove") {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }


UI.prototype.getUIBooks = function (film) {
    const listItem = document.createElement("li");
    const ulDiv = document.querySelector(".list-group");

    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
  
    const listPoster = document.createElement("img");
    listPoster.src = `${book.url}`;
    listPoster.alt = `${book.title}`;
    listPoster.width = "60";
    listPoster.height = "80";
  
    const bookNameDiv = document.createElement("div");
    bookNameDiv.innerText = book.bookName;
  
    const writerDiv = document.createElement("div");
    writerDiv.innerText = book.writer;
  
    const dateDiv = document.createElement("div");
    dateDiv.innerText = book.date;
  
    const iconDiv = document.createElement("div");
    iconDiv.className = "d-flex gap-3";

    const categoryDiv = document.createElement("div");
    categoryDiv.innerText = book.category;
  
    const deleteIconLink = document.createElement("a");
    deleteIconLink.addEventListener("click",deleteBook);
    deleteIconLink.href = "#";
    deleteIconLink.className = "deleteBooks";
    deleteIconLink.id = book.id;
    deleteIconLink.innerHTML= `<i class="fa fa-remove"></i>`;

    const editIconLink = document.createElement("a");
    editIconLink.addEventListener("click",editBooks);
    editIconLink.href = "#";
    editIconLink.className = "editBooks";
    editIconLink.id = film.id;
    editIconLink.innerHTML= `<i class="fa fa-edit"></i>`;
   


  
  
 
    iconDiv.appendChild(editIconLink);
    iconDiv.appendChild(deleteIconLink);

    listItem.appendChild(listPoster);
    listItem.appendChild(bookNameDiv);
    listItem.appendChild(writerDiv);
    listItem.appendChild(dateDiv);
    listItem.appendChild(categoryDiv);
    listItem.appendChild(iconDiv);


  
    ulDiv.appendChild(listItem);
  };
  export default UI;