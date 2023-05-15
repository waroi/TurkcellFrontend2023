const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookType = document.getElementById("bookType");
const bookDate = document.getElementById("bookDate");
const bookPicture = document.getElementById("bookPicture");

const addButton = document.getElementById("addButton");
const deleteAllButton = document.getElementById("deleteAll");

const searchBookInput = document.getElementById("searchBook")

//Books Class
class Books {
    constructor(bookName, bookWriter, bookType, bookDate, bookPicture) {
        this.bookName = bookName;
        this.bookWriter = bookWriter;
        this.bookType = bookType;
        this.bookDate = bookDate;
        this.bookPicture = bookPicture;
        this.bookID = Math.floor(Math.random() * 1000000);
    }

}

addButton.addEventListener("click", addBook);

function addBook(e) {
    e.preventDefault();
    if (
        bookName.value == "" ||
        bookWriter.value == "" ||
        bookType.value == "" ||
        bookDate == "" ||
        bookPicture == ""
    ) {
        alert("Boş geçme");
    } else {
        //Butona verdiğimiz event ile aldığımız valueları Books contructor'ına gönderdik
        let newBook = new Books(
            bookName.value,
            bookWriter.value,
            bookType.value,
            bookDate.value,
            bookPicture.value
        );

        //Sonra bu verileri storage'da depolayabilmek için Storage nesnemize gönderdik ordanda ui'ya gidicek
        const sendStorage = new Storage();
        sendStorage.addNewBookToLocalStorage(newBook);
        sendStorage.checkInformationAllPage();

        //Inputlarımızı temizledik
        bookName.value = "";
        bookWriter.value = "";
        bookType.value = "";
        bookDate.value = "";
        bookPicture.value = ""
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const getAllBooks = new Storage();
    getAllBooks.getAllBooksOnLocalStorage();
    getAllBooks.checkInformationAllPage()
});

deleteAllButton.addEventListener("click", deleteAllBooks)
function deleteAllBooks() {
    const deleteAllBooks = new Storage();
    deleteAllBooks.deleteAllBooksOnStorage();
    deleteAllBooks.checkInformationAllPage()
}

const writerFilterBtns = document.querySelectorAll("#writerFilterTag");
filterWriterBtn(writerFilterBtns);

const typeFilterBtns = document.querySelectorAll("#typeFilterTag");
filterTypeBtn(typeFilterBtns);
//Filter buttonları
function filterWriterBtn(writerFilterBtns) {
    writerFilterBtns.forEach(e => {
        e.addEventListener("click", (f) => {
            let filterWriterName = f.target.parentElement.children[1].innerHTML;
            if (f.target.parentElement.children[0].checked == true) {
                const filterWord = new Storage();
                filterWord.filterOnLS(filterWriterName);
            }
        })
    })
}

function filterTypeBtn(typeFilterBtns) {
    typeFilterBtns.forEach(e => {
        e.addEventListener("click", (f) => {
            if (f.target.parentElement.children[0].checked == true) {
                let filterTypeName = f.target.parentElement.children[1].innerHTML;
                const filterWord = new Storage();
                filterWord.filterOnLS(filterTypeName);
            }
        })

    })
}

const clearFilterBtn = document.getElementById("clearFilters");
clearFilterBtn.addEventListener("click", () => {
    bookContainer.innerHTML = "";
    const clearBtn = new Storage();
    clearBtn.getAllBooksOnLocalStorage();
    typeFilterBtns.forEach(t => {
        Array.from(t.children).forEach(i => {
            i.children[0].checked = false
        })
    })
    writerFilterBtns.forEach(t => {
        Array.from(t.children).forEach(i => {
            i.children[0].checked = false
        })
    })
})


sortTitles = document.querySelectorAll("option");
sortTitles.forEach(s => {
    s.addEventListener("click", sortType)
})
function sortType(sortType) {
    let tempSortTypeID = sortType.explicitOriginalTarget.id;
    const sortBooks = new Storage();
    sortBooks.sortBooks(tempSortTypeID)
}


searchBookInput.addEventListener("keyup", searchBook)
function searchBook() {
    const searcBookOnLS = new Storage();
    searcBookOnLS.searchBookOnStorage(searchBookInput.value);
}
searchBookInput.addEventListener("focus", () => { searchBookInput.value = "" })