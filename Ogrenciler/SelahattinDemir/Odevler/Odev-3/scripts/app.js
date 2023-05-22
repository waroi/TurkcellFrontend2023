import MusicCard from "./Components/musicCard.js";
import Checkbox from "./Components/checkbox.js";
import Fetch from "./fetch.js";
import Detail from "./Components/detailModal.js";
import UI from "./ui.js";
import Filter from "./filter.js";

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
  window.addEventListener("scroll", showLine);
  window.addEventListener("scroll", noneFilterWrapper);
  document.addEventListener("DOMContentLoaded", showMusics);
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  musicList.addEventListener("click", UI.deleteMusicFromUI);
  musicList.addEventListener("click", UI.editMusicFromUI);

  sort.addEventListener("click", function (e) {
    let clickedItem = e.target;
    let selectedValue = clickedItem.getAttribute("value");
    Filter.sortMusicsFromFilter(selectedValue);
  });

  searchInput.addEventListener("keyup", function () {
    Filter.searchMusicFromFilter(this.value);
  });

  categoryForm.addEventListener("change", function () {
    Filter.filterMusicsFromFilter();
  });

  authorForm.addEventListener("change", function () {
    Filter.filterMusicsFromFilter();
  });
}

async function formListenSubmitEvent(e) {
  e.preventDefault();
  musicList.innerHTML = "";
  UI.formListenSubmitFromUI(e);
  showMusics();
  showAuthor();
  showCategory();
  form.reset();
  categoryForm.reset();
  authorForm.reset();
  searchInput.value = "";
}

function showMusics() {
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

// sayfa scroll edildiğinde çizgiyi göster
function showLine() {
  var scrollPosition = window.scrollY;
  var lines = document.querySelectorAll(".line");

  lines.forEach(function (line, index) {
    var triggerPoint = (index + 1) * 200;
    var opacity = 0;

    if (scrollPosition >= triggerPoint) {
      opacity = 1;
    }

    line.style.opacity = opacity;
  });
}

// sayfa scroll edildiğinde filtreleme containerinı gizle
function noneFilterWrapper() {
  var wrapperDiv = document.querySelector(".filter-float-wrapper");
  var scrollPosition = window.innerHeight + window.scrollY;
  var documentHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= documentHeight) {
    wrapperDiv.style.display = "none";
  } else {
    wrapperDiv.style.display = "block";
  }
}
