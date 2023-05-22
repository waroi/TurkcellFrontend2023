class UI {
  addAllPostsToUI(posts) {
    posts.forEach((post) => ui.addPostUI(post));
  }

  addPostUI(post) {
    const postCol = document.createElement("div");
    postCol.id = post.id;
    postCol.className = "col-lg-3 col-sm-6 card-group";

    const postCard = document.createElement("div");
    postCard.className = "card shadow  text-white mb-3 main-card";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex justify-content-evenly mt-3";
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn deleteButton";
    deleteButton.textContent = "❌";
    deleteButton.id = "deleteButton";

    const showButton = document.createElement("button");
    showButton.className = "btn showButton";
    showButton.textContent = "🧾";
    showButton.id = "showButton";

    const editButton = document.createElement("button");
    editButton.className = "btn editBtn";
    editButton.id = "editButton";

    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#myModal");

    editButton.textContent = "✏️";
    showButton.setAttribute("data-bs-toggle", "modal");
    showButton.setAttribute("data-bs-target", "#showModal");

    const postImg = document.createElement("img");
    postImg.className = "card-img-top img-fluid  h-50 mt-3";
    postImg.setAttribute("src", post.url);
    postImg.setAttribute("alt", post.name);

    const postBody = document.createElement("div");
    postBody.className =
      "card-body  text-start rounded rounded-2 border-dark fs-6 bg-transparent";
    post.date = post.date.slice(0, 24);

    var description = `${post.description}`;
    var words = description.split(" ");
    var firstTenWords = words.slice(0, 10);

    var truncatedDescription = firstTenWords.join(" ");

    const cardBodyItems = `
        <h5 class="card-titles">  ${post.title}  </h5>
        <h5 class="card-author">  ${post.author}</h5>
        <p class="card-text">${truncatedDescription} ... > </p>
        <h5 class="card-type">${post.type} </h5>
        <h5 class="card-title">${post.date} </h5>
      `;

    postBody.innerHTML = cardBodyItems;

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(showButton);

    postCard.appendChild(buttonContainer);
    postCard.appendChild(postImg);
    postCard.appendChild(postBody);

    postCol.appendChild(postCard);
    postList.appendChild(postCol);
  }

  alertMessage(message) {
    alert(message);
    e.preventDefault();
  }
  deletepostFromUI(e) {
    e.remove();
  }
  clearForm(e) {
    postUrl.value = "";
    postType.value = "";
    postAuthor.value = "";
    postTitle.value = "";
    postDescription.value = "";
  }
}
