class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Veri alımında bir hata oluştu");

    const data = await response.json();
    return data;
  }

  async post(url, data) {
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
}

export default Request;
