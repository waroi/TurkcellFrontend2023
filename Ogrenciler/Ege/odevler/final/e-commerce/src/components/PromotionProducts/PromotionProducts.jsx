import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../ProductList/ProductCard/ProductCard"
import StyledTitle from "../../styledComponents/StyledTitle"
import StyledPromotionProducts from "./StyledPromotionProducts"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import caretRight from "../../assets/Caret_Right_Dark.svg"
import { useSelector } from "react-redux"
const PromotionProducts = ({ products }) => {

    const user = useSelector(state => state.user.user)
    const promotionTexts = ["Free Toy & Free Shaker", "Free Toy & Free Shaker", "Free Cat Food", "Free Cat Food", "Free Toy & Free Shaker", "Free Toy & Free Shaker", "Free Cat Food", "Free Food & Shaker"]

    return (
        <StyledPromotionProducts className="container">
            <StyledTitle>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4>Hard To Choose Right Products For Yourself ?</h4>
                        <h3>Our Products</h3>
                    </div>
                    <Link to={user ? "/products" : "/login"}>
                        <ButtonOutline>View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
                    </Link>
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
        </StyledPromotionProducts>
    )
}
PromotionProducts.propTypes = {
    products: PropTypes.array.isRequired
}
export default PromotionProducts