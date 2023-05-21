function addEventListeners() {
  myModal.addEventListener("show.bs.modal", function (event) {
    ui.clearForm();
    if (event.relatedTarget.id === "editButton") {
      addOrEditButton.style.display = "none";
      editButton.style.display = "block";
    } else {
      addOrEditButton.style.display = "block";
      editButton.style.display = "none";
    }
  });

  postSearch.addEventListener("keyup", filterAndSortPosts);
  postSort.addEventListener("change", filterAndSortPosts);
  categories.addEventListener("click", filterAndSortPosts);

  addOrEditButton.addEventListener("click", addPost);
  postList.addEventListener("click", deletePost);
  postList.addEventListener("click", editPost);
  postList.addEventListener("click", showPost);
  // bookSearch.addEventListener("keyup", searchBook);
  // // bookSort.addEventListener("change", sortBooks);
  // bookSearch.addEventListener("keyup", sortBooks);
  // categories.addEventListener("click", filterCategory);
}

// function before() {
//   document.getElementById("myImage").src = "https://picsum.photos/id/1/200/300";
//   document.getElementById("message").innerHTML = "Hii! GeeksforGeeks people";
// }

// function afterr() {
//   document.getElementById("myImage").src =
//     "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68";
//   document.getElementById("message").innerHTML = "Bye! GeeksforGeeks people";
// }
