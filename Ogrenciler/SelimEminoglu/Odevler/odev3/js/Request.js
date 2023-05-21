class Request {
  static get() {
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
}
