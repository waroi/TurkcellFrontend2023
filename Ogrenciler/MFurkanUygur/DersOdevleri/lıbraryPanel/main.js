const bookName = document.getElementById("bookName");
const bookWriter = document.getElementById("bookWriter");
const bookType = document.getElementById("bookType");
const bookPrice = document.getElementById("bookPrice");

const addButton = document.getElementById("addButton");

//Books Object
function Books(bookName, bookWriter, bookType, bookPrice) {
    this.bookName = bookName;
    this.bookWriter = bookWriter;
    this.bookType = bookType;
    this.bookPrice = bookPrice;
    this.bookID = Math.floor(Math.random() * 1000000);
}

addButton.addEventListener("click", addBook);

function addBook(e) {
    e.preventDefault();
    if (
        bookName.value == "" ||
        bookWriter.value == "" ||
        bookType.value == "" ||
        bookPrice == ""
    ) {
        alert("Boş geçme");
    } else {
        //Butona verdiğimiz event ile aldığımız valueları Books contructor'ına gönderdik
        let OneBook = new Books(
            bookName.value,
            bookWriter.value,
            bookType.value,
            bookPrice.value
        );

        //Sonra bu verileri storage'da depolayabilmek için Storage nesnemize gönderdik ordanda ui'ya gidicek
        const sendStorage = new Storage();
        sendStorage.addStorage(OneBook);

        //Inputlarımızı temizledik
        bookName.value = "";
        bookWriter.value = "";
        bookType.value = "";
        bookPrice.value = "";
    }
}
