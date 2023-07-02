import StyledTitle from "../../../styledComponents/StyledTitle"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../../ProductList/ProductCard/ProductCard"
const RandomProducts = ({ randomProducts }) => {
    return (
        <div>
            <StyledTitle>
                <div className="d-flex justify-content-between">
                    <div>
                        <h4>Whats new ?</h4>
                        <h3>Take A Look At Some Of Our Products</h3>
                    </div>
                </div>
            </StyledTitle>
            <div className="row">
                {
                    [...randomProducts].slice(0, 8).map(product => (
                        <Link key={product.id} className="toPageLink col-6 col-lg-3" to={`/products/${product.id}`}>
                            <ProductCard product={product} />

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

RandomProducts.propTypes = {
    randomProducts: PropTypes.array.isRequired

}

export default RandomProducts