const searchInput = document.querySelector('#searchInput');
const travelList = document.getElementById('travel-list');
const request = new Request("http://localhost:3000/travels");
const updateButton = document.querySelector("#updatePost");
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  getAllItems();
  eventListeners();
});

function eventListeners() {
  searchInput.addEventListener('keyup', searchPost);
  travelList.addEventListener("click", readMorePost);
  travelList.addEventListener("click", updatePost);
  sort.addEventListener("change", function () {
    ui.sortTravelsFromUI(this.value);
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

travelList.addEventListener("click", updatePost);
document.querySelector("#saveChanges").addEventListener("click", saveChanges);

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
      location.reload(); // Sayfayı yenileyerek değişiklikleri görünür yaparız.
    })
    .catch(err => console.log(err));
}



