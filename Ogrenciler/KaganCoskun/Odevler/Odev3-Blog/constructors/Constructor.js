class Blog{
    constructor(title,content,author,date,category,imgUrl,id,clap){
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.category = category;
        this.imgUrl = imgUrl;
        this.clap = !!clap?clap:0;
    }

    createBlogCard() {
        let blogCard = document.createElement('article');
        blogCard.className = 'blogCard row p-2 border rounded-3 justify-content-between align-items-center mb-3';
        blogCard.innerHTML = `<div class="col-9">
                            <span>@${this.author}</span>
                            <h4>${this?.title}</h4>
                            <p>${this.content.length>100?this.content.substring(0,100)+"...":this.content}</p>
                        </div>
                        <div class="col-2">
                            <img class="img-fluid" src="${this.imgUrl}" alt="">
                        </div>`;
        blogCard.addEventListener('click', () => {this.createBlogDetail()});
        return blogCard;
    }


    async createBlogDetail(){
        let category =await storage.getCategoriesById(this.category)
        console.log(category)

        let blogViewer = document.getElementById("blogViewer");
        blogViewer.innerHTML = `
        <div class="blog-content">
        <div class="d-flex justify-content-between">
          <h3 id="blogTitle">${this.title}</h3>
          <span id="closeModalButton" class="close">&times;</span>
        </div>
        <div class="my-3">
          <img
            id="blogImg"
            class="blogImg"
            src="${this.imgUrl}"
            alt=""
          />
          <div class="row my-3">
            <p class="col-lg-10" id="blogContent">
                ${this.content}
            </p>
            <div class="col-lg-2 text-center">
              <h5 id="blogAuthor">Yazar: ${this.author}</h5>
              <h6 id="blogDate">${this.date}</h6>
              <h6 id="blogCategory" class="bg-info py-2 rounded-5 text-white">${category.name}</h6>
              <button id="clapBtn" class="btn">
                <span class="fs-5" id="clap">${this.clap}</span>
                <i class="fa-solid fa-hands-clapping fa-xl"></i>
              </button>
              <button
                id="editBtn"
                class="btn btn-success w-100 my-1"
                data-bs-toggle="modal"
                data-bs-target="#addBlog"
              >
                Düzenle
              </button>
              <button id="deleteBlog" class="btn btn-danger w-100">Sil</button>
            </div>
          </div>
        </div>
      </div>`;



      blogViewer.querySelector("#closeModalButton").addEventListener('click', () => {blogViewer.style.display = "none";});

       blogViewer.querySelector("#clapBtn").addEventListener('click', () => {ui.updateClap(this.id)});
       blogViewer.querySelector("#editBtn").addEventListener('click', () => {this.editBlog(this.id,this.clap)});
       blogViewer.querySelector("#deleteBlog").addEventListener('click', () => {ui.deleteBlog(this.id)});

        document.getElementById("blogViewer").style.display = "block";
    }

    popularBlogCard(){
        let popular = document.createElement('li');
        popular.className = 'popular py-1';
        popular.innerHTML = `<h6>${this?.title}</h6>`;
        popular.addEventListener('click', () => {this.createBlogDetail()});
        return popular;
    }

    editBlog(id,clap){
        ui.changeSubmitBtn("edit");
        editItemId = id;
        editItemClap = Number(document.getElementById("clap").innerHTML);
        document.getElementById("title").value = this.title;
        document.getElementById("author").value = this.author;
        document.getElementById("category").value = this.category;
        document.getElementById("content").value = this.content;
        document.getElementById("coverUrl").value = this.imgUrl;
        isEdit = true;

        
        
    }

    
}

class Category{
    constructor(id,name){
      this.id = id;
      this.name = name;
    }
  
    createCategoryCheckbox(){
      let categoryCheckbox = document.createElement("li");
        categoryCheckbox.className = "list-group-item";
        categoryCheckbox.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${this.id}" id="category_${this.id+this.name}"/>
        <label class="form-check-label" for="category_${this.id+this.name}">${this.name}</label>`;
      return categoryCheckbox;
    }
}