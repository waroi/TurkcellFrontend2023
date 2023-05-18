import MusicCard from "./Components/musicCard.js";
import Checkbox from "./Components/checkbox.js";
import Fetch from "./fetch.js";
import Detail from "./Components/detailModal.js";
import UI from "./ui.js";

const request = new Fetch("http://localhost:3000/posts");

const musicList = document.getElementById("musicList");
const addBookBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const categoryList = document.getElementById("category-list");
const authorList = document.getElementById("author-list");
const categoryForm = document.getElementById("category-form");
const authorForm = document.getElementById("author-form");
const form = document.getElementById("music-form");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showMusic);
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  musicList.addEventListener("click", UI.deleteBookFromUI);
  musicList.addEventListener("click", UI.editBookFromUI);
  // sort.addEventListener("change", function () {
  //   Filter.sortBooksFromFilter(this.value);
  // });
  // searchInput.addEventListener("keyup", function () {
  //   Filter.searchBookFromFilter(this.value);
  // });
  // categoryForm.addEventListener("change", function () {
  //   Filter.filterBooksFromFilter();
  // });
  // authorForm.addEventListener("change", function () {
  //   Filter.filterBooksFromFilter();
  // });
}

function formListenSubmitEvent(e) {
  e.preventDefault();
  musicList.innerHTML = "";
  UI.formListenSubmitFromUI(e);
  showAuthor();
  showCategory();
  form.reset();
  categoryForm.reset();
  authorForm.reset();
  searchInput.value = "";
}

function showMusic() {
  request
    .get()
    .then((data) => {
      data.forEach((music) => {
        MusicCard.addMusicFromMusicCard(music);
        Detail.detailMusicFromDetailModal(music);
      });
    })
    .catch((err) => console.log(err));
}

async function showAuthor() {
  const musics = await request.get();
  const authorsSet = new Set();

  musics.forEach((music) => {
    const author = music.writer.toLowerCase();
    authorsSet.add(author);
  });

  authorList.innerHTML = "";
  authorList.innerHTML += Array.from(authorsSet).map((author) =>
    Checkbox.addCheckboxFromCheckbox(author)
  );
}

async function showCategory() {
  const musics = await request.get();
  musics.forEach((music) => {
    music.category = music.category.toLowerCase();
  });

  const categoriesSet = new Set(musics.map((music) => music.category));

  categoryList.innerHTML = "";
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    Checkbox.addCheckboxFromCheckbox(category)
  );
}
