let tbody = document.querySelector("tbody");

let button = document
  .querySelector("button")
  .addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "user.json", true);
    xhr.onload = function () {
      if (this.status === 200) {
        const parseData = JSON.parse(this.responseText);
        parseData.forEach(function (employee) {
          tbody.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>    
            </tr>
            `;
        });
      } else {
        console.log("HATA")
      }
    };
    xhr.send();
  });
