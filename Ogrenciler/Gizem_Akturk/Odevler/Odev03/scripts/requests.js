const BASE_URL = "http://localhost:3000/blogs";

class Request {
  constructor() {
    this.url = BASE_URL;
  }

  async fetchAndHandleResponse(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }

  async getAll() {
    return await this.fetchAndHandleResponse(this.url);
  }

  async get(id) {
    return await this.fetchAndHandleResponse(`${this.url}/${id}`);
  }

  async post(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    };
    return await this.fetchAndHandleResponse(this.url, options);
  }

  async put(data) {
    const options = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    };
    return await this.fetchAndHandleResponse(`${this.url}/${data.id}`, options);
  }

  async delete(id) {
    const options = {
      method: "DELETE"
    };
    return await this.fetchAndHandleResponse(`${this.url}/${id}`, options);
  }
}

export default Request;
