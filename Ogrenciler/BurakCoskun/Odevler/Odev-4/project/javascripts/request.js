class Request {
  constructor(url) {
    this.url = url;
  }
  async get() {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error("Veriler Alınamadı ", response.status);
    }
    const data = await response.json();
    return data;
  }
  async post(post) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (!response.ok) {
      throw new Error("Veriler Alınamadı ", response.status);
    }
    const data = await response.json();
    return data;
  }
  async put(id, post) {
    const response = await fetch(this.url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (!response.ok) {
      throw new Error("Veriler Alınamadı ", response.status);
    }
    const data = await response.json();
    return data;
  }
  async delete(id) {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Veriler Alınamadı ", response.status);
    }
    const data = await response.json();
    return data;
  }
}
