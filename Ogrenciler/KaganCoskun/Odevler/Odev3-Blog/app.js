let isEdit = false;
let editItemId;
const ui = new UserInterface();
const storage = new Storage("http://localhost:3004/posts");


let blogForm = document.getElementById('blogForm');
const categoryGroup = document.getElementById("category-group")
let formClsBtn = document.getElementById('clsBtn');
let blogCardWrap = document.querySelector('.blogCardWrap');
let blogDetailModal = document.getElementById("blogViewer");
let closeBlogDetailModal = document.getElementById("closeModalButton");
let searchInput = document.getElementById("searchInput");
let sortType = document.getElementById("sortType");


window.onclick = function(event) {
  if (event.target == blogDetailModal) {
    blogDetailModal.style.display = "none";
  }
}


function submitForm(e){
    e.preventDefault();
    let inputValues = ui.getFormInputs();
    isEdit ? ui.editBlogData(inputValues) : ui.addNewBlog(inputValues);
    e.preventDefault();
}

sortType.addEventListener('change', ui.filter);
searchInput.addEventListener('keyup',ui.filter);
categoryGroup.addEventListener('click', ui.filter);
blogForm.addEventListener('submit', submitForm);
window.addEventListener('load', function() {ui.loadUi()});
formClsBtn.addEventListener('click', function() {blogForm.reset(); isEdit = false; ui.changeSubmitBtn("add")});
ui.writeCategories();

ui.mostPopularBlogs();