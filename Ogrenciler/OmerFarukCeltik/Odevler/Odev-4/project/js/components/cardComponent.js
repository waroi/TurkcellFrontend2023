function createCard(content) {
  return `
  <div class="col h-100" id="${content.id}">
   <div class=" card mb-3 moto-card bg-transparent text-light">
    <div class="row g-0 align-items-center flex-column">
      <div class="justify-content-center">
        <img src="${content.banner}" class="img-fluid  rounded-start" alt="...">
      </div>
      <div class="mt-2">
        <div class="card-body">
          <h5 class="card-title my-3 fs-4"><span class="border-secondary text-capitalize border-1 border-bottom">${content.brand}
          ${content.model}</span></h5>
          <div class="text-muted fs-6 my-4">
            Sport Bike <strong class="mx-1">•</strong> ${content.motorcc}
            <span class="m-2">•</span> Gas: ${content.gas} <span class="m-2">•</span> Status: ${content.status}
            <div class="text-light mt-4 text-end d-flex align-items-center justify-content-end">
            <h4 class="fs-5 me-3">Stocks: ${content.stock}</h4>
            <h4 class="h4 me-3">Price: ${content.price}$</h4>
            </div>
            <div class="text-light mt-4 text-end d-flex align-items-center justify-content-end">
              
              <button  data-bs-toggle="modal" data-bs-target="#addContentModal" class="h4 btn btn-secondary edit-button"><i class="fa-solid fa-highlighter me-1 fa-sm"></i></i>Edit</button>
              <button class="h4 mx-2 btn btn-dark delete-button"><i class="fa-solid me-1 fa-xmark fa-sm"></i></i>Delete</button>
              <button class="h4 btn btn-primary basket-button"><i class="fa-solid me-1 fa-plus"></i>Add Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
}
export default createCard;

