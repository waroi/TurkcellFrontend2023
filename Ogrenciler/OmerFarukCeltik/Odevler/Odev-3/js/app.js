// import BlogData from "./bookConstructor.js";
import createCard from "./components/cardComponent.js";
import contentModalPage from "./components/modalPaginationComponent.js";
import latestAreaComponent from "./components/latestAreaComponent.js";
console.log(Date.now());
import sortCardsDateAndAlphabetic from "./functions/sortCardsFunction.js";
import categoryFiltercomponent from "./components/filterComponent.js";

let contentTitleInput = document.querySelector("#contentTitleInput");
let authorInput = document.querySelector("#authorInput");
let categoryInput = document.querySelector("#categoryInput");
let dateInput = document.querySelector("#dateInput");
let urlInput = document.querySelector("#urlInput");
let scoreInput = document.querySelector("#scoreInput");
let contentTextarea = document.querySelector("#contentTextarea");
let saveBookButton = document.querySelector("#save-book");
let editBookButton = document.querySelector("#edit-book");
let globalCardArea = document.querySelector("#globalCardArea");
let viewModalContent = document.querySelector("#view-modal-content");
let latestContentArea = document.querySelector("#latest-content-area");

let searchInput = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
let sortOptionArea = document.querySelector("#sort-area");
let navbarSearchInput = document.querySelector("#navbar-search");
let categoryFilterArea = document.querySelector("#category-filter-area");
let formCheckAll = document.querySelectorAll(".form-check")
// let categoryFilterParent = document.querySelector("#categoryFilterParent")



class Request {
  constructor(title, author, category, publicationDate, banner, score, content) {
    this.url = "http://localhost:3000/contents";
    this.id = Date.now();
    this.contentTitle = title;
    this.author = author;
    this.category = category;
    this.publicationDate = publicationDate;
    this.banner = banner;
    this.comments = 5,
      this.score = score,
      this.content = content
  }
  async get(id) {
    return new Promise((resolve, reject) => {
      fetch(id ? `${this.url}/${id}` : this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  async post(e) {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "POST",
        body: JSON.stringify({
          "id": this.id,
          "name": this.name,
          "author": this.author,
          "category": this.category,
          "publicationDate": this.publicationDate,
          "banner": this.banner
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}
const request = new Request();

class UI {
  static isEmpty() {
    //   return (
    //     bookNameInput.value == "" ||
    //     authorInput.value == "" ||
    //     categoryInput.value == "" ||
    //     numberInput.value == "" ||
    //     numberInput.value == ""
    // )
  };
  async refreshAndAddContentToUI(searchValue, sortValue,navbarSearchValue,checkedValue) {
    globalCardArea.innerHTML = "";
    await request.get().then((res) => {
      if (searchValue || sortValue || navbarSearchValue || checkedValue) {
        if (searchValue) {
          globalCardArea.innerHTML = "";
          res.map((item) => {
            if (item.contentTitle.toLowerCase().includes(searchValue.toLowerCase()) || 
            item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
             item.category.toLowerCase().includes(searchValue.toLowerCase())) {
              globalCardArea.innerHTML += createCard(item);
            }
          });
        } 
        else if(navbarSearchValue) {
          globalCardArea.innerHTML = "";
          res.map((item) => {
            if (item.category.toLowerCase().includes(navbarSearchValue.toLowerCase())){
              globalCardArea.innerHTML += createCard(item);
            }
          });
        } else if (sortValue) {
          let arr = sortCardsDateAndAlphabetic(sortValue, res);
          arr.map((item) => globalCardArea.innerHTML += createCard(item))
        }else if(checkedValue){
          globalCardArea.innerHTML = "";
          res.map((item) => {
            if (item.category.toLowerCase().includes(checkedValue.toLowerCase())){
              globalCardArea.innerHTML += createCard(item);
            }
          });
        }
      }
      else {
        globalCardArea.innerHTML = "";
        res.map((item) => {
          globalCardArea.innerHTML += createCard(item);
        })
      }
      latestContentArea.innerHTML = latestAreaComponent(res);
    });

  };
  static resetAllInput() {
    // form.reset()
  };
  static addCategoryFilterToUI(set) {
     set.forEach((item) => {
      categoryFilterArea.innerHTML += categoryFiltercomponent(item);
     })
  }
}

eventListeners();
function eventListeners() {
  saveBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBook(e);
    e.stopPropagation();
  });
  editBookButton.addEventListener("click", (e) => completeEditContent(contentCurrentId, e))
  globalCardArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  latestContentArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  searchButton.addEventListener("click", (e) => searchAndSortContents(e));
  sortOptionArea.addEventListener("change", (e) => searchAndSortContents(e));
  navbarSearchInput.addEventListener("keypress", (e) => e.key=="Enter" ? searchAndSortContents(e) : null);
  categoryFilterArea.addEventListener("click",(e) => categoryFilterStatus(e));
}

let ui = new UI();
ui.refreshAndAddContentToUI();
let contentCurrentId;

async function globalCardAreaClickFunctions(e) {
  console.log(e.target.innerText);
  if (e.target.innerText == "Edit") {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    contentCurrentId = targetId;
    editContent(targetId);
  }
  else if (e.target.innerText == "Delete") {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    deleteContent(targetId, e);

  } else if (e.target.classList.contains("explore-content")) {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    await request.get(targetId)
      .then((data) => contentModalPage(data))
      .then((data) => viewModalContent.innerHTML = data);
  }
}
async function deleteContent(targetId, e) {
  await request.delete(targetId);
  await ui.refreshAndAddContentToUI();
}
async function editContent(targetId, e) {
  await request.get(targetId).then((content) => {
    console.log(content);
    contentTitleInput.value = content.contentTitle;
    authorInput.value = content.author;
    categoryInput.value = content.category;
    dateInput.value = content.publicationDate;
    urlInput.value = content.banner;
    scoreInput.value = content.score;
    contentTextarea.value = content.content;
  })
}
async function completeEditContent(contentCurrentId, e) {
  console.log(contentCurrentId);
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  await request.put(contentCurrentId, {
    "contentTitle": contentTitleInput.value,
    "author": authorInput.value,
    "category": categoryInput.value,
    "publicationDate": dateInput.value,
    "banner": urlInput.value,
    "score": Number(scoreInput.value),
    "content": contentTextarea.value
  })
  await ui.refreshAndAddContentToUI();
}

function searchAndSortContents(e) {
  e.preventDefault();
  if (searchInput.value.length >= 3 || sortOptionArea.value || navbarSearchInput.value.length >=3) {
    ui.refreshAndAddContentToUI(searchInput.value,sortOptionArea.value,navbarSearchInput.value);
  }else{
    ui.refreshAndAddContentToUI();
  }
}
categoryFilterList()
async function categoryFilterList(){
  const categorySet = new Set();
  await request.get().then((data) => data.map((item) => categorySet.add(item.category)));
  await console.log(categorySet);
  await UI.addCategoryFilterToUI(categorySet);
}
function categoryFilterStatus(e){
  e.target.checked == true ? e.target.parentElement.children[1].classList.add("active") : e.target.parentElement.children[1].classList.remove("active");
  
  if(e.target.checked){
   ui.refreshAndAddContentToUI(null, null, null,e.target.value);
  }else{
    ui.refreshAndAddContentToUI();
  }
}


function addBook(e) {
  let newContent = new Request(
    contentTitleInput.value,
    authorInput.value,
    categoryInput.value,
    dateInput.value,
    urlInput.value,
    Number(scoreInput.value),
    contentTextarea.value
  );
  // bookArray.push(newBook);
  // UI.refreshAndAddContentToUI(newBook);
  // UI.resetAllInput();
  // bookCategorySet = new Set(bookArray.map((book) => book.category));
  // bookAuthorSet = new Set(bookArray.map((book) => book.author));
  // console.log(bookCategorySet);
  // createBookFilters();
  // console.log(newContent);
  // ui.refreshAndAddContentToUI();
  // newContent.post(e).catch((err) => console.log(err));
}
// addBook();