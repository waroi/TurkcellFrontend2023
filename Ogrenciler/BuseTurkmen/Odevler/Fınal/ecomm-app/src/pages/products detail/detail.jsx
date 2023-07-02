import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardImage, Card, CardTitle, CardInfo, CardRate, CardPrice, Button} from "../../components/products/cardstyled";
import Nav from '../../components/navbar/nav';
import ProductDetail from '../../components/detail/details';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data.slice(0, 8)); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (productId) => {
    console.log(`Sepete eklenecek ürün ID'si: ${productId}`);
  };

  const { productId } = useParams();

  return (
    <div className="container">
      <Nav />
      <ProductDetail productId={productId} />
      <div className="row">
        {products.map((product) => (
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

export default DetailPage;
