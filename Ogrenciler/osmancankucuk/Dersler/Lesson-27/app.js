let button = document.querySelector("#button");
// let div = document.querySelector(".resultDiv");
let tBody = document.querySelector("#tableBody");

button.addEventListener("click", function () {
  let xml = new XMLHttpRequest();

  xml.open("GET", "text.json", true);
  // xml.onreadystatechange = function () {

  // };

  xml.onload = function () {
    if (this.status == 200) {
      let parseDate = JSON.parse(this.responseText);
      console.log(tBody);

      parseDate.forEach((data) => {
        tBody.innerHTML += `
        <tr>
        <td>${data.name} </td>
        <td>${data.department}</td>
        <td>${data.salary} </td>
        </tr>
        `;
      });
    }
  };

  xml.send();
});
