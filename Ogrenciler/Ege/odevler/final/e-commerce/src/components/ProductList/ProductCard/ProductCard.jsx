import PropTypes from 'prop-types';
import StyledProductCard from './StyledProductCard';
import giftBox from "../../../assets/Gift_Box.svg"
const ProductCard = ({ product, promotionText }) => {
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
            {
                promotionText && (
                    <div className='promotionWrap'>
                        <img src={giftBox} alt="giftIcon" />
                        <span className='promotion'> • {promotionText}</span>
                    </div>
                )
            }
        </ StyledProductCard>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    promotionText: PropTypes.string
}

export default ProductCard