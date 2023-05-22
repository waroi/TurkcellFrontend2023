class Data {
  constructor(url) {
    this.url = url;
  }
  async getPost() {
    const respons = await fetch(this.url);
    const responsData = await respons.json();

    return responsData;
  }

  async addData(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = await response.json();

    return responseData;
  }
  async deleteData(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    return "Veri Silindi";
  }
  async editData(id, object) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
      },
    });
    const responseData = await response.json();
    return responseData;
  }
}
