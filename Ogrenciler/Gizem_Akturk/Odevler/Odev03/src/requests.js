class Request {
  constructor() {
    this.url = "https://6467ce79e99f0ba0a81867a1.mockapi.io/api/v1/blogs";
  }

  async getAll() {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }
  
  async get(id) {
    const response = await fetch(`${this.url}/${id}`);
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }
  
  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }
  
  async put(data) {
    const response = await fetch(`${this.url}/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("Hata oluştu");
    }
    return await response.json();
  }
}


export default Request;