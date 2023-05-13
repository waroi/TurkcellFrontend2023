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

//Yeni kitap ekleme(Hem LS hem display)
Storage.prototype.addNewBookToLocalStorage = function (newBook) {
    ui.displayBookOnHtml(newBook);

    allBooksOnLocalStorage = [...allBooksOnLocalStorage, newBook];
    localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
    writerFilterTag.innerHTML += `<a class="list-group">${newBook.bookWriter}</a>`;
    typeFilterTag.innerHTML += `<a class="list-group">${newBook.bookType}</a>`
}


//Sayfa yenilenince kitapları ekrana basma
Storage.prototype.getAllBooksOnLocalStorage = function () {
    //defaultbooks hep başta. bunu allBook ile birleştirsek daha iyi olur bence
    allBooks = JSON.parse(localStorage.getItem("books"));

    if (allBooks != null) {
        allBooksOnLocalStorage = [...allBooks]
        // const ui = new UI();
        allBooks.forEach(e => {
            ui.displayBookOnHtml(e)
        });
        filters(allBooksOnLocalStorage)

    }
    else {
        allBooksOnLocalStorage.forEach(x => {
            ui.displayBookOnHtml(x)
        })
        filters(allBooksOnLocalStorage)
    }



    //sayfa yüklenir yüklenmez default kitapları kaydetmek için, bu olmazsa kitabı ekle butonuna tıkladıktan sonra LS'e kayıt yapıyor
    localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
}

//İstenilen bir kitabı silme ----yaaaniiii oldu gibi bence yüzde 90 okey
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

//Edit butona tıklanınca açılan modal içine bilgilerin atılması
Storage.prototype.openModalWindowForEachBook = function (selectedID) {
    allBooksOnLocalStorage.forEach(itemOnLS => {
        if (itemOnLS.bookID == selectedID) {
            console.table(itemOnLS);
            showBookInformation(itemOnLS)
        }
    })
}
//openModalWindowForEachBook içine yazılabilir direk
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
//Kitap Güncelleme
Storage.prototype.updateSelectedBook = function (selectedID) {
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
    //Güncellenen değerler LS'e kaydedildi
    localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
    bookContainer.innerHTML = "";
    allBooksOnLocalStorage.forEach(e => {
        ui.displayBookOnHtml(e)
        console.log(e)
    })

    //inputların içini tamizledik
    editBookName.value = ""
    editBookWriter.value = ""
    editBookType.value = ""
    editBookDate.value = ""
    editBookPicture.value = ""

}
//Kitap Arama
Storage.prototype.searchBookOnStorage = function (bookNameOrWriterValue) {
    bookNameOrWriterValue = bookNameOrWriterValue.toLowerCase();
    bookContainer.innerHTML = "";
    if (bookNameOrWriterValue != null) {
        allBooksOnLocalStorage.forEach(searchEachBookOnLS => {
            if (searchEachBookOnLS.bookName.toLowerCase().indexOf(bookNameOrWriterValue) > -1 ||
                searchEachBookOnLS.bookWriter.toLowerCase().indexOf(bookNameOrWriterValue) > -1) {

                ui.displayBookOnHtml(searchEachBookOnLS)
            }
        })
    }
    else {
        allBooksOnLocalStorage.forEach(x => {
            ui.displayBookOnHtml(x)
        })
    }

}


//Filtreleme Yapma (kategori veya yazar adına göre)
Storage.prototype.filterBooksToTypeOrWriter = function () {
    let filterTitles = [];
    allBooksOnLocalStorage.forEach(x => {
        filterTitles.push({ filterBookName: x.bookName, filterWriterName: x.bookWriter });

    })

}

function filters(f) {
    //LS'teki kitaba ait yazar ve tür bilgisini filtre kısmında gözükmesi için çektik ve unique olması için SET diziye attık 
    let writerTags = [];
    let typeTags = [];
    f.forEach(x => {
        writerTags.push(x.bookWriter.toLowerCase());
        typeTags.push(x.bookType.toLowerCase());
    })
    const uniqueWriterTags = new Set();
    writerTags.forEach(uniqueWriterTags.add, uniqueWriterTags);

    const uniqueTypeTags = new Set();
    typeTags.forEach(uniqueTypeTags.add, uniqueTypeTags);

    writerFilterTag.innerHTML = "";
    typeFilterTag.innerHTML = "";

    for (let eachWriterTag of uniqueWriterTags) {
        writerFilterTag.innerHTML += `<a class="list-group">${eachWriterTag}</a>`;
    }
    for (let eachTypeTag of uniqueTypeTags) {
        typeFilterTag.innerHTML += `<a class="list-group">${eachTypeTag}</a>`;
    }
}

// setInterval(function () {
//     allBooks = JSON.parse(localStorage.getItem("books"));
//     let writerTags = [];
//     let typeTags = [];

//     //LS'teki kitaba ait yazar ve tür bilgisini filtre kısmında gözükmesi için çektik ve unique olması için SET diziye attık 
//     allBooks.forEach(x => {
//         writerTags.push(x.bookWriter.toLowerCase());
//         typeTags.push(x.bookType.toLowerCase());
//     })
//     const uniqueWriterTags = new Set();
//     const uniqueTypeTags = new Set();
//     writerTags.forEach(uniqueWriterTags.add, uniqueWriterTags);
//     typeTags.forEach(uniqueTypeTags.add, uniqueTypeTags);

//     // writerTags.forEach(tag => {
//     // writerFilterTag.innerHTML += `<a class="list-group">${tag.filterBookWriter}</a>`;
//     // typeFilterTag.innerHTML += `<a class="list-group">${tag.filterBookType}</a>`;
//     // })
//     writerFilterTag.innerHTML = "";
//     typeFilterTag.innerHTML = "";
//     for (let eachWriterTag of uniqueWriterTags) {
//         writerFilterTag.innerHTML += `<a class="list-group">${eachWriterTag}</a>`;
//     }
//     for (let eachTypeTag of uniqueTypeTags) {
//         typeFilterTag.innerHTML += `<a class="list-group">${eachTypeTag}</a>`;
//     }
//     console.log(writerTags)

// }, 2000)










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