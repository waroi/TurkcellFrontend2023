const getDataButton = document.getElementById('getDataButton');
const addDataButton = document.getElementById('addDataButton');
const updateDataButton = document.getElementById('updateDataButton');
const deleteDataButton = document.getElementById('deleteDataButton');
const getDataRow = document.getElementById('getDataRow');

addEventListeners();

function addEventListeners() {
  document.addEventListener('DOMContentLoaded', getAllBlogs);
  getDataButton.addEventListener('click', getAllBlogs);
  addDataButton.addEventListener('click', createBlog);
  updateDataButton.addEventListener('click', updateBlog);
  deleteDataButton.addEventListener('click', deleteBlog)
}

const request = new Request('http://localhost:3000/blogs');

function getAllBlogs() {
  getDataRow.innerHTML = '';
  request.get()
    .then(blogs => {
      blogs.forEach(blog => Blogs.addBlogs(blog));
    })
    .catch(err => console.log(err));
}

function createBlog() {
  let newBlog = {
    title: 'Yeni Blok Başlığı',
    date: '08-07-2023',
    summary: 'Yeni Blog Yeni Özet',
    authorId: 4,
    categoryId: 5
  };
  request.post(newBlog)
  .then(newBlog => console.log(newBlog))
  .catch(err => console.log(err));
}

function updateBlog() {
  let updateBlog = {
    title: 'Güncellenmiş Blok Başlığı',
    date: '08-07-2023',
    summary: 'Güncellenmiş Blog Yeni Özet',
    authorId: 4,
    categoryId: 5
  };
  request.put(5, updateBlog)
    .then(updateBlog => console.log(updateBlog))
    .catch(err => console.log(err));

}

function deleteBlog() {
  request.delete(5)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}