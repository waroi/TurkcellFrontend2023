import CartItem from './Cart.js';
import Product from './Product.js';
import Fetch from './Fetch.js';
class Store extends Fetch {
 constructor(products = [], cart = []) {
  super('http://localhost:3535');
  this.products = products;
  this.cart = cart;
  this.filterBrand = '';
  this.filterSort = '';
  this.filterTitle = '';
 }
 getFilterProducts() {
  return [...this.products]
   .filter((p) => !this.filterBrand || p.brand === this.filterBrand)
   .filter(
    (p) =>
     !this.filterTitle ||
     p.title.toLowerCase().includes(this.filterTitle.toLowerCase()),
   )
   .sort((a, b) =>
    this.filterSort === 'A-Z'
     ? a.title.localeCompare(b.title)
     : this.filterSort === 'Z-A'
     ? b.title.localeCompare(a.title)
     : this.filterSort === 'CHEAP'
     ? a.price - b.price
     : b.price - a.price,
   );
 }
 async getProducts() {
  const allProducts = await this.getAllProducts();
  this.products = allProducts.map((product) => {
   return new Product(
    product.brand,
    product.logo,
    product.image1,
    product.image2,
    product.image3,
    product.title,
    product.subTitle,
    product.price,
    product.stock,
    product.id,
   );
  });
  return this.products;
 }
 async getCart() {
  const allcart = await this.getAllCart();
  this.cart = allcart.map((cart) => {
   return new CartItem(cart.id, cart.quantity);
  });
  return this.cart;
 }
 async addProduct(product) {
  await this.addSProduct(product);
  this.products.push(product);
 }
 async changeProduct(newProduct) {
  await this.updateSProduct(newProduct.id, newProduct);
 }

 async deleteProduct(id) {
  await this.removeFromStore(id);
  await this.removeFromCart(id);
 }

 async removeFromStore(id) {
  await this.deleteSProduct(id);
  this.products = this.products.filter((product) => product.id != id);
 }
 async removeFromCart(id) {
  await this.deleteSCart(id);
  this.cart = this.cart.filter((cart) => cart.id != id);
 }

 findProductInStore(id) {
  return this.products.find((product) => product.id == id);
 }
 findProductInCart(id) {
  return this.cart.find((cart) => cart.id == id);
 }
 async addCart(id) {
  const product = this.findProductInStore(id);
  let productInCart = this.findProductInCart(id);
  if (product.stock > 0) {
   product.changeStock(-1);
   if (productInCart) {
    productInCart.quantity += 1;
    await this.updateSCart(productInCart.id, productInCart);
   } else {
    let item = await this.addSCart(new CartItem(product.id, 1));
    this.cart.push(item);
    productInCart = item;
   }
  }
  await this.updateSProduct(id, product);
  return { product: product, cartBadge: this.cart };
 }
 async removeCart(id) {
  //Bu check olmadan da olur ancak birden fazla updateSCart yazmamak için koydum.
  let check = true;
  const product = this.findProductInCart(id);
  const productInStore = this.findProductInStore(id);
  if (product && product.quantity > 1) {
   product.changeQuantity(-1);
  } else {
   this.removeFromCart(product.id);
   check = false;
  }
  if (productInStore) {
   productInStore.changeStock(1);
  } else {
   this.products.push(
    new Product(
     product.brand,
     product.logo,
     product.image1,
     product.image2,
     product.image3,
     product.title,
     product.subTitle,
     product.price,
     1,
     product.id,
    ),
   );
  }
  await this.updateSProduct(id, productInStore);
  if (check) await this.updateSCart(id, product);
 }
}

export default Store;
