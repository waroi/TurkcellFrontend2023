document.getElementById("getButton").addEventListener("click", getData);
function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (this.status === 200) {
      const employees = JSON.parse(this.responseText);
      employees.forEach(function (post) {
        list.innerHTML += `
                <tr>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
              
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
