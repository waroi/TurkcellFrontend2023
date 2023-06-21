import Fetch from "./classes/fetch.js";
import newCard from "./components/card.js";
import Blog from "./classes/blog.js";
import newOption from "./components/option.js";

const cardRow = document.getElementById("cardRow");
const blogDetail = document.getElementById("blogDetail");
const blogName = document.getElementById("blogName");
const catCategory = document.getElementById("catCategory");
const blogDate = document.getElementById("blogDate");
const blogClock = document.getElementById("blogClock");
const blogAuthor = document.getElementById("blogAuthor");
const blogTextContent = document.getElementById("blogTextContent");
const imgUrl = document.getElementById("imgUrl");
const form = document.querySelector("form");
const addButton = document.getElementById("addButton");
const editButton = document.getElementById("editButton");
const sort = document.getElementById("sort");
const search = document.getElementById("search");
const category = document.getElementById("category");

// Event listeners
addButton.addEventListener("click", addNewBlog);
sort.addEventListener("change", sortAndFilterBlogs);
search.addEventListener("input", searchBlogAndFilter);
category.addEventListener("change", filterBlogs);
document.addEventListener("DOMContentLoaded", function () {
  localStorage.setItem("filteredData", JSON.stringify([]));
});

const blogsData = await Fetch.get("http://localhost:3000/blogs").then((data) =>
  data.map((item) => item)
);

function sortSwitch(searchData) {
  switch (sort.value) {
    case "asc-title":
      searchData.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      break;
    case "desc-title":
      searchData.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
      break;
    case "asc-author":
      searchData.sort((a, b) =>
        a.author.toLowerCase().localeCompare(b.author.toLowerCase())
      );
      break;
    case "desc-author":
      searchData.sort((a, b) =>
        b.author.toLowerCase().localeCompare(a.author.toLowerCase())
      );
      break;
    case "asc-date":
      searchData.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
      break;
    case "desc-date":
      searchData.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
      break;
  }
}
// bütün kartların oldgu cardrowda tıklama eventini dinledik eğer tıklanan şey silme butonuysa onu kapsayan kartın idsini alıp delete bloga gönderdik.
cardRow.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    const selected = e.target.closest(".content_box");
    console.log(selected);
    deleteBlog(selected.id);
    selected.remove();
    // updateCards()
  } else if (e.target.classList.contains("edit-btn")) {
    const selected = e.target.closest(".content_box");
    editBlog(selected.id);
  }
});

updateCards();
uniques();
// cardrow içini boşaltık gelen dizinin tüm elemanlarıyla yeni bir kart oluşturduk  yeni diziyi dönerek
function showBlog(blogs) {
  cardRow.innerHTML = "";
  cardRow.innerHTML += blogs.map((blog) => newCard(blog)).join("");
}
// veritabanındaki verilere istek atarak alıp gelen diziyi show bloga gönderdik
function updateCards() {
  Fetch.get("http://localhost:3000/blogs").then((data) => showBlog(data));
}
// veritabanına gönderme isteği atarak dışardan aldığımız newdatayı veritabanına ekledik daha sonra .then kullanarak istek tamamlanınca formu resetledik
// Add a new blog to the server and reset the form
function addNewBlog(e) {
  e.preventDefault();
  const newData = new Blog(
    blogAuthor.value,
    blogName.value,
    blogTextContent.value,
    catCategory.value,
    imgUrl.value,
    blogDate.value,
    blogClock.value,
    blogDetail.value
  );

  addBlog(newData);
}

// Add a new blog to the server
function addBlog(newData) {
  Fetch.post("http://localhost:3000/blogs", newData).then(() => {
    form.reset();
    updateCards();
    uniques();
    (sort.value = "default"), (search.value = ""), (category.value = "");
    localStorage.setItem("filteredData", JSON.stringify([]));
  });
}

let current;

function deleteBlog(id) {
  Fetch.delete("http://localhost:3000/blogs", id).then((data) => {
    updateCards();
    uniques();
    (sort.value = "default"), (search.value = ""), (category.value = "");
    localStorage.setItem("filteredData", JSON.stringify([]));
  });
}

function editBlog(id) {
  Fetch.get(`http://localhost:3000/blogs/${id}`).then((data) => {
    blogAuthor.value = data.author;
    blogName.value = data.title;
    blogTextContent.value = data.text;
    catCategory.value = data.category;
    blogDate.value = data.releaseDate;
    blogClock.value = data.releaseTime;
    blogDetail.value = data.detail;
    imgUrl.value = data.img;
    current = data;
    editButton.addEventListener("click", (e) => {
      e.preventDefault();
      const newData = {
        author: blogAuthor.value,
        title: blogName.value,
        text: blogTextContent.value,
        category: catCategory.value,
        releaseDate: blogDate.value,
        releaseTime: blogClock.value,
        detail: blogDetail.value,
        img: imgUrl.value,
        id: current.id,
      };
      Fetch.put("http://localhost:3000/blogs", newData, current.id)
        .then(form.reset())
        .then(updateCards());
      (sort.value = "default"), (search.value = ""), (category.value = "");
    });
  });
}

// Sort and filter blogs based on the selected options
async function sortAndFilterBlogs() {
  const storeFilterData = localStorage.getItem("filteredData")
    ? JSON.parse(localStorage.getItem("filteredData"))
    : [];
  const sortType = sort.value.toLowerCase();

  const filteredBlogs = await Fetch.get("http://localhost:3000/blogs").then(
    (data) => data.map((item) => item)
  );

  await console.log(filteredBlogs);

  if (storeFilterData.length === 0) {
    sortSwitch(filteredBlogs);

    showBlog(filteredBlogs);
  } else if (storeFilterData.length > 0) {
    sortSwitch(storeFilterData);

    showBlog(storeFilterData);
  }
}

// Search blogs and filter based on selected category

async function searchBlogAndFilter() {
  const searchValue = search.value.toLowerCase();
  const selectedCategory = category.value.toLowerCase();

  const storeFilterData = localStorage.getItem("filteredData")
    ? JSON.parse(localStorage.getItem("filteredData"))
    : [];
  let searchData;
  if (storeFilterData.length === 0) {
    searchData = blogsData.filter(
      (blog) =>
        blog.author.toLowerCase().includes(searchValue) ||
        blog.title.toLowerCase().includes(searchValue)
    );
    if (sort.value !== "default") {
      sortSwitch(searchData);
    }
  } else {
    searchData = storeFilterData.filter(
      (blog) =>
        blog.author.toLowerCase().includes(searchValue) ||
        blog.title.toLowerCase().includes(searchValue)
    );
    if (sort.value !== "default") {
      sortSwitch(searchData);
    }
  }

  showBlog(searchData);
}

// Fetch unique categories and update the category filter dropdown
function uniques() {
  Fetch.get("http://localhost:3000/blogs").then((blogs) => {
    const categories = new Set(
      blogs.map((blog) => blog.category.toLowerCase())
    );
    category.innerHTML = "";
    category.innerHTML += `<option value="">Hepsi</option>`;
    category.innerHTML += Array.from(categories)
      .map((item) => newOption(item))
      .join("");
  });
}

// Filter blogs based on selected category
async function filterBlogs() {
  search.value === "";

  const selectedCategory = category.value.toLowerCase();
  let blogsData = [];
  await Fetch.get("http://localhost:3000/blogs").then((blogs) =>
    blogs.map((data) => blogsData.push(data))
  );
  console.log(blogsData);
  if (selectedCategory === "" && sort.value !== "default") {
    sortSwitch(blogsData);
    showBlog(blogsData);
  } else {
    await blogsData.map((blog) => {
      const current = document.querySelector(`#${blog.id}`);
      console.log(current);

      console.log(!!selectedCategory);
      if (current) {
        if (blog.category.toLowerCase() !== selectedCategory) {
          current.classList.add("d-none");
        } else {
          current.classList.remove("d-none");
        }

        selectedCategory === "" && showBlog(blogsData);
      }
    });
  }

  const filteredData = blogsData.filter(
    (item) => item.category.toLowerCase() == selectedCategory
  );
  localStorage.setItem("filteredData", JSON.stringify(filteredData));
}
