function filterComponent(bookAttiribute) {
  return `<li class="list-group-item border-0">
              <input class="form-check-input me-1" type="checkbox" value="${bookAttiribute}" id="checkbox${bookAttiribute}">
              <label class="form-check-label" for="checkbox${bookAttiribute}">${bookAttiribute}</label>
          </li>`
}

export default filterComponent;