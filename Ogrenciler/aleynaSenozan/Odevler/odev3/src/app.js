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
  travelList.addEventListener('click', function (e) {
    if (e.target.id === 'readMore') {
      ui.readMorePostFromUI(e.target.closest('.travelCard'));
    }
  });
  travelList.addEventListener("click", editItem);
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

function editItem(e) {
  if (e.target.id === 'updatePost') {
    const imgUrl = card.querySelector('img')?.getAttribute('src');
    const postTitle = card.querySelector('.card-title')?.textContent;
    const postAuthor = card.querySelector('.author-s')?.querySelector('small')?.textContent.replace('Author: ', '');
    const postDate = card.querySelector('.card-text:nth-child(3)')?.textContent;
    const postCategory = card.querySelector('.card-text:last-child')?.textContent.replace('Category: ', '');
    const postContent = card.dataset.fullText;
    

    ui.editItemOnUI({
      imgUrl,
      postTitle,
      postAuthor,
      postDate,
      postCategory,
      postContent
    });
  }
}
