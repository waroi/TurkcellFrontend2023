
class UserInterface{
    getFormInputs(){
        const id = isEdit ? editItemId : self.crypto.randomUUID();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const content = document.getElementById("content").value;
        const imgUrl = document.getElementById("coverUrl").value;
        const date = new Date().toLocaleString();

        return {title,content,author,date,category,imgUrl,id};
    }

    addNewBlog(bookData){
        storage.createBlog(bookData).then(data => ui.writeUi(data)); 
        blogForm.reset();  

        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });


        const modal = bootstrap.Modal.getInstance(document.getElementById("addBlog"));
        modal?.hide();
    }

    
    writeUi(data){
        console.log(data)
        data = new Blog(data.title,data.content,data.author,data.date,data.category,data.imgUrl,data.id);
        let blogCard=data.createBlogCard();
        blogCardWrap.appendChild(blogCard);
    }

    loadUi(filterData){
        blogCardWrap.innerHTML = "";
        filterData?.length===0?blogCardWrap.innerHTML = 
        "<h3>Sonuç Bulunamadı</h3>":
         filterData?.length > 0 && filterData !== undefined ? filterData.map(element => ui.writeUi(element)):storage.getAll().then(data => {data.map(element => ui.writeUi(element))});;
        
    }

    editBlogData(data){
        data = new Blog(data.title,data.content,data.author,data.date,data.category,data.imgUrl,data.id);
        console.log(data)
        storage.update(editItemId,data).then(() => ui.filter());
        blogForm.reset();
        isEdit = false;
        ui.changeSubmitBtn("add");
        data.createBlogDetail();
        const modal = bootstrap.Modal.getInstance(document.getElementById("addBlog"));
        modal?.hide();
    }

    

    async deleteBlog(id){
       await storage.deleteBlog(id).then(()=> ui.filter());
        blogDetailModal.style.display = "none";
        
    }

    changeSubmitBtn(action){
        if(action !== "add"){
        document.forms["blogForm"]["blogFormBtn"].classList.replace("btn-primary","btn-success");
        document.forms["blogForm"]["blogFormBtn"].innerHTML = "Düzenle";
        }
        else{
            document.forms["blogForm"]["blogFormBtn"].classList.replace("btn-success","btn-primary");
            document.forms["blogForm"]["blogFormBtn"].innerHTML = "Oluştur";
        }
    }


    writeCategories(){
        categoryGroup.innerHTML=""
        storage.getCategories().then(data => {
            data.map(element => {
                element = new Category(element.id,element.name);
                let categoryItem = element.createCategoryCheckbox();
                categoryGroup.appendChild(categoryItem);
            });
        });
    }

    getSelectedCategories(){
        let selectedCategories = [];
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        checkboxes.forEach((checkbox) => {
            selectedCategories.push(checkbox.value);
        });
        return selectedCategories;
    }

    categoryFilter(blogs,filterCategories){
        console.log("category")
        blogs = blogs.filter(blog => filterCategories.includes(blog.category.toString()));
        console.log(blogs)

        return blogs;
    }

    searchFilter(blogs,search){
        console.log("search")
        blogs = blogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase()));
        console.log("Search => ",blogs)
        return blogs;
    }

    sortBlogs(blogs,sortType){
        blogs = blogs.sort((a,b) => {
            if(sortType === "dateNew"){
                return b.date.localeCompare(a.date);
            }
            else if(sortType === "dateOld"){
                return a.date.localeCompare(b.date);
            }
            else if(sortType === "titleAZ"){
                return a.title.localeCompare(b.title);
            }
            else if(sortType === "titleZA"){
                return b.title.localeCompare(a.title);
            }
            else if(sortType === "authorAZ"){
                return a.author.localeCompare(b.author);
            }
            else if(sortType === "authorZA"){
                return b.author.localeCompare(a.author);
            }
            
        });
        return blogs;
    }

    async filter(){
        let filterCategories = ui.getSelectedCategories();
        let blogs =await storage.getAll();
        let search = document.getElementById("searchInput").value;
        let sortType = document.getElementById("sortType").value;

        filterCategories.length>0 ? blogs=ui.categoryFilter(blogs,filterCategories):"";
        search.length>0 ? blogs=ui.searchFilter(blogs,search) : "";
        sortType !== "Varsayılan"? blogs=ui.sortBlogs(blogs,sortType) : "";
        ui.loadUi(blogs)
        // blogs.length!==0?:ui.loadUi("noResult");
    }

   
}
