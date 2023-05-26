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

  async post(product) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(product),
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

  async put(id, product) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
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
  
  async patch(id, newStok) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({stok: newStok}),
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

  async getSingleProduct(id) {
    const response = await fetch(`${this.url}/${id}`);
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async getProductTitle(productTitle) {
    const response = await fetch(`${this.url}?name=${productTitle}`);
    if(!response.ok) {
      throw new Error('Bir hatayla karşılaşıldı.');
    }
    const responseData = await response.json();
    return responseData;
  }

  async patchQuantity(id, newQuantity) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({quantity: newQuantity}),
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
  
}