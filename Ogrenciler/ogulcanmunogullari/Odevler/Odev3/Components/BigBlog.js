import App from '../Models/App.js';

function BigBlog(blog) {
 const newApp = new App();
 let onlineUser = JSON.parse(localStorage.getItem('userLogin'));

 const CAN_EDIT = onlineUser.name == blog.writerName;
 window.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id == 'unlikeButton' + blog.id) {
   blog = {
    ...blog,
    likes: blog.likes - 1,
    likedUserIDs: blog.likedUserIDs.filter((id) => id != onlineUser.id),
   };
   newApp.patch('blogs', blog.id, blog);
  }
  if (e.target.id == 'likeButton' + blog.id) {
   blog = {
    ...blog,
    likes: blog.likes + 1,
    likedUserIDs: [...blog.likedUserIDs, onlineUser.id],
   };
   newApp.patch('blogs', blog.id, blog);
  }
  if (e.target.id == 'deleteButton' + blog.id) {
   newApp.delete('blogs', blog.id);
  }
  if (e.target.id == 'changedButton' + blog.id) {
   changedBlogID.innerHTML = blog.id;
   changedTitleInput.value = blog.title;
   changedTextInput.value = blog.text;
   changedImgInput.value = blog.img;
  }
 });

 return `<div class="modal fade" id="x${blog.id}"
  tabindex="-1" aria-hidden="true">
 <div class="modal-dialog modal-dialog-scrollable">
   <div class="modal-content">
     <div class="modal-header bg-dark text-light">
       <h2 class="modal-title fs-5 ">${blog.title}</h2>
       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body bg-dark text-light">
      <div class="w-100"> 
      ${blog.img == '' ? '' : `<img src="${blog.img}" class="w-100" alt="...">`}
      </div>
      <p class="mt-2"> 
${blog.text}
      </p>
     </div>
     <div class="modal-footer bg-dark text-light">
       <em class="d-flex justify-content-between w-100"> 
        ${blog.getDate()}
        <strong class="text-warning">-${blog.writerName}</strong>
       </em>
       <div id="blogButtons" class="d-flex justify-content-between w-100"> 
        ${
         blog.likedUserIDs.join(' ').includes(onlineUser.id)
          ? `<button type="button" id="unlikeButton${blog.id}" class="btn btn-danger">Beğenme ${blog.likes}</button>`
          : `<button type="button" id="likeButton${blog.id}" class="btn btn-success">Beğen ${blog.likes}</button>`
        }
        ${
         CAN_EDIT
          ? `<button id="deleteButton${blog.id}" class="btn btn-danger">Sil</button> <button type="button" class="btn btn-warning"  data-bs-target="#changedModal"
          id="changedButton${blog.id}"
          data-bs-toggle="modal">Değiştir</button>`
          : ''
        }
       </div>
     </div>
   </div>
 </div>
</div>
`;
}
export default BigBlog;
