document.getElementById("btn").addEventListener("click", getData);

function getData() {
  const xhr = new XMLHttpRequest();
  let tbody = document.getElementById("employees");

  xhr.onload = function () {
    if (this.status === 200) {
      const list = JSON.parse(this.responseText);
      console.log(list);
      list.forEach((e) => {
        tbody.innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.department}</td>
            <td>${e.salary}</td>
        </tr>
        
        `;
      });
    }
  };

  xhr.open("GET", "person.json", true);
  xhr.send();
}
