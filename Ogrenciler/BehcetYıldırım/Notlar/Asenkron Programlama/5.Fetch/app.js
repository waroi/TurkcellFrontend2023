// function getTextFile() {
//   fetch("ornek.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();

// function getJSONFile() {
//   fetch("ornek.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJSONFile();

//-------------------------------------------------------
class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => {
//     albums = data;
//     console.log(albums);
//   })
//   .catch((err) => console.log(err));

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "sait behcet",
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
