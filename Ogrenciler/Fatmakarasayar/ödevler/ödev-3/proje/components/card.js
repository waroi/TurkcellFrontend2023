function newCard(blog) {
  return `
  <div
  class="col-md-6 col-lg-4 col-xl-3 content_box text-center p-2"
  id="${blog.id}"
>
  <div class="content_boxx">
    <img
      class="lazyloaded"
      src="${blog.img}"
      alt="Kıbrıs Kedisi"
      width="500"
      height="500"
      data-ll-status="loaded"
    />

    <div class="card-hover">
      <div class="relativee">
        <i
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal${blog.id}"
          class="fa-solid fa-expand"
        >
        </i>

        <div class="box_title">${blog.title}</div>
        <div class="box-author">${blog.author}</div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal${blog.id}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              ${blog.title}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body row">
           <div class="model-img col-md-6">  <img
           class="lazyloaded"
           src="${blog.img}"
           alt="Kıbrıs Kedisi"
           
           data-ll-status="loaded"
         /></div>

            <div class="col-md-6">
            <div><span  class="fw-bold">Kategori:</span>${blog.category}</div>
            <div><span  class="fw-bold">Yazar:</span> ${blog.author}</div>
            <div><span  class="fw-bold">Blog Yazısı:</span>${blog.text}</div>
            <div> <span class="fw-bold"
            >Oluşturma Tarihi:</span
          >${blog.releaseDate + " " + blog.releaseTime}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger del-btn fw-bold">Sil</button>
            <button
              class="btn btn-warning edit-btn fw-bold"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Düzenle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

export default newCard;
