const UI = new UserInterface();
const storage = new StorageConstructor();
isEdit = false;

function getData() {
    let name = document.getElementById("addTitle").value;
    let text = document.getElementById("addText").value;
    let writer = document.getElementById("addWriter").value;
    let category = document.getElementById("addCategory").value;
    let date = document.getElementById("addDate").value;
    let url = document.getElementById("addUrl").value;

    const newBlog = new Blog(name, text, writer, date, category, url);

    return newBlog;
}

const addPostArea = document.getElementById("addPostArea");
addPostArea.addEventListener("click", UI.addBlog);

// document.addEventListener("DOMContentLoaded", UI.loadUI);

document.addEventListener("DOMContentLoaded", UI.sortValues);

console.log(storage.getStoragefromJson());