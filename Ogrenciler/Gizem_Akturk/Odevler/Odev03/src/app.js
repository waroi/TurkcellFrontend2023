import { Blog } from "./blog.js";
import { blogForm, deleteBlog, updateBlog } from "./selectors.js";

const blog = new Blog();

// Dom content loaded
document.addEventListener("DOMContentLoaded", domContentLoaded);

// Event Listeners
blogForm.addEventListener("submit", submitBlogForm);
deleteBlog.addEventListener("click", deleteBlogEvent);
updateBlog.addEventListener("click", updateBlogEvent);

// Functions
function domContentLoaded() {
  blogList.innerHTML = blog.getAllBlogs() || "";
}

function submitBlogForm(e) {
  const blog = new Blog(
    Date.now(),
    blogTitle.value,
    blogAuthor.value,
    blogCategory.value,
    blogDate.value,
    blogImgUrl.value,
    blogContent.value
  );

  blog.addBlog();
  e.preventDefault();
}

function deleteBlogEvent(e) {
  if (e.target.id === "delete-blog") {
    const blogId = e.target.parentElement.parentElement.id;
    const blog = new Blog(blogId);
    blog.deleteBlog();
    e.preventDefault();
  }
}

function updateBlogEvent(e) {
  if (e.target.id === "update-blog") {
    const blogId = e.target.parentElement.parentElement.id;
    const newblog = new Blog(
      blogId,
      newBlogTitle.value,
      newBlogAuthor.value,
      newBlogCategory.value,
      newBlogDate.value,
      newBlogImgUrl.value,
      newBlogContent.value
    );
    newblog.updateBlog();
    e.preventDefault();
  }
}
