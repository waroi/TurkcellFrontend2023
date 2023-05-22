// import { deleteContent, } from "./app.js";
import Request from "./requestClass.js";
const request = new Request();

import latestAreaComponent from "./components/latestAreaComponent.js";
import createCard from "./components/cardComponent.js";
import categoryFiltercomponent from "./components/filterComponent.js";
import sortCardsDateAndAlphabetic from "./functions/sortCardsFunction.js";

let categoryFilterArea = document.querySelector("#category-filter-area");
let latestContentArea = document.querySelector("#latest-content-area");
let globalCardArea = document.querySelector("#globalCardArea");
let contentTitleInput = document.querySelector("#contentTitleInput");
let authorInput = document.querySelector("#authorInput");
let categoryInput = document.querySelector("#categoryInput");
let dateInput = document.querySelector("#dateInput");
let urlInput = document.querySelector("#urlInput");
let scoreInput = document.querySelector("#scoreInput");
let contentTextarea = document.querySelector("#contentTextarea");
let arr = [];
class UI {
  static isEmpty() {
    return (
      contentTitleInput.value.length < 5 ||
      authorInput.length < 5  ||
      categoryInput.length < 5  ||
      dateInput.value == "" ||
      urlInput.value == "" ||
      scoreInput.value == "" ||
      contentTextarea.value.length < 140 
    )
  };
  async refreshAndAddContentToUI(searchValue, sortValue, navbarSearchValue, checkedValue, zeroCheck) {
    globalCardArea.innerHTML = "";
    await request.get().then((res) => {
      if (searchValue || sortValue || checkedValue || zeroCheck) {
        if (searchValue) {
          globalCardArea.innerHTML = "";
          res.map((item) => {
            if (item.contentTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.author.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.category.toLowerCase().includes(searchValue.toLowerCase())) {
              globalCardArea.innerHTML += createCard(item);
            }
          });
        } else if (sortValue) {
          let sortArr = sortCardsDateAndAlphabetic(sortValue, res);
          sortArr.map((item) => globalCardArea.innerHTML += createCard(item))
        }
        else if (checkedValue) {
          res.map((item) => {
            if (item.category.toLowerCase().includes(checkedValue.toLowerCase())) {
              globalCardArea.innerHTML = "";
              arr.push(item);
              arr.map((item) => globalCardArea.innerHTML += createCard(item));
              // globalCardArea.innerHTML += createCard(item);
            }
          });
        }
        else if (zeroCheck == true) {
          arr = [];
          globalCardArea.innerHTML = "";
          res.map((item) => {
            globalCardArea.innerHTML += createCard(item);
          })
        }
      }
      else if (navbarSearchValue) {
        arr = [];
        globalCardArea.innerHTML = "";
        res.map((item) => {
          if (item.category.toLowerCase().includes(navbarSearchValue.toLowerCase())) {
            globalCardArea.innerHTML += createCard(item);
          }
        });
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
  static addCategoryFilterToUI(set) {
    set.forEach((item) => {
      categoryFilterArea.innerHTML += categoryFiltercomponent(item);
    })
  }
}

export default UI;