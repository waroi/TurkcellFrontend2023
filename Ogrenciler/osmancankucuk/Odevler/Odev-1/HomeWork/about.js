let aboutNav = document.querySelector(".navBarAbout");
let aboutLang = document.querySelectorAll(".lang");
console.log(aboutLang.length);

window.onscroll = function () {
  if (window.scrollY >= 20) {
    aboutNav.style.backgroundColor = "white";
    for (let index = 0; index < aboutLang.length; index++) {
      aboutLang[index].style.color = "black";
    }
  } else {
    aboutNav.style.backgroundColor = "";
    for (let index = 0; index < aboutLang.length; index++) {
      aboutLang[index].style.color = "white";
    }
  }
};
