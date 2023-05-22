class UI {
  static showAuthors(authors) {
    let list = new Set();
    let list2 = new Set();
    let list3 = [];
    let list4 = [];
    authors.map((author) => {
      list.add(author.author.toUpperCase());
      list2.add(author.url);
    });

    list.forEach((item) => {
      list3.push(item);
    });

    list2.forEach((item) => {
      list4.push(item);
    });

    authors.map((author, i) => {
      if (list3[i]) {
        authorList.innerHTML += `<div class="col-3 mt-1 me-1">
        <div class="row flex-column">
          <div class="col-6 w-100 d-flex justify-content-center py-3">
            <div class="auhtor-picture" style="background-image:url("${list4[i]}")"></div>
          </div>
          <div class="col-6 w-100 text-center">
            <h4>${list3[i]}</h4>
          </div>
        </div>
      </div>`;
      }
    });
  }

  static showBlogs(blogs) {
    blogs.map((blog) => {
      blogList.innerHTML += `<div id=${blog.id} class="col-6 col-xl-4 blog-card mt-1">
        <div class="card">
          <div class="row h-100">
            <div
              title="Metni Okumak İçin Resme Tıklayın"
              class="col-5 pe-0"
            >
              <img
                src="${blog.url}"
                alt="images"
              />
            </div>
            <div class="col-7 pe-0">
              <h4 class="mt-2 mb-0">${blog.title}</h4>
              <p class="mb-0">
                <b>Yazar:</b><br />
                ${blog.author}
              </p>
              <p class="mb-0"><b>Kategori:</b> ${blog.category}</p>
              <p class="mb-0"><b>Tarih:</b> ${blog.date}-${blog.hour}</p>
              <div class="d-flex gap-4 mt-2">
                <button class="card-button" id=updateButton data-bs-target="#updateBlogModal" data-bs-toggle="modal">
                  <i class="fa-solid fa-wrench"></i>
                </button>
                <button class="card-button" id=deleteButton>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });

    blogList.childNodes.forEach((child) => {
      if (child.hasChildNodes()) {
        child.childNodes[1].childNodes[1].childNodes[3].childNodes[9].childNodes[1].addEventListener(
          "click",
          () => {
            Request.getBlogs().then((response) => {
              response.map((item) => {
                if (item.id == child.id) {
                  updateBlogModal.children[0].id = child.id;
                  blogNameUpdate.value = item.title;
                  blogTypeUpdate.value = item.body;
                  blogWriterUpdate.value = item.author;
                  blogDateUpdate.value = item.date;
                  blogHourUpdate.value = item.hour;
                  blogCategoryUpdate.value = item.category;
                  blogUrlUpdate.value = item.url;
                  blogAuthorPictureUpdate.value = item.authorPicture;
                }
              });
            });
          }
        );

        child.childNodes[1].childNodes[1].childNodes[3].childNodes[9].childNodes[3].addEventListener(
          "click",
          () => {
            Request.deleteBlogsAndAuthors(
              "http://localhost:3000/blogs/" + child.id
            );

            Request.deleteBlogsAndAuthors(
              "http://localhost:3000/authors/" + child.id
            );
          }
        );
      }
    });
  }
}
