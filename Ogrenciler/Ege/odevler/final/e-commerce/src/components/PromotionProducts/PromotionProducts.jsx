import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../ProductList/ProductCard/ProductCard"
import StyledTitle from "../../styledComponents/StyledTitle"

const PromotionProducts = ({ products }) => {

    const promotionTexts = ["Free Necklace", "Free Necklace", "Free Necklace", "Free Necklace", "Free Necklace", "Free Necklace", "Free Necklace", "Free Necklace"]

    return (
        <div className="container">
            <StyledTitle>
                <h4>Hard To Choose Right Products For Yourself ?</h4>
                <div className="d-flex justify-content-between">
                    <h3>Our Products</h3>
                    <button>View More -</button>
                </div>
            </StyledTitle>
            <div className="row">
                {
                    [...products].slice(9, 17).map((product, i) => (
                        <Link key={product.id} className="toPageLink col-lg-3" to={`/products/${product.id}`}>
                            <ProductCard product={product} promotionText={promotionTexts[i]} />

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
PromotionProducts.propTypes = {
    products: PropTypes.array.isRequired
}
export default PromotionProducts