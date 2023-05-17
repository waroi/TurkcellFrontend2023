document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("posts");
    if (this.status === 200) {
      const parsedData = JSON.parse(this.responseText);
      parsedData.forEach(
        (post) =>
          (list.innerHTML += `
      <tr>
      <td>${post.title}</td>
      <td>${post.body}</td>
      </tr>`)
      );
    } else console.log("Bir hata oluştu");
  };

  xhr.send();
}
