class Product {
 constructor(
  brand,
  logo,
  image1,
  image2,
  image3,
  title,
  subTitle,
  price,
  stock,
  id = Math.floor(Math.random() * 1_000_000_000),
 ) {
  this.brand = brand;
  this.logo = logo;
  this.image1 = image1;
  this.image2 = image2;
  this.image3 = image3;
  this.title = title;
  this.subTitle = subTitle;
  this.price = price;
  this.stock = stock;
  this.id = id;
 }
 changeStock(newStock) {
  this.stock = this.stock + newStock;
 }
}

export default Product;
