class Request {
  static getAuthors() {
    return new Promise(function (resolve, reject) {
      fetch("http://localhost:3000/authors")
        .then((response) => response.json())
        .then((data) => {
          let dizi = [];
          data.map((item) => {
            dizi.push(item);
          });
          resolve(dizi);
        })
        .catch((error) => reject(error));
    });
  }

  static getBlogs() {
    return new Promise(function (resolve, reject) {
      fetch("http://localhost:3000/blogs")
        .then((response) => response.json())
        .then((data) => {
          let dizi = [];
          data.map((item) => {
            dizi.push(item);
          });
          resolve(dizi);
        })
        .catch((error) => reject(error));
    });
  }

  static postBlogs(url = "http://localhost:3000/blogs", newBlog) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
