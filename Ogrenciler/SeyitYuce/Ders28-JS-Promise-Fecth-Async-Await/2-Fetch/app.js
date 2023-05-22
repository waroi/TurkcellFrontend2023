// function getData() {
//   fetch("ornek.txt")
//     .then((res) => res.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getData();

// function getJson() {
//   fetch("users.json")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getJson();

// const div = document.getElementsByClassName("div")

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) =>
//       data.forEach((user) => {
//         const div = document.getElementsByClassName("div");
//         console.log(user.name);
//       })
//     )
//     .catch((err) => console.log(err));
// }
// getApi();

class Request {
  get(url) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      });
    })
      .then((res) => res.json())
      .then((res) => res(data))
      .catch((res) => res.json());
  }
  delete(url) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      });
    });``
  }
  put(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res(data))
        .catch((res) => res.json());
    });
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

request
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    userId: 100,
    title: "Yeni title",
    body: "Yeni body",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
