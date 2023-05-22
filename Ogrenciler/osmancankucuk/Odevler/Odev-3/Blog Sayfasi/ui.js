const postArea = document.querySelector(".postCollection");
const converter = document.querySelector(".converter");

// function calistir() {
//   let colNum = 3;

//   colNum === 3 ? (colNum = 4) : (colNum = 3);
//   return colNum;
// }
converter.addEventListener("click", function () {
  let element = document.querySelectorAll(".cardItem");
  element.forEach((el) => {
    if (el.classList.contains("col-lg-3") === true) {
      el.classList.remove("col-lg-3");
      el.classList.add("col-lg-4");
      console.log(converter.children[0]);
      converter.children[0].classList.remove("fa-grip-vertical");
      converter.children[0].classList.add("fa-grip");
    } else {
      el.classList.remove("col-lg-4");
      el.classList.add("col-lg-3");
      converter.children[0].classList.remove("fa-grip");
      converter.children[0].classList.add("fa-grip-vertical");
    }
  });
});

class UI {
  static displayMessage(message, type) {
    const modalBody = document.querySelector(".modal-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    modalBody.appendChild(div);

    setTimeout(() => {
      div.remove();
      console.log(type === "success");
      if (type === "success") {
        let close = document.querySelector(".btn-close");
        console.log(close);
        close.click();
      }
    }, 1500);
  }

  static filterPosts(category, sortData) {
    const cardItem = document.querySelectorAll(".card-body");
    console.log(sortData);

    cardItem.forEach((card) => {
      let searchInputValue = document.getElementById("searchInput").value;
      console.log(searchInputValue);
      console.log(card);
      // console.log(
      console.log(card.children[2].textContent);
      // );
      if (searchInputValue !== "") {
        if (
          (card.children[4].textContent
            .substring(8, card.children[4].length)
            .toLowerCase()
            .indexOf(searchInputValue.trim().toLowerCase()) === 0 ||
            card.children[0].textContent

              .toLowerCase()
              .indexOf(searchInputValue.trim().toLowerCase()) === 0) &&
          card.children[2].textContent
            .substring(10, card.children[2].length)
            .indexOf(category) === 0
        ) {
          card.parentElement.parentElement.setAttribute(
            "style",
            "display:block"
          );
        } else {
          card.parentElement.parentElement.setAttribute(
            "style",
            "display:none"
          );
        }
      } else {
        if (
          card.children[2].textContent
            .substring(10, card.children[2].length)
            .indexOf(category) === -1
        ) {
          card.parentElement.parentElement.setAttribute(
            "style",
            "display:none"
          );
        } else {
          card.parentElement.parentElement.setAttribute(
            "style",
            "display:block"
          );
        }
      }
    });
  }
  static sortPosts(shape, category) {
    const selectFilterElement = filterForm.elements["filterCategory"];
    const selectedOption =
      selectFilterElement.options[selectFilterElement.selectedIndex].value;
    postsArea.innerHTML = "";

    if (
      (shape === "A-Z" && category === "title") ||
      (shape === "A-Z" && category === "author")
    ) {
      data.getPost().then((response) => {
        let sortData = response.sort((a, b) => {
          const nameA =
            category === "title"
              ? a.title.charAt(0).toUpperCase()
              : a.author.charAt(0).toUpperCase();
          const nameB =
            category === "title"
              ? b.title.charAt(0).toUpperCase()
              : b.author.charAt(0).toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        sortData.forEach((data) => {
          UI.createPostCard(data);
          UI.filterPosts(selectedOption);
        });

        // this.filterPosts();
      });
    }
    if (
      (shape === "Z-A" && category === "title") ||
      (shape === "Z-A" && category === "author")
    ) {
      data.getPost().then((response) => {
        let sortData = response.sort((a, b) => {
          const nameA =
            category === "title"
              ? a.title.charAt(0).toUpperCase()
              : a.author.charAt(0).toUpperCase();
          const nameB =
            category === "title"
              ? b.title.charAt(0).toUpperCase()
              : b.author.charAt(0).toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });

        sortData.forEach((data) => {
          UI.createPostCard(data);

          UI.filterPosts(selectedOption);
        });
      });
    }
    if (shape === "A-Z" && category === "date") {
      data.getPost().then((response) => {
        let sortData = response.sort((a, b) => {
          return a.date - b.date;
        });
        sortData.forEach((data) => {
          UI.createPostCard(data);
          UI.filterPosts(selectedOption);
        });
      });
    }
    if (shape === "Z-A" && category === "date") {
      data.getPost().then((response) => {
        let sortData = response.sort((a, b) => {
          return b.date - a.date;
        });
        sortData.forEach((data) => {
          UI.createPostCard(data);
          UI.filterPosts(selectedOption);
        });
      });
    }
  }
  static searchOnPosts(input) {
    const cardItem = document.querySelectorAll(".card-body");

    cardItem.forEach((card) => {
      console.log(card.children[4].textContent.toLowerCase());
      if (
        card.children[0].textContent
          .toLowerCase()
          .indexOf(input.trim().toLowerCase()) === 0 ||
        card.children[4].textContent
          .substring(8, card.children[4].textContent.length)
          .toLowerCase()
          .indexOf(input.trim().toLowerCase()) === 0
      ) {
        card.parentElement.parentElement.setAttribute("style", "display:block");
      } else {
        card.parentElement.parentElement.setAttribute("style", "display:none");
      }
    });
  }
  static addCurrentBookInf(currentBookId) {
    let books = Storage.getBooksFromStorage();
    let curBook = books.find((book) => book.id == currentBookId);

    console.log(curBook);
    bookName.value = curBook.name;
    bookAuthor.value = curBook.author;
    bookRelaseDate.value = curBook.year;
    bookCategory.value = curBook.category;
    bookUrl.value = curBook.url;
  }
  static createPostCard(post) {
    console.log(post.category);
    postsArea.innerHTML += `
    
    <div data-bs-toggle="modal"
    data-bs-target="#detailModal" class="cardItem col-md-6 col-lg-3  " id="${
      post.id
    }" >
    <div class="card postCard">
    <img
    style="min-height: 200px"
      src=${post.url}
      class="bookImage card-img-top movie-banner img-fluid"
      alt="..."
    />
    <div  style="overflow: scroll"   class="card-body">
   
    </hr>
    <h4 class="card-title text-center name"><strong>${post.title}</strong></h4>
      <h5  class="card-title name"><strong>Content: </strong>${
        post.content
      }</h5>
      <h5 class="card-title category"><strong>Category: </strong>${
        post.category
      }</h5>
      <p class="card-title year"><strong>Release Date: </strong>${new Date(
        post.date
      )}</p>
      <p class="card-title author"><strong>Author: </strong>${post.author}</p>
      </div>
      <div class="text-center p-3">
      <button  id="book-edit" class="btn btn-warning text-white post-edit w-100 fw-bold" data-bs-toggle="modal"
      data-bs-target="#inputModal2">Edit <i class=" ps-1 fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
      <button class="btn btn-danger post-delete my-3 w-100 fw-bold text-white   ">Delete <i class="ps-1 fa-solid fa-trash text-light"></i></button>
      </div>
      </div>
      </div>
      `;
  }
}
