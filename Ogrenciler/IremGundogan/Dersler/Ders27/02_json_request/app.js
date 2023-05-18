document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (this.status == 200) {
      const parsedData = JSON.parse(this.responseText);
      list.innerHTML = "";
      list.innerHTML = parsedData
        .map(function (e) {
          if (e.name === "Varol Maksutoğlu") {
            e.salary = e.salary * 2;
          }
          return `
          <tr>
            <td>${e.name}</td>
            <td>${e.department}</td>
            <td>${e.salary}</td>
          </tr>
        `;
        })
        .join("");
    } else {
      console.log("Bir hata oluştu.");
    }
  };
  xhr.send();
}
