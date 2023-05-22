import Request from "./request.js";
import UI from "./ui.js";

const url = "http://localhost:3000/blogs";

const categorySelect = document.querySelector("#category-select");
const searchArea = document.querySelector("#search-area");
const submitEditBtn = document.querySelector("#edit-btn");
const addBtn = document.querySelector("#add-btn");
let currentBlog;

class Process {
  static addBlog(postData, form) {
    Request.post(url, postData)
      .then((response) => {
        console.log(response);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static seeFullBlog(id, blogBody, blogHeading) {
    Request.get(url)
      .then((data) => {
        const blog = data.find((item) => item.id == id);
        blogBody.textContent = blog.text;
        blogHeading.textContent = `In ${blog.title}, ${blog.author} says...`;
      })
      .catch((err) => console.log(err));
  }

  static editBlog(id, authorInp, titleInp, textInp, imgInp, catInp, form) {
    if (!addBtn.classList.contains("d-none")) {
      submitEditBtn.classList.toggle("d-none");
      addBtn.classList.toggle("d-none");
    }
    Request.get(`${url}/${id}`)
      .then((data) => {
        authorInp.value = data.author;
        titleInp.value = data.title;
        textInp.value = data.text;
        imgInp.value = data.image;
        catInp.value = data.category;
        currentBlog = data;
        submitEditBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (!UI.isEmpty()) {
            this.submitEdit(
              currentBlog,
              authorInp,
              titleInp,
              textInp,
              catInp,
              imgInp,
              form
            );
            UI.updateDisplay();
          } else alert("Please fill out the entire form.");
        });
      })
      .catch((err) => console.log(err));
  }

  static filterByCategory(selectedCategory) {
    Request.get(url).then((data) => {
      data.map((blog) => {
        const blogCard = document.querySelector(`#${blog.id}`);
        if (blogCard) {
          if (blog.category.toLowerCase() != selectedCategory.toLowerCase()) {
            blogCard.classList.add("d-none");
            console.log(blogCard);
          } else {
            blogCard.classList.remove("d-none");
          }
        }
      });
    });
  }

  static search(searchValue) {
    Request.get(url)
      .then((data) => {
        UI.addBlogsToUI(
          data.filter(
            (blog) =>
              blog.author.toLowerCase().includes(searchValue.toLowerCase()) ||
              blog.title.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      })
      .catch((err) => console.log(err));
    if (categorySelect.value != "") this.filterByCategory(categorySelect.value);
  }

  static sort(sortType) {
    Request.get(url).then((data) => {
      if (sortType == "new-old") UI.addBlogsToUI([...data].sort(compareDates));
      else if (sortType == "old-new")
        UI.addBlogsToUI([...data].sort(compareDates).reverse());
      else if (sortType == "title-a-z")
        UI.addBlogsToUI([...data].sort(compareTitles));
      else if (sortType == "title-z-a")
        UI.addBlogsToUI([...data].sort(compareTitles).reverse());
      else if (sortType == "author-a-z")
        UI.addBlogsToUI([...data].sort(compareAuthors));
      else if (sortType == "author-z-a")
        UI.addBlogsToUI([...data].sort(compareAuthors).reverse());
      else UI.addBlogsToUI([...data]);
    });

    if (categorySelect.value != "") this.filterByCategory(categorySelect.value);
  }

  static delete(id) {
    Request.delete(url, id)
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  static submitEdit(blog, authorInp, titleInp, textInp, catInp, imgInp, form) {
    submitEditBtn.classList.toggle("d-none");
    addBtn.classList.toggle("d-none");
    const editedPostData = {
      author: authorInp.value,
      title: titleInp.value,
      text: textInp.value,
      category: catInp.value,
      releaseDate: blog.releaseDate,
      releaseTime: blog.releaseTime,
      image: imgInp.value,
      isVisible: blog.isVisible,
      id: blog.id,
    };
    Request.put(url, editedPostData, blog.id)
      .then((response) => {
        console.log("Response:", response);
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function compareTitles(a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  return 0;
}

function compareAuthors(a, b) {
  if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
  if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
  return 0;
}

function compareDates(a, b) {
  if (a.releaseDate.toLowerCase() > b.releaseDate.toLowerCase()) return -1;
  else if (a.releaseDate.toLowerCase() < b.releaseDate.toLowerCase()) return 1;
  else {
    if (a.releaseTime > b.releaseTime) return -1;
    else if (a.releaseTime < b.releaseTime) return 1;
    else return 0;
  }
}

export default Process;
