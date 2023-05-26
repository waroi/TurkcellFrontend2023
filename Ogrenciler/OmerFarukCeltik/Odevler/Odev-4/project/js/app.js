import Request from "./requestClass.js";
import createCard from "./components/cardComponent.js";
import sortCardsDateAndAlphabetic from "./sortCardsFunction.js";
import basketCardComponent from "./components/basketCardComponent.js";
// area
let marketPlaceArea = document.querySelector("#marketPlaceArea");
let basketModalBodyArea = document.querySelector("#basket-modal-form");
let basketModalAllArea = document.querySelector("#basket-form-modal");
let basketCount = document.querySelector("#basketCount");

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
request.getBasket().then(((arr) => {
  if (arr.length == 0) {
    basketArray = [];
  } else if (arr.length > 0) {
    arr.map((item) => basketArray.push(item))
  }
}))
function eventListeners() {
  marketPlaceArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  saveCardButton.addEventListener("click", (e) => addNewCard(e));
  editCardButton.addEventListener("click", (e) => completeEditContent(contentCurrentId, e));
  engineCheck.addEventListener("click", (e) => allFilterEvents(e));
  searchFilterInput.addEventListener("keyup", (e) => e.target.value.length >= 3 ? ui.refreshAndAddCardsToUI(null, e.target.value) : ui.refreshAndAddCardsToUI(null, null));
  sortArea.addEventListener("change", (e) => sortEvents(e));
  addNewContentButton.addEventListener("click", (e) => toggleButtons(e));
  basketModalAllArea.addEventListener("click", (e) => basketModalAreaAllEvents(e));
  form.addEventListener("keyup", (e) => validationFunction(e));

}
class UI {
  static inputValidate() {
    return (
      brandInput.value.length < 3 || modelInput.value.length < 3 || urlInput.value.length < 3 
    )
  }
  async refreshAndAddCardsToUI(findedItems, searchInputvalue) {
    marketPlaceArea.innerHTML = "";
    if (findedItems) {
      findedItems.forEach((item) => marketPlaceArea.innerHTML += createCard(item));
    }
    else if (searchInputvalue) {
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
  async basketCardsToUI() {
    basketModalBodyArea.innerHTML = "";
    basketArray.map((item) => basketModalBodyArea.innerHTML += basketCardComponent(item));
    basketCount.innerHTML = basketArray.length;
  }
}


let ui = new UI();
ui.refreshAndAddCardsToUI();

async function addNewCard(e) {
  e.preventDefault();
  if (UI.inputValidate()) {
    alert("please complete all inputs correctly.")
  } else {
    await request.get().then((arr) => {
    let copyArr = Array.from(arr);
    let currentObj = copyArr.find((item) => item.brand.toLowerCase() == brandInput.value.toLowerCase() && item.model.toLowerCase() == modelInput.value.toLowerCase());
    if (currentObj) {
      request.put(currentObj.id, {
        "id": currentObj.id,
        "brand": currentObj.brand,
        "model": currentObj.model,
        "type": currentObj.type,
        "motorcc": currentObj.motorcc,
        "banner": currentObj.banner,
        "gas": currentObj.gas,
        "status": currentObj.status,
        "price": currentObj.price,
        "stock": Number(currentObj.stock) + Number(stockInput.value),
        "basket": 1
      })
      console.log("success");
    } else {
      let newContent = new Request(
        brandInput.value.toLowerCase(),
        modelInput.value.toLowerCase(),
        typeSelect.value.toLowerCase(),
        motorCCInput.value,
        urlInput.value,
        gasSelect.value,
        statusSelect.value,
        Number(priceInput.value),
        Number(stockInput.value)
        );
        newContent.post().catch((err) => console.log(err));
        console.log("success");
    }
  })
  await form.reset();
  await ui.refreshAndAddCardsToUI();
}
}

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
  if (e.target.innerText == "Edit") {
    let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
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

async function addBasketFunction(targetId) {
  await request.get(targetId).then((item) => {
    let basketObj = basketArray.find((e) => e.id == targetId);
    if (basketArray.length == 0) {
      request.postBasket({
        "id": targetId,
        "brand": item.brand,
        "model": item.model,
        "type": item.type,
        "motorcc": item.motorcc,
        "banner": item.banner,
        "gas": item.gas,
        "status": item.status,
        "price": item.price,
        "stock": item.stock,
        "basket": 1
      })
      basketArray.push(item);
    } else if (basketObj && basketObj.basket <= basketObj.stock) {
      basketObj.basket += 1;
      basketObj.stock -= 1;
      request.put(targetId, {
        "id": targetId,
        "brand": basketObj.brand,
        "model": basketObj.model,
        "type": basketObj.type,
        "motorcc": basketObj.motorcc,
        "banner": basketObj.banner,
        "gas": basketObj.gas,
        "status": basketObj.status,
        "price": basketObj.price,
        "stock": item.stock - 1,
        "basket": item.basket + 1
      })

    } else {
      basketArray.push(item);
      request.postBasket({
        "id": targetId,
        "brand": item.brand,
        "model": item.model,
        "type": item.type,
        "motorcc": item.motorcc,
        "banner": item.banner,
        "gas": item.gas,
        "status": item.status,
        "price": item.price,
        "stock": item.stock,
        "basket": 1
      })
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
async function basketModalAreaAllEvents(e) {
  e.preventDefault();
  if (e.target.innerHTML == "-") {
    let basketCurrentId = e.target.parentElement.parentElement.children[0].innerText;
    let basketObj = basketArray.find((e) => e.id == basketCurrentId);
    if (basketObj.basket > 0 && basketObj.basket <= basketObj.stock) {
      e.target.classList.remove("disabled");
      basketObj.basket -= 1;
      basketObj.stock += 1;
    } else {
      e.target.classList.add("disabled");
    }
  }
  else if (e.target.innerHTML == "+") {
    let basketCurrentId = e.target.parentElement.parentElement.children[0].innerText;
    let basketObj = basketArray.find((e) => e.id == basketCurrentId);
    if (basketObj.basket > 0 && basketObj.basket <= basketObj.stock) {
      e.target.classList.remove("disabled");
      basketObj.basket += 1;
      basketObj.stock -= 1;
    } else {
      e.target.classList.add("disabled");
    }
  }
  else if (e.target.id == "discard-basket") {
    basketArray.splice(0, basketArray.length);
    request.getBasket().then((arr) => arr.map((item) => request.deleteBasket(item.id)));
  }
  else if (e.target.id == "buy-basket") {
    console.log(basketArray);
   await basketArray.map((item) => {
    request.deleteBasket(item.id)
    request.put(item.id,{
      "id": item.id,
      "brand": item.brand,
      "model": item.model,
      "type": item.type,
      "motorcc": item.motorcc,
      "banner": item.banner,
      "gas": item.gas,
      "status": item.status,
      "price": item.price,
      "stock": item.stock,
      "basket": 1
    })
  })
  await basketArray.splice(0,basketArray.length);
  await ui.basketCardsToUI();
  await ui.refreshAndAddCardsToUI();
  }
  else if (e.target.classList.contains("delete-basket-content")) {
    let basketCurrentId = e.target.parentElement.parentElement.children[0].innerText;
    let basketObj = basketArray.findIndex((e) => e.id == basketCurrentId);
    basketArray.splice(basketObj, 1);
    request.deleteBasket(basketCurrentId);
  }
  ui.basketCardsToUI();
}

function validationFunction(e){
  if(e.target.type == "text" || e.target.type == "url" && e.target.value.length < 3){
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
  }else if(e.target.type == "text" || e.target.type == "url" && e.target.value.length >= 3) {
    e.target.classList.add("is-valid");
    e.target.classList.remove("is-invalid");
  }
}