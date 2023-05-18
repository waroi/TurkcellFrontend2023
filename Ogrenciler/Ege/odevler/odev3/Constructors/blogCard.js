function blogCard(blog) {
  return `
  <div class="col-md-6" id="${blog.id}">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">by ${blog.author} at ${
    blog.releaseDate
  }</h6>
        <p class="card-text">${blog.text.slice(0, 3)}...</p>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          See full blog...
        </button>
      </div>
      </div>
    </div>
    `;
}

export default blogCard;
