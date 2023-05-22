//silme ekleme güncelleme işlemleri

function addPost(e) {
  const title = postTitle.value.trim();
  const description = postDescription.value.trim();
  const url = postUrl.value.trim();
  const date = Date();
  const author = postAuthor.value.trim();

  const optionValue = newOptionInput.value.trim().toLowerCase();
  const optionText = newOptionInput.value.trim();
  const selectedOption = postType.value.trim();

  let type = "";

  if (selectedOption !== "") {
    type = selectedOption;
  } else if (optionValue !== "" && optionText !== "") {
    const existingOption = Array.from(postType.options).find(
      (option) => option.value === optionValue
    );
    console.log(optionValue, existingOption);

    if (existingOption) {
      return showToast("This option already exists");
    } else {
      const option = document.createElement("option");
      option.value = optionValue;
      option.text = optionText;
      postType.appendChild(option);
      type = option.text;
    }
  }

  if (
    title === "" ||
    description === "" ||
    url === "" ||
    author === "" ||
    type === ""
  ) {
    return showToast("Please fill in all fields");
  }
  if (!isValidUrl(postUrl.value.trim())) {
    return showToast("url is not valid");
  }
  const newpost = {
    title,
    description,
    url,
    type,
    date,
    author,
  };

  request
    .post(newpost)
    .then((post) => {
      ui.addpostToUI(post);
    })
    .catch((err) => console.log(err));

  ui.clearForm();
}

const categoryItemsss = document.querySelectorAll(".actived");

function deletePost(e) {
  if (e.target.className === "btn deleteButton") {
    const id = e.target.closest(".card-group").id;

    request
      .delete(id)
      .then((message) => {})

      .catch((err) => console.log(err));
  }
}

function editPost(e) {
  if (e.target.className === "btn editBtn") {
    const id = e.target.closest(".card-group").id;
    let time = Date();

    request
      .get()
      .then((posts) => {
        posts.forEach(function (post) {
          if (post.id == id) {
            postUrl.value = post.url;
            postDescription.value = post.description;
            postAuthor.value = post.author;
            newOptionInput.value = post.type;
            postTitle.value = post.title;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    postForm.addEventListener("submit", function (e) {
      if (
        postUrl.value.trim() === "" ||
        postDescription.value.trim() === "" ||
        postAuthor.value.trim() === "" ||
        (postType.value.trim() === "" && newOptionInput.value.trim() === "") ||
        postTitle.value.trim() === ""
      ) {
        return showToast("Please fill in all fields");
      }
      if (!isValidUrl(postUrl.value.trim())) {
        return showToast("url is not valid");
      }
      if (postType.value === "" && newOptionInput.value === "") {
        return showToast("Please fill in all fields");
      }

      if (postType.value !== "" && newOptionInput.value == "") {
        newOptionInput.value = postType.value;
      }

      if (postType.value !== "" && newOptionInput.value !== "") {
        newOptionInput.value = postType.value;
      }

      request
        .put(id, {
          title: postTitle.value,
          author: postAuthor.value,
          url: postUrl.value,
          type: newOptionInput.value,
          description: postDescription.value,
          date: time,
        })

        .then((post) => {
          console.log(post);
        })
        .catch((err) => console.log(err));
    });
  }
}
