const crud = new Crud('http://localhost:3000/blogs');

//Get Create and Update Modal Elements
const modalTitle = document.getElementById('modalLabel');
const modalBlogName = document.getElementById('modalBlogAdi');
const modalAuthorName = document.getElementById('modalYazarAdi');
const modalBlogCategoryName = document.getElementById('modalBlogKategoriAdi');
const modalBlogContent = document.getElementById('modalBlogDetay');
const modalBlogImageUrl = document.getElementById('modalBlogResimUrl');

const createNewBlogButton = document.getElementById('yeniBlogButonu');
const updateBlogButton = document.getElementById('blogGuncellemeButonu');

//Get Info Modal Elements
const infoModalTitle = document.getElementById('infoModalLabel');
const infoModalImage = document.getElementById('infoModalResim');
const infoModalCategory = document.getElementById('infoModalKategoriAdi');
const infoModalDate = document.getElementById('infoModalTarih');
const infoModalBlogContent = document.getElementById('infoModalBlogDetay');
const infoModalAuthor = document.getElementById('infoModalYazarAdi');

const blogsList = document.querySelector('.blogsList');
const allBlogsButton = document.getElementById('allBlogsButton');
const addNewBlogButton = document.getElementById('addBlogButton');

const toast = document.getElementById("toastMessage");

const categoriesFilter = document.getElementById('categoriesFilter');

addEventListeners();


function addEventListeners() {
  document.addEventListener('DOMContentLoaded', Request.showAllBlogsFromRequest);
  addNewBlogButton.addEventListener('click', UI.clearModalForm);
  createNewBlogButton.addEventListener('click', Blogs.addBlog);
  blogsList.addEventListener('click', Blogs.detailBlog);
  blogsList.addEventListener('click', Blogs.updateBlog);
  blogsList.addEventListener('click', Blogs.deleteBlog);
}