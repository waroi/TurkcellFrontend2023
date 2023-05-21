const http = new Http()
const ui = new UI()

document.addEventListener("DOMContentLoaded", getPosts)
function getPosts() {
    http
        .get('http://localhost:3000/posts')
        .then((data) => {
            ui.displayAllPosts(data);
            ui.checkInformationAllPage()
        })
        .catch((err) => console.log(err));
    blogName.value = "";
    blogWriter.value = "";
    blogText.value = "";
    blogCategory.value = "";
    blogPicture.value = ""
}


document.getElementById("addButton").addEventListener("click", addPost)
function addPost() {
    const blogName = document.getElementById("blogName").value;
    const blogWriter = document.getElementById("blogWriter").value;
    const blogText = document.getElementById("blogText").value;
    const blogCategory = document.getElementById("blogCategory").value;
    const blogPicture = document.getElementById("blogPicture").value;

    const date = new Date();
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const hour = `${date.getHours()}`.padStart(2, 0);
    const min = `${date.getMinutes()}`.padStart(2, 0);
    const sec = `${date.getSeconds()}`.padStart(2, 0)

    if (blogName == "" || blogWriter == "" || blogText == "" || blogCategory == "" || blogPicture == "") {
        alert("doldur")
    }
    else {
        const data = {
            blogName, blogWriter, blogText, blogCategory, blogPicture, date: `${day}/${month}/${year}, ${hour}:${min}:${sec}`
        }
        console.log("başarılı")
        http
            .post('http://localhost:3000/posts', data)
            .then(data => {
                ui.displayAllPosts(data)
                getPosts()
            })
            .catch((err) => console.log(err));
    }
}

const blogCategoriesBtn = document.querySelector("#blogCategories");
blogCategoriesBtn.addEventListener("change", (e) => {
    ui.displayBlogFromCategory(e.target.value)
})
sortTitles = document.querySelector("#sortOptions");
console.log(sortTitles)
sortTitles.addEventListener("change", (e) => {
    ui.globalSortBlogs(e.target.value)
})
// sortTitles.forEach(s => {
//     s.addEventListener("click", sortType)
// })
// sortTitles = document.querySelectorAll("option");
// sortTitles.forEach(s => {
//     s.addEventListener("click", sortType)
// })

function sortType(sortType) {
    let tempSortTypeID = sortType.explicitOriginalTarget.id;
    // console.log(tempSortTypeID)

    ui.globalSortBlogs(tempSortTypeID)
}

// const clearFilterBtn = document.getElementById("clearFilters");
// clearFilterBtn.addEventListener("click", () => {
//     blogCategoriesBtn.forEach(t => {
//         Array.from(t.children).forEach(i => {
//             i.children[0].checked = false
//             http
//                 .get('http://localhost:3000/posts')
//                 .then((data) => {
//                     allBlogs.innerHTML = "";
//                     ui.displayAllPosts(data);
//                     ui.checkInformationAllPage();
//                 })
//                 .catch((err) => console.log(err));
//         })
//     })
// })

// const searchBlogInput = document.getElementById("searchBlog")
// searchBlogInput.addEventListener("keyup",()=> {
//     console.log(searchBlogInput.value)
// })
// searchBlogInput.addEventListener("focus", () => { searchBlogInput.value = "" })

// function globalSearch() {
//     http
//         .get('http://localhost:3000/posts')
//         .then((data) => {
//             data.forEach(x => {
//                 if (searchBlogInput != null) {
//                     if (x.blogName.toLowerCase().indexOf(searchBlogInput.value.toLowerCase()) > -1) {
//                         console.log("buldu")
//                         ui.displayOnePost(x);
//                         ui.checkInformationAllPage();

//                     }
//                     else {
//                         globalSearchBlogs.style="d-none"
//                     }
//                 }
//             })

//         })
//         .catch((err) => console.log(err));
// }