
class UserInterface{
    getFormInputs(){
        const id = isEdit ? editItemId : self.crypto.randomUUID();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const content = document.getElementById("content").value;
        const imgUrl = document.getElementById("coverUrl").value;
        const date = new Date().toLocaleString();
        const clap = isEdit ? editItemClap : 0;

        return {title,content,author,date,category,imgUrl,id,clap};
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

        ui.toasty("success","Blog başarıyla oluşturuldu");
    }

    
    writeUi(data){
        data = new Blog(data.title,data.content,data.author,data.date,data.category,data.imgUrl,data.id,data.clap);
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
        data = new Blog(data.title,data.content,data.author,data.date,data.category,data.imgUrl,data.id,data.clap);
        storage.update(editItemId,data).then(() => ui.filter());
        blogForm.reset();
        isEdit = false;
        ui.changeSubmitBtn("add");
        data.createBlogDetail();
        const modal = bootstrap.Modal.getInstance(document.getElementById("addBlog"));
        modal?.hide();
        ui.toasty("success","Blog başarıyla güncellendi");
    }

    

    async deleteBlog(id){
       await storage.deleteBlog(id).then(()=> ui.filter());
        blogDetailModal.style.display = "none";
        ui.toasty("danger","Blog başarıyla silindi");
        
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
        blogs = blogs.filter(blog => filterCategories.includes(blog.category.toString()));

        return blogs;
    }

    searchFilter(blogs,search){
        blogs = blogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()) || blog.author.toLowerCase().includes(search.toLowerCase()));
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
    }

    updateClap(id){
        let clap = Number(document.getElementById("clap").textContent)
        storage.updateClap(id,clap+1).then(data => {
            document.getElementById("clap").textContent = data.clap;
        }).finally(() => {ui.loadUi()});
    }
   

   async mostPopularBlogs(){
        let popularWrap = document.getElementById("popularWrap");
        popularWrap.innerHTML = `<h5 class="card-title">En Populer Yazılar</h5>`; 
       await storage.getAll().then(data => {
            let mostPopularBlogs = data.sort((a,b) => b.clap - a.clap).slice(0,3);
            mostPopularBlogs.map(blog => {
                blog = new Blog(blog.title,blog.content,blog.author,blog.date,blog.category,blog.imgUrl,blog.id,blog.clap);
                let popular = blog.popularBlogCard();
                popularWrap.appendChild(popular);
            });
        });
    }


    toasty(type,message){
        const toastyMessageWrap = document.getElementById('ToastFeedback')
        const toastMsg= toastyMessageWrap.querySelector('.toast-body')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastyMessageWrap)
        toastMsg.className=`toast-body bg-${type} text-white`;
        toastMsg.textContent = message;
        toastBootstrap.show()
  
}
}
