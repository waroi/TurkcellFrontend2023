import App from '../Models/App.js';
import MyAlert from '../Utilities/alert.js';
import textCalculator from '../Utilities/textCalculator.js';
import Blog from '../Models/Blog.js';

const mainApp = new App();

mainApp.load();

if (localStorage.getItem('userLogin') != null) {
 const NEW_USER = JSON.parse(localStorage.getItem('userLogin'));
 mainApp.setOnlineUser({
  name: NEW_USER.name,
  id: NEW_USER.id,
 });
} else {
 redirectAlert.classList.remove('d-none');
 MyAlert.Start('redirectAlert', 'Please login to continue', 'danger');
 setTimeout(() => {
  window.location.href = '../index.html';
 }, 2000);
}

leaveButton.addEventListener('click', (e) => {
 e.preventDefault();
 redirectAlert.classList.remove('d-none');
 MyAlert.Start('redirectAlert', 'You have successfully logged out', 'success');
 mainApp.userExit();
 setTimeout(() => {
  window.location.href = '../index.html';
 }, 2000);
});
searchInput.addEventListener('input', (e) => {
 mainApp.filterBySearch = e.target.value;
 mainApp.printBlogs();
});
sortDate.addEventListener('change', (e) => {
 mainApp.filterByDate = e.target.value;
 mainApp.printBlogs();
});
sortLike.addEventListener('change', (e) => {
 mainApp.filterByLikes = e.target.value;
 mainApp.printBlogs();
});
hashtagUL.addEventListener('click', (e) => {
 if (e.target.tagName == 'A') {
  mainApp.filterByHashtag = e.target.innerText;
  mainApp.printBlogs();
 }
});
authorUL.addEventListener('click', (e) => {
 if (e.target.tagName == 'A') {
  mainApp.filterByAuthor = e.target.innerText;
  mainApp.printBlogs();
 }
});

writeFormReset1.addEventListener('click', (e) => {
 e.preventDefault();
 writeForm.reset();
 wordCount.value = 1400;
});
writeFormReset2.addEventListener('click', (e) => {
 e.preventDefault();
 wordCount.innerHTML = 1400;
 writeForm.reset();
});
textInput.addEventListener('input', (e) => {
 e.preventDefault();
 wordCount.innerHTML = textCalculator(e.target.value);
});

changedFormReset1.addEventListener('click', (e) => {
 e.preventDefault();
 changedForm.reset();
 changedWordCount.value = 1400;
});

changedFormReset2.addEventListener('click', (e) => {
 e.preventDefault();
 changedWordCount.innerHTML = 1400;
 changedForm.reset();
});

changedTextInput.addEventListener('input', (e) => {
 e.preventDefault();
 changedWordCount.innerHTML = textCalculator(e.target.value);
});
changedPublish.addEventListener('click', (e) => {
 e.preventDefault();
 if (Number(changedWordCount.innerHTML) < 0) {
  MyAlert.Start(
   'changedAlert',
   '1400 karakterden fazla giremezsiniz',
   'danger',
  );
 } else if (changedTitleInput.value != '') {
  MyAlert.Start('changedAlert', 'Yazınız güncellendi!', 'success');
  let blog = mainApp.getBlog(changedBlogID.innerHTML);
  blog.changeBlog(
   changedTitleInput.value,
   changedTextInput.value,
   changedImgInput.value,
  );
  mainApp.patch('blogs', blog.id, blog);
  changedWordCount.innerHTML = 1400;
  changedForm.reset();
  changedFormReset2.click();
 } else {
  MyAlert.Start('changedAlert', 'En azından başlık girmelisin.', 'danger');
 }
});

writePublish.addEventListener('click', (e) => {
 e.preventDefault();
 if (Number(wordCount.innerHTML) < 0) {
  MyAlert.Start('writeAlert', '1400 karakterden fazla giremezsiniz', 'danger');
 } else if (titleInput.value != '') {
  MyAlert.Start('writeAlert', 'Yazın paylaşıldı!', 'success');
  const USER = mainApp.getOnlineUser();
  const newBlog = new Blog(
   USER.id,
   USER.name,
   titleInput.value,
   textInput.value,
   imgInput.value,
  );
  mainApp.post('blogs', newBlog);
  wordCount.innerHTML = 1400;
  writeForm.reset();
 } else {
  MyAlert.Start('writeAlert', 'En azından başlık girmelisin.', 'danger');
 }
});
