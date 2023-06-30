import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../ProductList/ProductCard/ProductCard"
import StyledHomeProducts from "./StyledHomeProducts"
import StyledTitle from "../../styledComponents/StyledTitle"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import caretRight from "../../assets/Caret_Right_Dark.svg"

const HomeProducts = ({ products }) => {
    return (
        <StyledHomeProducts className="container">
            <StyledTitle>
                <div className="d-flex justify-content-between">
                    <div>
                        <h4>Whats new ?</h4>
                        <h3>Take A Look At Some Of Our Products</h3>
                    </div>
                    <ButtonOutline className="d-none d-lg-block">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>
                </div>
            </StyledTitle>
            <div className="row">
                {
                    [...products].slice(0, 8).map(product => (
                        <Link key={product.id} className="toPageLink col-6 col-lg-3" to={`/products/${product.id}`}>
                            <ProductCard product={product} />

                        </Link>
                    ))
                }
            </div>
            <ButtonOutline className="d-lg-none w-100">View More <img src={caretRight} alt="caretRights" /></ButtonOutline>

        </StyledHomeProducts>
    )
}

HomeProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default HomeProducts