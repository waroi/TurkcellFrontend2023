const list = document.querySelector("#list");

function addNewElement() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.map((user) => {
        list.innerHTML += `
        <tbody>
        <tr>
        <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
        </tr>
        </tbody>`;
      });
    })
    .catch((err) => console.log(err));
}

addNewElement();
