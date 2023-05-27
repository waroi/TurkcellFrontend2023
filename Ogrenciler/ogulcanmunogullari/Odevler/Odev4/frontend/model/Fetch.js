class Fetch {
 constructor(url) {
  this.url = url;
 }
 async getAllProducts() {
  const response = await fetch(this.url + '/products');
  const data = await response.json();
  return data;
 }
 async getSProduct(id) {
  const response = await fetch(this.url + '/products/' + id);
  const data = await response.json();
  return data;
 }
 async addSProduct(product) {
  const response = await fetch(this.url + '/products', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
 }
 async deleteSProduct(id) {
  const response = await fetch(this.url + '/products/' + id, {
   method: 'DELETE',
  });
  const data = await response.json();
  return data;
 }
 async updateSProduct(id, product) {
  const response = await fetch(this.url + '/products/' + id, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
 }
 async getAllCart() {
  const response = await fetch(this.url + '/cart');
  const data = await response.json();
  return data;
 }
 async addSCart(product) {
  const response = await fetch(this.url + '/cart', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
 }
 async deleteSCart(id) {
  const response = await fetch(this.url + '/cart/' + id, {
   method: 'DELETE',
  });
  const data = await response.json();
  return data;
 }
 async deleteAllSCart() {
  const response = await fetch(this.url + '/cart', {
   method: 'GET',
  });
  const cartData = await response.json();
  for (const product of cartData) {
   await fetch(`${this.url}/cart/${product.id}`, {
    method: 'DELETE',
   });
  }
 }
 async updateSCart(id, product) {
  const response = await fetch(this.url + '/cart/' + id, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
 }
}
export default Fetch;
