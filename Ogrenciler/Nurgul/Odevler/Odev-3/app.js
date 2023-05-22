class BlogManager {
  constructor() {
    this.apiUrl = "http://localhost:3000/blogs";
  }

  async getBlogs() {
    try {
      const response = await fetch(this.apiUrl);
      const blogs = await response.json();
      blogs.forEach((blog) => {
        blog.date = blog.date.replace("t", "");
      });
      return blogs;
    } catch (error) {
      console.error("Error retrieving blogs:", error);
      return [];
    }
  }

  async addBlog(blog) {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        console.log("Blog başarıyla eklendi.");
      } else {
        console.error("Blog eklenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }
  async updateBlog(blogId, updatedBlog) {
    try {
      const response = await fetch(`${this.apiUrl}/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        console.log("Blog başarıyla güncellendi.");
      } else {
        console.error("Blog güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }

  async deleteBlog(blogId) {
    try {
      const url = `${this.apiUrl}/${blogId}`;
      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Blog başarıyla silindi.");
      } else {
        console.error("Blog silinirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }

  displayBlogs() {
    this.getBlogs()
      .then((blogs) => {
        const container = document.createElement("div");
        container.classList.add("container", "wrapper-grey", "padded");

        const row = document.createElement("div");
        row.classList.add("container", "row");
        container.appendChild(row);

        blogs.forEach((blog) => {
          const blogCard = document.createElement("div");
          blogCard.classList.add("col-xs-12", "col-sm-4");
          blogCard.innerHTML = `
            <div class="cards" style="background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${
              blog.img
            }');">
            <div class="card-category">
            ${blog.date.replace("T", " ")} <!-- t harfini kaldır -->
            <i class="fa-regular fa-clock" style="color: #fff"></i>
          </div>
              <div class="card-description">
                <h2>${blog.city}</h2> <h6>${blog.category} </h6>
               
                <h4><a class="card-title">${blog.title}</a></h4>
              </div>
            </div>
          `;

          blogCard.addEventListener("click", () => {
            showModal(blog);
          });

          row.appendChild(blogCard);
        });

        document.body.appendChild(container);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

const blogManager = new BlogManager();
blogManager.displayBlogs();
//Modal//
function showModal(blog) {
  const detailTitle = document.getElementById("detailTitle");
  const detailBody = document.getElementById("detailBody");

  detailTitle.textContent = blog.title;

  detailBody.innerHTML = `
          <iframe width="100%" height="315" src="${blog.video}" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>${blog.article}</p>
          <div class="writers">
          <h4>${blog.writer}</h4>
          </div>
          <h6 class="categorys">${blog.category}</h6>
          <div class="modal-buttons">
            <button type="button" class="btn btn-primary btn-2" id="updateButton" onclick="editBlog(${blog.id})">Düzenle</button>
            <button type="button" class="btn btn-danger btn-3" onclick="deleteBlog(${blog.id})">Sil</button>
          </div>
        `;

  const myDetail = new bootstrap.Modal(document.getElementById("myDetail"));
  myDetail.show();
}

function deleteBlog(blogId) {
  if (confirm("Bu blogu silmek istediğinize emin misiniz?")) {
    blogManager.deleteBlog(blogId);
  }
}
//Sıralama//
document.addEventListener("DOMContentLoaded", () => {
  const sortingSelect = document.getElementById("sortingSelect");
  sortingSelect.addEventListener("change", sortBlogs);
});

function sortBlogs() {
  const sortingSelect = document.getElementById("sortingSelect");
  const sortOption = sortingSelect.value;

  if (sortOption === "") {
    return; // Sıralama seçilmediyse çıkış yap
  }

  const blogCardsContainer = document.querySelector(".row");
  const blogCards = Array.from(
    blogCardsContainer.getElementsByClassName("col-xs-12")
  );

  blogCards.sort((a, b) => {
    const blogA = a.querySelector(".card-description").innerText.toLowerCase();
    const blogB = b.querySelector(".card-description").innerText.toLowerCase();

    if (sortOption === "A-Z") {
      return blogA.localeCompare(blogB);
    } else if (sortOption === "Z-A") {
      return blogB.localeCompare(blogA);
    } else if (sortOption === "tarih") {
      const dateA = new Date(a.querySelector(".card-category").innerText);
      const dateB = new Date(b.querySelector(".card-category").innerText);
      return dateA - dateB;
    } 
  });

  // Mevcut blog kartlarını yeniden sıralanmış blog kartlarıyla değiştir
  while (blogCardsContainer.firstChild) {
    blogCardsContainer.firstChild.remove();
  }

  blogCards.forEach((blogCard) => {
    blogCardsContainer.appendChild(blogCard);
  });
}
//Filtreleme//
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("categorySelect");
  categorySelect.addEventListener("change", filterBlogsByCategory);

  // Kategorileri API'den çekerek `<select>` menüsüne ekleyen fonksiyonu çağır
  fetchCategories();
});

async function fetchCategories() {
  try {
    const response = await fetch("http://localhost:3000/blogs");
    const data = await response.json();
    const blogs = data;

    const categories = blogs.map((blog) => blog.category);
    const uniqueCategories = [...new Set(categories)];

    const categorySelect = document.getElementById("categorySelect");
    uniqueCategories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Hata:", error);
  }
}

function filterBlogsByCategory() {
  const selectedCategory = document.getElementById("categorySelect").value;

  const blogCards = Array.from(document.getElementsByClassName("col-xs-12"));
  blogCards.forEach((blogCard) => {
    const category = blogCard
      .querySelector(".card-description h6")
      .textContent.trim();

    if (selectedCategory === "" || category === selectedCategory) {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
  });
}
//Search
function searchBlogs() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const blogCards = Array.from(document.getElementsByClassName("col-xs-12"));

  blogCards.forEach((blogCard) => {
    const title = blogCard
      .querySelector(".card-description h4")
      .textContent.toLowerCase();

    if (title.includes(searchInput)) {
      blogCard.style.display = "block";
    } else {
      blogCard.style.display = "none";
    }
  });
}

//Düzenle

function editBlog(blogId) {
  fetch(`http://localhost:3000/blogs/${blogId}`)
    .then((response) => response.json())
    .then((blog) => {
      const editForm = document.getElementById("editForm");

      // Blog bilgilerini form elemanlarına yerleştirin
      editForm.elements.titleInput.value = blog.title;
      editForm.elements.contentInput.value = blog.article;
      editForm.elements.authorInput.value = blog.writer;
      editForm.elements.categoryInput.value = blog.category;
      editForm.elements.cityInput.value = blog.city;
      editForm.elements.dateInput.value = blog.date;
      editForm.elements.photoInput.value = blog.img;
      editForm.elements.videoInput.value = blog.video;

      showModal(blog); 

      const editModal = new bootstrap.Modal(
        document.getElementById("editModal")
      );
      editModal.show();

      // Update butonuna olay dinleyici ekle

      editForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Formun otomatik gönderilmesini engelle
        updateBlog(blogId); // Güncelleme işlemini tetikle
      });
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function updateBlog(blogId) {
  const editForm = document.getElementById("editForm");

  const updatedBlog = {
    title: editForm.elements.titleInput.value,
    article: editForm.elements.contentInput.value,
    writer: editForm.elements.authorInput.value,
    category: editForm.elements.categoryInput.value,
    city: editForm.elements.cityInput.value,
    date: editForm.elements.dateInput.value,
    img: editForm.elements.photoInput.value,
    video: editForm.elements.videoInput.value,
  };

  try {
    await blogManager.updateBlog(blogId, updatedBlog);
    console.log("Blog başarıyla güncellendi.");

    // Başarılı güncelleme mesajını görüntüleyebilir veya başka bir işlem yapabilirsiniz.
    // Örneğin, modalı kapatmak için aşağıdaki satırı ekleyebilirsiniz:
    const editModal = new bootstrap.Modal(document.getElementById("editModal"));
    editModal.hide();

    // Sayfayı yenilemek veya başka bir işlem yapmak için aşağıdaki satırları ekleyebilirsiniz:
    blogManager.displayBlogs(); // Blogları tekrar görüntüle
  } catch (error) {
    console.error("Hata:", error);
  }
}

const modalTrigger = document.getElementById("newBlogModalTrigger");
modalTrigger.addEventListener("click", () => {
  const newBlogModal = new bootstrap.Modal(
    document.getElementById("newBlogModal")
  );
  newBlogModal.show();
});

const blogForm = document.getElementById("blogForm");
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titleInput").value;
  const article = document.getElementById("contentInput").value;
  const writer = document.getElementById("authorInput").value;
  const category = document.getElementById("countryInput").value;
  const city = document.getElementById("cityInput").value;
  const date = document.getElementById("dateInput").value;
  const img = document.getElementById("photoInput").value;
  const video = document.getElementById("videoInput").value;

  const newBlog = {
    title: title,
    article: article,
    writer: writer,
    category: category,
    city: city,
    date: date,
    img: img,
    video: video,
  };

  blogManager.addBlog(newBlog);

  const newBlogModal = new bootstrap.Modal(
    document.getElementById("newBlogModal")
  );
  newBlogModal.hide();

  // Formu sıfırla
  blogForm.reset();

  // Yeniden blogları görüntüle
  blogManager.displayBlogs();
});
