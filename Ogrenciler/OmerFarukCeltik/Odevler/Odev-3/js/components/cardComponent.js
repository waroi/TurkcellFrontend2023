function createCard(content) {
  return `<div class="col-12 col-sm-6 col-xl-12 global-cards">
  <div class="card my-2 shadow" id="${content.id}" >
    <div class="row g-0 ">
      <div class="col-xl-2" >
        <img
          src="${content.banner}"
          class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-xl-10 ">
        <div class="card-body d-flex flex-column flex-xl-row align-items-xl-end h-100">
          <div>
            <h5 class="card-title fs-4 text-capitalize">${content.contentTitle}</h5>
            <div class="fs-5 my-2 fw-semibold">
              Category: ${content.category}
            </div>
            <p class="card-text">${content.content.slice(0, 140)}...</p>
            <div class="fs-6 fst-italic text-info my-4">
              Author:${content.author} <span class="mx-2"> • </span> Date:${content.publicationDate}
            </div>
            <div class="fs-6  text-info">
              <i class="fa-solid fa-comment-dots fa-md"></i> Comments: ${content.comments} <span class="mx-2"> • </span> <i
                class="fa-brands fa-gratipay fa-md"></i> Like: ${content.score}
            </div>
          </div>
          <div class="d-flex ms-auto mt-3 flex-column align-items-center justify-content-end">
          <div>
            <button data-bs-toggle="modal" data-bs-target="#addContentModal" class="btn btn-secondary">Edit</button>
            <button  class="btn btn-danger">Delete</button>
          </div>
          <button data-bs-toggle="modal" data-bs-target="#viewModal" class="btn btn-transparent mt-3 explore-content fst-italic"> Explore This Content...  <i class="fa-solid fa-arrow-right fa-xs"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}
export default createCard;

