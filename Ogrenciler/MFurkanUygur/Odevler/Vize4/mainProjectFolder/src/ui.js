let spesificSearchDatas = [];
let globalDatas = [];
let checkBasketItems = [];
// let basketLengthValue = basketLength.innerHTML;
class UI {
    getPost() {

        allTours.innerHTML = ""
        http
            .get('http://localhost:3000/tours')
            .then((data) => {
                ui.displayAllPosts(data);
                ui.checkInformationAllPage()
                basketLength.innerHTML = checkBasketItems.length;
                // console.log(basketLengthValue)
            })
            .catch((err) => console.log(err));
    }

    clearForm() {
        tourName.value = ""
        tourDay.value = ""
        tourFood.value = ""
        tourTransport.value = ""
        tourPicture1.value = ""
        tourPicture2.value = ""
        tourPicture3.value = ""
        tourCategory.value = ""
        tourPrice.value = ""
        tourStock.value = ""
        tourDescription.value = ""

    }
    displayAllPosts(data) {
        data.forEach((data) => {
            allTours.innerHTML += this.createTag(data);
            globalDatas.push(data);
            // if (data.tourStock == 0) {
            //     console.log("yok")
            // } else {
            //     const shoppingBtns = document.querySelectorAll(".shopping-btn")
            //     this.shoppingBtn(shoppingBtns)
            // }
        });

        this.globalSearch(globalDatas);

        const deleteTourBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deleteTourBtns);
        // Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);

        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns);

        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
        const shoppingBtns = document.querySelectorAll(".shopping-btn")
        this.shoppingBtn(shoppingBtns)
    }
    displayOnePost(oneData) {
        //Aramanın özel bir categoride çalışması için dizi oluşturduk verileri attık
        spesificSearchDatas.push(oneData);
        //bu diziyi arama fonksiyonuna gönderdik
        this.searchBlog(spesificSearchDatas);
        this.sortFilteredItem(spesificSearchDatas);

        allTours.innerHTML += this.createTag(oneData);
        const deleteTourBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deleteTourBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns);
        //Her card'ta bulunan inspect butonuyla açılan modal
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);

        const shoppingBtns = document.querySelectorAll(".shopping-btn")
        this.shoppingBtn(shoppingBtns)
    }
    //sepet ikonuna tıklandığında ürünleri çekme
    basketMain() {
        // checkBasketItems = [];
        http
            .get('http://localhost:3000/basket')
            .then((data) => {
                data.map(x => checkBasketItems.push(x))
                ui.displayBasketItems(data)
                basketLength.innerHTML = checkBasketItems.length;
            })
            .catch((err) => console.log(err));
    }
    //sepet ekranına ürün bastırma
    displayBasketItems(basketItem) {
        basketLength.innerHTML = checkBasketItems.length;
        basketItem.forEach(b => {
            ourBasketItems.innerHTML += `
            <div class="card" id="${b.id}">
                <div class="card-body">
                    <h5 class="card-title text-start">${b.tourName}</h5>
                    <div class="d-flex text-start>
                        <label for="numberOfPerson">Kişi sayısı: </label>
                        <input id="basketkisiSayisi" type="number" min="0" max="${b.tourStock}" value="${b.personCount}">
                    </div>
                    <p class="card-text text-start">Fiyat:${b.tourPrice}</p>
                    <button class="btn btn-danger text-white delete-basket-item">Sepetten Sil</button>
                </div>
            </div>
            `
        })
        const deleteBasketItemBtns = document.querySelectorAll(".delete-basket-item");
        this.deleteBasketItem(deleteBasketItemBtns);
    }
    buyItemsAndClear() {
        checkBasketItems.map(e => {
            setTimeout(() => {
                http
                    .put(`http://localhost:3000/tours/${e.id}`, {
                        tourName: e.tourName,
                        tourDay: e.tourDay,
                        tourFood: e.tourFood,
                        tourTransport: e.tourTransport,
                        tourPicture1: e.tourPicture1,
                        tourPicture2: e.tourPicture2,
                        tourPicture3: e.tourPicture3,
                        tourCategory: e.tourCategory,
                        tourPrice: e.tourPrice,
                        tourStock: e.tourStock - basketkisiSayisi.value,
                        tourDescription: e.tourDescription,
                    })
                    .then((data) => {
                        ui.getPost()
                        basketLength.innerHTML = checkBasketItems.length;
                        ourBasketItems.innerHTML = ""
                        data
                    })
                    .catch((err) => console.log(err));
            }, 300)
        })
    }
    emptyBasket() {
        checkBasketItems.map(e => {
            http
                .delete(`http://localhost:3000/basket/${e.id}`)
                .then((data) => {
                    data; basketLength.innerHTML = checkBasketItems.length;
                    
                })
                .catch((err) => console.log(err));
        })
    }



    //Listelenen cardlarda yer alan sepet ikonuna ait fonksiyon
    shoppingBtn(shoppingBtns) {
        shoppingBtns.forEach(s => {
            s.addEventListener("click", () => {
                kisiSayisi.value = 0
                const tempShoppingCardID = s.parentElement.parentElement.parentElement.parentElement.id;
                http
                    .get(`http://localhost:3000/tours/${tempShoppingCardID}`)
                    .then((data) => {
                        kisiSayisi.max = data.tourStock;
                        kontenjan.innerHTML = "Toplam Kontenjan:" + data.tourStock
                        this.addBasket(data)
                    })
                    .catch((err) => console.log(err));
            })

        })
    }
    addBasket(dataforBasket) {
        // checkBasketItems = []
        const addBasketBtns = document.querySelectorAll(".add-basket");
        addBasketBtns.forEach(x => {
            x.addEventListener("click", () => {
                dataforBasket.personCount = kisiSayisi.value
                http
                    .post('http://localhost:3000/basket', dataforBasket)
                    .then(data => {
                        // checkBasketItems=[]

                        data
                    })
                    .catch((err) => alert("sepetinizde zaten var lütfen ya onu güncelle ya silip yeniden ekle"));

            })

        },
            basketLength.innerHTML = checkBasketItems.length)
        // basketLength.innerHTML = checkBasketItems.length;
    }
    deleteBasketItem(deleteBasketItemBtns) {
        deleteBasketItemBtns.forEach(e => {
            e.addEventListener("click", () => {
                ourBasketItems.innerHTML = ""
                const tempDeleteBaskteItem = e.parentElement.parentElement.id;
                http
                    .delete(`http://localhost:3000/basket/${tempDeleteBaskteItem}`)
                    .then((data) => {

                        ui.getPost()
                        ui.basketMain(data);
                        checkBasketItems = []
                        basketLength.innerHTML = checkBasketItems.length;

                    })
                    .catch((err) => console.log(err));
            })
        })

    }


    //Category'e bağlı arama fonksiyonu
    searchBlog(uniqueBlogs) {
        globalDatas = [];
        //Arama inputunun değerini aldık ve bunu, diziyle beraber karşılaştırma yapmak için compareSearchInputValueAndBlog gönderdik
        const searchTourInput = document.getElementById("searchTour");
        searchTourInput.addEventListener("keyup", () => {
            this.compareSearchInputValueAndBlog(uniqueBlogs, searchTourInput.value);
        });
        searchTourInput.addEventListener("focus", () => {
            searchTourInput.value = "";
        });
    }

    compareSearchInputValueAndBlog(arr, inputValue) {
        allTours.innerHTML = "";
        if (inputValue != null) {
            arr.forEach((t) => {
                if (t.tourName.toLowerCase().indexOf(inputValue) > -1) {
                    ui.displayCompareResult(t);
                    spesificSearchDatas = [];
                }
            });
        }
    }
    displayCompareResult(oneData) {
        allTours.innerHTML += this.createTag(oneData);
        const deleteTourBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deleteTourBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns);
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
        const shoppingBtns = document.querySelectorAll(".shopping-btn")
        this.shoppingBtn(shoppingBtns)

    }

    globalSearch(globalDatas) {
        spesificSearchDatas = [];
        const searchTourInput = document.getElementById("searchTour");
        searchTourInput.addEventListener("keyup", () => {
            this.globalCompare(globalDatas, searchTourInput.value);
        });
        searchTourInput.addEventListener("focus", () => {
            searchTourInput.value = "";
        });
    }

    globalCompare(globalDatas, inputValue) {
        allTours.innerHTML = "";
        globalDatas.forEach((x) => {
            if (inputValue != null) {
                if (x.tourName.toLowerCase().indexOf(inputValue) > -1) {
                    ui.displayCompareResult(x);
                }
            }
        });
    }

    saveBtn(saveChangesBtns) {
        saveChangesBtns.forEach((e) => {
            e.addEventListener("click", (e) => {
                let selectedPostTempID = defaultTourID.value;

                const tourName = document.getElementById("editTourName").value;
                //tour day bilgisi
                const tourDaySelect = document.getElementById('editTourDay');
                const tourDay = tourDaySelect.options[tourDaySelect.selectedIndex].value;
                //tour food bilgisi
                const tourFoodSelect = document.getElementById('editTourFood');
                const tourFood = tourFoodSelect.options[tourFoodSelect.selectedIndex].value;
                //tour transport bilgisi
                const tourTransportSelect = document.getElementById("editTourTransport");
                const tourTransport = tourTransportSelect.options[tourTransportSelect.selectedIndex].value;
                //tour picture bilgileri
                const tourPicture1 = document.getElementById("editTourPicture1").value;
                const tourPicture2 = document.getElementById("editTourPicture2").value;
                const tourPicture3 = document.getElementById("editTourPicture3").value;
                //tour category bilgileri
                const tourCategorySelect = document.getElementById("editTourCategory");
                const tourCategory = tourCategorySelect.options[tourCategorySelect.selectedIndex].value;

                const tourStock = document.getElementById("editTourStock").value
                //tour price bilgileri
                const tourPrice = document.getElementById("editTourPrice").value;
                //tour description bilgileri
                const tourDescription = document.getElementById("editTourDescription").value;

                const updateData = {
                    tourName, tourDay, tourFood, tourTransport, tourPicture1, tourPicture2, tourPicture3, tourCategory, tourStock, tourPrice, tourDescription
                }
                // const toastTrigger = document.getElementById("saveChange");
                // const toastLiveExample = document.getElementById(
                //     "liveToastforSaveChangeBtn"
                // );
                // const toastBootstrap =
                //     bootstrap.Toast.getOrCreateInstance(toastLiveExample);

                if (
                    editTourName == "" ||
                    editTourDay == "" ||
                    editTourFood == "" ||
                    editTourTransport == "" ||
                    editTourPicture1 == "" ||
                    editTourPicture2 == "" ||
                    editTourPicture3 == "" ||
                    editTourCategory == "" ||
                    editTourPrice == "" ||
                    editTourDescription == ""
                ) {
                    // toastTrigger.addEventListener("click", () => {
                    //     toastBootstrap.show();
                    // });
                    alert("güncellemek için doldur")
                } else {
                    http
                        .put(
                            `http://localhost:3000/tours/${selectedPostTempID}`,
                            updateData
                        )
                        .then((data) => {
                            ui.getPost()
                            data;
                        })
                        .catch((err) => console.log(err));

                }
            });
        });
    }

    //Delete butonuna click fonksiyonu eklendi
    deleteBtn(deleteTourBtns) {
        deleteTourBtns.forEach((e) => {
            e.addEventListener("click", (e) => {
                let selectedPostTempID =
                    e.target.parentElement.parentElement.parentElement.parentElement.id;
                http
                    .delete(`http://localhost:3000/tours/${selectedPostTempID}`)
                    .then((data) => {
                        ui.getPost()
                        ui.displayAllPosts(data);
                    })
                    .catch((err) => console.log(err));
            });
        });
    }
    //Edit butonuna click fonksiyonu eklendi
    editBtn(editPostBtns) {
        editPostBtns.forEach((e) => {
            e.addEventListener("click", (e) => {
                let editedPostTempID =
                    e.target.parentElement.parentElement.parentElement.parentElement.id;
                http
                    .get(`http://localhost:3000/tours/${editedPostTempID}`)
                    .then((data) => {
                        // console.log(data)
                        this.showDefaultInfo(data);
                    })
                    .catch((err) => console.log(err));
            });
        });
    }

    showDefaultInfo(data) {
        defaultTourID.value = data.id;
        document.getElementById("defaultTourName").value = data.tourName;
        document.getElementById("defaultTourDay").value = data.tourDay;
        document.getElementById("defaultTourFood").value = data.tourFood;
        document.getElementById("defaultTourTransport").value = data.tourTransport;
        document.getElementById("defaultTourPicture1").value = data.tourPicture1;
        document.getElementById("defaultTourPicture2").value = data.tourPicture2;
        document.getElementById("defaultTourPicture3").value = data.tourPicture3;
        document.getElementById("defaultTourCategory").value = data.tourCategory;
        document.getElementById("defaultTourStock").value = data.tourStock;
        document.getElementById("defaultTourPrice").value = data.tourPrice;
        document.getElementById("defaultTourDescription").value = data.tourDescription;

        //Burayı silebilirim
        editTourID.value = data.id;
    }

    inspectBtn(inspectBtns) {
        inspectBtns.forEach((e) => {
            e.addEventListener("click", (e) => {
                let editedPostTempID =
                    e.target.parentElement.parentElement.parentElement.parentElement.id;
                http
                    .get(`http://localhost:3000/tours/${editedPostTempID}`)
                    .then((data) => {
                        this.inspectModalInfo(data);
                    })
                    .catch((err) => console.log(err));
            });
        });
    }
    inspectModalInfo(data) {
        inspectModalLabel.innerHTML = data.tourName;
        inspectModalImg.src = data.tourPicture1;
        inspectModalText.innerHTML = data.tourDescription;
    }
    checkInformationAllPage = function () {
        let allCategories = [];
        http
            .get("http://localhost:3000/tours")
            .then((data) => {
                data.forEach((x) => {
                    allCategories.push(x.tourCategory.toLowerCase());
                    const uniquecategoryTags = new Set();

                    allCategories.forEach(uniquecategoryTags.add, uniquecategoryTags);
                    tourCategories.innerHTML = `
                        <option class="p-0 m-0" value="Hepsi">Hepsi
                        </option>`;
                    for (let eachCategoryTag of uniquecategoryTags) {
                        tourCategories.innerHTML += `
                        <option value="${eachCategoryTag}" class="p-0 m-0  ">
                        ${eachCategoryTag}
                        </option>`;
                    }
                });
            })
            .catch((err) => console.log(err));
    };
    displayBlogFromCategory(filterWord) {
        allTours.innerHTML = "";
        http
            .get("http://localhost:3000/tours")
            .then((data) => {
                data.forEach((x) => {
                    if (filterWord == "Hepsi") {
                        ui.displayOnePost(x);
                    } else if (x.tourCategory.toLowerCase() == filterWord.toLowerCase()) {
                        ui.displayOnePost(x);
                    }
                });
            })
            .catch((err) => console.log(err));
    }

    sortFilteredItem(uniqueBlogs) {
        sortTitles = document.querySelector("#sortOptions");
        sortTitles.addEventListener("change", (e) => {
            this.compareFilteredItemsForSort(uniqueBlogs, e.target.value);
            // spesificSearchDatas = [];
            globalDatas = [];
        });
    }
    compareFilteredItemsForSort(arr, filterName) {
        allTours.innerHTML = "";
        if (filterName == "azSort") {
            allTours.innerHTML = "";
            let azSortDatas = arr
                .map((x) => x)
                .sort((a, b) =>
                    a.tourName.toLowerCase() > b.tourName.toLowerCase()
                        ? 1
                        : b.tourName.toLowerCase() > a.tourName.toLowerCase()
                            ? -1
                            : 0
                );
            this.displayGlobalSort(azSortDatas);
        } else if (filterName == "zaSort") {
            allTours.innerHTML = "";
            let zaSortDatas = arr
                .map((x) => x)
                .sort((a, b) =>
                    a.tourName.toLowerCase() < b.tourName.toLowerCase()
                        ? 1
                        : b.tourName.toLowerCase() < a.tourName.toLowerCase()
                            ? -1
                            : 0
                );
            this.displayGlobalSort(zaSortDatas);
        } else if (filterName == "priceDecrease") {
            allTours.innerHTML = "";
            let priceDecreaseDatas = arr
                .map((x) => x)
                .sort((a, b) =>
                    a.tourPrice < b.tourPrice ? 1 : b.tourPrice < a.tourPrice ? -1 : 0
                );
            this.displayGlobalSort(priceDecreaseDatas);
        } else if (filterName == "priceIncrease") {
            allTours.innerHTML = "";
            let priceIncreaseDatas = arr
                .map((x) => x)
                .sort((a, b) =>
                    a.tourPrice > b.tourPrice ? 1 : b.tourPrice > a.tourPrice ? -1 : 0
                );
            this.displayGlobalSort(priceIncreaseDatas);

        } else if (filterName == "Varsayılan") {
            allTours.innerHTML = "";
            this.displayAllPosts(arr);
        }
    }

    globalSortBlogs(sortTypeID) {
        if (sortTypeID == "azSort") {
            allTours.innerHTML = "";
            let azSortDatas = globalDatas
                .map((x) => x)
                .sort((a, b) =>
                    a.tourName.toLowerCase() > b.tourName.toLowerCase()
                        ? 1
                        : b.tourName.toLowerCase() > a.tourName.toLowerCase()
                            ? -1
                            : 0
                );
            this.displayGlobalSort(azSortDatas);
        } else if (sortTypeID == "zaSort") {
            allTours.innerHTML = "";
            let zaSortDatas = globalDatas
                .map((x) => x)
                .sort((a, b) =>
                    a.tourName.toLowerCase() < b.tourName.toLowerCase()
                        ? 1
                        : b.tourName.toLowerCase() < a.tourName.toLowerCase()
                            ? -1
                            : 0
                );
            this.displayGlobalSort(zaSortDatas);
        } else if (sortTypeID == "priceDecrease") {
            allTours.innerHTML = "";
            let priceDecreaseDatas = globalDatas
                .map((x) => x)
                .sort((a, b) =>
                    a.tourPrice < b.tourPrice ? 1 : b.tourPrice < a.tourPrice ? -1 : 0
                );
            this.displayGlobalSort(priceDecreaseDatas);
        } else if (sortTypeID == "priceIncrease") {
            allTours.innerHTML = "";
            let priceIncreaseDatas = globalDatas
                .map((x) => x)
                .sort((a, b) =>
                    a.tourPrice > b.tourPrice ? 1 : b.tourPrice > a.tourPrice ? -1 : 0
                );
            this.displayGlobalSort(priceIncreaseDatas);

        } else if (sortTypeID == "Varsayılan") {
            allTours.innerHTML = "";
            this.displayAllPosts(globalDatas);
        }
    }
    displayGlobalSort(oneData) {
        // allTours.innerHTML = ""
        oneData.forEach((x) => {
            allTours.innerHTML += this.createTag(x);
        });
        const deleteTourBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deleteTourBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns);
        //Her card'ta bulunan inspect butonuyla açılan modal
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);

        const shoppingBtns = document.querySelectorAll(".shopping-btn")
        this.shoppingBtn(shoppingBtns)
    }

    createTag(t) {
        return `
        <div class="col-12 col-sm-6 col-lg-3 ">
        <div class="card  my-2 rounded-4" id="${t.id}">
            <div class="card-image-top">
                <div id="miniTourCardImageSlider" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${t.tourPicture1}" class="d-block w-100 rounded-top " alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${t.tourPicture2}" class="d-block w-100 rounded-top" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${t.tourPicture3}" class="d-block w-100 rounded-top" alt="...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body  text-start">
                <h4 class="card-title">${t.tourName} <span class="fs-2">// Son ${t.tourStock} Kişi</span></h4>
                <ul class="list p-0 mt-2">
                    <li class="list-group-item"><i class="fa-solid fa-clock me-2"></i> ${t.tourDay} Günlük Tur
                    </li>
                    <li class="list-group-item"><i class="fa-solid fa-spoon me-2"></i> ${t.tourFood}
                    </li>
                    <li class="list-group-item"><i class="fa-solid fa-bus me-1"></i>${t.tourTransport}</li>
                    <li class="list-group-item mt-3">
                                    <div class="row d-flex align-item-center justify-content-between">
                                        <div class="col-7">
                                            <div class="stars">
                                            ${t.tourCategory}
                                            </div>
                                        </div>
                                        <div class="col-5 text-end">
                                            <span class="fs-1">Fiyat:</span>
                                            <span class="fs-4">${t.tourPrice}</span>
                                        </div>
                                    </div>
                                </li>
                </ul>
                <div class="row g-1">
                    <div class="col-3 col-sm-3 col-lg-3">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary shopping-btn" data-bs-toggle="modal"
                            data-bs-target="#addShoppingCardModal">
                            <i class="fa-solid fa-bag-shopping"></i>

                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="addShoppingCardModal" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="addShoppingCardModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-3" id="addShoppingCardModalLabel">Sepete Futur ekle
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                           <div class="d-flex flex-column align-item-center">
                                                <label for="kisiSayisi">Kişi Sayısı</label>
                                                <input class="form-control" type="number" id="kisiSayisi" min="0" max="">
                                                <p id="kontenjan">Toplam kontenjan: </p>
                                                </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger close-shopping"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-success add-basket">Sepete Ekle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-3 col-sm-3 col-lg-3">
                        <button type="button" class="btn inspect-btn" data-bs-toggle="modal"
                            data-bs-target="#inspectModal">
                            <i class="fa-solid fa-circle-info"></i>
                        </button>
                        <!-- Modal for info -->
                        <div class="modal  fade" id="inspectModal" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="inspectModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered ">
                                <div class="modal-content">
                                    <div class="modal-header align-item-center">
                                        <h1 class="modal-title fw-bold fs-4" id="inspectModalLabel"></h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-lg-4 mb-3 text-center">
                                                <img src="" id="inspectModalImg" class="img-fluid">
                                            </div>
                                            <div class="col-lg-8">
                                                <h6 class="fw-semibold m-0 p-0">Blog İncelemesi</h6>
                                                <hr class=" m-0 p-0">
                                                <p class="fs-1 my-2 " id="inspectModalText">${t.tourDescription}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger text-white fw-bold fs-1"
                                            data-bs-dismiss="modal">Kapat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 col-sm-3 col-lg-3">
                        <button type="button" class="btn edit-btn" data-bs-toggle="modal"
                            data-bs-target="#editModal">
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <!-- Modal for edit-->
                        <div class="modal  fade" id="editModal" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="editModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-4" id="editModalLabel">Blog Bilgileri</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-5">
                                        <div class="row">
                                            <div class="col-lg-5 mb-3 ">
                                                <h5 class="modal-title  text-center">Anlık Bilgiler</h5>
                                                <hr class="mt-0">
                                                <form>
                                                <label for="defaultTourID" class=" d-none"> tour Id:</label>
                                                <input class="form-control mb-2 fs-2 d-none" type="text" id="defaultTourID" disabled>
                                            
                                                <label for="defaultTourName"> Tour Name</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultTourName" disabled>
                                            
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <label for="defaultTourDay">  Day: </label>
                                                        <input class="form-control mb-2 fs-2" type="text" id="defaultTourDay" disabled>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <label for="defaultTourFood">Food: </label>
                                            
                                                        <input class="form-control mb-2 fs-2" type="text" id="defaultTourFood" cols="10" rows="1" disabled> </input>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <label for="defaultTourTransport">Transport: </label>
                                                        <input class="form-control mb-2 fs-2" type="text" id="defaultTourTransport" disabled>
                                                    </div>
                                                </div>
                                            
                                                <div class="row">
                                                    <div class="col-lg-4 text-center">
                                                        
                                                        <div>
                                                            <label for="defaultTourPicture1">Img 1 </label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="defaultTourPicture1" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 text-center">
                                                        
                                                        <div>
                                                            <label for="defaultTourPicture2">Img 2 </label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="defaultTourPicture2" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 text-center">
                                                      
                                                        <div>
                                                            <label for="defaultTourPicture3">Img 3</label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="defaultTourPicture3" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <label for="defaultTourCategory">tourCategory</label>
                                                        <input class="form-control mb-2 fs-2" type="text" id="defaultTourCategory" disabled>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label for="defaultTourStock">tourStock</label>
                                                        <input class="form-control mb-2 fs-2" type="text" id="defaultTourStock" disabled>
                                                    </div>
                                                </div>
                                            
                                                <label for="defaultTourPrice">tourPrice</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultTourPrice" disabled>
                                            
                                                <label for="defaultTourDescription">tourDescription:</label>
                                                <textarea class="form-control mb-2 fs-2" type="text" id="defaultTourDescription" disabled></textarea>

                                                </form>
    <button type="button" class="btn btn-danger text-white fs-1  mt-1 w-100" data-bs-dismiss="modal">İptal</button>

                                            </div>
                                            <div class="col-lg-7 ">
                                                <h5 class="modal-title text-center">Güncel Bilgiler</h5>
                                                <hr class="mt-0">
                                                <form>
                                                <label for="editTourID" class=" d-none"> tour Id:</label>
                                                <input class="form-control mb-2 fs-2 d-none" type="text" id="editTourID" disabled>
                                            
                                                <label for="editTourName"> Tour Name</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editTourName">
                                            
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <label for="editTourDay">  Day: </label>
                                                        <select name="editTourDays" id="editTourDay"class="form-select py-1 fs-1 mb-2 mt-1">
                                                            <option value="1" id="1">1</option>
                                                            <option value="2" id="2">2</option>
                                                            <option value="3" id="3">3</option>
                                                            <option value="4" id="4">4</option>
                                                            <option value="5" id="5">5</option>
                                                            <option value="6" id="6">6</option>
                                                            <option value="7" id="7">7</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <label for="editTourFood">Food: </label>
                                                        <select name="editTourFoods" id="editTourFood" class="form-select py-1 fs-1 mb-2 mt-1">
                                                            <option value="Kahvaltı" id="Kahvaltı">Kahvaltı</option>
                                                            <option value="Akşam Yemeği" id="Akşam Yemeği">Akşam Yemeği</option>
                                                            <option value="Kahvaltı ve Akşam Yemeği" id="Kahvaltı ve Akşam Yemeği">
                                                                    Kahvaltı
                                                                    ve Akşam Yemeği</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-5">
                                                        <label for="editTourTransport">Transport: </label>
                                                        <select name="editTourTransports" id="editTourTransport"
                                                        class="form-select py-1 fs-1 mb-2 mt-1">
                                                        <option value="Özel Araç" id="Özel Araç">Özel Araç</option>
                                                        <option value="Toplu Ulaşım" id="Toplu Ulaşım">Toplu Ulaşım</option>
                                                        <option value="VIP Servis" id="VIP Servis">VIP Servis</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            
                                                <div class="row">
                                                    <div class="col-lg-4 text-center">
                                                        
                                                        <div>
                                                            <label for="editTourPicture1">Img 1 </label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="editTourPicture1">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 text-center">
                                                     
                                                        <div>
                                                            <label for="editTourPicture2">Img 2 </label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="editTourPicture2">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 text-center">
                                                       
                                                        <div>
                                                            <label for="editTourPicture3">Img 3</label>
                                                            <input class="form-control mb-2 fs-2" type="text" id="editTourPicture3">
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div class="row d-flex">
                                                    <div class="col-lg-6">
                                                        <label for="editTourCategory">tourCategory</label>
                                                        <select name="editTourCategories" id="editTourCategory"
                                                            class="form-select py-2 fs-1 mb-2 mt-1">
                                                            <option value="Anadolu" id="Anadolu">Anadolu</option>
                                                            <option value="Karadeniz " id="Karadeniz">Karadeniz</option>
                                                            <option value="Akdeniz" id="Akdeniz">Akdeniz</option>
                                                            <option value="Doğu" id="Doğu">Doğu Anadolu</option>
                                                            <option value="Güneydoğu " id="Güneydoğu">Güneydoğu</option>
                                                            <option value="Ege" id="Ege">Ege</option>
                                                            <option value="Marmara" id="Marmara">Marmara</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label for="editTourStock" class="mb-1">tourStock</label>
                                                        <input class="form-control py-2 fs-1" type="text" id="editTourStock">
                                                    </div>
                                                </div>
                                               
                                            
                                                <label for="editTourPrice">tourPrice</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editTourPrice">
                                            
                                                <label for="editTourDescription">tourDescription:</label>
                                                <textarea class="form-control mb-2 fs-2" type="text" id="editTourDescription"></textarea>

                                                </form>
                                                <button type="button" id="saveChange"
                                                    class="btn btn-success text-white fs-1 saveChanges mt-1 w-100"
                                                    data-bs-dismiss="modal">Bilgileri Güncelle</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 col-sm-3 col-lg-3">
                        <button class="btn delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
    }
}
