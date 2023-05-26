class Request {
  constructor(brand, model, type, motorcc, banner, gas, status, price,stock) {
    this.url = "http://localhost:3005/contents";
    this.basketUrl = "http://localhost:3005/basket";
    this.id = Date.now();
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.motorcc = motorcc;
    this.banner = banner;
    this.gas = gas,
    this.status = status,
    this.price = price,
    this.stock = stock,
    this.basket = 1
  }
  async get(id) {
    return new Promise((resolve, reject) => {
      fetch(id ? `${this.url}/${id}` : this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
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
  async postBasket(data) {
    return new Promise((resolve, reject) => {
      fetch(this.basketUrl, {
        method: "POST",
        body: JSON.stringify({
          "id": data.id,
          "brand": data.brand,
          "model": data.model,
          "type": data.type,
          "motorcc": data.motorcc,
          "banner": data.banner,
          "gas":data.gas,
          "status":data.status,
          "price":data.price,
          "stock":data.stock,
          "basket": 1
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
  async getBasket(id) {
    return new Promise((resolve, reject) => {
      fetch(id ? `${this.basketUrl}/${id}` : this.basketUrl)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  async putBasket(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.basketUrl}/${id}`, {
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
  async deleteBasket(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.basketUrl}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}

export default Request;