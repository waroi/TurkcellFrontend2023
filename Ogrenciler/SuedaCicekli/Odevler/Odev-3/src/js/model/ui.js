
//aktif kategori, random grid hesaplamak için kullanılıyor 
let activeCategory = 1;
let totalCol = 0;
const gridChoose1 = [3, 4, 5]
let grid;

//form elementlerini seçme
const form = document.getElementById('addBlogForm');
const writerNameInput = document.getElementById('writerNameInput');
const writerSurnameInput = document.getElementById('writerSurnameInput');
const titleInput = document.getElementById('titleInput');
const categoryInput = document.getElementById('categorySelect');
const summaryInput = document.getElementById('summaryInput');
const urlInput = document.getElementById('urlInput');
const urlTwoInput = document.getElementById('urlTwoInput');
const textInput = document.getElementById('textInput');
const textTwoInput = document.getElementById('textTwoInput');
const blogListArea = document.getElementById('blog-list-area');
const closeButtons = document.querySelectorAll('.close-form');
let avatarInput;

//buttons
const categoryButtons = document.querySelectorAll('.category-btn');
const saveOrUpdateButton = document.getElementById('saveOrUpdateButton');
const addSectionButton = document.getElementById('addSectionButton');
const secitonArea = document.getElementById('sectionArea');
const writeBlogButton = document.getElementById('write-blog');

//avatars
const avatarList = document.querySelectorAll('.avatarIcons');
let globalBlogs = [];

//Detail Modal
let detailBlogTitle = document.getElementById('detailTitle');
let detailBlogImage = document.getElementById('detailImage');
let detailAvatar = document.getElementById('detailAvatar');
let detailAuthorName = document.getElementById('detailAuthorName');
let detailAuthorSurname = document.getElementById('detailAuthorSurname');
let detailDate = document.getElementById('detailDate');
let detailTime = document.getElementById('detailTime');
let detailCategory = document.getElementById('detailCategory');
let detailSummary = document.getElementById('detailSummary');
let detailTwoImage = document.getElementById('detailTwoImage');
let detailText = document.getElementById('detailText');
let detailTextTwo = document.getElementById('detailTextTwo');
let modalTitle = document.getElementById('modalTitle');
let alertArea = document.querySelector('.alertArea');

class UI {

  static main() {
    UI.categoryDetect();
    Operation.getAllBlogs();
    UI.listenEvents();
    Sorting.main();
  }

  static listenEvents() {
    addSectionButton.addEventListener('click', function (e) {
      e.preventDefault();
      UI.addSection();
    })

    writeBlogButton.addEventListener('click', function () {
      modalTitle.innerHTML = "Write Blog";
      saveOrUpdateButton.innerHTML = "Save";
    });

    saveOrUpdateButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (saveOrUpdateButton.innerHTML == "Save") {
        UI.addBlog();
      } else {
        UI.updateBlog(saveOrUpdateButton.getAttribute("blogId"));
      }


    });

    // Diğer checkbox'ların işaretini kaldırır ve işaretlenin chekbox'dan bir avatar pathi'i üretir.
    avatarList.forEach((avatar) => {
      avatar.addEventListener('click', function () {
        avatarList.forEach((input) => {
          input.checked = false;
          if (avatar.id === input.id) {
            input.checked = true;
          }
        });
        avatarInput = "./src/asset/avatars/" + avatar.id + ".png";
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener('click', function () {
        UI.clearForm();
      });
    });
  }

  static clearForm() {
    titleInput.value = "";
    categoryInput.value = "";
    urlInput.value = "";
    urlTwoInput.value = "";
    textInput.value = "";
    textTwoInput.value = "";
    summaryInput.value = "";
    writerNameInput.value = "";
    writerSurnameInput.value = "";
    avatarInput = "";
    avatarList.forEach((input) => {
      input.checked = false;
    });
  }


  static categoryDetect() {
    categoryButtons.forEach((button) => {
      button.addEventListener('click', function () {
        activeCategory = button.id;
        categoryButtons.forEach((button) => {
          button.classList.remove('active');
        });
        button.classList.add('active');
        if (activeCategory == "All") {
          Operation.getAllBlogs();
        }
        else {
          Operation.getBlogByCategory(activeCategory);
        }
      });
    });
  }

  static calculateGrid(index) {
    if (index % 3 == 2) {
      grid = 12 - totalCol;
      grid == 0 ? grid = 12 : grid = grid;
      grid == 2 ? grid = 12 : grid = grid;
      totalCol = 0;
    } else {
      grid = gridChoose1[Math.floor(Math.random() * gridChoose1.length)];
      totalCol += grid;
    }
    return grid;
  }

  //operation : delete, show vs
  static addBlogToUI(blogs) {
    totalCol = 0;
    if (typeof blogs !== 'undefined') {
      globalBlogs = blogs;
    }
    let filterBlogs = globalBlogs;

    if (searchKeyword !== "") {

      filterBlogs = globalBlogs.filter((blog) => {
        // Arama kelimesi kitap adında veya yazar adında geçiyorsa true döndürür
        return blog.title.toLowerCase().includes(searchKeyword.toLowerCase()) || blog.writerName.toLowerCase().includes(searchKeyword.toLowerCase()) || blog.writerSurname.toLowerCase().includes(searchKeyword.toLowerCase());
      }
      )
    }

    Sorting.sortBlogs(filterBlogs);

    blogListArea.innerHTML = "";
    filterBlogs.forEach((blog, index) => {
      grid = this.calculateGrid(index);
      blogListArea.innerHTML += `
      <div class="p-2  col-12 col-md-6 col-lg-${grid}">
      <div class="card">
        <img
          src="${blog.image}"
          class="card-img-top" alt="Mountain">
        <div class="p-2 h-100  info-front row w-100">
          <div class="mt-0 gap-2 ">
            <button class="btn btn-dark px-4 py-0 rounded-5">${blog.date.split(" ")[0]}</button>
            <br>
            <button class="btn ${blog.category.toLowerCase()} px-4 mt-2 py-0  rounded-5 text-light ">${blog.category}</button>
          </div>
        </div>
        <div class="p-2 align-items-center h-100 info-back row w-100">
          <div class="d-flex justify-content-end mt-0 gap-2">
            <button class="btn btn-warning p-0 m-0 editbutton" data-bs-target="#writeBlog" data-bs-toggle="modal"  id="${blog.id}"><img src="./src/asset/icon/light/edit.png" alt=""></button>
            <button class="btn btn-danger p-0 m-0" onclick="UI.removeBlog(${blog.id}); return false;"><img src="./src/asset/icon/light/delete.png" alt=""></button>
          </div>
          <a href="" onclick="Operation.getBlogById(${blog.id},'showBlog')" data-bs-toggle="modal" data-bs-target="#detailBlog">
            <h2 class="mt-5 p-0 fs-3">${blog.title.slice(0, 50)}...</h2>
          </a>

          <div class="person d-flex align-items-center">
            <img src=${blog.writerAvatar}></img>
            <p class="m-0 ms-2 fw-light align-items-center">${blog.writerName} <span class="fw-bold">${blog.writerSurname}</span></p>
          </div>
        </div>
      </div>
    </div>
      `
    });

    let editButtons = document.querySelectorAll('.editbutton');
    editButtons.forEach((button) => {
      button.addEventListener('click', function () {
        saveOrUpdateButton.innerHTML = "Update";
        modalTitle.innerHTML = "Update Blog";
        saveOrUpdateButton.setAttribute("blogId", button.id);
        Operation.getBlogById(button.id, "updateForm");
      });
    });
  }

  //Detail Modal

  static showDetail(blog) {

    detailBlogTitle.innerHTML = blog.title;

    detailBlogImage.setAttribute("src", blog.image);
    detailAvatar.setAttribute("src", blog.writerAvatar);
    detailAuthorName.innerHTML = blog.writerName;
    detailAuthorSurname.innerHTML = blog.writerSurname;
    detailDate.innerHTML = blog.date.split(" ")[0] + " | " + blog.date.split(" ")[1];
    detailCategory.innerHTML = blog.category;
    detailSummary.innerHTML = blog.summary;
    if (blog.image2 == "") {
      detailTwoImage.setAttribute("class", "d-none")
    } else {
      detailTwoImage.setAttribute("class", "d-block w-50  mb-1 rounded-4 ")
      detailTwoImage.setAttribute("src", blog.image2);
    }
    detailText.innerHTML = blog.text;
    detailTextTwo.innerHTML = blog.text2;

  }

  static addSection() {
    if (secitonArea.getAttribute("class") == "d-block") {
      secitonArea.setAttribute("class", "d-none");
      addSectionButton.innerHTML = "+";
    } else {
      secitonArea.setAttribute("class", "d-block");
      addSectionButton.innerHTML = "-";
    }
  }

  static addBlog() {

    let titleValue = titleInput.value;
    let categoryValue = categoryInput.value;
    let imageValue = urlInput.value;
    let imageValue2 = urlTwoInput.value;
    let textValue = textInput.value;
    let textValue2 = textTwoInput.value;
    let summary = summaryInput.value;
    let date = this.createDate();
    let writerName = writerNameInput.value
    let writerSurname = writerSurnameInput.value;
    let username = writerSurname.replace(" ", "").toLowerCase() + "_" + writerName.replace(" ", "").toLowerCase()
    let avatar = typeof avatarInput !== 'undefined' ? avatarInput : "./src/asset/avatars/avatarDefault.png";
    if (UI.formValidation() == false) {
      return;
    }
    let blog = new Blog(titleValue, categoryValue, imageValue,
      imageValue2, textValue, textValue2, summary, date, username, writerName, writerSurname, avatar);


    Operation.saveBlog(blog);

  }

  static removeBlog(id) {
    Operation.deleteBlog(id);
  }

  static fillForm(blog) {
    titleInput.value = blog.title;
    categoryInput.value = blog.category;
    urlInput.value = blog.image;
    urlTwoInput.value = blog.image2;
    textInput.value = blog.text;
    textTwoInput.value = blog.text2;
    summaryInput.value = blog.summary;
    writerNameInput.value = blog.writerName;
    writerSurnameInput.value = blog.writerSurname;
    let avatarIcons = document.querySelectorAll('.avatarIcons');
    avatarIcons.forEach((avatar) => {
      if (avatar.id == blog.writerAvatar.split("/").pop().split(".")[0]) {
        avatar.checked = true;
      }
      else {
        avatar.checked = false;
      }
    });
  }

  static formValidation() {
    if (titleInput.value == "" || categoryInput.value == "" || urlInput.value == "" || textInput.value == "" || summaryInput.value == "" || writerNameInput.value == "" || writerSurnameInput.value == "") {

      alertArea.classList.remove("d-none");
      return false;
    } else {
      alertArea.classList.add("d-none");
      return true;
    }
  }

  static updateBlog(id) {

    let titleValue = titleInput.value;
    let categoryValue = categoryInput.value;
    let imageValue = urlInput.value;
    let imageValue2 = urlTwoInput.value;
    let textValue = textInput.value;
    let textValue2 = textTwoInput.value;
    let summary = summaryInput.value;
    let date = this.createDate();
    let writerName = writerNameInput.value
    let writerSurname = writerSurnameInput.value;
    let username = writerSurname.replace(" ", "").toLowerCase() + "_" + writerName.replace(" ", "").toLowerCase()
    let avatar = typeof avatarInput !== 'undefined' ? avatarInput : "./src/asset/avatars/avatar1.png"; //TODO default resim
    if (UI.formValidation() == false) {
      return;
    }
    let updatedBlog = new Blog(titleValue, categoryValue, imageValue,
      imageValue2, textValue, textValue2, summary, date, username, writerName, writerSurname, avatar);

    Operation.updateBlog(id, updatedBlog);
  }


  static createDate() {
    // Tarih nesnesini oluştur
    const currentDate = new Date();


    // Tarih bilgisini formatla
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Aylar 0-11 arasında indekslenir, bu yüzden +1 ekliyoruz
    const year = currentDate.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;

    // Saat ve dakika bilgilerini al
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // Saati istediğiniz formatta oluştur
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // Tarih ve saat bilgisini birleştir
    const dateTime = `${formattedDate} ${formattedTime}`;


    return dateTime;

  }

}




