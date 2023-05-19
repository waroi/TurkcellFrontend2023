let spesificSearchDatas = []
let globalDatas = []
class UI {
    displayOnePost(oneData) {
        //Aramanın özel bir categoride çalışması için dizi oluşturduk verileri attık
        spesificSearchDatas.push(oneData);
        //bu diziyi arama fonksiyonuna gönderdik
        this.searchBlog(spesificSearchDatas)

        allBlogs.innerHTML += this.createTag(oneData)
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);

        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);

        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
    }
    //Category'e bağlı arama fonksiyonu
    searchBlog(uniqueBlogs) {
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
                    console.log("buldu")
                }
            })
        }
        else {
            console.log("yok")
        }
        spesificSearchDatas = []
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
    }

    displayAllPosts(data) {

        // console.log(data)
        data.forEach(data => {
            allBlogs.innerHTML += this.createTag(data)
            globalDatas.push(data)
            this.globalSearch(globalDatas)
        });
        const deletePostBtns = document.querySelectorAll(".delete-btn");
        this.deleteBtn(deletePostBtns);

        //Her card yapısına edit butonu ekledik
        const editPostBtns = document.querySelectorAll(".edit-btn");
        this.editBtn(editPostBtns);

        //Her card'ta bulunan edit butonuyla açılan modalda yer alan save changes butonu
        const saveChangesBtns = document.querySelectorAll(".saveChanges");
        this.saveBtn(saveChangesBtns)
    }
    globalSearch(globalDatas) {
        const searchBlogInput = document.getElementById("searchBlog")
        searchBlogInput.addEventListener("keyup", () => {
            this.globalCompare(globalDatas, searchBlogInput.value)
        })
        searchBlogInput.addEventListener("focus", () => { searchBlogInput.value = "" })
    }
    globalCompare(globalDatas, inputValue) {
        allBlogs.innerHTML=""
        console.log(globalDatas)
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
                http
                    .put(`http://localhost:3000/posts/${selectedPostTempID}`, updateData)
                    .then(data => { data })
                    .catch(err => console.log(err))
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
        // const defaultBlogName = document.getElementById("defaultBlogName");
        // const defaultBlogWriter = document.getElementById("defaultBlogWriter");
        // const defaultBlogText = document.getElementById("defaultBlogText");
        // const defaultBlogCategory = document.getElementById("defaultBlogCategory");
        // const defaultBlogPicture = document.getElementById("defaultBlogPicture");

        // console.log(data.blogName)

        defaultBlogID.value = data.id
        defaultBlogName.value = data.blogName;
        defaultBlogWriter.value = data.blogWriter;
        defaultBlogText.value = data.blogText;
        defaultBlogCategory.value = data.blogCategory;
        defaultBlogPicture.value = data.blogPicture;

        //Burayı silebilirim
        editBlogID.value = data.id
    }

    checkInformationAllPage = function () {
        let allCategories = [];
        http
            .get('http://localhost:3000/posts')
            .then((data) => {
                data.forEach(x => {
                    allCategories.push(x.blogCategory)
                    const uniquecategoryTags = new Set();
                    // const uniqueTypeTags = new Set();

                    allCategories.forEach(uniquecategoryTags.add, uniquecategoryTags);
                    // typeTags.forEach(uniqueTypeTags.add, uniqueTypeTags);

                    blogCategories.innerHTML = "";
                    // typeFilterTag.innerHTML = "";
                    blogCategories.innerHTML += `
                        <div class="p-0 m-0">
                            <input type="radio" id="all" checked name="name" class="form-check-input filter-writer-tag">
                            <label for="filterCheckBox">Hepsi</label>
                            
                        </div>`;
                    for (let eachCategoryTag of uniquecategoryTags) {
                        blogCategories.innerHTML += `
                        <div class="p-0 m-0">
                            <input type="radio" name="name" class="form-check-input filter-writer-tag">
                            <label for="filterCheckBox">${eachCategoryTag}</label>
                            
                        </div>`;
                    }

                    // for (let eachTypeTag of uniqueTypeTags) {
                    //     typeFilterTag.innerHTML += `
                    //     <div class="p-0 m-0">
                    //         <input type="radio" name="name" class="form-check-input filter-tag">
                    //         <label for="filterCheckBox">${eachTypeTag}</label>
                    //     </div>
                    //     `;
                    // }
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
        // // let filteredArray = [];
        // allBooksOnLocalStorage.forEach(x => {
        //     if (x.bookType.toLowerCase() == filterWord || x.bookWriter.toLowerCase() == filterWord) {
        //         // filteredArray.push(x);
        //         // console.log(filteredArray)
        //         ui.displayBookOnHtml(x)
        //     }
        // })


        // allBooksOnLocalStorage = filteredArray
        // this.checkInformationAllPage()
        // filteredArray.forEach(x => { ui.displayBookOnHtml(x) })


    }

    createTag(b) {
        return `
      <div class="col-12 col-sm-6 col-lg-4 mb-4 ">
        <div class="card h-100  border border-1 border-dark my-3 " id="${b.id}">

            <div class="text-center">
            resim
                <img src="${b.blogPicture}" class="card-img-top img-fluid " alt="${b.blogPicture}">
            </div>
            <div class="card-body  text-dark bottom-0 w-100 bg-light opacity-100">
            <h5 class="card-title m-0 fw-bold">${b.blogName}</h5>

                <h5 class="card-title m-0 fw-bold">${b.blogWriter}</h5>
                <span class="card-text">date: ${b.date}</span>
                <p class="card-text  mb-3 fw-semibold">text:   ${b.blogText}</p>
                <div class="d-flex justify-content-between mb-3">
                    <span class="card-text">category: ${b.blogCategory}</span>
                    <span class="card-text">id: ${b.id}</span>
                    

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
                                                <label for="blogID">Blog Id:</label>
                                                <input class="form-control mb-2" type="text" id="defaultBlogID" disabled>
    
                                                <label for="blogName">Blog Name:</label>
                                                <input class="form-control mb-2" type="text" id="defaultBlogName" disabled>
    
                                                <label for="blogWriter">Blog Writer: </label>
                                                <input class="form-control mb-2" type="text" id="defaultBlogWriter"
                                                    disabled>
    
                                                <label for="blogType">Blog Text: </label>
                                                <textarea  class="form-control mb-2" type="text" id="defaultBlogText"  cols="30" rows="5" disabled>
                                                </textarea>
                                                <label for="blogDate">Blog Category: </label>
                                                <input class="form-control mb-2" type="text" id="defaultBlogCategory" disabled>
    
                                                <label for="blogPicture">Blog Picture: </label>
                                                <input class="form-control mb-2" type="text" id="defaultBlogPicture"
                                                    disabled>
                                                <button type="button" class="btn btn-danger mt-1 w-100"
                                                    data-bs-dismiss="modal">İptal</button>
    
                                            </form>
                                        </div>
                                        <div class="col-lg-6">
                                            <h5 class="modal-title fw-semibold text-center">Güncel Bilgiler</h5>
                                            <hr class="mt-0">
                                            <form>
                                                <label for="blogID">Blog Id:</label>
                                                <input class="form-control mb-2" type="text" id="editBlogID" disabled>
    
                                                <label for="blogName">Blog Name:</label>
                                                <input class="form-control mb-2" type="text" id="editBlogName">
    
                                                <label for="blogWriter">Blog Writer: </label>
                                                <input class="form-control mb-2" type="text" id="editBlogWriter">
    
                                                <label for="blogType">Blog Text: </label>
                                                <textarea class="form-control mb-2" type="text" id="editBlogText"  cols="30" rows="5"></textarea>
    
                                                <label for="blogDate">Blog Category: </label>
                                                <input class="form-control mb-2" type="text" id="editBlogCategory">
    
                                                <label for="blogPicture">Blog Picture: </label>
                                                <input class="form-control mb-2" type="text" id="editBlogPicture">
    
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
}