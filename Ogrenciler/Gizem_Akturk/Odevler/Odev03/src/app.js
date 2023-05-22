import { Blog } from "./blog.js";
import { blogForm, blogList,
  blogTitle,
  blogContent,
  blogAuthor,
  blogDate,
  blogImgUrl,
  blogCategory,
  updateBlogForm,
  newBlogTitle,
  newBlogContent,
  newBlogAuthor,
  newBlogDate,
  newBlogImgUrl,
  newBlogCategory,
  modal
 } from "./selectors.js";

const blog = new Blog();

// Dom content loaded
document.addEventListener("DOMContentLoaded", domContentLoaded);

// Event Listeners
blogForm.addEventListener("submit", submitBlogForm);
updateBlogForm.addEventListener("submit", submitUpdateBlogForm);


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

function submitUpdateBlogForm(e) {
  const blogId = updateBlogForm.getAttribute("data-blog-id");
  console.log(blogId);
  const blog = new Blog(
    blogId,
    newBlogTitle.value,
    newBlogAuthor.value,
    newBlogCategory.value,
    newBlogDate.value,
    newBlogImgUrl.value,
    newBlogContent.value
  );

  blog.updateBlog();
  e.preventDefault();

  // Close modal
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();

}
