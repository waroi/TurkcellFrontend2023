class Request {
  constructor(brand, model, type, motorcc, banner, gas, status, price,stock) {
    this.url = "http://localhost:3000/contents";
    this.basketUrl = "http://localhost:3000/basket";
    this.id = Date.now();
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.motorcc = motorcc;
    this.banner = banner;
    this.gas = gas,
    this.status = status,
    this.price = price,
    this.stock = stock
  }
  async get(id) {
    return new Promise((resolve, reject) => {
      fetch(id ? `${this.url}/${id}` : this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  async post() {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
        method: "POST",
        body: JSON.stringify({
          "id": this.id,
          "brand": this.brand,
          "model": this.model,
          "type": this.type,
          "motorcc": this.motorcc,
          "banner": this.banner,
          "gas":this.gas,
          "status":this.status,
          "price":this.price,
          "stock":this.stock
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async delete(id) {
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

export default Request;