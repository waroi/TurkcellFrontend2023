let bookList = [];
// modal aç kapa için
const toggleModal = () => {
const sepetModalEl = document.querySelector(".sepet_modal");
sepetModalEl.classList.toggle("active");
};

// kitapları getirme

const getBooks = () => {
    fetch("./products.json")
    .then((response) => response.json())
    .then((books) => (bookList = books));
};
getBooks();

const createBookStars = (starRate) => { 
    let starRateHtml = "";
    for (let i = 1; i <= 5; i++) {
        if(Math.round(starRate) >= i){
            starRateHtml += `<i class="bi bi-star-fill active"></i>`;
    }
    else {
        starRateHtml += `<i class="bi bi-star-fill"></i>`;
    }
}
    return starRateHtml;

};

// kitapları listeleme
const createBookItemsHtml = () => { 
    const bookListEl = document.querySelector(".book_list");
    let bookListHtml = "";
    bookList.forEach((book, index) => {
        bookListHtml += `<div class="col-5 ${index % 2 == 0 && "offset-2"} my-5">
        <div class="row book_card">
            <div class="col-6">
                <img src="${book.imgSource}" alt="" class="img-fluid shadow">
            </div>
            <div class="col-6 d-flex flex-column justify-content-between">
                <div class="book_detail">
                    <span class="font_opensans gray fs-5">${book.author}</span><br>
                    <span class="fs-4 fw-bold">${book.name}</span><br>
                    <span class="book_star_rate">
                    ${createBookStars(book.starRate)}
                        <span class="gray">${book.reviewCount} Olumlu Yorum</span>
                    </span>
                </div>
                <p class="book_description font_opensans gray">
                    ${book.description}
                </p>
                <div>
                    <span class="black fw-bold fs-4 me-2">${book.price} ₺ </span>
                    ${book.oldPrice ? `<span class="fw-bold fs-4 old_price">${book.oldPrice} ₺</span>`: ""}
                </div>
                <button class="btn_purple">Sepete Ekle</button>
                <!-- <div>
                    <button class="btn btn-outline-dark">Sepete Ekle</button>
                </div> -->
            </div>
        </div>
    </div>`;
    });
    bookListEl.innerHTML = bookListHtml;
};


const BOOK_TYPES = {
    ALL: "Tümü",
    NOVEL: "Roman",
    CHILDREN: "Çocuk",
    HISTORY: "Tarih",
    FINANCE: "Finans",
};

// kitap türlerini listeleme  
const createBookTypesHtml = () => { 
    const filterEl = document.querySelector(".filter");
    let filterHtml = "";
    let filterTypes= ["ALL"];
    bookList.forEach((book) => {
        if(filterTypes.findIndex((filter) => filter==book.type) == -1) 
        filterTypes.push(book.type);
    });
    filterTypes.forEach((type, index) => {
        filterHtml += `<li class="${index == 0 ? "active" : null}" onclick="filterBooks(this)" data-type"${type}">${
            BOOK_TYPES[type] || type 
        }</li>`;
    });
    filterEl.innerHTML = filterHtml;
};

// filtreleme kısmı
const filterBooks = (filterEl) => {
    document.querySelector(".filter .active").classList.remove("active");
    filterEl.classList.add("active");
    let bookType = filterEl.dataset.type;
    getBooks();
    if(bookType != "ALL")
    bookList = bookList.filter((book) => book.type == bookType);
    createBookItemsHtml();
};

// data geldikten sonra çalışması için
setTimeout(() => {
    createBookItemsHtml();
    createBookTypesHtml();
}
, 100);