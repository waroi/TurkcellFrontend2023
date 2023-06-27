class Request {
  constructor(url) {
    this.url = url;
  }
  async get() {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error("bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("An error occurred.");
    }
    const responseData = await response.json();
    return responseData;
  }
  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("An error occurred.");
    }
    const responseData = await response.json();
    return responseData;
  }
  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("An error occurred.");
    }
    const responseData = await response.json();
    return responseData;
  }
}

export const userRequest = new Request("http://localhost:3004/users");
export const productRequest = new Request("http://localhost:3004/products");
export const basketRequest = new Request("http://localhost:3004/baskets");
