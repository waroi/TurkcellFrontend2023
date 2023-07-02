class Request {

  async getRequest(url) {
    try {
      const response = await fetch(url); //url'e istek atıyoruz
      const responseData = await response.json(); // gelen response'u json formatına çeviriyoruz
      return responseData;
    } catch (error) {
      console.log(error);
    }
  }

  async postRequest(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const responseData = await response.json(); //oluşan data bize tekrar gelecek
    return responseData;
  }

  async deleteRequest(url) {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const responseData = await response.json(); //oluşan data bize tekrar gelecek
    return responseData;
  }

  async putRequest(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const responseData = await response.json(); //oluşan data bize tekrar gelecek
    return responseData;
  }

}

export default new Request();