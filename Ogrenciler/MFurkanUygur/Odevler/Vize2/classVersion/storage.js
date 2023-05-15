let allBooksOnLocalStorage = [
    {
        bookName: "Tehlikeli Oyunlar",
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
    },
    {
        bookName: "Küçük Prens",
        bookWriter: "Antoine de Saint-Exupery",
        bookType: "Macera",
        bookDate: "2015",
        bookPicture: "https://i.dr.com.tr/cache/500x400-0/originals/0000000628979-1.jpg",
        bookID: Math.floor(Math.random() * 1000000)
    },
    {
        bookName: "Kürk Mantolu Madonna",
        bookWriter: "Sabahattin Ali",
        bookType: "Macera",
        bookDate: "2017",
        bookPicture: "https://i.dr.com.tr/cache/500x400-0/originals/0000000058245-1.jpg",
        bookID: Math.floor(Math.random() * 1000000)
    }

];

const ui = new UI();
class Storage {
    addNewBookToLocalStorage(newBook) {
        ui.displayBookOnHtml(newBook);
        allBooksOnLocalStorage = [...allBooksOnLocalStorage, newBook];
        localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));

    }

    getAllBooksOnLocalStorage() {
        //defaultbooks hep başta. bunu allBook ile birleştirsek daha iyi olur bence
        let allBooks = JSON.parse(localStorage.getItem("books"));
        if (allBooks != null) {
            allBooksOnLocalStorage = [...allBooks]
            // const ui = new UI();
            allBooks.forEach(e => {
                ui.displayBookOnHtml(e)
            });
            // filters(allBooksOnLocalStorage)

        }
        else {
            allBooksOnLocalStorage.forEach(x => {
                ui.displayBookOnHtml(x)
            })
            // filters(allBooksOnLocalStorage)
        }
        //sayfa yüklenir yüklenmez default kitapları kaydetmek için, bu olmazsa kitabı ekle butonuna tıkladıktan sonra LS'e kayıt yapıyor
        localStorage.setItem("books", JSON.stringify(allBooksOnLocalStorage));
    }

    deleteSelectedBook(selectedID) {
        allBooksOnLocalStorage.forEach((itemOnLS, bookIndex) => {
            if (itemOnLS.bookID == selectedID) {
                // bookIndex = i;
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

    openModalWindowForEachBook(selectedID) {
        console.log(selectedID)
        allBooksOnLocalStorage.forEach(itemOnLS => {
            console.log(itemOnLS.bookID);
            if (itemOnLS.bookID == selectedID) {
                // console.log(selectedID);
                // showBookInformation(itemOnLS)
                defaultBookID.value = itemOnLS.bookID
                defaultBookName.value = itemOnLS.bookName;
                defaultBookWriter.value = itemOnLS.bookWriter;
                defaultBookType.value = itemOnLS.bookType;
                defaultBookDate.value = itemOnLS.bookDate;
                defaultBookPicture.value = itemOnLS.bookPicture;

                //
                editBookID.value = itemOnLS.bookID
            }
        })
    }

    // showBookInformation(defaultInformationOnLS) {
    //     defaultBookID.value = defaultInformationOnLS.bookID
    //     defaultBookName.value = defaultInformationOnLS.bookName;
    //     defaultBookWriter.value = defaultInformationOnLS.bookWriter;
    //     defaultBookType.value = defaultInformationOnLS.bookType;
    //     defaultBookDate.value = defaultInformationOnLS.bookDate;
    //     defaultBookPicture.value = defaultInformationOnLS.bookPicture;

    //     //
    //     editBookID.value = defaultInformationOnLS.bookID
    // }

    updateSelectedBook(selectedID) {
        allBooksOnLocalStorage.forEach(updateItemOnLS => {
            if (updateItemOnLS.bookID == selectedID) {
                //BOŞ MU DOLU MU
                if (
                    editBookName.value == "" ||
                    editBookWriter.value == "" ||
                    editBookType.value == "" ||
                    editBookDate.value == "" ||
                    editBookPicture.value == ""
                ) {
                    return alert("Lütfen güncel bilgileri giriniz");
                }
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
            // console.log(e)
        })

        //inputların içini tamizledik
        editBookName.value = ""
        editBookWriter.value = ""
        editBookType.value = ""
        editBookDate.value = ""
        editBookPicture.value = ""

    }

    searchBookOnStorage(bookNameOrWriterValue) {
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

    checkInformationAllPage() {
        let writerTags = [];
        let typeTags = [];
        //LS'teki kitaba ait yazar ve tür bilgisini filtre kısmında gözükmesi için çektik ve unique olması için SET diziye attık 
        allBooksOnLocalStorage.forEach(x => {
            writerTags.push(x.bookWriter.toLowerCase());
            typeTags.push(x.bookType.toLowerCase());
        })

        const uniqueWriterTags = new Set();
        const uniqueTypeTags = new Set();
        writerTags.forEach(uniqueWriterTags.add, uniqueWriterTags);
        typeTags.forEach(uniqueTypeTags.add, uniqueTypeTags);

        writerFilterTag.innerHTML = "";
        typeFilterTag.innerHTML = "";

        for (let eachWriterTag of uniqueWriterTags) {
            writerFilterTag.innerHTML += `
            <div class="p-0 m-0">
                <input type="radio" name="name" class="form-check-input filter-writer-tag">
                <label for="filterCheckBox">${eachWriterTag}</label>
            </div>`;
        }
        for (let eachTypeTag of uniqueTypeTags) {
            typeFilterTag.innerHTML += `
            <div class="p-0 m-0">
                <input type="radio" name="name" class="form-check-input filter-tag">
                <label for="filterCheckBox">${eachTypeTag}</label>
            </div>
            `;
        }
    }
    filterOnLS(filterWord) {
        bookContainer.innerHTML = "";
        let filteredArray = [];
        allBooksOnLocalStorage.forEach(x => {
            if (x.bookType.toLowerCase() == filterWord || x.bookWriter.toLowerCase() == filterWord) {
                filteredArray.push(x);
                // console.log(filteredArray)
                // ui.displayBookOnHtml(x)
            }
        })
        allBooksOnLocalStorage = [...filteredArray]
        // this.checkInformationAllPage()
        filteredArray.forEach(x => { ui.displayBookOnHtml(x) })
    }
    sortBooks(sortType) {
        console.log("ls", sortType);
        if (sortType == "azSort") {
            let sortArray =
                allBooksOnLocalStorage
                    .map(x => x)
                    .sort((a, b) => (a.bookName > b.bookName) ? 1 : ((b.bookName > a.bookName) ? -1 : 0))
            bookContainer.innerHTML = "";
            sortArray.map(e => e).forEach(e => {
                ui.displayBookOnHtml(e)
            })
        }
        else if (sortType == "zaSort") {
            let sortArray =
                allBooksOnLocalStorage
                    .map(x => x)
                    .sort((a, b) => (a.bookName < b.bookName) ? 1 : ((b.bookName < a.bookName) ? -1 : 0))
            bookContainer.innerHTML = "";
            sortArray.forEach(e => {
                ui.displayBookOnHtml(e)
            })
        }
        else if (sortType == "defaultSort") {
            bookContainer.innerHTML = "";
            allBooksOnLocalStorage.forEach(e => {
                ui.displayBookOnHtml(e)
            })
        }
        else if (sortType == "dateSortDescend") {
            let sortArray =
                allBooksOnLocalStorage
                    .map(x => x)
                    .sort((a, b) => (a.bookDate < b.bookDate) ? 1 : ((b.bookDate < a.bookDate) ? -1 : 0))
            bookContainer.innerHTML = "";
            sortArray.forEach(e => {
                ui.displayBookOnHtml(e)
            })
        }
        else if (sortType == "dateSortIncrease") {
            let sortArray =
                allBooksOnLocalStorage
                    .map(x => x)
                    .sort((a, b) => (a.bookDate > b.bookDate) ? 1 : ((b.bookDate > a.bookDate) ? -1 : 0))
            bookContainer.innerHTML = "";
            sortArray.forEach(e => {
                ui.displayBookOnHtml(e)
            })
        }
    }
    deleteAllBooksOnStorage() {
        localStorage.clear();
        bookContainer.innerHTML = "";
        // let allBooksOnHtml = document.querySelectorAll(".card")
        // console.log(allBooksOnHtml)
        // while (allBooksOnHtml.length > 0) {
        //     bookContainer.removeChild(bookContainer.firstChild);
        // }
        alert("Local Storage Temizlendi.Lütfen Sayfayı Yenileyin")
        //??GEREK VAR MI emin değilim
        this.allBooks = [];
        allBooksOnLocalStorage = [];
    }
}