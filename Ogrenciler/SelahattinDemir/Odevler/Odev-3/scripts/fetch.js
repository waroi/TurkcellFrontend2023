class Fetch {
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
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }

  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await "Müzik Silindi.";
    return resData;
  }
}

export default Fetch;
