let blogs = [];
const blogList = document.getElementById("blogList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("addBlogModal");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const categoryInput = document.getElementById("categoryInput");
const dateInput = document.getElementById("dateInput");
const imageInput = document.getElementById("imageInput");
const contentInput = document.getElementById("contentInput");
const createButton = document.getElementById("createButton");


// Blogları listele
function listBlogs() {
  blogList.innerHTML = "";

  const filteredBlogs = filterBlogs(blogs);
  const sortedBlogs = sortBlogs(filteredBlogs);

  sortedBlogs.forEach(blog => {
    const blogItem = createBlogCard(blog);
    blogList.appendChild(blogItem);
  });
}

// Blog cardı oluştur
function createBlogCard(blog) {
  const blogItem = document.createElement("div");
  blogItem.classList.add("blog-item");

  const title = document.createElement("h3");
  title.textContent = blog.title;
  blogItem.appendChild(title);

  const author = document.createElement("p");
  author.textContent = "Yazar: " + blog.author;
  blogItem.appendChild(author);

  const category = document.createElement("p");
  author.textContent = "Kategori: " + blog.category;
  blogItem.appendChild(category);

  const date = document.createElement("p");
  date.textContent = "Tarih: " + blog.date + " " + blog.time;
  blogItem.appendChild(date);

  const image = document.createElement("img");
  image.src = blog.image;
  image.alt = blog.title;
  blogItem.appendChild(image);

  const viewButton = document.createElement("button");
  viewButton.classList.add("view-button");
  viewButton.textContent = "Detayları Görüntüle";
  viewButton.setAttribute("data-id", blog.id);
  viewButton.addEventListener("click", () => openModal(blog.id));
  blogItem.appendChild(viewButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Sil";
  deleteButton.setAttribute("data-id", blog.id);
  deleteButton.addEventListener("click", () => deleteBlog(blog.id));
  blogItem.appendChild(deleteButton);

  const editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Güncelle";
  editButton.setAttribute("data-id", blog.id);
  editButton.addEventListener("click", () => editBlog(blog.id));
  blogItem.appendChild(editButton);
  blogList.appendChild(blogItem);

  return blogItem;

}

// Bir blogu sil
function deleteBlog(blogId) {
  const index = blogs.findIndex(blog => blog.id === blogId);
  blogs.splice(index, 1);
  listBlogs();
}

// Modalı kapat
function closeModal() {
    modal.style.display = "none";
}

//Blog detaylarını modal olarak aç
function openModal(blogId) {
  const blog = blogs.find(blog => blog.id === blogId);
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalAuthor = document.getElementById("modalAuthor");
  const modalCategory = document.getElementById("modalCategory");
  const modalDate = document.getElementById("modalDate");
  const modalImage = document.getElementById("modalImage");
  const modalContent = document.getElementById("modalContent");
  const closeButton = document.getElementsByClassName("close")[0];
  const modalCloseButton = document.getElementById("modalCloseButton");
  const editButton = document.getElementById("modalEditButton");

  modalTitle.textContent = blog.title;
  modalAuthor.textContent = "Yazar: " + blog.author;
  modalCategory.textContent = "Kategori: " + blog.category;
  modalDate.textContent = "Tarih: " + blog.date + " " + blog.time;
  modalImage.src = blog.image;
  modalImage.alt = blog.title;
  modalContent.textContent = blog.content;

  modal.style.display = "block";

  modalCloseButton.onclick = function () {
    modal.style.display = "none";
  }
  
  editButton.onclick = function () {
    editBlog(blog);
  }

  // window.onclick = function (event) {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // }
}

// Blogu düzenle
function editBlog(blog) {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalAuthor = document.getElementById("modalAuthor");
    const modalCategory = document.getElementById("modalCategory");
    const modalDate = document.getElementById("modalDate");
    const modalImage = document.getElementById("modalImage");
    const modalContent = document.getElementById("modalContent");
    const modalUpdateButton = document.getElementById("modalUpdateButton");

  // Ekrandaki blog bilgilerini al
    const updatedTitle = modalTitle.textContent;
    const updatedAuthor = modalAuthor.textContent
    const updatedCategory = modalCategory.textContent
    const updatedDate = modalDate.textContent
    const updatedImage = modalImage.src;
    const updatedContent = modalContent.textContent;

    $('#addBlogModal').modal('show');
  
  // Blog bilgilerini güncelle
    blog.title = updatedTitle;
    blog.author = updatedAuthor;
    blog.category = updatedCategory;
    blog.date = updatedDate;
    blog.image = updatedImage;
    blog.content = updatedContent;
    
    const addBlogButton = document.getElementById("addBlogButton");
    addBlogButton.addEventListener("click", createBlogCard);
    
  // Blogları listele
    listBlogs();
  
  // Modalı kapat
    modal.style.display = "none";
}







const createBlogButton = document.getElementById("createBlogButton");
createBlogButton.addEventListener("click", openCreateBlogModal);

// Yeni blog ekle modalı 
function openCreateBlogModal() {
    const addBlogButton = document.getElementById("addBlogButton");
    addBlogButton.addEventListener("click", createBlogCard);

    // Girdi alanlarını temizle
    titleInput.value = "";
    authorInput.value = "";
    categoryInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
    imageInput.value = "";
    contentInput.value = "";

    blogs.push(newBlog);
    listBlogs();
    closeModal();
}

// Add event listeners for filter and search
searchInput.addEventListener("input", performSearch);
categoryFilter.addEventListener("change", filterCategory);

// Add event listener for sort option
const sortOptions = document.getElementsByName("sort");
sortOptions.forEach(option => {
  option.addEventListener("change", changeSortOption);
});

// Blogları filtrele
function filterBlogs(blogList) {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value.toLowerCase();
  
    return blogList.filter(blog => {
      const matchesSearchTerm =
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm);
      const matchesCategory =
        category === "" || blog.category.toLowerCase() === category;
      return matchesSearchTerm && matchesCategory;
    });
}

// Blogları sırala
function sortBlogs(blogList) {
    const sortBy = document.querySelector('input[name="sort"]:checked').value;
    return blogList.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      } 
      else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } 
      else if (sortBy === "author") {
        return a.author.localeCompare(b.author);
      } 
      else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
    });
}

// Arama işlemini gerçekleştir
function performSearch() {
    listBlogs();
}

// Kategoriyi filtrele
function filterCategory() {
    listBlogs();
}

// Sıralama seçeneğini değiştir
function changeSortOption() {
    listBlogs();
}

// JSON verilerini al ve blogları listele
fetch("http://localhost:3000/blogs").
    then(response => response.json()).
    then(data => { 
        blogs = data;
        listBlogs();
    })
    .catch(error => console.log(error));

createButton.addEventListener("click", createBlog);
