function UserInterface(){}
UserInterface.prototype.getFormInputs=function(){
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const coverUrl = document.getElementById("coverUrl").value;

        return new Book(title,author,category,date,coverUrl);
    }

    UserInterface.prototype.addNewBook=function(bookData){
        let localData = storage.getStorage("book");
        localData.push(bookData);
        storage.setStorage("book",localData);
        this.writeUi(bookData);
        UI.filterAuthor();
        UI.showToasty("Book Added Successfully","success")
    }


    UserInterface.prototype.writeUi=function(bookData){
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
    UserInterface.prototype.deleteBook=function(id){
        let books = storage.getStorage("book");
        books = books.filter((item) => item.id !== id);
        storage.setStorage("book",books);
        UI.filterAuthor();
        UI.showToasty("Successfully deleted","danger")
    }
    UserInterface.prototype.editBook=function(book){
        let modalHtml = document.getElementById("addBook");
        let modal = bootstrap.Modal.getInstance(modalHtml);
        if (!modal) {
            modal = new bootstrap.Modal(modalHtml);
        }
        modal.show();
        isEdit = true;
        document.forms["bookForm"]["title"].value = book.title;
        document.forms["bookForm"]["author"].value = book.author;
        document.forms["bookForm"]["date"].value = book.date;
        document.forms["bookForm"]["category"].value = book.category;
        document.forms["bookForm"]["coverUrl"].value = book.coverUrl; 

        tempBookId=book?.id;
        
        UI.changeSubmitBtn("edit");
        UI.filterAuthor();
    }

    UserInterface.prototype.addCategory=function(e){
        typeof e!== "string"?e.preventDefault():"";
        let defaultCategory=storage.getStorage("category")?storage.getStorage("category"):[];
        let categoryName = document.querySelector("#categoryName").value;
        categoryName?"":categoryName=e;
        const category = new Category(defaultCategory.length+1,categoryName);
        defaultCategory.push(category);
        storage.setStorage("category",defaultCategory);
        UI.createCategory(category);
        document.querySelector("#categoryName").value = "";
        UI.showToasty("Category Added Successfully","success")

    }

    UserInterface.prototype.createCategory=function(newCategory){
        newCategory = new Category(newCategory.value,newCategory.name);
        let selection = document.getElementById("category");
        let option = newCategory.createOption();
        selection.appendChild(option);  

        let categoryFilter = document.getElementById("categoryFilter");
        let category = document.createElement("div");
        category.className = "form-check";
        category.innerHTML = `<input class="form-check-input" value="${newCategory.value}" type="radio" name="filter" id="category${newCategory.name}">
        <label class="form-check-label cursorPointer" for="category${newCategory.name}">${newCategory.name}</label>`
        categoryFilter.appendChild(category);
      }

      UserInterface.prototype.loadLocalCategory=function(){
        let defaultCategory=storage.getStorage("category");
        defaultCategory.map(category => UI.createCategory(category));
      }

      UserInterface.prototype.loadLocalBooks=function(books){
        let defaultBooks;
        bookUI.innerHTML = "";
        books? defaultBooks=books:defaultBooks=storage.getStorage("book");
        defaultBooks.map(book => UI.writeUi(book));
      }

      UserInterface.prototype.resetForm=function(){
        document.forms["bookForm"]["title"].value = "";
        document.forms["bookForm"]["author"].value = "";
        document.forms["bookForm"]["date"].value = "";
        document.forms["bookForm"]["category"].value = 1 || "";
        document.forms["bookForm"]["coverUrl"].value = "";
    }

    UserInterface.prototype.changeSubmitBtn=function(action){
        if(action !== "add"){
        document.forms["bookForm"]["bookFormBtn"].classList.replace("btn-primary","btn-success");
        document.forms["bookForm"]["bookFormBtn"].innerHTML = "Edit Book";
        }
        else{
            document.forms["bookForm"]["bookFormBtn"].classList.replace("btn-success","btn-primary");
            document.forms["bookForm"]["bookFormBtn"].innerHTML = "Add Book";
        }
    }

    UserInterface.prototype.bookSearch=function(e){
        let localData = storage.getStorage("book");
        let result = localData.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.author.toLowerCase().includes(e.target.value.toLowerCase()));
        result.length > 0 ? UI.loadLocalBooks(result):UI.noResult();
    }

    UserInterface.prototype.filterCategory=function(e) {
      let filter;
      e.target.value? filter=storage.getStorage("book").filter((item)=> item.category === e.target.value):"" ;
      filter !== undefined? filter?.length > 0 ? UI.loadLocalBooks(filter):UI.noResult():"";
      }

      UserInterface.prototype.filterAuthor=function(){
        authorFilter.innerHTML = "";
        const authors = new Set();
        let localData = storage.getStorage("book");
        localData.map((item)=>authors.add((item.author).toLowerCase()))
        authors.forEach((item)=>UI.writeAuthor(item))
      }
      
      UserInterface.prototype.writeAuthor=function(authorName){
        let authorFilter = document.getElementById("authorFilter");
        let author = document.createElement("div");
        author.className = "form-check";
        author.innerHTML = `<input class="form-check-input" type="radio" name="filter" id="author${authorName}">
              <label class="form-check-label cursorPointer" style="text-transform: capitalize;"  for="author${authorName}">${authorName}</label>`
              authorFilter.appendChild(author);
      }
      
      UserInterface.prototype.filterAuthorData=function(e) {
        let filter;
        e.target.innerHTML? filter=storage.getStorage("book").filter((item)=> item.author.toLowerCase() === e.target.innerHTML):"" ;
        filter !== undefined? filter?.length > 0 ? UI.loadLocalBooks(filter):UI.noResult():"";
        }

        UserInterface.prototype.noResult=function(){
      bookUI.innerHTML = "";
        let noData = document.createElement("div");
        noData.className = "col-12 text-center";
        noData.innerHTML = `<h3>There are no results</h3>`;
        bookUI.appendChild(noData);
        UI.showToasty("We couldn't find any results :(","danger")

    }

    UserInterface.prototype.showToasty=function(message, type){
      const toastLiveExample = document.getElementById('liveToast')
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

      let toastMessage = document.querySelector(".toast-body");
      toastMessage.innerHTML = message;
      toastMessage.className = `toast-body bg-${type} text-white`;

      toastBootstrap.show()

    }

    UserInterface.prototype.clearFilter=function(){
      UI.loadLocalBooks();
    }

    UserInterface.prototype.writeTestData=function(){
        const testCategoryDatas=["Tarih","Fantastik","Bilim","Çocuk"]
        testCategoryDatas.map((category) => UI.addCategory(category));

        const testBookDatas = [{"id":"d7a40fc5-366e-44b4-b03f-020a1d7b77e3","title":"Bilimin Büyüsü","author":"Celal Şengör","category":"3","date":"2019-01","coverUrl":"https://i.dr.com.tr/cache/500x400-0/originals/0001792397001-1.jpg"},{"id":"bcb52764-b0cd-4ba7-9361-8ed95ef4febc","title":"Küçük Prens","author":"Antoine de Saint-Exupery","category":"4","date":"2015-01","coverUrl":"https://i.dr.com.tr/cache/500x400-0/originals/0000000628979-1.jpg"}]
        testBookDatas.map((book) => UI.addNewBook(new Book(book.title,book.author,book.category,book.date,book.coverUrl,book.id)));
    }
