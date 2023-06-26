import PropTypes from 'prop-types';
import { StyledCard, StyledCardImage } from './styled';
import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {
  return (
    <StyledCard style={{ width: '20rem', padding: '10px' }}>
    <StyledCardImage variant="top"  src={product.image} />
    <Card.Body>
      <Card.Title style={{fontSize: '16px', fontWeight: 'bold'}}>{product.title}</Card.Title>
      <div>
        <p className="text-secondary">Category: {product.category}</p>
        <p className="text-secondary">Stock: {product.rating.count}</p>
        <p>Price: {product.price}$</p>
      </div>
    </Card.Body>
  </StyledCard>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;