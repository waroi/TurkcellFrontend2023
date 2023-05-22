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

  static postBlogsAndAuthors(url, dataset) {
    let postObje = {
      method: "POST",
      body: JSON.stringify(dataset),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    return new Promise((resolve, reject) => {
      fetch(url, postObje)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static deleteBlogsAndAuthors(urlİd) {
    return new Promise((resolve, reject) => {
      fetch(urlİd, { method: "DELETE" })
        .then((response) => resolve("Blog Silindi"))
        .catch((err) => reject(err));
    });
  }
}
