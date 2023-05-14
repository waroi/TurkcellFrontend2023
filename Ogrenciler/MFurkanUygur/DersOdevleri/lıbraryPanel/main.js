const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookType = document.getElementById("bookType");
const bookDate = document.getElementById("bookDate");
const bookPicture = document.getElementById("bookPicture");

const addButton = document.getElementById("addButton");
const deleteAllButton = document.getElementById("deleteAll");

const searchBookInput = document.getElementById("searchBook")

//Books Object
function Books(bookName, bookWriter, bookType, bookDate, bookPicture) {
    this.bookName = bookName;
    this.bookWriter = bookWriter;
    this.bookType = bookType;
    this.bookDate = bookDate;
    this.bookPicture = bookPicture;
    this.bookID = Math.floor(Math.random() * 1000000);
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

// document.body.addEventListener("click", checkAllInfo);
// function checkAllInfo() {
//     const checkFunction = new Storage();
//     // checkFunction.checkInformationAllPage()
// }


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
sortTitles = document.querySelectorAll("option");
// sortOptions.addEventListener("click",()=>{

// })
sortOptions.addEventListener("change", () => {
    console.log(typeof sortTitles)
    Array.from(sortTitles).map(s => {
        if (s.value == "azSort") {
            changeSort("azsort")
        }
        else if (s.value == "zaSort") {
            changeSort("zaSort")
        }
        else if (s.value == "dateSort") {
            changeSort("dateSort")
        }

    });
    // changeSort()
})

function changeSort(sortType) {
    console.log(sortType)
}


searchBookInput.addEventListener("keyup", searchBook)
function searchBook() {

    const searcBookOnLS = new Storage();
    searcBookOnLS.searchBookOnStorage(searchBookInput.value);
}
searchBookInput.addEventListener("focus", () => { searchBookInput.value = "" })