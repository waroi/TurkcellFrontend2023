import PropTypes from 'prop-types';
import StyledProductCard from './StyledProductCard';
import giftBox from "../../../assets/Gift_Box.svg"
import star from "../../../assets/Star.svg"
const ProductCard = ({ product, promotionText }) => {
    return (

        <StyledProductCard>
            <img src={product.image} alt={product.description} />
            <h3 className="title">{product.title}</h3>
            <div className="info d-flex flex-column flex-lg-row">
                <span >Category: <strong>{product.category}</strong></span>
                <span className='mx-3 d-none d-lg-inline'>•</span>
                <span className='d-flex align-items-center'>Rating: <strong>{product.rating.rate}</strong> <img className='star' src={star} alt="star" /></span>
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