function newCard(blog) {
  return ` <div class="col-md-3 content_box text-center mt-3 pb-3 mb-1" id="${blog.id}">
  
    <img
      class="img-fluid lazyloaded"
      src="${blog.img}"
      alt="Kıbrıs Kedisi"
      width="500"
      height="500"
      data-ll-status="loaded"
    />
    <div class="box_title">title: ${blog.title}</div>
    <div class="box-author">author: ${blog.author}</div>
    <div class="box-date">date ${blog.releaseDate}</div>
    <div class="box-category"> category ${blog.category}</div>
    <button class="btn btn-danger del-btn">sil</button>
    <button class="btn btn-warning edit-btn">düzenle</button>
 
</div>`



  // return ` <div class="col-md-3 content_box text-center mt-3 pb-3 mb-1" id="${blog.id}">
  // <a
  //   href="${blog.detail}"
  // >
  //   <img
  //     class="img-fluid lazyloaded"
  //     src="${blog.img}"
  //     alt="Kıbrıs Kedisi"
  //     width="500"
  //     height="500"
  //     data-ll-status="loaded"
  //   />
  //   <div class="box_title">${blog.title}</div>
  //   <div class="box-author">${blog.author}</div>
  //   <div class="read_more">Detaya Git</div>

  // </a>
  // <button class="btn btn-danger del-btn">sil</button>
  // </div>`
}

export default newCard