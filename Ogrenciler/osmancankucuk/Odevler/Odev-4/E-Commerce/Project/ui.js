class UI {
  static displayMessage(message, type) {
    const modalBody = document.querySelector(".productModalBody");
    console.log(modalBody);

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

  static filterPosts(category) {
    const cardItem = document.querySelectorAll(".card-body");

    cardItem.forEach((card) => {
      let searchInputValue = document.getElementById("searchInput").value;

      console.log(
        card.children[0].textContent.substring(10, card.children[1].length)
      );

      if (searchInputValue !== "") {
        if (
          card.children[0].textContent
            .toLowerCase()
            .indexOf(searchInputValue.trim().toLowerCase()) === 0 &&
          card.children[1].textContent
            .substring(10, card.children[1].length)
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
          card.children[1].textContent
            .substring(10, card.children[1].length)
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
  static sortProducts(shape, category) {
    const selectFilterElement = filterForm.elements["filterCategory"];
    console.log(selectFilterElement);
    const selectedOption =
      selectFilterElement.options[selectFilterElement.selectedIndex].value;
    console.log(selectedOption);
    productArea.innerHTML = "";

    if (shape === "A-Z" && category === "name") {
      dataProduct
        .getPost()
        .then((response) => {
          let sortData = response.sort((a, b) => {
            const nameA = a.name.charAt(0).toUpperCase();

            const nameB = b.name.charAt(0).toUpperCase();
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
        })
        .catch((err) => console.log(err));
    }
    if (shape === "Z-A" && category === "name") {
      dataProduct
        .getPost()
        .then((response) => {
          let sortData = response.sort((a, b) => {
            const nameA = a.name.charAt(0).toUpperCase();

            const nameB = b.name.charAt(0).toUpperCase();
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (shape === "A-Z" && category === "price") {
      dataProduct
        .getPost()
        .then((response) => {
          let sortData = response.sort((a, b) => {
            return a.price - b.price;
          });
          sortData.forEach((data) => {
            UI.createPostCard(data);
            UI.filterPosts(selectedOption);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (shape === "Z-A" && category === "price") {
      dataProduct
        .getPost()
        .then((response) => {
          let sortData = response.sort((a, b) => {
            return b.price - a.price;
          });
          sortData.forEach((data) => {
            UI.createPostCard(data);
            UI.filterPosts(selectedOption);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  static searchProducts(input) {
    const cardItem = document.querySelectorAll(".card-body");

    cardItem.forEach((card) => {
      console.log(card);
      if (
        card.children[0].textContent
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
  static basketErrorMessage(message, type) {
    let countError = document.querySelectorAll(".countError");
    countError.forEach((err) => {
      const div = document.createElement("div");
      div.className = `alert alert-${type}`;
      div.textContent = message;
      err.appendChild(div);
      setTimeout(() => {
        div.remove();
        console.log(type === "success");
        if (type === "success") {
          let close = document.querySelector(".btn-close");
          console.log(close);
          close.click();
        }
      }, 1500);
    });
  }
  static createPostCard(product) {
    console.log(product.url);
    productArea.innerHTML += `

    <div  class="col-sm-6 col-md-4 col-lg-3 productCard" id="${product.id}">
      <div class="card postCard">
      <img
      style="max-height: 300px"
        src=${product.url}
        class="bookImage card-img-top movie-banner img-fluid"
        alt="..."
      />
      <div  style="overflow: scroll"   class="card-body">

      </hr>
      <h4 class="card-title text-center name"><strong>${product.name}</strong></h4>

        <h5 class="card-title category"><strong>Category: </strong>${product.category}</h5>

        <p class="card-title author"><strong>Price: </strong>${product.price}</p>
        <p class="card-title author"><strong>Stock: </strong>${product.stock}</p>
        </div>
        <div class="text-center p-3">
        
        <button class="btn btn-secondary decrease">-</button>
        <button class="btn btn-secondary increase">+</button>
        <span id="countLabel" >${count}</span>
        <div class="countError mt-2"> </div>
        <button class="btn btn-primary addBasket my-3 w-100 fw-bold text-white   ">Sepete Ekle </button>
        <button  id="product-edit" class="btn btn-warning text-white product-edit w-100 fw-bold"  data-bs-toggle="modal"
        data-bs-target="#inputEditModal">Edit <i class=" ps-1 fa-solid fa-pen-to-square" style="color: #ffffff;"></i></button>
        <button class="btn btn-danger product-delete my-3 w-100 fw-bold text-white   ">Delete <i class="ps-1 fa-solid fa-trash text-light"></i></button>
        
        </div>
        </div>
        </div>

        `;
  }
}
