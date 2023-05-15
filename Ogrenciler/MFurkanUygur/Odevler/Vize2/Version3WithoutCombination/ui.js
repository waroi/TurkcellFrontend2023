const bookContainer = document.getElementById("bookContainer");

//UI Object
function UI() { }

UI.prototype.displayBookOnHtml = function (test) {
    bookContainer.innerHTML += createTag(test);
    //Her card yapısına delete butonu ekledik
    const deleteBookBtns = document.querySelectorAll(".delete-btn");
    deleteBtn(deleteBookBtns);
    //Her card yapısına edit butonu ekledik
    const editBookBtns = document.querySelectorAll(".edit-btn");
    editBtn(editBookBtns);
    //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
    const saveChangesBtns = document.querySelectorAll(".saveChanges");
    saveBtn(saveChangesBtns)
}

//Güncelleme butonu
function saveBtn(saveChangesBtns) {
    saveChangesBtns.forEach(e => {
        e.addEventListener("click", (e) => {
            let selectedBookTempID = defaultBookID.value;
            const selectedBookID = new Storage();
            selectedBookID.updateSelectedBook(selectedBookTempID);
            selectedBookID.checkInformationAllPage();
        })
    })
}
//Delete butonuna click fonksiyonu eklendi
function deleteBtn(deleteBookBtns) {
    deleteBookBtns.forEach(e => {
        e.addEventListener("click", (e) => {
            let selectedBookTempID = e.target.parentElement.parentElement.parentElement.id;
            const selectedBookID = new Storage();
            selectedBookID.deleteSelectedBook(selectedBookTempID);
            selectedBookID.checkInformationAllPage();
        })
    });
}
//Edit butonuna click fonksiyonu eklendi
function editBtn(editBookBtns) {
    editBookBtns.forEach(e => {
        e.addEventListener("click", (e) => {
            let editedBookTempID = e.target.parentElement.parentElement.parentElement.id;
            const editedBookID = new Storage();
            editedBookID.openModalWindowForEachBook(editedBookTempID);

        })
    })
}

function createTag(b) {
    return `
  <div class="col-12 col-sm-6 col-lg-4 mb-4 ">
    <div class="card h-100  border border-1 border-dark my-3 position-relative" id="${b.bookID}">
        <div class="text-center">
            <img src="${b.bookPicture}" class="card-img-top img-fluid " alt="${b.bookPicture}">
        </div>
        <div class="card-body position-absolute text-dark bottom-0 w-100 bg-light opacity-100">
            <h5 class="card-title m-0 fw-bold">${b.bookName}</h5>
            <p class="card-text  mb-3 fw-semibold">${b.bookWriter}</p>
            <div class="d-flex justify-content-between mb-3">
                <span class="card-text ">Tür: ${b.bookType}</span>
                <span class="card-text">Yıl: ${b.bookDate}</span>
            </div>
            <div class=" d-flex ">
                <button class="btn btn-danger w-50 me-2 delete-btn">Sil</button>
                <button type="button" class="btn btn-primary w-50 ms-2 edit-btn" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    Düzenle
                </button>
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog  modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Kitap Bilgileri</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-5">
                                <div class="row">
                                    <div class="col-lg-6 fw-semibold ">
                                        <h5 class="modal-title fw-semibold text-center">Anlık Bilgiler</h5>
                                        <hr class="mt-0">
                                        <form>
                                            <label for="bookID">Book Id:</label>
                                            <input class="form-control mb-2" type="text" id="defaultBookID" disabled>

                                            <label for="bookName">Book Name:</label>
                                            <input class="form-control mb-2" type="text" id="defaultBookName" disabled>

                                            <label for="bookWriter">Book Writer: </label>
                                            <input class="form-control mb-2" type="text" id="defaultBookWriter"
                                                disabled>

                                            <label for="bookType">Book Type: </label>
                                            <input class="form-control mb-2" type="text" id="defaultBookType" disabled>

                                            <label for="bookDate">Book Date: </label>
                                            <input class="form-control mb-2" type="text" id="defaultBookDate" disabled>

                                            <label for="bookPicture">Book Picture: </label>
                                            <input class="form-control mb-2" type="text" id="defaultBookPicture"
                                                disabled>
                                            <button type="button" class="btn btn-danger mt-1 w-100"
                                                data-bs-dismiss="modal">İptal</button>

                                        </form>
                                    </div>
                                    <div class="col-lg-6">
                                        <h5 class="modal-title fw-semibold text-center">Güncel Bilgiler</h5>
                                        <hr class="mt-0">
                                        <form>
                                            <label for="bookID">Book Id:</label>
                                            <input class="form-control mb-2" type="text" id="editBookID" disabled>

                                            <label for="bookName">Book Name:</label>
                                            <input class="form-control mb-2" type="text" id="editBookName">

                                            <label for="bookWriter">Book Writer: </label>
                                            <input class="form-control mb-2" type="text" id="editBookWriter">

                                            <label for="bookType">Book Type: </label>
                                            <input class="form-control mb-2" type="text" id="editBookType">

                                            <label for="bookDate">Book Date: </label>
                                            <input class="form-control mb-2" type="text" id="editBookDate">

                                            <label for="bookPicture">Book Picture: </label>
                                            <input class="form-control mb-2" type="text" id="editBookPicture">

                                        </form>
                                        <button type="button" class="btn btn-success saveChanges mt-1 w-100"
                                            data-bs-dismiss="modal">Bilgileri Güncelle</button>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
`
}
