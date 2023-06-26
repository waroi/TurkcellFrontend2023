import PropTypes from 'prop-types';
import StyledProductCard from './StyledProductCard';
const ProductCard = ({ product }) => {
    return (

        <StyledProductCard>
            <img src={product.image} alt={product.description} />
            <h3 className="title">{product.title}</h3>
            <div className="info">
                <span>Category: <strong>{product.category}</strong></span>
                <span className='mx-3'>•</span>
                <span>Rating: <strong>{product.rating.rate}</strong></span>
            </div>
            <div className="price">
                <h3>{product.price} $</h3>
            </div>
        </ StyledProductCard>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard