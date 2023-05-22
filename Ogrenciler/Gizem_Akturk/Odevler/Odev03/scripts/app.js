import { Blog } from "./blog.js";
import { elements } from "./selectors.js";

const blog = new Blog();

// Dom content loaded
document.addEventListener("DOMContentLoaded", domContentLoaded);

// Event Listeners
elements.blogForm.addEventListener("submit", submitBlogForm);
elements.updateBlogForm.addEventListener("submit", submitUpdateBlogForm);
elements.categoryFilter.addEventListener("change", filterBlogs);
elements.searchFilter.addEventListener("keyup", filterBlogs);
elements.authorFilter.addEventListener("change", filterBlogs);
elements.resetButton.addEventListener("click", resetFilters);
elements.sort.addEventListener("change", filterBlogs);

// Functions
async function domContentLoaded() {
  elements.blogList.innerHTML = blog.getAllBlogs() || "";
  elements.welcomeBlog.innerHTML = blog.getWelcomeBlog() || "";
  const topRated = await blog.getTopRatedBlogs();
  elements.topRatedBlogs.innerHTML = topRated || "";

  await fetchCategoryOptions();
  await fetchAuthorOptions();
}

// filter blogs
function filterBlogs() {
  elements.blogList.innerHTML = "";
  const category = elements.categoryFilter.value;
  const author = elements.authorFilter.value;
  const search = elements.searchFilter.value;
  const sortBy = elements.sort.value;

  const filteredBlogs = blog.filterBlogs(category, author, search, sortBy);

  elements.blogList.innerHTML = filteredBlogs || "";

}

// reset filters
function resetFilters() {
  elements.blogList.innerHTML = "";
  elements.categoryFilter.value = "all";
  elements.authorFilter.value = "all";
  elements.searchFilter.value = "";
  elements.sort.value = "-";
  elements.blogList.innerHTML = blog.getAllBlogs() || "";
}

// Fetch options for filter
async function fetchOptions(options, targetElement) {
  targetElement.innerHTML = "<option value='all'>All</option>";
  const optionsData = await options();
  optionsData.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    targetElement.appendChild(optionElement);
  });
}

// Fetch options for author filter
async function fetchAuthorOptions() {
  await fetchOptions(blog.getAllAuthors, elements.authorFilter);
}

// Fetch options for category filter
async function fetchCategoryOptions() {
  await fetchOptions(blog.getAllCategories, elements.categoryFilter);
}


async function submitBlogForm(e) {
  const blog = new Blog(
    Date.now(),
    elements.blogTitle.value,
    elements.blogAuthor.value,
    elements.blogCategory.value,
    elements.blogDate.value,
    elements.blogImgUrl.value,
    elements.blogContent.value
  );

  blog.addBlog();
  e.preventDefault();

  // fetch options for filters
  await fetchCategoryOptions();
  await fetchAuthorOptions();


  // Close modal
  hideModal(elements.newModal);

}

function hideModal(modal) {
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

async function submitUpdateBlogForm(e) {
  const blogId = elements.updateBlogForm.getAttribute("data-blog-id");
  const blog = new Blog(
    blogId,
    elements.newBlogTitle.value,
    elements.newBlogAuthor.value,
    elements.newBlogCategory.value,
    elements.newBlogDate.value,
    elements.newBlogImgUrl.value,
    elements.newBlogContent.value
  );

  blog.updateBlog();
  e.preventDefault();

  // fetch options for filters
  await fetchCategoryOptions();
  await fetchAuthorOptions();

  // Close modal
  hideModal(elements.modal);

}
