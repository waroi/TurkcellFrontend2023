import Request from "./requestClass.js";
import createCard from "./components/cardComponent.js";
import sortCardsDateAndAlphabetic from "./sortCardsFunction.js";
import basketCardComponent from "./components/basketCardComponent.js";
// area

let marketPlaceArea = document.querySelector("#marketPlaceArea");
let basketModalBodyArea = document.querySelector("#basket-modal-form");
let basketModalAllArea = document.querySelector("#basket-form-modal");

// button
let saveCardButton = document.querySelector("#save-card");
let editCardButton = document.querySelector("#edit-card");
let addNewContentButton = document.querySelector("#addNewContentButton");

let request = new Request();

// input
let brandInput = document.querySelector("#brandInput");
let modelInput = document.querySelector("#modelInput");
let priceInput = document.querySelector("#priceInput");
let urlInput = document.querySelector("#urlInput");
let stockInput = document.querySelector("#stockInput");
let typeSelect = document.querySelector("#type-area");
let motorCCInput = document.querySelector("#motorCCInput");
let gasSelect = document.querySelector("#gas-area");
let statusSelect = document.querySelector("#status-area");
let form = document.querySelector("#form-modal");

// filter and sort
let sortArea = document.querySelector("#sort-area");
let searchFilterInput = document.querySelector("#search-input");
let engineCheck = document.querySelector("#engine-check");
let findedItems = new Set();

eventListeners();
let basketArray = [];

function eventListeners() {
  marketPlaceArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  saveCardButton.addEventListener("click", (e) => addNewCard(e));
  editCardButton.addEventListener("click", (e) => completeEditContent(contentCurrentId, e));
  engineCheck.addEventListener("click", (e) => allFilterEvents(e));
  searchFilterInput.addEventListener("keyup", (e) => e.target.value.length >= 3 ? ui.refreshAndAddCardsToUI(null, e.target.value) : ui.refreshAndAddCardsToUI(null, null));
  sortArea.addEventListener("change", (e) => sortEvents(e));
  addNewContentButton.addEventListener("click", (e) => toggleButtons(e));
  basketModalAllArea.addEventListener("click", (e) => basketModalAreaAllEvents(e));
}
class UI {
  static inputValidate() {
    return (
      brandInput.value.length < 3 || modelInput.value.length < 3
    )
  }
  async refreshAndAddCardsToUI(findedItems, searchInputvalue) {
    marketPlaceArea.innerHTML = "";
    if (findedItems) {
      findedItems.forEach((item) => marketPlaceArea.innerHTML += createCard(item));
    }
    else if (searchInputvalue) {
      console.log(searchInputvalue);
      request.get().then((arr) => arr.map((item) => {
        if (item.type.includes(searchInputvalue.toLowerCase()) || item.status.includes(searchInputvalue) || item.brand.includes(searchInputvalue) || item.model.includes(searchInputvalue)) {
          marketPlaceArea.innerHTML += createCard(item);
        }
      }))
    }
    else {
      request.get().then((res) => res.map((item) => marketPlaceArea.innerHTML += createCard(item)));
    }

  }
  async basketCardsToUI(){
    basketModalBodyArea.innerHTML= "";
    basketArray.map((item) => basketModalBodyArea.innerHTML += basketCardComponent(item));
  }
}

console.log(brandInput.value);
let ui = new UI();
ui.refreshAndAddCardsToUI();

async function addNewCard(e) {
  form.reset();
  e.preventDefault();
  // if (UI.inputValidate()) {
  //   console.log(UI.inputValidate());
  //   alert("please complete all inputs correctly.")
  //   } else {
  request.get().then((arr) => arr.map((item) => {
    console.log(item.model.toLowerCase());
    console.log(brandInput.value);
  }))
}
// let newContent = new Request(
//   brandInput.value.toLowerCase(),
//   modelInput.value.toLowerCase(),
//   typeSelect.value.toLowerCase(),
//   motorCCInput.value,
//   urlInput.value,
//   gasSelect.value,
//   statusSelect.value,
//   Number(priceInput.value),
//   Number(stockInput.value),
// );
// newContent.post().catch((err) => console.log(err));
// }

let contentCurrentId;

function toggleButtons(e) {
  if (e.target.id == "addNewContentButton") {
    saveCardButton.classList.add("d-block");
    saveCardButton.classList.remove("d-none");
    editCardButton.classList.add("d-none");
    editCardButton.classList.remove("d-block");
  } else if (e.target.classList.contains("edit-button")) {
    saveCardButton.classList.remove("d-block");
    saveCardButton.classList.add("d-none");
    editCardButton.classList.remove("d-none");
    editCardButton.classList.add("d-block");
  }
}
async function globalCardAreaClickFunctions(e) {
  toggleButtons(e);
  console.log(e.target.innerText);
  if (e.target.innerText == "Edit") {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(targetId);
    contentCurrentId = targetId;
    editContent(targetId);
  }
  else if (e.target.innerText == "Delete") {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    deleteContent(targetId, e);
  }
  else if (e.target.classList.contains("basket-button")) {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    addBasketFunction(targetId);
// !!!!!!!
    // await request.get(targetId)
    //   .then((data) => {
    //     if(request.getBasket(targetId)){
    //       request.getBasket(targetId).then((item) => {
    //         if (item) {
    //           request.putBasket(targetId,{
    //             "id": targetId,
    //             "brand": item.brand,
    //             "model": item.model,
    //             "type": item.type,
    //             "motorcc": item.motorcc,
    //             "banner": item.banner,
    //             "gas": item.gas,
    //             "status": item.status,
    //             "price": item.price,
    //             "stock": item.stock -1,
    //             "basket": item.basket + 1
    //           })
    //         }
    //       })
    //     } else {
    //       request.postBasket(data);
    //     }
       
    //   });
    
  }
}
async function addBasketFunction(targetId){
  await request.get(targetId).then((item) => {
    let basketObj = basketArray.find((e) => e.id == targetId);
    console.log(basketObj);
    console.log(basketArray);
    if(basketArray.length == 0){
      basketArray.push(item);
    }else if(basketObj){
      basketObj.basket += 1;
    }else{
      basketArray.push(item);
    }
  })
  ui.basketCardsToUI();
}

async function deleteContent(targetId, e) {
  e.preventDefault();
  await request.delete(targetId);
  await ui.refreshAndAddCardsToUI();

}
async function editContent(targetId, e) {
  await request.get(targetId).then((content) => {
    console.log(content);
    brandInput.value = content.brand;
    modelInput.value = content.model;
    typeSelect.value = content.type;
    motorCCInput.value = content.motorcc;
    urlInput.value = content.banner;
    gasSelect.value = content.gas;
    statusSelect.value = content.status;
    priceInput.value = Number(content.price);
    stockInput.value = Number(content.stock);
  })
}

export async function completeEditContent(contentCurrentId, e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  await request.put(contentCurrentId, {
    "brand": brandInput.value,
    "model": modelInput.value,
    "type": typeSelect.value.toLowerCase(),
    "motorcc": motorCCInput.value,
    "banner": urlInput.value,
    "gas": gasSelect.value,
    "status": statusSelect.value,
    "price": Number(priceInput.value),
    "stock": Number(stockInput.value),
  })
  await ui.refreshAndAddCardsToUI();
}
let count = 0;
async function allFilterEvents(e) {
  if (e.target.checked) {
    request.get().then((arr) => {
      console.log(arr);
      arr.map((item) => {
        if (item.type.includes(e.target.value) || item.status.includes(e.target.value) || item.motorcc.includes(e.target.value) || item.gas.includes(e.target.value)) {
          findedItems.add(item);
        }
      })
      ui.refreshAndAddCardsToUI(findedItems);
    })
  } else {
    findedItems.forEach((item) => {
      if (item.type.includes(e.target.value) || item.status.includes(e.target.value) || item.motorcc.includes(e.target.value) || item.gas.includes(e.target.value)) {
        findedItems.delete(item);
        ui.refreshAndAddCardsToUI(findedItems);
      }
    })
  }
  let checkedBoxes = engineCheck.querySelectorAll("input");
  for (let i = 0; i < checkedBoxes.length; i++) {
    checkedBoxes[i].checked == false ? count += 1 : count += 0
  }
  if (count == 12 && findedItems.size == 0) {
    ui.refreshAndAddCardsToUI();
  }
  count = 0;
}
async function sortEvents(e) {
  if (findedItems.size != 0) {
    let copyArr = Array.from(findedItems);
    let sortedArr = sortCardsDateAndAlphabetic(e.target.value, copyArr);
    ui.refreshAndAddCardsToUI(sortedArr);
  }
  else if (findedItems.size == 0) {
    request.get().then((arr) => {
      if (e.target.value == "") {
        ui.refreshAndAddCardsToUI();
      } else {
        let sortedArr = sortCardsDateAndAlphabetic(e.target.value, arr);
        ui.refreshAndAddCardsToUI(sortedArr);
      }
    })
  }
}

async function basketModalAreaAllEvents(e){
  if(e.target.innerHTML == "-"){
    let basketCurrentId = e.target.parentElement.parentElement.children[0].innerText;
    let basketObj = basketArray.find((e,index) => {
      e.id == basketCurrentId;
    });
    basketObj.basket -= 1;
    console.log(basketObj);
    if(basketObj.basket <= 0){
      basketObj.splice(basketObj,1)
    }
  }
  else if(e.target.innerHTML == "+"){
    let basketCurrentId = e.target.parentElement.parentElement.children[0].innerText;
    let basketObj = basketArray.find((e) => e.id == basketCurrentId);
    basketObj.basket += 1;
  }
  ui.basketCardsToUI();
}