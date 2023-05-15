let tempBookId;

let UI = new UserInterface();
let storage = new Storage();

let bookUI = document.querySelector("#bookUI");
let form = document.querySelector("#bookForm");
let clsBtn = document.querySelector("#clsBtn");
let testBtn = document.querySelector("#testData");
isEdit=false;

function submitForm(e) {
	e.preventDefault();
    let bookData = UI.getFormInputs();
	isEdit ? storage.editStorage(tempBookId) : UI.addNewBook(bookData);
}

form.addEventListener("submit", submitForm);
clsBtn.addEventListener("click",()=>{
    isEdit=false;
    UI.resetForm()
    UI.changeSubmitBtn("add")} );


let categoryForm = document.querySelector("#categoryForm");
categoryForm.addEventListener("submit", UI.addCategory);

let categoryFilter = document.getElementById("categoryFilter"); 
categoryFilter.addEventListener("click",UI.filterCategory);

let clearFilter = document.getElementById("clearFilter");
clearFilter.addEventListener("click",UI.clearFilter);

let authorFilter = document.getElementById("authorFilter");
authorFilter.addEventListener("click",UI.filterAuthorData);

let bookSearch = document.getElementById("bookSearch");
bookSearch.addEventListener("keyup",UI.bookSearch);

let bookSort = document.getElementById("bookSort");
bookSort.addEventListener("change",(e)=>{storage.sortStorage(e.target.value)});

testBtn.addEventListener("click",UI.writeTestData)

let copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
copyright.innerHTML = `${year} ©Copyright Kağan Coşkun`;


storage.sortStorage(1);
UI.filterAuthor();
UI.loadLocalCategory();
UI.loadLocalBooks();