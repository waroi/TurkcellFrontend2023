import Request from "./requestClass.js";
import createCard from "./components/cardComponent.js";
// area

let marketPlaceArea = document.querySelector("#marketPlaceArea");

// button
let deleteButton = document.querySelector(".delete-button");
let basketButton = document.querySelector(".basket-button");
let saveCardButton = document.querySelector("#save-card");
let editCardButton = document.querySelector("#edit-card");

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

function eventListeners(){
  marketPlaceArea.addEventListener("click", (e) => globalCardAreaClickFunctions(e));
  saveCardButton.addEventListener("click", (e) => addNewCard(e));
  editCardButton.addEventListener("click", (e) => completeEditContent(contentCurrentId, e));
  engineCheck.addEventListener("click", (e) => allFilterContent(e))
}

class UI {
  static inputValidate() {
    return (
      brandInput.value.typeOf != String || brandInput.value.length < 3 || modelInput.value.typeOf != String || modelInput.value.length < 3 || priceInput.value.typeOf != Number || modelInput.value == "" || urlInput.value.typeOf != URL || modelInput.value.length < 3  
    )
  }
  async refreshAndAddCardsToUI(findedItems) {
    marketPlaceArea.innerHTML = "";
    if(findedItems){
      findedItems.forEach((item) => marketPlaceArea.innerHTML += createCard(item));
    }else if(findedItems.size == 0){
      request.get().then((res) => res.map((item) => marketPlaceArea.innerHTML +=  createCard(item)));
    }
    
  }
}


let ui = new UI();
ui.refreshAndAddCardsToUI();

async function addNewCard(e){
  form.reset();
  e.preventDefault();
  console.log(gasSelect.value);
  // if (UI.inputValidate()) {
  //   alert("please complete all inputs correctly.")
  //   } else {
      let newContent = new Request(
        brandInput.value,
        modelInput.value,
        typeSelect.value.toLowerCase(),
        motorCCInput.value,
        urlInput.value,
        gasSelect.value,
        statusSelect.value,
        Number(priceInput.value),
        Number(stockInput.value),
      );
// }
newContent.post().catch((err) => console.log(err));
}

let contentCurrentId;

async function globalCardAreaClickFunctions(e) {
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
    async function deleteContent(targetId,e) {
    e.preventDefault();
  await request.delete(targetId);
  await ui.refreshAndAddCardsToUI();
}
//  else if (e.target.classList.contains("basket-button")) {
    // let targetId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  //   await request.get(targetId)
  //     .then((data) => contentModalPage(data))
  //     .then((data) => viewModalContent.innerHTML = data);
  // }
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
    "gas":gasSelect.value,
    "status": statusSelect.value,
    "price": Number(priceInput.value),
    "stock": Number(stockInput.value),
  })
  await ui.refreshAndAddCardsToUI();
}
async function allFilterContent(e){
  
  if(e.target.checked){
    request.get().then((arr) => {
      console.log(arr);
    arr.map((item) => {
      if (item.type.includes(e.target.value) || item.status.includes(e.target.value) || item.motorcc.includes(e.target.value) ||  item.gas.includes(e.target.value)) {
        findedItems.add(item);
      }
      // console.log(item.gas);
      // console.log(e.target.value);
    })
   ui.refreshAndAddCardsToUI(findedItems);
  })
  }else{
    console.log(e.target.value);
    findedItems.forEach((item) => {
      if(item.type.includes(e.target.value) || item.status.includes(e.target.value) || item.motorcc.includes(e.target.value) ||  item.gas.includes(e.target.value)){
        findedItems.delete(item);
        ui.refreshAndAddCardsToUI(findedItems);
      }
    })
  }
}