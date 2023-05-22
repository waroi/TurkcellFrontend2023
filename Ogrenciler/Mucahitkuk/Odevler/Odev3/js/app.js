import { Request } from "./request.js";
import { Validation } from "./validation.js";

const userImg = document.getElementById("user-image");
const userText = document.getElementById("user-text");
const addPostBtn = document.getElementById("add-post-button");
const postList = document.getElementById("post-card-list");
const postTitle = document.getElementById("post-title");
const postAuthor = document.getElementById("post-author");
const postWrittenDate = document.getElementById("post-written-date");
const postCategory = document.getElementById("post-category");
const postCoverUrl = document.getElementById("post-cover-url");
const postContent = document.getElementById("post-content");
const clearBtn = document.getElementById("clear-button");
const loadingIcon = document.getElementById("loading");
const editButton = document.getElementById("edit-button");
const btnReset = document.getElementById("modal-post-button");
const searchInput = document.querySelector("#search-input");
const filterSelect = document.getElementById("filter-select");

let currentId;

class Ui {
  uiUser() {
    request.get("profile").then((data) => {
      const lastItem = data.pop();
      userText.innerText = lastItem.name;
      userImg.src = lastItem.profileImg;
    });
  }
  uiCreatePostCard(e) {
    e.preventDefault();
    const title = postTitle.value;
    const author = postAuthor.value;
    const writtenDate = postWrittenDate.value;
    const category = postCategory.value;
    const coverUrl = postCoverUrl.value;
    const content = postContent.value;
    if (!validation.httpcheck(coverUrl)) {
      postCoverUrl.value = "Please enter a valid url";
      return;
    }
    ui.uiclearInputs();
    loadingIcon.classList.add("d-block");
    loadingIcon.classList.remove("d-none");
    const newData = {
      id: parseInt(Math.random() * 1000),
      title: title,
      author: author,
      writtenDate: writtenDate.split("-").reverse().join("-"),
      category: category,
      coverUrl: coverUrl,
      content: content,
    };
    setTimeout(() => {
      request
        .post("posts/", newData)
        .then((data) => {
          console.log(data, "Data added successfully");
        })
        .catch((err) => console.log(err));
    }, 1500);
  }
  uiclearInputs() {
    postTitle.value = "";
    postAuthor.value = "";
    postWrittenDate.value = "";
    postCategory.value = "";
    postCoverUrl.value = "";
    postContent.value = "";
  }
  async uiRenderPostCard(data) {
    const searchQuery = document
      .getElementById("search-input")
      .value.toLowerCase();
    const selectQuery = document.getElementById("category-select");
    const selectedCategory = document.getElementById("category-select").value;
    let newData = [];
    if (data && data.length > 0) {
      newData = data;
    } else {
      try {
        newData = await request.get("posts");
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
        return;
      }
    }

    postList.innerHTML = "";
    newData.forEach((post) => {
      const { id, title, author, writtenDate, coverUrl, content, category } =
        post;

      const isMatch = `${title} ${author}`.toLowerCase().includes(searchQuery);

      const existingCategories = Array.from(selectQuery.options).map(
        (option) => option.value
      );

      if (!existingCategories.includes(category)) {
        const selectOptions = document.createElement("option");
        selectOptions.value = category;
        selectOptions.textContent = category;
        selectQuery.appendChild(selectOptions);
      }

      if (
        (selectedCategory === "" || category === selectedCategory) &&
        isMatch
      ) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", id);
        card.style.width = "22rem";

        const img = document.createElement("img");
        img.src = coverUrl;
        img.classList.add("card-img-top");
        img.alt = "Post Cover";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "fw-bold");
        cardTitle.textContent = title;

        const cardCategory = document.createElement("p");
        cardCategory.classList.add("card-category");
        cardCategory.textContent = category;

        const cardAuthor = document.createElement("p");
        cardAuthor.classList.add("card-author");
        cardAuthor.textContent = author;

        const cardContent = document.createElement("p");
        cardContent.classList.add("card-content");
        cardContent.textContent =
          content.length > 100 ? content.slice(0, 100) + "..." : content;

        const cardContentFull = document.createElement("p");
        cardContentFull.classList.add("card-content-full", "d-none");
        cardContentFull.textContent = content;

        const cardWrittenDate = document.createElement("p");
        cardWrittenDate.classList.add("card-written-date");
        cardWrittenDate.textContent = `Written Date: ${writtenDate}`;

        const cardText = document.createElement("div");
        cardText.classList.add("card-text");

        cardText.appendChild(cardAuthor);
        cardText.appendChild(cardWrittenDate);
        cardText.appendChild(cardCategory);
        cardText.appendChild(cardContent);
        cardText.appendChild(cardContentFull);

        const viewMoreButton = document.createElement("a");
        viewMoreButton.href = "#";
        viewMoreButton.classList.add("btn", "btn-warning");
        viewMoreButton.textContent = "View More";
        cardBody.appendChild(cardTitle);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
        cardBody.appendChild(viewMoreButton);

        postList.appendChild(card);
        selectQuery.addEventListener("change", ui.uiRenderPostCard);
        viewMoreButton.addEventListener("click", () => {
          const modal = document.createElement("div");
          modal.classList.add("modal", "fade");
          modal.tabIndex = "-1";
          modal.role = "dialog";
          modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header p-0">
            <img src="${coverUrl}" alt="Post Cover" style="max-width: 100%; height: auto;">
              </button>
            </div>
            <div class="modal-body">
            <h5 class="modal-title text-center">${title}</h5>
              <p class="mt-3"><strong>Author:</strong> ${author}</p>
              <p><strong>Written Date:</strong> ${writtenDate}</p>
              <p><strong>Category:</strong> ${category}</p>
              <p>${content}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="delete-button" type="button" class="btn btn-danger">Delete</button>
              <butto data-bs-dismiss="modal" aria-label="Close" id="edit-btn" type="button" class="btn btn-warning">Edit</butto>
              <div id="loading2" class="spinner-border d-none" role="status">
              </div>
            </div>
          </div>
        </div>
      `;
          document.body.appendChild(modal);

          const loadingSpinner = modal.querySelector("#loading2");
          const deleteBtn = modal.querySelector("#delete-button");
          deleteBtn.addEventListener("click", (e) => {
            loadingSpinner.classList.remove("d-none");
            loadingSpinner.classList.add("d-block", "text-danger");
            ui.uiDeletePostCard(card, modal);
          });
          const editBtn = modal.querySelector("#edit-btn");
          editBtn.addEventListener("click", () => ui.uiShowEditPostModal(card));
          $(modal).modal("show");
          $(modal).on("hidden.bs.modal", () => {
            document.body.removeChild(modal);
          });
        });
      }
    });
  }

  uiDeletePostCard(cardElement) {
    const card = cardElement.closest(".card");
    const id = card.getAttribute("data-id");
    console.log(id);
    request
      .delete("posts", id)
      .then((data) => {
        console.log(data, "Data deleted successfully");
        card.remove();
        modal.remove();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }
  uiShowEditPostModal(cardElement) {
    const card = cardElement.closest(".card");
    const id = card.getAttribute("data-id");
    const titleElement = card.querySelector(".card-title");
    const title = titleElement.textContent;
    const authorElement = card.querySelector(".card-author");
    const author = authorElement.textContent;
    const categoryElement = card.querySelector(".card-category");
    const category = categoryElement.textContent;
    const writtenDateElement = card.querySelector(".card-written-date");
    const writtenDate = writtenDateElement.textContent;
    const coverUrlElement = card.querySelector(".card-img-top");
    const coverUrl = coverUrlElement.src;
    const contentElement = card.querySelector(".card-content-full");
    const content = contentElement.textContent;

    addPostLabel.textContent = "Edit Post";

    currentId = id;

    postTitle.value = title;
    postAuthor.value = author;
    postWrittenDate.value = writtenDate;
    postCoverUrl.value = coverUrl;
    postContent.value = content;
    postCategory.value = category;

    editButton.classList.remove("d-none");
    editButton.style.display = "flex";
    addPostBtn.classList.add("d-none");

    const addPost = new bootstrap.Modal(document.getElementById("addPost"));
    addPost.show();
  }
  uiSaveChanges() {
    const updatedTitle = postTitle.value;
    const updatedAuthor = postAuthor.value;
    const updatedCategory = postCategory.value;
    const updatedWrittenDate = postWrittenDate.value;
    const updatedCoverUrl = postCoverUrl.value;
    const updatedContent = postContent.value;

    const id = currentId;
    console.log(id);

    const updatedData = {
      title: updatedTitle,
      author: updatedAuthor,
      writtenDate: updatedWrittenDate.split("-").reverse().join("-"),
      coverUrl: updatedCoverUrl,
      content: updatedContent,
      category: updatedCategory,
    };

    request
      .put(`posts`, id, updatedData)
      .then((data) => {
        console.log(data, "Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }
  uiFilter() {
    const sortBy = filterSelect.value;
    request.get("posts").then((data) => {
      data.sort((a, b) => {
        if (sortBy === "1") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "2") {
          return b.title.localeCompare(a.title);
        } else if (sortBy === "3") {
          formatDate(a.writtenDate) - formatDate(b.writtenDate);
        } else if (sortBy === "4") {
          return formatDate(b.writtenDate) - formatDate(a.writtenDate);
        }
      });
      ui.uiRenderPostCard(data);
    });
  }
}

function formatDate(date) {
  const dateString = date;
  const parts = dateString.split("-");
  const day = parseInt(parts[2], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[0], 10);

  const dateObject = new Date(day, month, year);
  return dateObject;
}

const baseUrl = "http://localhost:3000";
const request = new Request(baseUrl);
const validation = new Validation(postCoverUrl);
const ui = new Ui();

filterSelect.addEventListener("change", ui.uiFilter);
searchInput.addEventListener("input", ui.uiRenderPostCard);
editButton.addEventListener("click", ui.uiSaveChanges);
btnReset.addEventListener("click", function () {
  addPostBtn.classList.remove("d-none");
  editButton.classList.add("d-none");
  addPostLabel.textContent = "Add Post";
});
window.addEventListener("load", ui.uiUser);
addPostBtn.addEventListener("click", ui.uiCreatePostCard);
clearBtn.addEventListener("click", ui.uiclearInputs);
window.addEventListener("load", ui.uiRenderPostCard);
