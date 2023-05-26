class Product {
  constructor(name, image, desc, price, category, stock) {
    this.id = `ID_${Date.now()}`;
    this.name = name;
    this.image = image;
    this.desc = desc;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }
}

export default Product;
