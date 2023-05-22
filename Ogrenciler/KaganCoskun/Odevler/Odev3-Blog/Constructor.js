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
        console.log("createBlogDetail",this.id)
        document.getElementById("blogTitle").textContent = this.title;
        document.getElementById("blogContent").textContent = this.content;
        document.getElementById("blogAuthor").textContent = this.author;
        document.getElementById("blogDate").textContent = this.date;
        document.getElementById("blogCategory").textContent = category.name;
        const blogImage=document.querySelector(".blogImg");
        blogImage.src=this.imgUrl;
        
        document.getElementById("editBtn").addEventListener('click', () => {this.editBlog(this.id)});
        document.getElementById("deleteBlog").addEventListener('click', () => {ui.deleteBlog(this.id)});


        document.getElementById("blogViewer").style.display = "block";
    }

    editBlog(id){
        editItemId = id;
        console.log("editBlog",this.id)
        document.getElementById("title").value = this.title;
        document.getElementById("author").value = this.author;
        document.getElementById("category").value = this.category;
        document.getElementById("content").value = this.content;
        document.getElementById("coverUrl").value = this.imgUrl;
        isEdit = true;

        ui.changeSubmitBtn("edit");
        
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