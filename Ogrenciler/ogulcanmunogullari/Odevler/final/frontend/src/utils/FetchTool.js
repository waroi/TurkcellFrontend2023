class FetchTool {

 static async getUser(username) {
  const url = `http://localhost:3535/users?username=${username}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
 }

 static async getProducts() {
  const url = `http://localhost:3535/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
 }

 static async postUser(user) {
  const url = `http://localhost:3535/users`;
  const response = await fetch(url, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
 }

 static async getProduct(product) {
  const url = `http://localhost:3535/products/${product}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
 }

 static async searchProduct(query) {
  const url = `http://localhost:3535/products?title_like=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
 }

 static async changeProduct(id, product) {
  const url = `http://localhost:3535/products/${id}`;
  const response = await fetch(url, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(product)
  });
  const data = await response.json();
  return data;
 }

 static async updateProducts(products) {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  for (const product of products) {
   const url = `http://localhost:3535/products/${product.id}`;
   await fetch(url, {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
   });
   await delay(200);
  }
 }

 static async addOrChangeToCart(user) {
  const url = `http://localhost:3535/users/${user.id}`;
  const response = await fetch(url, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
 }
}

export default FetchTool;