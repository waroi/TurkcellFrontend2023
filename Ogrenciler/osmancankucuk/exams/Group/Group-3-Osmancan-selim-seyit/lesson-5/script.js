let nav = document.querySelector(".navBar");
let mainImage = document.querySelector(".mainImage");
let sectionItem = document.querySelectorAll(".sectionItems");
let icons = document.querySelectorAll(".iconBackground i");
let secondSectionItem = document.querySelector(".secondSectionItems");

window.onload = function () {};

window.onresize = function (event) {
  if (event.target.innerWidth < 1050) {
    nav.style.backgroundColor = "white";
    mainImage.src =
      "https://shreethemes.in/upstart/layouts/images/logo-dark.png";
  } else {
    nav.style.backgroundColor = null;
    mainImage.src =
      "https://shreethemes.in/upstart/layouts/images/logo-light.png";
    secondSectionItem.style.display = "none";
  }
};

function popup() {
  return secondSectionItem.style.display === "none"
    ? (secondSectionItem.style.display = "block")
    : (secondSectionItem.style.display = "none");
}

window.onscroll = function () {
  if (window.scrollY >= 20) {
    nav.classList.add("navColored");
    mainImage.src =
      "https://shreethemes.in/upstart/layouts/images/logo-dark.png";
    for (let index = 0; index < sectionItem.length; index++) {
      sectionItem[index].style.color = "black";
    }
    for (let index = 0; index < icons.length; index++) {
      icons[index].style.backgroundColor = "rgb(255, 87, 20)";
      icons[index].style.color = "white";
    }
  } else {
    mainImage.src =
      "https://shreethemes.in/upstart/layouts/images/logo-light.png";
    nav.classList.remove("navColored");
    mainImage.style.filter = null;
    for (let index = 0; index < sectionItem.length; index++) {
      sectionItem[index].style.color = "rgb(204, 204, 204)";
    }
    for (let index = 0; index < icons.length; index++) {
      icons[index].style.backgroundColor = "rgb(212, 218, 237)";
      icons[index].style.color = "black";
    }
  }
};
