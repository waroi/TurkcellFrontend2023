document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (this.status === 200) {
      const parsedData = JSON.parse(this.responseText);
      parsedData.forEach(function (emp) {
        list.innerHTML += `
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>${emp.salary}</td>
                    <td>${emp.age}</td>
                </tr>
                `;
      });
    } else {
      console.log("Hata");
    }
  };
  xhr.send();
}
