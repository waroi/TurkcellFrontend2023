import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        // 16px padding verilecek ya da 1 rem
        <div>
            <img src={product.image} alt={product.description} />
            <h3 className="title">{product.title}</h3>
            <div className="info">
                <span>Category: <strong>{product.category}</strong></span>
                <span>.</span>
                <span>Rating: <strong>{product.rating.rate}</strong></span>
            </div>
            <div className="price">
                <h3>{product.price} $</h3>
            </div>
        </div >
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard