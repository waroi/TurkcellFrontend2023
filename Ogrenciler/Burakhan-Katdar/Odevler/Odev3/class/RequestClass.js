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
  async post(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    return responseData;
  }
  put(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve("PUT " + data))
        .catch((err) => reject(err));
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(this.url + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}

export default Request;

// request
// .put(5, {
//   userId: 100,
//   title: "Yeni Başlık",
//   body: "Yeni İçerik",
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// request
//   .post({
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
// .delete(1)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// request
//   .get()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
