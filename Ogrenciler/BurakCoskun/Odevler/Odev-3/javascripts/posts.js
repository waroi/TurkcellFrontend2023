class Post {
  addPost(e) {
    e.preventDefault();
    let date = new Date();
    const title = titleInput.value;
    const content = contentInput.value;
    const author = authorInput.value;
    const category = categoryInput.value;
    const image = imageInput.value;
    if (
      title == "" ||
      content == "" ||
      author == "" ||
      category == "" ||
      image == ""
    ) {
      return ui.showAlert("danger", "Please fill in all fields");
    }
    const newPost = {
      title,
      content,
      author,
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} - ${date.getHours()}:${
        date.getMinutes().toString().length == 1
          ? "0" + date.getMinutes()
          : date.getMinutes()
      }:${
        date.getSeconds().toString().length == 1
          ? "0" + date.getSeconds()
          : date.getSeconds()
      }`,
      category,
      image,
    };
    request
      .post(newPost)
      .then((data) => {
        ui.showAlert("success", "Post added successfully");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  deletePost(id) {
    request
      .delete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  editPost(id) {
    ui.fillInputs(id);
    updateBtn.classList.remove("d-none");
    updateBtn.classList.add("d-inline-block");
    createBtn.classList.add("d-none");
    createBtn.classList.remove("d-inline-block");
    updateBtn.setAttribute("data-id", id);
  }
}
