
// function getTextFile(){
//   fetch("test.txt")
//   .then((res) => res.text())/* .text() json gibi text dosyasını alır*/
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// }
// getTextFile();


// function getJsonFile () {
//   fetch("users.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
// }
// getJsonFile()

// function getAPI () {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => data.map((user) => console.log(user.name)))
//   .catch((err) => console.log(err))
// }
// getAPI();


class Request {
  constructor(url){
    this.url = url;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(id,data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}
const request = new Request("https://jsonplaceholder.typicode.com/posts");
// console.log(request);

request.post({
  userId: 100,
  title:"Yeni Başlık",
  body:"Yeni içerik",
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

request.get()
.then((data) => console.log(data))
.catch((err) => console.log(err))

request.put(20, {
  userId: 20,
  title: "Yeni Başlık",
  body: "Yeni içerik",
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

request.delete(99)
.then((data) => console.log(data))
.catch((err) => console.log(err));