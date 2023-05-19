class Request {
  constructor(url) {
    this.url = url;
  }
  
  async get() {
    const response = await fetch(this.url);
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = response.json();
    return responseData;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = response.json();
    return responseData;
  }

  async put(id, data) {
    const response = await fetch(this.url + '/' + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    if(!response.ok) {
      throw new Error('Güncelleme İşlemi Gerçekleştirilemedi.');
    }
    const responseData = response.json();
    return responseData;
  }
  
  async delete(id) {
    const response = fetch(this.url + '/' + id, {
      method: 'DELETE'
    });
    if(!response.ok) {
      throw new Error('Silme İşlemi Gerçekleştirilemedi.');
    }
    const responsData = 'Blog Silindi.';
    return responsData;
  }
}