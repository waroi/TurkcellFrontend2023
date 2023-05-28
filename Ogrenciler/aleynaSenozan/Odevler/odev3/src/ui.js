class UI {
loadAllTravelsToUI(travels) {
    travels.forEach(function (travel) {
      ui.addTravelToUI(travel);
    });
}
addTravelToUI(travel) {
    const travelList = document.getElementById("travel-list");
    const card = document.createElement("div");
    
    card.classList.add(
      "col-md-12",
      "mt-4",
      "d-flex",
      "justify-content-center",
      "travelCard"
    );
    card.id = travel.id;
    card.dataset.fullText = travel.text;
    const cardHTML = `
      <div class="card mx-3 w-100" data-id="${travel.id}">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${travel.url}" class="card-img-top img-fluid" alt="Post Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title title-s">${travel.title}</h5>
              <p class="card-text">${travel.text.slice(0, 200)}...</p>
              <div class="author-date">
                <p class="card-text author-s"><small class="text-muted">Author: ${travel.author}</small></p>
                <p class="card-text"><small class="text-muted">${travel.date}</small></p>
                <p class="card-text "><small class="text-muted">Category: ${travel.category}</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <div>
            <a href="#" class="btn btn-sm btn-link p-0 mr-2 delete-article" id="delete-article"><i class="bi bi-trash text-dark" style="font-size: 1.3rem;"></i></a>

              <a href="#" class="btn btn-sm btn-link p-0 mr-2" id="updatePost"><i class="bi bi-pencil text-dark guncelle" style="font-size: 1.3rem;"></i></a>
            </div>
            <div class="seeMore">
              <a href="#" class="btn btn-sm btn-link text-decoration-none readMoreBtn" id="readMore" style="display: flex; align-items: center;">
                <u><span class="text-dark">Read More</span></u><i class="bi bi-arrow-right text-dark ml-1" style="font-size: 1.3rem;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    card.innerHTML = cardHTML;
    travelList.appendChild(card);
    const readMoreBtn = card.querySelector(".readMoreBtn");
    readMoreBtn.addEventListener("click", () => this.readMorePostFromUI(card));
    const img = card.querySelector(".card-img-top");
    img.style.maxHeight = "200px";
}
searchPostInUI(searchValue) {
    const postList = document.getElementById('travel-list');
    const postListItems = postList.querySelectorAll('.card-body');

    postListItems.forEach(function (postListItem) {
      const title = postListItem.children[0].textContent.toLowerCase();
      const author = postListItem.children[2].textContent.toLowerCase();
      if (title.indexOf(searchValue) === -1 && author.indexOf(searchValue) === -1) {
        postListItem.parentElement.parentElement.parentElement.parentElement.setAttribute('style', 'display : none !important');
      } else {
        postListItem.parentElement.parentElement.parentElement.parentElement.setAttribute('style', 'display : block');
      }
    })
}
readMorePostFromUI(card) {
  const readMoreModal = new bootstrap.Modal(document.getElementById('readMoreModal'));
  readMoreModal.show();

  const imgUrl = card.querySelector('img')?.getAttribute('src');
  const postTitle = card.querySelector('.card-title')?.textContent;
  const postAuthor = card.querySelector('.author-s > small')?.textContent.replace('Author: ', '');
  const postDate = card.querySelector('.author-s + p')?.textContent;
  const postCategory = card.querySelector('.text-muted:last-child')?.textContent.replace('Category: ', '');
  const postContent = card.dataset.fullText;

  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = `
  <div class="modal-header bg-secondary text-light">
  <h1 class="modal-title fs-5" id="readMoreModalLabel">${postTitle}</h1>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="background: none; border: none;">
  <span aria-hidden="true" style="background-color: transparent; position: relative; display: flex; align-items: center; justify-content: center; width: 16px; height: 16px;">
    <i class="fas fa-times"></i>
  </span>
</button>

</div>
<div class="modal-body p-5">
  <div class="row">
    <div class="col-md-12 text-center">
      ${imgUrl ? `<img src="${imgUrl}" class="w-75 rounded" alt="" />` : ''}
    </div>

    <div class="col-md-12 mt-4">
      <p class="text-center">${postContent}</p>
    </div>
  </div>
</div>
`;
}
updatePostFromUI(card) {
  const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
  updateModal.show();

  document.getElementById('update-id').value = card.id;
  document.getElementById('update-title').value = card.querySelector('.card-title').textContent;
  document.getElementById('update-text').value = card.dataset.fullText;
  document.getElementById('update-author').value = card.querySelector('.author-s > small').textContent.replace('Author: ', '');
  document.getElementById('update-category').value = card.querySelector('.card-text:last-child').textContent.replace('Category: ', '');
  document.getElementById('update-url').value = card.querySelector('img').getAttribute('src');
}
async sortTravelsFromUI(sortType) {
  const request = new Request("http://localhost:3000/travels");

  let travels;
  console.log(travels);
  travels =await request.get();
  let sortedtravels = [];

  switch (sortType) {
    case "alphabetical-asc-title":
      sortedtravels = travels.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "alphabetical-desc-title":
      sortedtravels = travels.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "alphabetical-asc-writer":
      sortedtravels = travels.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "alphabetical-desc-writer":
      sortedtravels = travels.sort((a, b) => b.author.localeCompare(a.author));
      break;
    case "date-asc":
      sortedtravels = travels.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;
    case "date-desc":
      sortedtravels = travels.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;
    default:
      sortedtravels = travels;
      break;
  }

  travelList.innerHTML = "";
  console.log(sortedtravels);
  sortedtravels.forEach((travel) => {
    this.addTravelToUI(travel);
  });
}
async filterTravelsFromFilter() {
  const checkboxes = document.querySelectorAll('input[name="categories"]:checked');
  const selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value.toLowerCase());
  const request = new Request("http://localhost:3000/travels");
  let travels = await request.get();
  let filteredTravels = travels.filter(travel => selectedCategories.includes(travel.category.toLowerCase()));
  if (selectedCategories.length === 0) {
      filteredTravels = travels;
  }
  const travelList = document.getElementById("travel-list");
  travelList.innerHTML = "";
  filteredTravels.forEach(travel => {
      this.addTravelToUI(travel);
  });
}
addCheckboxFromCheckbox(checkbox) {
  return `
<label class="ms-2 fs-6 checkbox">
  <input type="checkbox" name="categories" value=${checkbox.replace(
    / /g,
    ""
  )} /> 
  ${checkbox}
</label>`;
}
}