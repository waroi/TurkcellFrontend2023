class Fetch {
  constructor(url = "http://localhost:3535/todos") {
    this.url = url;
  }
  async post(data) {
    const response = await fetch(`${this.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
  async get() {
    const response = await fetch(`${this.url}`);
    return await response.json();
  }
  async patch(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    return await response.json();
}
}

export default Fetch;
