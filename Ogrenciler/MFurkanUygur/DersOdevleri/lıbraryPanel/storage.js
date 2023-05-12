function Storage() {

}
const ui = new UI();

let allBooksOnLocalStorage = [
    {
        bookName: "Tutunamayanlar",
        bookWriter: "Oğuz Atay",
        bookType: "Kurgu",
        bookDate: "2000",
        bookPicture: "https://i.dr.com.tr/cache/500x400-0/originals/0000000061603-1.jpg",
        bookID: Math.floor(Math.random() * 1000000)
    },
    {
        bookName: "Balonla Beş Hafta",
        bookWriter: "Jules Verne",
        bookType: "Macera",
        bookDate: "2021",
        bookPicture: "https://i.dr.com.tr/cache/500x400-0/originals/0001717363001-1.jpg",
        bookID: Math.floor(Math.random() * 1000000)
    }
];

Storage.prototype.addNewBookToLocalStorage = function (newBook) {
    //Main.js'den eklenen yeni kitap buraya geldi, burdan ui'ya gidicek sonra ekrana basılacak
    //Aptal olma unutma
    //Önce aldığın nesneyi bastır ekrana, sonra ls'e at MAL MAL MAL
    ui.displayBookOnHtml(newBook)
    //LocalStorage'a attık
    allBooksOnLocalStorage = [...allBooksOnLocalStorage, newBook];
    localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
}

Storage.prototype.getAllBooksOnLocalStorage = function () {
    //defaultbooks hep başta. bunu allBook ile birleştirsek daha iyi olur bence
    allBooks = JSON.parse(localStorage.getItem("books"));
    if (allBooks != null) {
        allBooksOnLocalStorage = [...allBooks]
        // const ui = new UI();
        allBooks.forEach(e => {
            ui.displayBookOnHtml(e)
        });
    }
    else {
        allBooksOnLocalStorage.forEach(x => {
            ui.displayBookOnHtml(x)
        })
    }

    //sayfa yüklenir yüklenmez default kitapları kaydetmek için, bu olmazsa kitabı ekle butonuna tıkladıktan sonra LS'e kayıt yapıyor
    localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
}


//yaaaniiii oldu gibi bence yüzde 90 okey
Storage.prototype.deleteSelectedBook = function (selectedID) {
    allBooksOnLocalStorage.forEach(itemOnLS => {
        if (itemOnLS.bookID == selectedID) {
            bookIndex = allBooksOnLocalStorage.indexOf(itemOnLS);
            bookContainer.innerHTML = "";
            if (bookIndex > -1) {
                allBooksOnLocalStorage.splice(bookIndex, 1);
                allBooksOnLocalStorage.forEach(e => {
                    ui.displayBookOnHtml(e);
                })
                localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
            }
            else {
                alert("Eleman yok");
            }
        }
    })
}
Storage.prototype.openModalWindowForEachBook = function (selectedID) {
    allBooksOnLocalStorage.forEach(itemOnLS => {
        if (itemOnLS.bookID == selectedID) {
            console.table(itemOnLS);
            showBookInformation(itemOnLS)
        }
    })

}
function showBookInformation(defaultInformationOnLS) {
    defaultBookID.value = defaultInformationOnLS.bookID
    defaultBookName.value = defaultInformationOnLS.bookName;
    defaultBookWriter.value = defaultInformationOnLS.bookWriter;
    defaultBookType.value = defaultInformationOnLS.bookType;
    defaultBookDate.value = defaultInformationOnLS.bookDate;
    defaultBookPicture.value = defaultInformationOnLS.bookPicture;

    //
    editBookID.value = defaultInformationOnLS.bookID
}

Storage.prototype.updateSelectedBook = function (selectedID) {
    console.log(selectedID)

    allBooksOnLocalStorage.forEach(updateItemOnLS => {
        if (updateItemOnLS.bookID == selectedID) {
            //BOŞ MU DOLU MU KONTROLÜ LAZIM
            // if (
            //     editBookName.value == "" ||
            //     editBookWriter.value == "" ||
            //     editBookType.value == "" ||
            //     editBookDate.value == "" ||
            //     editBookPicture.value == ""
            // ) {
            //     return alert("Lütfen güncel bilgileri giriniz");
            // }
            updateItemOnLS.bookName = editBookName.value;
            updateItemOnLS.bookWriter = editBookWriter.value;
            updateItemOnLS.bookType = editBookType.value;
            updateItemOnLS.bookDate = editBookDate.value;
            updateItemOnLS.bookPicture = editBookPicture.value;
        }

    })
    bookContainer.innerHTML = "";
    allBooksOnLocalStorage.forEach(e => {
        ui.displayBookOnHtml(e)
    })

    //inputların içini tamizledik
    editBookName.value = ""
    editBookWriter.value = ""
    editBookType.value = ""
    editBookDate.value = ""
    editBookPicture.value = ""

}

//Tümünü silme -- Siliyor ama hata uyarısı var
Storage.prototype.deleteAllBooksOnStorage = function () {
    localStorage.clear();
    bookContainer.innerHTML = "";
    // let allBooksOnHtml = document.querySelectorAll(".card")
    // console.log(allBooksOnHtml)
    // while (allBooksOnHtml.length > 0) {
    //     bookContainer.removeChild(bookContainer.firstChild);
    // }

    console.log("silindi")
    //??GEREK VAR MI emin değilim
    allBooks = [];
    allBooksOnLocalStorage = []

    // console.log("allbooks", allBooks)
    // console.log("LS", allBooksOnLocalStorage)

}