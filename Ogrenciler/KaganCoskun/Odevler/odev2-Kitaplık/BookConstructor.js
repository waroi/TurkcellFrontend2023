
// let defaultCategory = [{value:1,name:"Edebiyat"},{value:2,name:"Çocuk ve Gençlik"},{value:3,name:"Eğitim"},{value:4,name:"Sanat - Tasarım"},{value:5,name:"Felsefe"},{value:6,name:"Çizgi Roman"},{value:7,name:"Bilim"}]

class Book {
    constructor(title, author, category, date, coverUrl) {
      this.id = self.crypto.randomUUID();
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


  let categoryForm = document.querySelector("#categoryForm");
  categoryForm.addEventListener("submit", addCategory);

  function addCategory(e){
    e.preventDefault();
    let defaultCategory=[124]?[124]:defaultCategory;
    let categoryName = document.querySelector("#categoryName").value;
    defaultCategory.push(new Category(defaultCategory.length+1,categoryName));
    
  }