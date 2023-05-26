function basketCardComponent(content) {
  return `
  <div class="card mb-3 border-0 border-bottom " >
  <div class="row g-0 align-items-center">
    <div class="col-md-3">
    <img src="${content.banner}" class="rounded-start img-fluid"  alt="...">
    </div>
    <div class="col-md-7">
    <div class="card-body">
    <h5 class="card-title fs-3">${content.brand} ${content.model}</h5>
    <p class="card-text fs-5">${content.status}, ${content.gas},  ${content.price}.</p>
    <p class="card-text fs-4 my-2">Stock:${content.stock}</p>
    </div>
    </div>
    <div class="col-md-2">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <p class="card-text fs-5 mb-2 d-none">${content.id}</p>
        <div class="d-flex align-items-center justify-content-center text-center">
          <div class="btn btn-info">-</div>
          <p class="mx-3">Count: ${content.basket}</p>
          <div class="btn btn-info">+</div>
        </div>
        <p class="mt-3">Total Price: ${content.basket * content.price} $</p>
        <div class="d-flex align-items-center justify-content-center text-center">
        <div class="btn btn-danger delete-basket-content">Delete</div>
      </div>
      </div>
    </div>
  </div>
</div>
`
}
export default basketCardComponent;

