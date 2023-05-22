class Request {
    constructor(url) {
      this.url = url;
    }
    async get() {
      const response = await fetch(this.url);
      const responseData = await response.json();
  
      return responseData;
    }
    async post(data) {
      const response = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const responseData = await response.json();
      return responseData;
    }
    async put(id, data) {
      const response = await fetch(this.url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const responseData = await response.json();
      return responseData;
    }
    delete(id) {
        return new Promise((resolve, reject) => {
          fetch(`${this.url}/${id}`, {
            method: "DELETE",
          })
            .then((response) => resolve("Veri Silme Başarılı", response))
            .catch((err) => reject(err));
        });
      }
  }
  

  