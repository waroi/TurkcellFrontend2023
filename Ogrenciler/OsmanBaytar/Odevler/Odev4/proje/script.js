const UI = new UserInterface();
const storage = new StorageConstructor();

const addVehicle = document.getElementById('firstAddVehicle');
addVehicle.addEventListener('click', UI.createModal);

function getData() {
    let name = document.getElementById('addName').value;
    let category = document.getElementById('addCategory').value;
    let price = document.getElementById('addPrice').value;
    let stock = document.getElementById('addStock').value;
    let url = document.getElementById('addUrl').value;

    const newVehicle = new Vehicle(name, category, price, stock, url);
    return newVehicle;
}

document.addEventListener("DOMContentLoaded", UI.clearValues);

const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("click", function () {
    request.get()
        .then((data) => {
            UI.loadIntersectedUI(data);
        })
        .catch((err) => console.log(err));
})

filterBy.addEventListener("click", function () {
    request.get()
        .then((data) => {
            storage.getFilteredCategoryStorage(data);
        })
        .catch((err) => console.log(err));
})

filterWith.addEventListener("click", function () {
    request.get()
        .then((data) => {
            UI.loadIntersectedUI(data);
        })
        .catch((err) => console.log(err));
})

const searchInputName = document.getElementById("search-input-name");
searchInputName.addEventListener("keyup", function () {
    request.get()
        .then((data) => {
            UI.loadIntersectedUI(data);
        })
        .catch((err) => console.log(err));
})

const addVehicleArea = document.getElementById("addVehicleArea");
addVehicleArea.addEventListener("click", UI.addVehicle);
addVehicleArea.addEventListener("click", function () {
    request.post(getData())
        .then((responseData) => {
            console.log('POST:', responseData);
        })
        .catch((error) => {
            console.log('POST Error:', error);
        });
})

const clearBasket = document.getElementById("clearBasket");
clearBasket.addEventListener("click", UI.clearBasket);

const buyBasket = document.getElementById("buyBasket");
buyBasket.addEventListener("click", UI.buyBasket);

// for (let i = 0; i < dataLength; i++) {
//     let oldName = data.name;
//     let buyStock = document.getElementById(data[i].name).value;
//     data[i].stock = data[i].stock - buyStock;
//     data.forEach(function (item) {
//         if (item.name == oldName) {
//             basket.put(item.id, data)
//                 .then((data) => {
//                     console.log(data);
//                 })
//                 .catch((err) => console.log(err));
// }})}

// {
//     "id": 1,
//     "name": "CITY",
//     "category": "Automobile",
//     "price": 35200,
//     "stock": 8,
//     "url": "https://www.honda.com.tr/assets/img/city/city-banner.webp"
//   },