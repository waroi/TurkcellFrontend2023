// Grup Çalışması Ekin Mete-Mücahit

const html = document.getElementById("html");

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        console.log(item);
        html.innerHTML += `
        <ul>
        <li>${item.name}</li>
        <li>${item.company.name}</li>
        </ul>`;
      });
    })
    .catch((error) => console.log(error));
}

getApi();
