function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      myUl.innerHTML = data
        .map((item) => `<li id="${item.id}">${item.address.street}</li>`)
        .join("");
    })
    .catch((err) => console.log(err));
}
getData();
//derste grup çalışması ödevi
