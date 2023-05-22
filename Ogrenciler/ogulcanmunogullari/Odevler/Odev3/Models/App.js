import Fetch from './Fetch.js';
import MyAlert from '../Utilities/alert.js';
import Blog from './Blog.js';
import User from './User.js';
import SmallBlog from '../Components/SmallBlog.js';
import hashtagGenerator from '../Utilities/hashtagGenerator.js';
import Hashtag from '../Components/Hashtag.js';
import Author from '../Components/Author.js';

class App extends Fetch {
 constructor() {
  super('http://localhost:3535');
  this.onlineUser = {};
  this.blogList = [];
  this.userList = [];
  this.filterByHashtag = null;
  this.filterBySearch = '';
  this.filterByAuthor = null;
  this.filterByDate = 'newest';
  this.filterByLikes = 'more';
 }

 setBlogList(blogList) {
  this.blogList = blogList;
 }
 setUserList(userList) {
  this.userList = userList;
 }
 load() {
  this.fetchUsers();
  this.fetchBlogs();
 }
 printBlogs() {
  const {
   filterByHashtag,
   filterBySearch,
   filterByDate,
   filterByAuthor,
   filterByLikes,
   blogList,
  } = this;
  const blogListFiltered = blogList
   .filter(
    (blog) =>
     (!filterByAuthor || blog.writerName.includes(filterByAuthor)) &&
     (!filterByHashtag || blog.text.includes(filterByHashtag)) &&
     (blog.title + blog.text + blog.writerName)
      .toLowerCase()
      .includes(filterBySearch.toLowerCase()),
   )
   .sort((a, b) =>
    filterByDate == 'newest' ? b.date - a.date : a.date - b.date,
   )
   .sort((a, b) =>
    filterByLikes == 'more' ? b.likes - a.likes : a.likes - b.likes,
   );
  blogsDiv.innerHTML = blogListFiltered.map(SmallBlog).join('');
 }
 printHashtags() {
  hashtagUL.innerHTML = hashtagGenerator(this.blogList).map(Hashtag).join('');
 }
 printAuthors() {
  authorUL.innerHTML = this.userList.map(Author).join('');
 }
 fetchUsers() {
  this.get('users')
   .then((data) => {
    const dataSet = data.map((user) => {
     return new User(user.name, user.password, user.id);
    });
    this.setUserList(dataSet);
   })
   .catch((err) => {
    console.log(err);
   });
 }
 fetchBlogs() {
  this.get('blogs')
   .then((data) => {
    return data.map((blog) => {
     return new Blog(
      blog.writerID,
      blog.writerName,
      blog.title,
      blog.text,
      blog.img,
      blog.likes,
      blog.date,
      blog.id,
      blog.likedUserIDs,
     );
    });
   })
   .then((dataSet) => {
    this.setBlogList(dataSet);
    this.printBlogs();
    this.printHashtags();
    this.printAuthors();
   })
   .catch((err) => {
    console.log(err);
   });
 }
 signUpUser() {
  const user = this.userFilter();
  if (user) {
   MyAlert.Start('welcomeAlert', 'Bu kullanıcı zaten kayıtlı', 'danger');
   this.inputReset();
  } else {
   MyAlert.Start('welcomeAlert', 'Kayıt başarılı', 'success');
   setTimeout(async () => {
    const newUser = new User(username.value, password.value);
    localStorage.setItem(
     'userLogin',
     JSON.stringify({
      id: newUser.id,
      name: newUser.name,
     }),
    );
    window.location.href = '../Views/mainPage.html';
    await this.post('users', newUser);
   }, 1900);
  }
 }

 userFilter() {
  return this.userList.find((user) => {
   return user.name == username.value;
  });
 }
 inputReset() {
  username.value = '';
  password.value = '';
 }
 loginUser(loginWay) {
  switch (loginWay) {
   case 'local':
    const localUser = JSON.parse(localStorage.getItem('userLogin'));
    MyAlert.Start('welcomeAlert', `Hoşgeldin ${localUser.name}`, 'success');
    break;
   case 'button':
    const buttonUser = this.userFilter();
    if (buttonUser && buttonUser.password == password.value) {
     MyAlert.Start('welcomeAlert', `Hoşgeldin ${username.value}`, 'success');
     localStorage.setItem(
      'userLogin',
      JSON.stringify({ id: buttonUser.id, name: buttonUser.name }),
     );
    } else {
     MyAlert.Start(
      'welcomeAlert',
      buttonUser ? 'Şifre yanlış' : `${username.value} bulunamadı`,
      'danger',
     );
     this.inputReset();
     return;
    }
  }
  setTimeout(() => {
   window.location.href = '../Views/mainPage.html';
  }, 2000);
 }
 setOnlineUser(user) {
  this.onlineUser = user;
 }
 getOnlineUser() {
  return this.onlineUser;
 }
 getBlog(id) {
  return this.blogList.find((blog) => blog.id == id);
 }
 userExit() {
  this.onlineUser = {};
  localStorage.removeItem('userLogin');
 }
}

export default App;
