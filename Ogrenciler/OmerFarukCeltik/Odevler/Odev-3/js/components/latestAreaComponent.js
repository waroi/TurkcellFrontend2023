function latestAreaComponent(data) {
  return `<div class="col-12 col-md-6 col-xl-8">
  <div class="card my-4" id="${data[data.length-1].id}" >
    <div class="row g-0">
      <div class="col-xl-6">
        <img
          src="${data[data.length-1].banner}"
          class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-xl-6">
        <div class="card-body">
          <h5 class="card-title fs-4">${data[data.length-1].contentTitle}</h5>
          <div class="fs-5 my-2 fw-semibold">
            Category:${data[data.length-1].category}
          </div>
          <p class="card-text">${data[data.length-1].content.slice(0,200)}...</p>
          <div>
            <div class="fs-6 fst-italic text-info my-4">
              Author:Author <span class="mx-2"> • </span> Date:${data[data.length-1].publicationDate}
            </div>
            <div class="fs-6 my-4 text-info">
              <i class="fa-solid fa-comment-dots fa-md"></i> Comments: <span class="mx-2"> • </span> <i
                class="fa-brands fa-gratipay fa-md"></i> Like:${data[data.length-1].score}
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-end">
          <button data-bs-toggle="modal" data-bs-target="#viewModal" class="btn btn-transparent mt-3 explore-content fst-italic"> Explore This Content...  <i class="fa-solid fa-arrow-right fa-xs"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-12 col-md-6 col-xl-4" id="${data[data.length-2].id}" >
  <div class="card my-4 ">
    <img
      src="${data[data.length-2].banner}"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title fs-4">${data[data.length-2].contentTitle}</h5>
      <div class="fs-5 my-2 fw-semibold">
        Category:${data[data.length-2].category}
      </div>
      <p class="card-text">${data[data.length-2].content.slice(0,140)}...
      </p>
      <div>
        <div class="fs-6 fst-italic text-info my-4">
          Author:Author <span class="mx-2"> • </span> Date:${data[data.length-2].publicationDate}
        </div>
        <div class="fs-6 my-4 text-info">
          <i class="fa-solid fa-comment-dots fa-md"></i> Comments: <span class="mx-2"> • </span> <i
            class="fa-brands fa-gratipay fa-md"></i> Like:${data[data.length-2].score}
        </div>
      </div>
      <div class="d-flex justify-content-end">
      <div>
      <button data-bs-toggle="modal" data-bs-target="#viewModal" class="btn btn-transparent mt-3 explore-content fst-italic"> Explore This Content...  <i class="fa-solid fa-arrow-right fa-xs"></i></button>
      </div>
      </div>
    </div>
  </div>
</div>
<div class="col-12">
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="card my-4 " id="${data[data.length-3].id}" >
        <div class="row g-0">
          <div class="col-xxl-6">
            <img
              src="${data[data.length-3].banner}"
              class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xxl-6">
            <div class="card-body">
              <h5 class="card-title fs-4">${data[data.length-3].contentTitle}</h5>
              <div class="fs-5 my-2 fw-semibold">
                Category:${data[data.length-3].category}
              </div>
              <p class="card-text">${data[data.length-3].content.slice(0,140)}</p>
              <div>
                <div class="fs-6 fst-italic text-info my-4">
                  Author:Author <span class="mx-2"> • </span> Date:${data[data.length-3].publicationDate}
                </div>
                <div class="fs-6 my-4 text-info">
                  <i class="fa-solid fa-comment-dots fa-md"></i> Comments: <span class="mx-2"> • </span> <i
                    class="fa-brands fa-gratipay fa-md"></i> Like:${data[data.length-3].score}
                </div>
              </div>
              <div class="d-flex justify-content-end">
              <button data-bs-toggle="modal" data-bs-target="#viewModal" class="btn btn-transparent mt-3 explore-content fst-italic"> Explore This Content...  <i class="fa-solid fa-arrow-right fa-xs"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 ">
      <div class="card my-4 " id="${data[data.length-4].id}">
        <div class="row g-0">
          <div class="col-xxl-6">
            <img
              src="${data[data.length-4].banner}"
              class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-xxl-6">
            <div class="card-body">
              <h5 class="card-title fs-4">${data[data.length-4].contentTitle}</h5>
              <div class="fs-5 my-2 fw-semibold">
                Category:${data[data.length-4].category}
              </div>
              <p class="card-text">${data[data.length-4].content.slice(0,140)}...</p>
              <div>
                <div class="fs-6 fst-italic text-info my-4">
                  Author:Author <span class="mx-2"> • </span> Date:${data[data.length-4].publicationDate}
                </div>
                <div class="fs-6 my-4 text-info">
                  <i class="fa-solid fa-comment-dots fa-md"></i> Comments: <span class="mx-2"> • </span> <i
                    class="fa-brands fa-gratipay fa-md"></i> Like:${data[data.length-3].score}
                </div>
              </div>
              <div class="d-flex justify-content-end">
              <button data-bs-toggle="modal" data-bs-target="#viewModal" class="btn btn-transparent mt-3 explore-content fst-italic"> Explore This Content...  <i class="fa-solid fa-arrow-right fa-xs"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}
export default latestAreaComponent;

