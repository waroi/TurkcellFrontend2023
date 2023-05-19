let blogUI = document.getElementById("blogUI");
let tempData;
let isClicked = false;

class UserInterface {
    addBlog = function () {
        let newBlog = getData();
        let jsonData;

        UI.addCard(newBlog);
        UI.clearValues();
    }

    addCard = function (newBlog) {
        let card = newBlog.createCard();
        blogUI.appendChild(card);
        let cardImage = document.querySelector(".card-image");

        cardImage.addEventListener("click", UI.openDisplay);
        card.querySelector(".btn-danger").addEventListener("click", function () {
            card.remove();
            // storage.deleteLocalStorage(book.name);
        })

        card.querySelector(".btn-warning").addEventListener("click", function () {
            UI.editBlog(blog);
        })


        card.querySelector(".btn-dark").addEventListener("click", function () {
            UI.closeDisplay();

        })
    }

    clearValues = function () {
        document.getElementById("addTitle").value = "";
        document.getElementById("addText").value = "";
        document.getElementById("addWriter").value = "";
        document.getElementById("addCategory").value = "";
        document.getElementById("addDate").value = "";
        document.getElementById("addUrl").value = "";
    }

    editBlog = function (blog) {
        isEdit = true;
        document.getElementById("addName").value = blog.name;
        document.getElementById("addWriter").value = blog.writer;
        document.getElementById("addCategory").value = blog.category;
        document.getElementById("addDate").value = blog.date;
        document.getElementById("addUrl").value = blog.url;

        addBookArea.classList.replace("btn-success", "btn-primary");
        addBookArea.innerHTML = "Save";

        tempData = blog;
        // window.scrollTo(0, 0);
    }

    openDisplay = function () {
        const pText = document.querySelector(".card-text");
        pText.classList.replace("d-none", "d-block");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-lg-4", "col-12");
        boxArea.classList.remove("col-sm-6");
        let cardImage = document.querySelector(".card-image");
        cardImage.classList.add("w-25");
    }

    closeDisplay = function () {
        const pText = document.querySelector(".card-text");
        pText.classList.replace("d-block", "d-none");
        let boxArea = document.querySelector(".card");
        boxArea.classList.replace("col-12", "col-lg-4");
        boxArea.classList.add("col-sm-6");
        let cardImage = document.querySelector(".card-image");
        cardImage.classList.remove("w-25");
    }

}