const request = new Request("http://localhost:3000/posts");
const ui = new UI();
addEventListeners();
getAllPosts();

const categoryItems = document.querySelectorAll(".actived");

function showToast(msg) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveShow);
  toastBody.textContent = msg;
  toastBootstrap.show();
  toastBootstrap.timeout = 500;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function getAllPosts() {
  request

    .get()
    .then((posts) => {
      ui.addAllPostsToUI(posts);
    })
    .catch((err) => console.log(err));
}

const addOptionButton = document.getElementById("addOptionButton");
const newOptionInput = document.getElementById("newOptionInput");

function populateOptions() {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      const posts = data.posts;

      const types = new Set(posts.map((post) => post.type));

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.text = "no option selected";
      defaultOption.disabled = false;
      postType.appendChild(defaultOption);

      types.forEach((type) => {
        const existingOption = Array.from(postType.options).find(
          (option) => option.value === type
        );

        if (!existingOption) {
          const option = document.createElement("option");
          option.value = type;
          option.text = type;
          postType.appendChild(option);

          const button = document.createElement("button");

          button.id = type.toLowerCase();
          button.type = "button";
          button.textContent = type;

          button.innerText = type;

          button.addEventListener("click", () => {
            filterAndSortPosts;
          });

          button.className =
            "actived btn col-md-3 col-5 text-center mt-2 me-2 p-1 text-white";

          categoryFilter.appendChild(button);
        }
      });
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", populateOptions);

postType.addEventListener("change", function (e) {
  const selectedOption = e.target.value;
  const optionExists = Array.from(postType.options).some(
    (option) => option.value === selectedOption
  );

  if (!optionExists) {
    const newOption = document.createElement("option");
    newOption.value = selectedOption;
    newOption.text = selectedOption;
    postType.add(newOption);
  }
});

postType.addEventListener("change", function (e) {
  if (postType.value !== "") {
    newOptionInput.disabled = true;
  }

  if (postType.value.trim() === "") {
    postType.disabled = true;
    newOptionInput.disabled = false;
  }
});
newOptionInput.addEventListener("input", function (e) {
  if (newOptionInput.value) {
    newOptionInput.disabled = false;
    postType.disabled = true;
  } else if (newOptionInput.value === "" && postType.value.trim() === "") {
    postType.disabled = false;
  }
});
newOptionInput.addEventListener("input", function (e) {
  newOptionInput.disabled = Boolean(!newOptionInput.value);
  postType.disabled = !newOptionInput.disabled;
});

function showPost(e) {
  if (e.target.className === "btn showButton") {
    const id = e.target.closest(".card-group").id;
    request
      .get()
      .then((posts) => {
        posts.forEach(function (post) {
          if (post.id == id) {
            postShowUrl.src = post.url;
            const lines = post.description.split("\n");
            const formattedContent = lines.join("<br>");

            postShowName.textContent = post.title;
            postShowDescription.innerHTML = formattedContent;
            postShowAuthor.textContent = post.author;
            postShowType.textContent = post.type;

            postShowDate.textContent = post.date.slice(0, 24);
            postTitle.textContent = post.name;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }
}

let selectedCategory = "all";

function filterAndSortPosts(e) {
  const categoryItemss = document.querySelectorAll("button.actived");
  const option = postSort.value;
  const filterValue = postSearch.value.toLowerCase();
  const clickedButton = e.target;

  categoryItemss.forEach((item) => {
    item.classList.add(item.innerText.toLowerCase());
    if (item.contains(clickedButton)) {
      if (item.classList.contains(item.innerText.toLowerCase())) {
        selectedCategory = item.innerText.toLowerCase();
        categoryItemss.forEach((button) => {
          button.classList.remove("bg-warning");
        });

        clickedButton.classList.add("bg-warning");

        clickedButton.classList.add("text-white");

        return selectedCategory;
      } else {
        return (selectedCategory = "all");
      }
    }
  });

  request.get().then((posts) => {
    const filteredPosts = posts.filter((post) => {
      const postName = post.title.toLowerCase();
      const postAuthor = post.author.toLowerCase();
      const postCategory = post.type.toLowerCase();

      const isMatchingCategory =
        selectedCategory.includes("all") ||
        selectedCategory.includes(postCategory);
      const isMatchingSearch =
        postName.includes(filterValue) || postAuthor.includes(filterValue);

      return isMatchingCategory && isMatchingSearch;
    });

    const sortedPosts = filteredPosts.sort((a, b) => {
      if (option === "asc-author") {
        return a.author.localeCompare(b.author);
      } else if (option === "desc-author") {
        return b.author.localeCompare(a.author);
      } else if (option === "old-new") {
        return new Date(a.date) - new Date(b.date);
      } else if (option === "new-old") {
        return new Date(b.date) - new Date(a.date);
      } else if (option === "asc-title") {
        return a.title.localeCompare(b.title);
      } else if (option === "desc-title") {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    });

    postList.innerHTML = "";
    sortedPosts.forEach((post) => {
      ui.addPostUI(post);
    });
  });
}
