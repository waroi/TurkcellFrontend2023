let vehicleUI = document.getElementById("vehicleUI");
let filterWith = document.getElementById("filter-with-category");
let filterBy = document.getElementById("filter-by");

class UserInterface {

    createModal = function () {
        let modal = document.getElementById("modalBoxOutside");
        if (modal.classList == "d-none") {
            modal.classList.remove("d-none");
        }
        else {
            modal.classList.add("d-none");
        }
    }

    addVehicle = function () {
        let newVehicle = getData();
        UI.addCard(newVehicle);
    }

    findIdtoDelete = function (getData) {
        let name = getData.name;
        request.get()
            .then((data) => {
                data.forEach(function (item) {
                    if (item.name == name) {
                        request.delete(item.id)
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((err) => console.log(err));
                    }
                })
            })
            .catch((err) => console.log(err));
    }

    addCard = function (newVehicle) {
        let card = newVehicle.createCard();
        vehicleUI.appendChild(card);

        card.querySelector(".btn-primary").addEventListener("click", function () {

            let basketItem = newVehicle.createBasketItem();
            let basketMenu = document.getElementById("basketMenu");
            basketMenu.appendChild(basketItem);

            let name = newVehicle.name;
            let isAdd = true;
            console.log(newVehicle);
            console.log(name);
            basket.get()
                .then((data) => {
                    console.log(data);

                    if (data.length != 0) {
                        data.forEach(function (item) {
                            console.log(item);
                            console.log(item.name);
                            if (item.name == name) {
                                isAdd = false;
                                return console.log(name);
                            }
                        })
                    }

                    if (data.length == 0) {
                        basket.post(newVehicle)
                            .then((responseData) => {
                                console.log('POST:', responseData);
                                return responseData;
                            })
                            .catch((error) => {
                                console.log('POST Error:', error);
                            });
                    }

                    else if (data.length != 0 && isAdd) {
                        basket.post(newVehicle)
                            .then((responseData) => {
                                console.log('POST:', responseData);
                            })
                            .catch((error) => {
                                console.log('POST Error:', error);
                            });
                    }
                })
                .catch((err) => console.log(err));


        })

        card.querySelector(".btn-secondary").addEventListener("click", function () {
            UI.findIdtoDelete(newVehicle);
            card.remove();
        })

        card.querySelector(".btn-warning").addEventListener("click", function () {
            UI.editVehicle(newVehicle);
        })
    }

    clearBasket = function () {

        let basketMenu = document.getElementById("basketMenu");
        basketMenu.innerHTML = "";
        basket.get()
            .then((data) => {
                let dataLength = data.length;
                for (let i = 0; i < dataLength; i++) {
                    basket.delete(data[i].id)
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));

        let basketHtml = `
        <li>
            <div
            class="dropdown-item"
            style="color: rgba(168, 33, 21, 0.821)"
            >
            <span
                ><button class="btn btn-secondary" id="clearBasket">
                Clear Basket
                </button></span
            >
            <span><button class="btn btn-light" id="buyBasket">Buy</button></span>
            </div>
        </li>`;
        basketMenu.innerHTML = basketHtml;
    }

    clearValues = function () {
        document.getElementById("addName").value = "";
        document.getElementById("addCategory").value = "";
        document.getElementById("addPrice").value = "";
        document.getElementById("addStock").value = "";
        document.getElementById("addUrl").value = "";
    }

    editVehicle = function (vehicle) {

        UI.createModal();
        document.getElementById("addName").value = vehicle.name;
        document.getElementById("addCategory").value = vehicle.category;
        document.getElementById("addPrice").value = vehicle.price;
        document.getElementById("addStock").value = vehicle.stock;
        document.getElementById("addUrl").value = vehicle.url;

        window.scrollTo(0, document.body.scrollHeight)

        let editVehicleArea = document.getElementById("editVehicleArea");
        editVehicleArea.addEventListener("click", function () {
            let oldName = vehicle.name;
            request.get()
                .then((data) => {
                    data.forEach(function (item) {
                        if (item.name == oldName) {
                            request.put(item.id, getData())
                                .then((data) => {
                                    console.log(data);
                                })
                                .catch((err) => console.log(err));
                        }
                    })
                })
                .catch((err) => console.log(err));
        });
    }

    loadIntersectedUI = function (fullData) {

        const searchInputValue = document.getElementById("search-input-name").value;
        const searchValue = searchInputValue.toLowerCase();
        let lengthSearchInput = fullData.length;
        let searchedDataName = [];
        for (let i = 0; i < lengthSearchInput; i++) {
            let name = fullData[i].name.toLowerCase();
            if (name.includes(searchValue)) {
                searchedDataName = searchedDataName.concat(fullData[i])
            }
        }

        let filterValue = filterWith.value.toLowerCase();
        let filterValueCategory = filterWith.value.toLowerCase();
        let lengthFilterCategory = fullData.length;
        let filteredDataCategory = [];
        if (filterValue == "none" || filterValue == "") {
            filteredDataCategory = fullData;
        }
        else {
            for (let i = 0; i < lengthFilterCategory; i++) {
                let category = fullData[i].category.toLowerCase();
                if (category == filterValueCategory) {
                    filteredDataCategory = filteredDataCategory.concat(fullData[i])
                }
            }
        }

        if (filteredDataCategory.length != 0 && filteredDataCategory.length != fullData.length) {
            const findIntersection = searchedDataName.filter(item => filteredDataCategory.includes(item));
            searchedDataName = findIntersection;

        }

        let intersectedData = searchedDataName;
        const select = document.getElementById("sort-select");
        const condition = select.options[select.selectedIndex].value;

        if (condition == "default") {
            intersectedData = intersectedData;
        }
        else if (condition == "name-a-z") {
            intersectedData = intersectedData.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (condition == "name-z-a") {
            intersectedData = intersectedData.sort((a, b) => b.name.localeCompare(a.name));
        }
        else if (condition == "price-high-to-low") {
            intersectedData = intersectedData.sort((a, b) => b.price - a.price);
        }
        else if (condition == "price-low-to-high") {
            intersectedData = intersectedData.sort((a, b) => a.price - b.price);
        }
        else if (condition == "stock-high-to-low") {
            intersectedData = intersectedData.sort((a, b) => b.stock - a.stock);
        }
        else if (condition == "stock-low-to-high") {
            intersectedData = intersectedData.sort((a, b) => a.stock - b.stock);
        }

        vehicleUI.innerHTML = "";
        intersectedData.map((data) => UI.addCard(new Vehicle(data.name, data.category, data.price, data.stock, data.url)));
    }

    clearFilter = function () {
        filterWith.innerHTML = "";
    }

    addFilteredCategory = function (data) {
        UI.clearFilter();
        let option = document.createElement("option");
        option.innerHTML = "None";
        filterWith.appendChild(option);
        for (let i = 0; i < data.length; i++) {
            option = document.createElement("option");
            option.innerHTML = data[i];
            filterWith.appendChild(option);
        }
    }
}