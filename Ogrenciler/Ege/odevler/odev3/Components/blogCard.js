function blogCard(blog) {
  return `
  <div class="col-lg-6 my-3" id="${blog.id}">
    <div class="card h-100">
      <div class="row g-0">
            <div class="col-lg-4">
            <img src="${
              blog.image
            }" class="img-fluid rounded-start h-100" alt="...">
      </div>
            <div class="col-lg-8">
            <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <h6 class="card-subtitle mb-2">by ${blog.author} at ${
    blog.releaseDate
  } ${blog.releaseTime}</h6>
        <h6 class="card-subtitle mb-2">${blog.category}</h6>
        <p class="card-text">${blog.text.slice(0, 25)}...</p>
        <button
          type="button"
          class="btn btn-primary see-blog"
          data-bs-toggle="modal"
          data-bs-target="#blog-modal"
        >
        <i class="fa-brands fa-readme"></i>
        </button>
        <button type="button" class="btn btn-warning edit-blog"><i class="fa-solid fa-pen-to-square"></i></button>
        <button type="button" class="btn btn-danger delete-blog"><i class="fa-solid fa-trash"></i></button>
      </div>
      </div>
      </div>
      </div>
    </div>
    `;
}

export default blogCard;
