// Grup Çalışması Ekin Mete-Mücahit

// const html = document.getElementById("html");

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       data.map((item) => {
//         console.log(item);
//         html.innerHTML += `
//         <ul>
//         <li>${item.name}</li>
//         <li>${item.company.name}</li>
//         </ul>`;
//       });
//     })
//     .catch((error) => console.log(error));
// }

// getApi();

// class Request {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err, "Veri alınamadı."));
//     });
//   }
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json;",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json;",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((response) => response.json())
//         .then(() => resolve("Veri silindi."))
//         .catch((err) => reject(err));
//     });
//   }
// }

// const request = new Request();

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

class Request {
  constructor(url) {
    this.url = url;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data), console.log("veri alındı"))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
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
  put(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url + data, {
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
  delete(data) {
    return new Promise((resolve, reject) => {
      fetch(this.url + data, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request("https://jsonplaceholder.typicode.com/posts");
request
  .get()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
request
  .post({
    userId: 100,
    title: "Yeni Başlık",
    body: "Yeni İçerik",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
request
  .put("/2", {
    userId: 100,
    title: "Yeni Başlık",
    body: "Yeni İçerik",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
request
  .delete("/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
