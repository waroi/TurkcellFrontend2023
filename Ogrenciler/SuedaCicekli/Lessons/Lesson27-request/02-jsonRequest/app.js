document.getElementById("getButton").addEventListener("click", getData);
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (this.status === 200) {
      const employees = JSON.parse(this.responseText);
      employees.forEach(function (employee) {
        list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                `;
      }
      );
    }
    else {
      console.log("Hata oluştu");
    }
  }
  xhr.send();
}
