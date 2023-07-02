import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardImage, Card, CardTitle, CardInfo, CardRate, CardPrice, Button, Input} from "./cardstyled";

// import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FilterSort from '../filter/filter';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setFilteredProducts(response.data);
      setSortedProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (category) => {
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
      setSortedProducts(filtered);
    }
  };

  const handleSort = (sortOption) => {
    let sorted;

    switch (sortOption) {
      case 'price-asc':
        sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        sorted = [...filteredProducts].sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        sorted = filteredProducts;
        break;
    }

    setSortedProducts(sorted);
  };

  const handleAddToCart = (productId) => {
    const product = sortedProducts.find((item) => item.id === productId);
    if (product) {
      setCartItems([...cartItems, product]);
      console.log('Ürün sepete eklendi:', product);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchText)
    );
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  return (
    <div className="container">
      <div className="col-12 mb-4 d-flex">
        <FilterSort handleFilter={handleFilter} handleSort={handleSort} />
        <Input
          type="text"
          placeholder="Search by product name"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <div className="row">
        {sortedProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Card className="card">
              <CardImage src={product.image} alt="Product" className="card-img-top" />
              <div className="card-body">
                <CardTitle className="card-title">{product.title}</CardTitle>
                <CardInfo className="card-text">Category: {product.category}</CardInfo>
                <CardRate className="card-text">Rate: {product.rating.rate} / Stock: {product.rating.count}</CardRate>
                <CardPrice className="card-text">Price: ${product.price}</CardPrice>
                <Link to={`/details/${product.id}`}>
                  <Button>See More</Button>
                </Link>
                <Button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;