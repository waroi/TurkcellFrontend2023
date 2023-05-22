let spesificSearchDatas = []
let globalDatas = []
class UI {
    displayOnePost(oneData) {
        //Aramanın özel bir categoride çalışması için dizi oluşturduk verileri attık
        spesificSearchDatas.push(oneData);
        //bu diziyi arama fonksiyonuna gönderdik
        this.searchBlog(spesificSearchDatas);
        this.sortFilteredItem(spesificSearchDatas)

        allBlogs.innerHTML += this.createTag(oneData)
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
        //Her card'ta bulunan inspect butonuyla açılan modal
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
    }


    //Category'e bağlı arama fonksiyonu
    searchBlog(uniqueBlogs) {
        globalDatas = []
        //Arama inputunun değerini aldık ve bunu, diziyle beraber karşılaştırma yapmak için compareSearchInputValueAndBlog gönderdik
        const searchBlogInput = document.getElementById("searchBlog")
        searchBlogInput.addEventListener("keyup", () => {
            this.compareSearchInputValueAndBlog(uniqueBlogs, searchBlogInput.value)
        })
        searchBlogInput.addEventListener("focus", () => { searchBlogInput.value = "" })

    }

    compareSearchInputValueAndBlog(arr, inputValue) {
        allBlogs.innerHTML = ""
        if (inputValue != null) {
            arr.forEach(t => {
                if (t.blogName.toLowerCase().indexOf(inputValue) > -1 ||
                    t.blogWriter.toLowerCase().indexOf(inputValue) > -1) {
                    ui.displayCompareResult(t)
                    spesificSearchDatas = []
                }
            })
        }
    }
    displayCompareResult(oneData) {
        allBlogs.innerHTML += this.createTag(oneData)
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
    }

    displayAllPosts(data) {
        data.forEach(data => {
            allBlogs.innerHTML += this.createTag(data)
            globalDatas.push(data)
        });

        this.globalSearch(globalDatas)
        // this.globalSortBlogs(globalDatas)
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)

        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
    }

    // globalSortBlogs(globalDatas) {
    //     console.log(globalDatas)
    // }


    globalSearch(globalDatas) {
        spesificSearchDatas = []
        const searchBlogInput = document.getElementById("searchBlog")
        searchBlogInput.addEventListener("keyup", () => {
            this.globalCompare(globalDatas, searchBlogInput.value)
        })
        searchBlogInput.addEventListener("focus", () => { searchBlogInput.value = "" })
    }

    globalCompare(globalDatas, inputValue) {
        allBlogs.innerHTML = ""
        globalDatas.forEach(x => {
            if (inputValue != null) {
                if (x.blogName.toLowerCase().indexOf(inputValue) > -1 ||
                    x.blogWriter.toLowerCase().indexOf(inputValue) > -1) {
                    ui.displayCompareResult(x)
                }

            }
        })
    }

    saveBtn(saveChangesBtns) {
        saveChangesBtns.forEach(e => {
            e.addEventListener("click", (e) => {
                let selectedPostTempID = defaultBlogID.value;
                const blogName = document.getElementById("editBlogName").value;
                const blogWriter = document.getElementById("editBlogWriter").value;
                const blogText = document.getElementById("editBlogText").value;
                const blogCategory = document.getElementById("editBlogCategory").value;
                const blogPicture = document.getElementById("editBlogPicture").value;

                const date = new Date();
                const day = `${date.getDate()}`.padStart(2, 0);
                const month = `${date.getMonth() + 1}`.padStart(2, 0);
                const year = date.getFullYear();
                const hour = `${date.getHours()}`.padStart(2, 0);
                const min = `${date.getMinutes()}`.padStart(2, 0);
                const sec = `${date.getSeconds()}`.padStart(2, 0)

                const updateData = { blogName, blogWriter, blogText, blogCategory, blogPicture, date: `${day}/${month}/${year}, ${hour}:${min}:${sec}` }
                const toastTrigger = document.getElementById('saveChange');
                const toastLiveExample = document.getElementById('liveToastforSaveChangeBtn')
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

                if (blogName == "" || blogWriter == "" || blogText == "" || blogCategory == "" || blogPicture == "") {
                    toastTrigger.addEventListener('click', () => {
                        toastBootstrap.show()
                    })
                }
                else {
                    http
                        .put(`http://localhost:3000/posts/${selectedPostTempID}`, updateData)
                        .then(data => { data })
                        .catch(err => console.log(err))
                }

            })
        })
    }
    //Delete butonuna click fonksiyonu eklendi
    deleteBtn(deletePostBtns) {
        deletePostBtns.forEach(e => {
            e.addEventListener("click", (e) => {
                console.log("silmeye tıkladın")
                let selectedPostTempID = e.target.parentElement.parentElement.parentElement.id;
                console.log(selectedPostTempID)
                http
                    .delete(`http://localhost:3000/posts/${selectedPostTempID}`)
                    .then(data => {
                        ui.displayAllPosts(data)
                    })
                    .catch((err) => console.log(err));
            })
        });
    }
    //Edit butonuna click fonksiyonu eklendi
    editBtn(editPostBtns) {
        editPostBtns.forEach(e => {
            e.addEventListener("click", (e) => {
                let editedPostTempID = e.target.parentElement.parentElement.parentElement.id;
                console.log(editedPostTempID)
                http
                    .get(`http://localhost:3000/posts/${editedPostTempID}`)
                    .then(data => {
                        // console.log(data)
                        this.showDefaultInfo(data)
                    })
                    .catch((err) => console.log(err));
            })
        })
    }

    showDefaultInfo(data) {
        defaultBlogID.value = data.id
        document.getElementById("defaultBlogName").value = data.blogName;
        document.getElementById("defaultBlogWriter").value = data.blogWriter;
        document.getElementById("defaultBlogText").value = data.blogText;
        document.getElementById("defaultBlogCategory").value = data.blogCategory;
        document.getElementById("defaultBlogPicture").value = data.blogPicture;

        //Burayı silebilirim
        editBlogID.value = data.id
    }

    inspectBtn(inspectBtns) {
        inspectBtns.forEach(e => {
            e.addEventListener("click", (e) => {
                let editedPostTempID = e.target.parentElement.parentElement.parentElement.id;
                console.log(editedPostTempID)
                http
                    .get(`http://localhost:3000/posts/${editedPostTempID}`)
                    .then(data => {
                        this.inspectModalInfo(data)
                    })
                    .catch((err) => console.log(err));
            })
        })
    }
    inspectModalInfo(data) {
        inspectModalLabel.innerHTML = data.blogName;
        inspectModalImg.src = data.blogPicture;
        inspectModalText.innerHTML = data.blogText
    }
    checkInformationAllPage = function () {
        let allCategories = [];
        http
            .get('http://localhost:3000/posts')
            .then((data) => {
                data.forEach(x => {

                    allCategories.push(x.blogCategory.toLowerCase())
                    const uniquecategoryTags = new Set();

                    allCategories.forEach(uniquecategoryTags.add, uniquecategoryTags);
                    blogCategories.innerHTML = `
                        <option class="p-0 m-0" value="Hepsi">Hepsi
                        </option>`;
                    for (let eachCategoryTag of uniquecategoryTags) {
                        blogCategories.innerHTML += `
                        <option value="${eachCategoryTag}" class="p-0 m-0  ">
                        ${eachCategoryTag}
                        </option>`;
                    }
                })
            })
            .catch((err) => console.log(err));
    }
    displayBlogFromCategory(filterWord) {
        console.log(filterWord)
        allBlogs.innerHTML = ""
        http
            .get('http://localhost:3000/posts')
            .then((data) => {
                data.forEach(x => {
                    if (filterWord == "Hepsi") {
                        ui.displayOnePost(x)
                    }
                    else if (x.blogCategory.toLowerCase() == filterWord.toLowerCase()) {
                        ui.displayOnePost(x)
                    }
                })
            })
            .catch((err) => console.log(err));
    }


    sortFilteredItem(uniqueBlogs) {
        sortTitles = document.querySelector("#sortOptions");
        sortTitles.addEventListener("change", (e) => {
            this.compareFilteredItemsForSort(uniqueBlogs, e.target.value)
            // spesificSearchDatas = [];
            globalDatas = []
        })
    }
    compareFilteredItemsForSort(arr, filterName) {
        // console.log(arr)
        allBlogs.innerHTML = ""
        if (filterName == "azSort") {
            let azSortDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.blogName.toLowerCase() > b.blogName.toLowerCase()) ? 1 : ((b.blogName.toLowerCase() > a.blogName.toLowerCase()) ? -1 : 0))
            this.displayFilteredAndSortedResult(azSortDatas);
        }
        else if (filterName == "zaSort") {
            let zaSortDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.blogName.toLowerCase() < b.blogName.toLowerCase()) ? 1 : ((b.blogName.toLowerCase() < a.blogName.toLowerCase()) ? -1 : 0))
            this.displayFilteredAndSortedResult(zaSortDatas);
        }

        else if (filterName == "dateSortIncrease") {
            let dateSortIncreaseDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
            this.displayFilteredAndSortedResult(dateSortIncreaseDatas);
        }

        else if (filterName == "dateSortDescend") {
            let dateSortDescendDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
            this.displayFilteredAndSortedResult(dateSortDescendDatas);
        }
        else if (filterName == "azSortWriter") {
            allBlogs.innerHTML = ""

            let azSortWriterDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.blogWriter.toLowerCase() > b.blogWriter.toLowerCase()) ? 1 : ((b.blogWriter.toLowerCase() > a.blogWriter.toLowerCase()) ? -1 : 0))
            this.displayFilteredAndSortedResult(azSortWriterDatas);
        }
        else if (filterName == "zaSortWriter") {
            allBlogs.innerHTML = ""

            let zaSortWriterDatas =
                arr.map(x => x)
                    .sort((a, b) => (a.blogWriter.toLowerCase() < b.blogWriter.toLowerCase()) ? 1 : ((b.blogWriter.toLowerCase() < a.blogWriter.toLowerCase()) ? -1 : 0))
            this.displayFilteredAndSortedResult(zaSortWriterDatas);
        }
        else if (filterName == "Varsayılan") {
            this.displayFilteredAndSortedResult(arr)
        }
    }
    displayFilteredAndSortedResult(oneData) {
        console.log("en son combination", oneData)
        allBlogs.innerHTML = ""
        oneData.forEach(x => {
            allBlogs.innerHTML += this.createTag(x)
        })
        spesificSearchDatas = []
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
        //Her card'ta bulunan inspect butonuyla açılan modal
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
    }

    globalSortBlogs(sortTypeID) {
        console.log(sortTypeID)
        if (sortTypeID == "azSort") {
            allBlogs.innerHTML = ""
            let azSortDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.blogName.toLowerCase() > b.blogName.toLowerCase()) ? 1 : ((b.blogName.toLowerCase() > a.blogName.toLowerCase()) ? -1 : 0))
            this.displayGlobalSort(azSortDatas);
        }
        else if (sortTypeID == "zaSort") {
            allBlogs.innerHTML = ""
            let zaSortDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.blogName.toLowerCase() < b.blogName.toLowerCase()) ? 1 : ((b.blogName.toLowerCase() < a.blogName.toLowerCase()) ? -1 : 0))
            this.displayGlobalSort(zaSortDatas);
        }
        else if (sortTypeID == "azSortWriter") {
            allBlogs.innerHTML = ""
            let azSortWriterDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.blogWriter.toLowerCase() > b.blogWriter.toLowerCase()) ? 1 : ((b.blogWriter.toLowerCase() > a.blogWriter.toLowerCase()) ? -1 : 0))
            this.displayGlobalSort(azSortWriterDatas);
        }
        else if (sortTypeID == "zaSortWriter") {
            allBlogs.innerHTML = ""
            let zaSortWriterDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.blogWriter.toLowerCase() < b.blogWriter.toLowerCase()) ? 1 : ((b.blogWriter.toLowerCase() < a.blogWriter.toLowerCase()) ? -1 : 0))
            this.displayGlobalSort(zaSortWriterDatas);
        }
        else if (sortTypeID == "dateSortIncrease") {
            allBlogs.innerHTML = ""
            let dateSortIncreaseDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
            this.displayGlobalSort(dateSortIncreaseDatas);
        }

        else if (sortTypeID == "dateSortDescend") {
            allBlogs.innerHTML = ""
            let dateSortDescendDatas =
                globalDatas.map(x => x)
                    .sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
            this.displayGlobalSort(dateSortDescendDatas);
        }

        else if (sortTypeID == "Varsayılan") {
            allBlogs.innerHTML = ""
            this.displayAllPosts(globalDatas)
        }

    }
    displayGlobalSort(oneData) {
        // allBlogs.innerHTML = ""
        oneData.forEach(x => {
            allBlogs.innerHTML += this.createTag(x)
        })
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);
        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);
        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
        //Her card'ta bulunan inspect butonuyla açılan modal
        const inspectBtns = document.querySelectorAll(".inspect-btn");
        this.inspectBtn(inspectBtns);
    }

    createTag(b) {
        return `
      <div class="col-12 col-sm-6 col-lg-3 mb-3 ">
        <div class="card h-100 my-3 position-relative" id="${b.id}">
                <img src="${b.blogPicture}" class="card-img-top blog-img-specs img-fluid " alt="${b.blogPicture}">
            <div class="card-body text-black mb-0 pb-0 position-absolute w-100 bottom-0 bg-light">
            <h5 class="card-title fs-3 m-0 fw-bold">${b.blogName}</h5>
                <h5 class="card-title fs-2 m-0 fw-bold">${b.blogWriter}</h5>
                <span class="card-text fs-1"> ${b.blogCategory}</span>
                <div class="text-end mb-1">
                    <p class="card-text  m-0 p-0 fs-8"> ${b.date}</p>

                </div>
                <hr class="text-danger m-0">
                <div class=" d-flex justify-content-around ">
                
                    <!-- Button trigger modal -->
                    <button type="button" class="btn inspect-btn" data-bs-toggle="modal" data-bs-target="#inspectModal">
                    <i class="fa-solid fa-circle-info"></i>
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal  fade" id="inspectModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="inspectModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered ">
                        <div class="modal-content">
                          <div class="modal-header align-item-center">
                            <h1 class="modal-title fw-bold fs-4" id="inspectModalLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <div class="row">
                             <div class="col-lg-4 mb-3 text-center">
                                <img src="" id="inspectModalImg" class="img-fluid">
                             </div>
                             <div class="col-lg-8">
                                <h6 class="fw-semibold m-0 p-0"">Blog İncelemesi</h6>
                                <hr class="m-0 p-0">
                                <p class="fs-1 my-2 " id="inspectModalText"></p>

                             </div>
                          </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger text-white fw-bold fs-1" data-bs-dismiss="modal">Kapat</button>
                          </div>
                        </div>
                      </div>
                    </div>


                    <button type="button" class="btn edit-btn" data-bs-toggle="modal"
                        data-bs-target="#editModal">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btn delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    
                    <!-- Modal -->
                    <div class="modal  fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg  modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-4" id="editModalLabel">Blog Bilgileri</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body px-5">
                                    <div class="row">
                                        <div class="col-lg-4 mb-3 ">
                                            <h5 class="modal-title  text-center">Anlık Bilgiler</h5>
                                            <hr class="mt-0">
                                            <form>
                                                <label for="blogID" class=" d-none">Blog Id:</label>
                                                <input class="form-control mb-2 fs-2 d-none" type="text" id="defaultBlogID" disabled>
    
                                                <label for="blogName">Blog Name:</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultBlogName" disabled>
    
                                                <label for="blogWriter">Blog Writer: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultBlogWriter"
                                                    disabled>
    
                                                <label for="blogType">Blog Text: </label>
                                                <textarea  class="form-control mb-2 fs-2" type="text" id="defaultBlogText"  cols="10" rows="1" disabled>
                                                </textarea>
                                                <label for="blogDate">Blog Category: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultBlogCategory" disabled>
    
                                                <label for="blogPicture">Blog Picture: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="defaultBlogPicture"
                                                    disabled>
                                                <button type="button" class="btn btn-danger text-white fs-1  mt-1 w-100"
                                                    data-bs-dismiss="modal">İptal</button>
    
                                            </form>
                                        </div>
                                        <div class="col-lg-8 ">
                                            <h5 class="modal-title text-center">Güncel Bilgiler</h5>
                                            <hr class="mt-0">
                                            <form>
                                                <label for="blogID" class=" d-none">Blog Id:</label>
                                                <input class="form-control mb-2 fs-2  d-none" type="text" id="editBlogID" disabled>
    
                                                <label for="blogName">Blog Name:</label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editBlogName">
    
                                                <label for="blogWriter">Blog Writer: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editBlogWriter">
    
                                                <label for="blogType">Blog Text: </label>
                                                <textarea class="form-control mb-2 fs-2" type="text" id="editBlogText"  cols="30" rows="1"></textarea>
    
                                                <label for="blogDate">Blog Category: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editBlogCategory">
    
                                                <label for="blogPicture">Blog Picture: </label>
                                                <input class="form-control mb-2 fs-2" type="text" id="editBlogPicture">
    
                                            </form>
                                            <button type="button" id="saveChange" class="btn btn-success text-white fs-1 saveChanges mt-1 w-100"
                                                data-bs-dismiss="modal">Bilgileri Güncelle</button>
    
                                        </div>
    
                                    </div>
    
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                    <div id="liveToastforSaveChangeBtn"
                    class="toast align-items-center text-bg-danger border-0 position-fixed bottom-0 end-0 py-1 my-2"
                    role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body fw-bold fs-1 text-white">
                          Güncellemek için tüm alanları doldurunuz!
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
    }
}