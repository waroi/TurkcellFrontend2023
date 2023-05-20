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
                    spesificSearchDatas = []
                }
            })
        }
        console.log("Anlık", spesificSearchDatas)

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
        allBlogs.innerHTML = ""
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
        defaultBlogID.value = data.id
        document.getElementById("defaultBlogName").value = data.blogName;
        document.getElementById("defaultBlogWriter").value = data.blogWriter;
        document.getElementById("defaultBlogText").value = data.blogText;
        document.getElementById("defaultBlogCategory").value = data.blogCategory;
        document.getElementById("defaultBlogPicture").value = data.blogPicture;

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

                    allCategories.forEach(uniquecategoryTags.add, uniquecategoryTags);
                    blogCategories.innerHTML = `
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

    displayGlobalSearch() {

    }
    globalSortBlogs(sortTypeID) {
        console.log(spesificSearchDatas)
        if (sortTypeID == "azSort") {
            let azSortDatas =
                spesificSearchDatas
                    .map(x => x)
                    .sort((a, b) => (a.blogName > b.blogName) ? 1 : ((b.blogName > a.blogName) ? -1 : 0))
            allBlogs.innerHTML = "";

            ui.displayAllPosts(azSortDatas);
        }
        else if (sortTypeID == "zaSort") {
            let azSortDatas =
                spesificSearchDatas
                    .map(x => x)
                    .sort((a, b) => (a.blogName < b.blogName) ? 1 : ((b.blogName < a.blogName) ? -1 : 0))
            allBlogs.innerHTML = "";

            ui.displayAllPosts(azSortDatas);

        }

        else if (sortTypeID == "dateSortIncrease") {
            let azSortDatas =
                spesificSearchDatas
                    .map(x => x)
                    .sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
            allBlogs.innerHTML = "";

            ui.displayAllPosts(azSortDatas);

        }

        else if (sortTypeID == "dateSortDescend") {
            let azSortDatas =
                spesificSearchDatas
                    .map(x => x)
                    .sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))
            allBlogs.innerHTML = "";

            ui.displayAllPosts(azSortDatas);


        }
        // if (sortTypeID == "azSort") {
        //     allBlogs.innerHTML="";

        //     http
        //         .get('http://localhost:3000/posts?_sort=blogName')
        //         .then((data) => {
        //             ui.displayAllPosts(data)
        //         })
        //         .catch((err) => console.log(err));
        // }
        // else if (sortTypeID == "zaSort") {
        //     allBlogs.innerHTML="";

        // }
        // else if (sortTypeID == "dateSortIncrease") {
        //     allBlogs.innerHTML="";

        // }
        // else if (sortTypeID == "dateSortDescend") {
        //     allBlogs.innerHTML="";
        //     http
        //     .get('http://localhost:3000/posts?_sort=date&_order=desc')
        //     .then((data) => {
        //         ui.displayAllPosts(data)
        //     })
        //     .catch((err) => console.log(err));
        // }
        // else {


        // }
    }

    createTag(b) {
        return `
      <div class="col-12 col-sm-6 col-lg-3 mb-4 ">
        <div class="card h-100 my-3 position-relative" id="${b.id}">
                <img src="${b.blogPicture}" class="card-img-top blog-img-specs img-fluid " alt="${b.blogPicture}">
          
            <div class="card-body text-black mb-0 pb-0 position-absolute w-100 bottom-0 bg-light">
            <h5 class="card-title fs-3 m-0 fw-bold">${b.blogName}</h5>
                <h5 class="card-title fs-2 m-0 fw-bold">${b.blogWriter}</h5>
                <p class="card-text fs-1 my-2 "> ${b.blogText}</p>
                <span class="card-text fs-1"> ${b.blogCategory}</span>
                <div class="text-end mb-1">
                    <p class="card-text  m-0 p-0 fs-8"> ${b.date}</p>

                </div>
                <hr class="text-danger m-0">
                <div class=" d-flex justify-content-around ">
                
                    <button class="btn  inspect-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <button type="button" class="btn edit-btn" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btn delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    
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