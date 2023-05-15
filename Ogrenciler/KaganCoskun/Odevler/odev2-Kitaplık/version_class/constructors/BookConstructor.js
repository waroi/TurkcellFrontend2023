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
  let categoryName = storage.getStorage("category").find((item) => item.value == this.category).name;
  let cardWrap = document.createElement("div");
  cardWrap.className = "col-xl-6 col-lg-10 col-sm-15";
  let card = `<div class='card' style='height:100%;'>
    <div class='mx-auto' style='width:100%; height:300px; '>
          <img src='${this.coverUrl}' class='card-img-top' alt='${this.cover}' style='width:100%; height:300px; '/></div>
    <div class='card-body d-flex justify-content-around flex-column'>
      <h5 class='card-title'>${this.title}</h5>
      <p class='card-text m-0 '> ${categoryName}</p>
      <hr/>

      <p class='card-text m-0'> ${this.author}</p>
      <hr/>
      <p class='card-text m-0 pb-2'> ${this.date}</p>
      
      <div class='d-flex flex-wrap gap-3 justify-content-between'>
      <button class='btn btn-success'><i class="fa-solid fa-pen-to-square"></i></button>
      <button class='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
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