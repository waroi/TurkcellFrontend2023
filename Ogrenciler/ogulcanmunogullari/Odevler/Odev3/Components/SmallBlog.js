import BigBlog from './BigBlog.js';
function SmallBlog(blog) {
 return `
    ${BigBlog(blog)}
    <li id="${
     blog.id
    }" class="blog p-2 mt-1 bg-warning rounded-2" data-bs-toggle="modal" data-bs-target="#x${
  blog.id
 }">
        <div>
            <strong>
                <em class="fw-bolder">${blog.writerName}: </em>${blog.title}
            </strong>
        </div>
        <p class="lineClamp">${blog.text}</p>
        <span>${blog.likes} Beğeni</span>
    </li>
    `;
}
export default SmallBlog;
