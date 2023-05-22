const http = new Http()
const ui = new UI()
const toastTrigger = document.getElementById('addButton');
const liveToastforAddBtn = document.getElementById('liveToastforAddBtn')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToastforAddBtn)

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
    const sec = `${date.getSeconds()}`.padStart(2, 0);

    const data = {
        blogName, blogWriter, blogText, blogCategory, blogPicture, date: `${day}/${month}/${year},${hour}:${min}:${sec}`
    }

    if (blogName == "" || blogWriter == "" || blogText == "" || blogCategory == "" || blogPicture == "") {

        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
    else {

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

sortTitles.addEventListener("change", (e) => {
    ui.globalSortBlogs(e.target.value)
})


function sortType(sortType) {
    let tempSortTypeID = sortType.explicitOriginalTarget.id;
    ui.globalSortBlogs(tempSortTypeID)
}

