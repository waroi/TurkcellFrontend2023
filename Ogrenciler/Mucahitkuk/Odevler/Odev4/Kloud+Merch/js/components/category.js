function createCategory(category) {
  return `<button class="btn btn-primary w-100 mt-2" data-category="${category}">${category}</button>`;
}


export default createCategory;