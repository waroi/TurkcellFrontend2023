document.addEventListener("DOMContentLoaded", getPosts)

const http = new Http()
const ui = new UI()

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
        console.log("doldur")

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
const allFilterTag = document.getElementById("all")
console.log(allFilterTag)
const blogCategoriesBtn = document.querySelectorAll("#blogCategories");
filterCaategoryBtn(blogCategoriesBtn);
//Filter buttonları
function filterCaategoryBtn(blogCategoriesBtn) {
    blogCategoriesBtn.forEach(e => {
        e.addEventListener("click", (f) => {
            let filterCategoryName = f.target.parentElement.children[1].innerHTML;
            console.log(filterCategoryName);
            ui.displayBlogFromCategory(filterCategoryName)
        })
    })
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