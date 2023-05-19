class Request {
  static async get(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Veri alımında bir hata oluştu");

    const result = await response.json();
    return result;
  }

  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    return result;
  }

  static async put(url, data, id = "") {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    return result;
  }

  static async delete(url, id) {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    return result;
  }
}

export default Request;
