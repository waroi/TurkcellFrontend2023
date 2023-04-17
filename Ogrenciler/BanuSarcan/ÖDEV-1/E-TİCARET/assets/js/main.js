console.log("https://github.com/serdargoleli/shoes-ecommerce-page");

/* ===========> SEARCH BOX <===========  */
const btnSearchBoxToggle = document.getElementById("btn-toggle-search-box");
const searchBoxOverlay = document.getElementById("search-box-overlay");
const searchBoxContainer = document.getElementById("search-box-container");
const searchInput = document.getElementById("search-input");

btnSearchBoxToggle.addEventListener("click", () => {
  searchBoxOverlay.classList.toggle("open-search-box-overlay");
  searchBoxContainer.classList.toggle("open-search-box");
  /* Eger search-box açıksa inputa focusla ve içindeki değeri sıfırla  */
  if (searchBoxContainer.classList.contains("open-search-box")) {
    searchInput.focus();
    searchInput.value = "";
  }
});

searchBoxOverlay.addEventListener("click", () => {
  if (searchBoxContainer.classList.contains("open-search-box")) {
    searchBoxOverlay.classList.remove("open-search-box-overlay");
    searchBoxContainer.classList.remove("open-search-box");
    console.log("...");
  }
});

/* ===========> MOBILE MENU <===========  */
/* Menu Show */
const btnToggleMobileMenu = document.getElementById("btn-toggle-mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");
const mobileMenuBox = document.getElementById("mobile-menu-box");
const btnCloseMenu = document.getElementById("btn-close-menu");

btnToggleMobileMenu.addEventListener("click", () => {
  overlay.classList.toggle("open-overlay");
  mobileMenuBox.classList.toggle("open-mobile-menu");
});

/* Menu Close */
overlay.addEventListener("click", () => {
  overlay.classList.remove("open-overlay");
  mobileMenuBox.classList.remove("open-mobile-menu");
});

btnCloseMenu.addEventListener("click", () => {
  mobileMenuBox.classList.remove("open-mobile-menu");
  overlay.classList.remove("open-overlay");
});

// Home Select Shoes Size
var div = document.getElementById("select-size");
var items = div.getElementsByClassName("size-item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("checked");
    current[0].className = current[0].className.replace(" checked", "");
    this.className += " checked";
  });
}
