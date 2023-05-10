const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookType = document.getElementById("bookType");
const bookDate = document.getElementById("bookDate");
const bookPicture = document.getElementById("bookPicture");

const addButton = document.getElementById("addButton");

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
        let OneBook = new Books(
            bookName.value,
            bookWriter.value,
            bookType.value,
            bookDate.value,
            bookPicture.value
        );

        //Sonra bu verileri storage'da depolayabilmek için Storage nesnemize gönderdik ordanda ui'ya gidicek
        const sendStorage = new Storage();
        sendStorage.addStorage(OneBook);

        //Inputlarımızı temizledik
        bookName.value = "";
        bookWriter.value = "";
        bookType.value = "";
        bookDate.value = "";
        bookPicture.value = ""
    }
}
