const nameList = document.getElementById("nameList");
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((val) => {
        //   nameList.innerHTML += `
        //  <li>${val.name}</li>
        //  `;

        let listItem = document.createElement("li");
        listItem.textContent = val.name;
        nameList.appendChild(listItem);
      })
    )
    .catch((err) => {
      console.log(err);
    });
}

getData();
