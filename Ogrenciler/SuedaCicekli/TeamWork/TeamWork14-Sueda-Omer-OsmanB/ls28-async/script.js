
const list = document.querySelector("#employees");

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => table(data))
    .catch(err => console.log(err));
}
getApi();

function table(item) {
  item.forEach(function (item) {
    list.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
            </tr>
            `;
  }
  );
}