const bookContainer = document.getElementById("bookContainer");

//UI Object
function UI() {

}

//En son new Storageları teke indirebilir miyiz kontrolünü yap

UI.prototype.displayBookOnHtml = function (test) {
  // bookContainer.innerHTML = createTag(test) + bookContainer.innerHTML
  bookContainer.innerHTML += createTag(test);

  //Her card yapısına delete butonu ekledik
  const deleteBookBtns = document.querySelectorAll(".delete-btn");
  deleteBtn(deleteBookBtns);
  //Her card yapısına edit butonu ekledik
  const editBookBtns = document.querySelectorAll(".edit-btn");
  editBtn(editBookBtns);

  const saveChangesBtns = document.querySelectorAll(".saveChanges");
  saveBtn(saveChangesBtns)
}

UI.prototype.displayOnFilterTitles = function () {
  
  
}


//Güncelleme butonu
function saveBtn(saveChangesBtns) {
  saveChangesBtns.forEach(e => {
    e.addEventListener("click", (e) => {
      let selectedBookTempID = defaultBookID.value;
      const selectedBookID = new Storage();
      selectedBookID.updateSelectedBook(selectedBookTempID)
    })
  })
}
//Delete butonuna click fonksiyonu eklendi
function deleteBtn(deleteBookBtns) {
  deleteBookBtns.forEach(e => {
    e.addEventListener("click", (e) => {
      let selectedBookTempID = e.target.parentElement.parentElement.parentElement.id;
      const selectedBookID = new Storage();
      selectedBookID.deleteSelectedBook(selectedBookTempID)
    })
  });
}

//Edit butonuna click fonksiyonu eklendi
function editBtn(editBookBtns) {
  editBookBtns.forEach(e => {
    e.addEventListener("click", (e) => {
      let editedBookTempID = e.target.parentElement.parentElement.parentElement.id;
      const editedBookID = new Storage();
      editedBookID.openModalWindowForEachBook(editedBookTempID)
    })
  })
}

function createTag(b) {
  return `
  <div class= "col-12 col-md-6 col-lg-3">
  <div class="card my-3 " id="${b.bookID}">
      <div class="text-center">
          <img src="${b.bookPicture}" class="card-img-top" alt="${b.bookPicture}">
      </div>
      <div class="card-body">
          <h5 class="card-title m-0 fw-bolder">${b.bookName}</h5>
          <p class="card-text  mb-3 fw-bold">${b.bookWriter}</p>
          <div class="d-flex justify-content-between mb-3">
            <span class="card-text ">${b.bookType}</span>
            <span class="card-text">${b.bookDate}</span>
          </div>
          <div class=" d-flex">
              <button class="btn btn-danger w-50 me-2 delete-btn">Delete</button>
              <!-- Button trigger modal -->

              <button type="button" class="btn btn-primary w-50 ms-2 edit-btn" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
                  Edit
              </button>
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                  tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog  modal-dialog-centered">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h1 class="modal-title fs-5" id="staticBackdropLabel">Change Book's Informations</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                          </div>
                          <div class="modal-body px-5">
                              <div class="row">
                                  <div class="col-lg-6 fw-bold ">
                                      <h5 class="modal-title fw-bold">Default Informations</h5>
                                      <hr>
                                      <form>
                                          <label for="bookID">Book Id:</label>
                                          <input class="form-control" type="text" id="defaultBookID" disabled>
                                          <br>

                                          <label for="bookName">Book Name:</label>
                                          <input class="form-control" type="text" id="defaultBookName" disabled>
                                          <br>

                                          <label for="bookWriter">Book Writer: </label>
                                          <input class="form-control" type="text" id="defaultBookWriter" disabled>
                                          <br>

                                          <label for="bookType">Book Type: </label>
                                          <input class="form-control" type="text" id="defaultBookType" disabled>
                                          <br>

                                          <label for="bookDate">Book Date: </label>
                                          <input class="form-control" type="text" id="defaultBookDate" disabled>
                                          <br>
                                          <label for="bookPicture">Book Picture: </label>
                                          <input class="form-control" type="text" id="defaultBookPicture" disabled>
                                          <br>
                                      </form>
                                  </div>
                                  <div class="col-lg-6">
                                      <h5 class="modal-title fw-bold text-center">Editing Informations</h5>
                                      <hr>
                                      <form>
                                          <label for="bookID">Book Id:</label>
                                          <input class="form-control" type="text" id="editBookID" disabled>
                                          <br>

                                          <label for="bookName">Book Name:</label>
                                          <input class="form-control" type="text" id="editBookName">
                                          <br>

                                          <label for="bookWriter">Book Writer: </label>
                                          <input class="form-control" type="text" id="editBookWriter">
                                          <br>

                                          <label for="bookType">Book Type: </label>
                                          <input class="form-control" type="text" id="editBookType">
                                          <br>

                                          <label for="bookDate">Book Date: </label>
                                          <input class="form-control" type="text" id="editBookDate">
                                          <br>
                                          <label for="bookPicture">Book Picture: </label>
                                          <input class="form-control" type="text" id="editBookPicture">
                                          <br>
                                      </form>
                                  </div>
                                  <button type="button" class="btn btn-success saveChanges"
                                      data-bs-dismiss="modal">Save Changes</button>
                              </div>
                          </div>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>

                  </div>

              </div>
          </div>
      </div>
  </div>
</div>
`
}
//save buton üstüne koy
{/* <div class="modal-footer"></div> */ }