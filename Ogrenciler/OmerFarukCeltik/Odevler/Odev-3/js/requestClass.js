class Request {
  constructor(title, author, category, publicationDate, banner, score, content) {
    this.url = "http://localhost:3000/contents";
    this.id = Date.now();
    this.contentTitle = title;
    this.author = author;
    this.category = category;
    this.publicationDate = publicationDate;
    this.banner = banner;
    this.comments = 5,
    this.score = score,
    this.content = content
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
          "contentTitle": this.contentTitle,
          "author": this.author,
          "category": this.category,
          "publicationDate": this.publicationDate,
          "banner": this.banner,
          "score":this.score,
          "content":this.content
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