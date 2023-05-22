class Blog {
 constructor(
  writerID,
  writerName,
  title,
  text,
  img,
  likes = 0,
  date = new Date().getTime(),
  id = Math.floor(Math.random() * 1_000_000_000),
  likedUserIDs = [],
 ) {
  this.id = id;
  this.writerID = writerID;
  this.writerName = writerName;
  this.title = title;
  this.text = text;
  this.img = img;
  this.date = date;
  this.likes = likes;
  this.likedUserIDs = likedUserIDs;
 }
 getDate() {
  const string = new Date(this.date).toLocaleDateString();
  const time = new Date(this.date).toLocaleTimeString();
  return `${string} ${time}`;
 }
 changeBlog(title, text, img) {
  this.title = title;
  this.text = text;
  this.img = img;
  this.date = new Date().getTime();
  this.likes = 0;
  this.likedUserIDs = [];
 }
}

export default Blog;
