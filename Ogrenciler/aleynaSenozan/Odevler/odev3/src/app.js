const searchInput = document.querySelector('#searchInput');
const travelList = document.getElementById('travel-list');
document.querySelector("#saveChanges").addEventListener("click", saveChanges);
const writeButton=document.querySelector("#writeButton");
const addButton=document.querySelector("#addButton");
const request = new Request("http://localhost:3000/travels");
const updateButton = document.querySelector("#updatePost");
const categoryList = document.getElementById("category-list");
const categoryForm = document.getElementById("category-form");
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  getAllItems();
  eventListeners();
  showCategory();
});

function eventListeners() {
  searchInput.addEventListener('keyup', searchPost);
  travelList.addEventListener("click", readMorePost);
  travelList.addEventListener("click", updatePost);
  travelList.addEventListener("click", deleteItem);
  sort.addEventListener("change", function () {
    ui.sortTravelsFromUI(this.value);
  });
  writeButton.addEventListener("click", openAddRecordModal);
  addButton.addEventListener("click", addItem);
  travelList.addEventListener("click", deleteItem);

  categoryForm.addEventListener("change", function () {
    ui.filterTravelsFromFilter();
  });
}
function getAllItems() {
  request
    .get()
    .then((travels) => {
      ui.loadAllTravelsToUI(travels);
    })
    .catch((err) => {
      console.log(err);
    });
}
function searchPost(e) {
  const searchValue = e.target.value.toLowerCase();
  ui.searchPostInUI(searchValue);
}
function readMorePost(e) {
  if (e.target.id === 'readMore') {
    ui.readMorePostFromUI(e.target.parentElement.parentElement.parentElement);
  }
  e.preventDefault();
}
function updatePost(e) {
  if (e.target.id === 'updatePost' || e.target.parentElement.id === 'updatePost') {
    ui.updatePostFromUI(e.target.closest('.travelCard'));
  }
  e.preventDefault();
}
function saveChanges() {
  const id = document.getElementById('update-id').value;
  const title = document.getElementById('update-title').value;
  const text = document.getElementById('update-text').value;
  const author = document.getElementById('update-author').value;
  const category = document.getElementById('update-category').value;
  const url = document.getElementById('update-url').value;
  
  request
    .put(id, {title, text, author, date: new Date().toISOString(), category, url})
    .then(response => {
      location.reload(); 
    })
    .catch(err => console.log(err));
}
function addItem(e) {
  e.preventDefault();

  const titleInput = document.getElementById('add-title');
  const authorInput = document.getElementById('add-author');
  const selectInput = document.getElementById('add-category');
  const imgInput = document.getElementById('add-url');
  const articleInput = document.getElementById('add-text');

  const articleTitle = titleInput.value.trim();
  const articleAuthor = authorInput.value.trim();
  const articleSelect = selectInput.value;
  const articleImg = imgInput.value.trim();
  const articleBody = articleInput.value.trim();
  const time = Date();

  if (
      articleTitle === "" ||
      articleAuthor === "" ||
      articleSelect === "" ||
      articleImg === "" ||
      articleBody === ""
  ) {
      alert("Lütfen Tüm Alanları Doldurun");
  } else {
      request
          .post({
            url: articleImg,
              title: articleTitle,
              text: articleBody,
              author: articleAuthor,
              category: articleSelect,
              date: time,
          })
          .then((article) => {
              ui.addTravelToUI(article);
              $('#addRecordModal').modal('hide');
          })
          .catch((err) => {
              console.log(err);
          });
  }
  titleInput.value = "";
  authorInput.value = "";
  selectInput.value = "";
  imgInput.value = "";
  articleInput.value = "";
}
function openAddRecordModal() {
  const addRecordModal = new bootstrap.Modal(document.getElementById('addRecordModal'));
  addRecordModal.show();
}
function deleteItem(e) {
  if (e.target.id === 'delete-article' || e.target.parentElement.id === 'delete-article') {
    const id = e.target.closest('.travelCard').id;
    request
      .delete(id)
      .then(() => {
        e.target.closest('.travelCard').remove();
      })
      .catch(err => console.log(err));
  }
  e.preventDefault();
}

async function showCategory() {
  const travels = await request.get();
  travels.forEach((travel) => {
    travel.category = travel.category.toLowerCase();
  });

  const categoriesSet = new Set(travels.map((travel) => travel.category));

  categoryList.innerHTML = "";
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    ui.addCheckboxFromCheckbox(category)
  );
}



