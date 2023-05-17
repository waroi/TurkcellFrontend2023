document.getElementById("getData").addEventListener("click", getData);

function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      const employees = document.getElementById("employees");
      users.map((user) => {
        employees.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.department}</td>
          <td>${user.salary}</td>
          ${user.salary > 6000 ? `<td>Zengin</td>` : ""}
        </tr>
        `;
      });
    }
  };
  xhr.send();
}
