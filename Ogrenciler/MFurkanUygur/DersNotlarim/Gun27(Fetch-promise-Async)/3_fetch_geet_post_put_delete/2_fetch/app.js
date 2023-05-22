// function getTextFile() {
//   fetch("ornek.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getTextFile();

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getApi();

class Request {
    constructor(url) {
        this.url = url
    }
    get() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err, "Veri alınamadı."));
        });
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
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
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
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
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then(() => resolve("Veri silindi."))
                .catch((err) => reject(err));
        });
    }
}

const request = new Request();

// request
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// request
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

request
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
