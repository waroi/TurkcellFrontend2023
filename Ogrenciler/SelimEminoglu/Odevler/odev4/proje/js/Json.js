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
}
