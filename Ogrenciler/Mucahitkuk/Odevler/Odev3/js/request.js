export class Request {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(resource) {
    const url = `${this.baseUrl}/${resource}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return response.json();
  }

  async post(resource, data) {
    const url = `${this.baseUrl}/${resource}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to create data at ${url}`);
    }
    return response.json();
  }

  async put(resource, id, data) {
    const url = `${this.baseUrl}/${resource}/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to update data at ${url}`);
    }
    return response.json();
  }

  async delete(resource, id) {
    const url = `${this.baseUrl}/${resource}/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete data at ${url}`);
    }
    return response.json();
  }
}
