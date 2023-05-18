function getApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(
      (data) =>
        (myUL.innerHTML = data
          .map(
            (item) => `<li id="${item.id}">
    ${item.name}</li>`
          )
          .join(""))
    )
    .catch((err) => console.log(err));
}

getApi();
