class Json {
  static getProducts() {
    return new Promise(function (resolve, reject) {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((data) => {
          let dizi = [];
          data.map((item) => {
            dizi.push(item);
          });
          resolve(dizi);
        })
        .catch((err) => reject(err));
    });
  }

  static getBaskets() {
    return new Promise(function (resolve, reject) {
      fetch("http://localhost:3000/basket")
        .then((response) => response.json())
        .then((data) => {
          let dizi = [];
          data.map((item) => {
            dizi.push(item);
          });
          resolve(dizi);
        })
        .catch((err) => reject(err));
    });
  }

  static deleteProducts(urlİd) {
    return new Promise((resolve, reject) => {
      fetch(urlİd, { method: "DELETE" })
        .then(() => resolve("Blog Silindi"))
        .catch((err) => reject(err));
    });
  }

  static postProducts(url, data) {
    let postObje = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    };

    return new Promise((resolve, reject) => {
      fetch(url, postObje)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static putProducts(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
