function contentModalPage(content) {
  return `<div class="modal-header">
  <h1 class="modal-title py-3 fs-1" id="viewModalLabel">Category:${content.category} </h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div id="viewModalBody" class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-5">
        <img
          src="${content.banner}"
          class="img-fluid rounded-start w-100" alt="...">
      </div>
      <div class="col-5 border-1 border-start border-end ">
        <div class="px-5">
          <h2 class="h1 fs-1"><span class="text-capitalize fw-normal border-info border-3 border-bottom">${content.contentTitle}</span></h2>
          <div class="fs-5 text-capitalize  py-5">${content.content}</div>
        </div>
      </div>
      <div class="col-2">
       <div class="px-3">
        <h4 class="h2 fs-3 fw-normal">
          <span class="text-capitalize fw-normal">Author: </span><span class="text-capitalize  fw-light"> ${content.author}</span>
        </h4>
        <h4 class="h2 fs-3 mt-5 fw-normal">
          <span class="text-capitalize fw-normal">Category: </span><span class="text-capitalize  fw-light"> ${content.category}</span>
        </h4>
        <h4 class="h2 mt-5 fs-3 fw-normal">
          <span class="text-capitalize fw-normal">date: </span><span class="text-capitalize  fw-light"> ${content.publicationDate}</span>
        </h4>
        <h4 class="h2 mt-5 fs-3 fw-normal">
          <span class="text-capitalize fw-normal">Watch: </span><span class=" text-capitalize fw-light">25</span>
        </h4>
        <div class="mt-5 fw-normal">
          <i class="fa-solid text-capitalize  fa-comment-dots fa-md"></i> Comments: ${content.comments} <span class="mx-2"> • </span> <i
          class="fa-brands text-capitalize  fa-gratipay fa-md"></i> Like: ${content.score}
        </div>
       </div>
      </div>
    </div>
  </div>
</div>`
}
export default contentModalPage;

