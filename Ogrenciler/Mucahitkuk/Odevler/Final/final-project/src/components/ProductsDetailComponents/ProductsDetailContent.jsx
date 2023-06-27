import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:3000/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }, [productId]);

  console.log(product);

  if (!productId) {
    return <div>Invalid product ID</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (  
    <Container>
      <div className='d-flex row'>
        <div className='col-md-6'></div>
        <div className='col-md-6'></div>
      </div>
    </Container>
  );
};

export default ProductDetail;