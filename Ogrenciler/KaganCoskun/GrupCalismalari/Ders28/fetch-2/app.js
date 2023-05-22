class Request {
    constructor(url) {
        this.url = url;
    }
    get() {
      return new Promise((resolve, reject) => {
        fetch(this.url)
          .then((response) => response.json())
          .then((data) => resolve(data))
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
          .then((data) => resolve(`Veri eklendi!! ${data.id} id numaralı veri eklendi.`))
          .catch((err) => reject(err));
      });
    }
    put(id,data) {
      return new Promise((resolve, reject) => {
        fetch(`${this.url}/${id}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json;",
          },
        })
          .then((response) => response.json())
          .then((data) => resolve(`Veri güncellendi!! ${data.id} id numaralı veri güncellendi.`))
          .catch((err) => reject(err));
      });
    }
    delete(id) {
      return new Promise((resolve, reject) => {
        fetch(`${this.url}/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => resolve(`Veri silindi!! ${id} id numaralı veri silindi.`))
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
    .post({userId: 100,title: "Yeni Başlık",body: "Yeni İçerik",})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  
  request
    .put(1, {
      userId: 100,
      title: "Yeni Başlık",
      body: "Yeni İçerik",
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  
  request
    .delete(1)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  