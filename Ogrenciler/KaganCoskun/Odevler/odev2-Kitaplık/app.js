let tempBookId;
class UserInterface{
    getFormInputs(){
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const coverUrl = document.getElementById("coverUrl").value;

        return new Book(title,author,category,date,coverUrl);
    }

    addNewBook(bookData){
        let localData = storage.getStorage("book");
        localData.push(bookData);
        storage.setStorage("book",localData);
        this.writeUi(bookData);

    }


    writeUi(bookData){
         bookData = new Book(bookData.title,bookData.author,bookData.category,bookData.date,bookData.coverUrl,bookData.id);
        let book = bookData.createBox();
        bookUI.appendChild(book);
        book.querySelector(".btn-danger").addEventListener("click", (e) => {
            book.remove();
            UI.deleteBook(bookData.id);
        });
        book.querySelector(".btn-success").addEventListener("click", (e) => {
            this.editBook(bookData)});
        this.resetForm();


        const modal = bootstrap.Modal.getInstance(document.getElementById("addBook"));
        modal?.hide();

    }
    deleteBook(id){
        let books = storage.getStorage("book");
        books = books.filter((item) => item.id !== id);
        storage.setStorage("book",books);
    }
    editBook(book){
        let modalHtml = document.getElementById("addBook");
        let modal = bootstrap.Modal.getInstance(modalHtml);
        if (!modal) {
            modal = new bootstrap.Modal(modalHtml);
        }
        modal.show();
        console.log(book)
        isEdit = true;
        document.forms["bookForm"]["title"].value = book.title;
        document.forms["bookForm"]["author"].value = book.author;
        document.forms["bookForm"]["date"].value = book.date;
        document.forms["bookForm"]["category"].value = book.category;
        document.forms["bookForm"]["coverUrl"].value = book.coverUrl; 

        tempBookId=book?.id;
        
        UI.changeSubmitBtn("edit");
    }

    

    addCategory(e){
        e.preventDefault();
        let defaultCategory=storage.getStorage("category")?storage.getStorage("category"):[];
        let categoryName = document.querySelector("#categoryName").value;
          const category = new Category(defaultCategory.length+1,categoryName);
        defaultCategory.push(category);
        storage.setStorage("category",defaultCategory);
        UI.createCategory(category);
        document.querySelector("#categoryName").value = "";
    }

      createCategory(newCategory){
        newCategory = new Category(newCategory.value,newCategory.name);
        let selection = document.getElementById("category");
        let option = newCategory.createOption();
        selection.appendChild(option);  
      }

      loadLocalCategory(){
        let defaultCategory=storage.getStorage("category");
        defaultCategory.map(category => UI.createCategory(category));
      }

      loadLocalBooks(){
        bookUI.innerHTML = "";
        let defaultBooks=storage.getStorage("book");
        defaultBooks.map(book => UI.writeUi(book));
      }

    

    resetForm(){
        document.forms["bookForm"]["title"].value = "";
        document.forms["bookForm"]["author"].value = "";
        document.forms["bookForm"]["date"].value = "";
        document.forms["bookForm"]["category"].value = 1 || "";
        document.forms["bookForm"]["coverUrl"].value = "";
    }

    changeSubmitBtn(action){
        if(action !== "add"){
        document.forms["bookForm"]["bookFormBtn"].classList.replace("btn-primary","btn-success");
        document.forms["bookForm"]["bookFormBtn"].innerHTML = "Edit Book";
        }
        else{
            document.forms["bookForm"]["bookFormBtn"].classList.replace("btn-success","btn-primary");
            document.forms["bookForm"]["bookFormBtn"].innerHTML = "Add Book";
        }
    }
        

}





// let defaultCategory = [{value:1,name:"Edebiyat"},{value:2,name:"Çocuk ve Gençlik"},{value:3,name:"Eğitim"},{value:4,name:"Sanat - Tasarım"},{value:5,name:"Felsefe"},{value:6,name:"Çizgi Roman"},{value:7,name:"Bilim"}]

class Book {
    constructor(title, author, category, date, coverUrl,id) {
      this.id =id?id:self.crypto.randomUUID();
      this.title = title;
      this.author = author;
      this.category = category;
      this.date = date;
      this.coverUrl = coverUrl;
    }

  createBox(){
    let cardWrap = document.createElement("div");
    cardWrap.className = "col-sm-15 col-md-10 col-lg-6";
    let card = `<div class='card'>
      <div class='mx-auto' style='width:100%; height:300px; '>
            <img src='${this.coverUrl}' class='card-img-top' alt='${this.cover}' style='width:100%; height:300px; '/></div>
      <div class='card-body'>
        <h5 class='card-title'>${this.title}</h5>
        <p class='card-text'> ${this.author} - ${this.date}</p>
          <div class='d-flex justify-content-center gap-3'>
            <button class='btn btn-success'>Edit</button>
            <button class='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>`;
    cardWrap.innerHTML = card;
    return cardWrap;
  }
  }

  class Category{
    constructor(value,name){
      this.value = value;
      this.name = name;
    }

    createOption(){
      let option = document.createElement("option");
      option.value = this.value;
      option.textContent = this.name;
      return option;
    }

    
  }

  class Storage{
    setStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
    getStorage(key){
        let value;
        localStorage.getItem(key)===null ? value=[]:value=JSON.parse(localStorage.getItem(key));
        return value;
    }
    deleteStorage(id){
        let books = storage.getLocalStorage("book");
        books.filter((item) => item.id !== id);
        storage.setLocalStorage(books);
    }
    editStorage(id){
        console.log(id)
        isEdit=false;
        console.log("editlendi")
        const modal = bootstrap.Modal.getInstance(document.getElementById("addBook"));
        modal.hide();

        let books = storage.getStorage("book");
        let newBook = UI.getFormInputs();
        let index = books.findIndex(item => item.id === id);
        index !== -1 ? books[index] = newBook : alert("something went wrong");
        storage.setStorage("book",books);
        UI.loadLocalBooks();
        UI.changeSubmitBtn("add");
        UI.resetForm();

    }
}






let UI = new UserInterface();
let storage = new Storage();




let bookUI = document.querySelector("#bookUI");
let form = document.querySelector("#bookForm");
let clsBtn = document.querySelector("#clsBtn");
isEdit=false;

function submitForm(e) {
	e.preventDefault();
    let bookData = UI.getFormInputs();
	isEdit ? storage.editStorage(tempBookId) : UI.addNewBook(bookData);
}

form.addEventListener("submit", submitForm);
clsBtn.addEventListener("click",()=>{
    isEdit=false;
    console.log(isEdit)
    UI.resetForm()
    UI.changeSubmitBtn("add")} );

let selection = document.getElementById("category");



let categoryForm = document.querySelector("#categoryForm");
categoryForm.addEventListener("submit", UI.addCategory);



UI.loadLocalCategory();
UI.loadLocalBooks();
