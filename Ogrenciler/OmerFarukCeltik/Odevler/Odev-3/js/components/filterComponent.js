function categoryFiltercomponent(category) {
  return `<div class="form-check mb-0 px-3">
  <input class="form-check-input  d-none" type="checkbox" value="${category}" id="${category}">
  <label class="form-check-label fs-5" for="${category}">
  ${category}
  </label>
</div>`
}

export default categoryFiltercomponent;