class Crud {
  constructor(url) {
    this.url = url;
  }
  
  async get() {
    const response = await fetch(this.url);
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async put(id, data) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async delete(id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    });
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async getSingleBlog(id) {
    const response = await fetch(`${this.url}/${id}`);
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async getBlogsForCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await fetch(this.url);
          const veriler = await response.json();
          resolve(veriler);
        } catch (error) {
          reject(error);
        }
      }, 100);
    });
  }
}