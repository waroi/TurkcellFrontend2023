// import BlogData from "./bookConstructor.js";
import UI from "./uiClass.js";
import Request from "./requestClass.js";
import contentModalPage from "./components/modalPaginationComponent.js";
console.log(Date.now());
// input
let contentTitleInput = document.querySelector("#contentTitleInput");
let authorInput = document.querySelector("#authorInput");
let categoryInput = document.querySelector("#categoryInput");
let dateInput = document.querySelector("#dateInput");
let urlInput = document.querySelector("#urlInput");
let scoreInput = document.querySelector("#scoreInput");
let contentTextarea = document.querySelector("#contentTextarea");
let searchInput = document.querySelector("#search-input");
let navbarSearchInput = document.querySelector("#navbar-search");
// button
let saveContentButton = document.querySelector("#save-book");
let editContentButton = document.querySelector("#edit-book");
let globalCardArea = document.querySelector("#globalCardArea");
let searchButton = document.querySelector("#search-button");
let addNewContentButton = document.querySelector("#addNewContentButton");
// area
let viewModalContent = document.querySelector("#view-modal-content");
let latestContentArea = document.querySelector("#latest-content-area");
let sortOptionArea = document.querySelector("#sort-area");
let categoryFilterArea = document.querySelector("#category-filter-area");
let form = document.querySelector("form");

// let categoryFilterParent = document.querySelector("#categoryFilterParent")

const request = new Request();

eventListeners();
function eventListeners() {
  saveContentButton.addEventListener("click", (e) => addBook(e));
  editContentButton.addEventListener("click", (e) => completeEditContent(contentCurrentId, e))
  globalCardArea.addEventListener("click", (e) => { globalCardAreaClickFunctions(e);; toggleButtons(e) });
  latestContentArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  searchButton.addEventListener("click", (e) => searchAndSortContents(e));
  sortOptionArea.addEventListener("change", (e) => searchAndSortContents(e));
  navbarSearchInput.addEventListener("keypress", (e) => e.key == "Enter" ? searchAndSortContents(e) : null);
  categoryFilterArea.addEventListener("click", (e) => categoryFilterStatus(e));
  addNewContentButton.addEventListener("click", (e) => toggleButtons(e))
}
function toggleButtons(e) { 
  form.reset();
  if (e.target.id == "addNewContentButton") {
    saveContentButton.classList.add("d-block");
    saveContentButton.classList.remove("d-none");
    editContentButton.classList.add("d-none");
    editContentButton.classList.remove("d-block");
  } else if (e.target.innerHTML == "Edit") {
    saveContentButton.classList.remove("d-block");
    saveContentButton.classList.add("d-none");
    editContentButton.classList.remove("d-none");
    editContentButton.classList.add("d-block");
  }
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
export async function deleteContent(targetId, e) {
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
export async function completeEditContent(contentCurrentId, e) {
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

export function searchAndSortContents(e) {
  e.preventDefault();
  if (searchInput.value.length >= 3 || sortOptionArea.value || navbarSearchInput.value.length >= 3) {
    ui.refreshAndAddContentToUI(searchInput.value, sortOptionArea.value, navbarSearchInput.value);
  } else {
    ui.refreshAndAddContentToUI();
  }
}
categoryFilterList()
async function categoryFilterList() {
  const categorySet = new Set();
  await request.get().then((data) => data.map((item) => categorySet.add(item.category)));
  await console.log(categorySet);
  await UI.addCategoryFilterToUI(categorySet);
}
export function categoryFilterStatus(e) {
  e.target.checked == true ? e.target.parentElement.children[1].classList.add("active") : e.target.parentElement.children[1].classList.remove("active");

  if (e.target.checked) {
    ui.refreshAndAddContentToUI(null, null, null, e.target.value);
  } else {
    ui.refreshAndAddContentToUI();
  }
}


function addBook(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  e.stopPropagation();
  if (UI.isEmpty() || contentTextarea.value.length <= 140) {
  //   document.body.innerHTML += `
  //   <div class="alert alert-danger" role="alert">
  // A simple success alert—check it out!
  // </div>`
  } else {
    let newContent = new Request(
      contentTitleInput.value,
      authorInput.value,
      categoryInput.value,
      dateInput.value,
      urlInput.value,
      Number(scoreInput.value),
      contentTextarea.value
    );
    newContent.post().catch((err) => console.log(err));
  }
}
