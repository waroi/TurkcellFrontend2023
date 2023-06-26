import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import ProductCard from "../ProductList/ProductCard/ProductCard"
import StyledHomeProducts from "./StyledHomeProducts"
import StyledTitle from "../../styledComponents/StyledTitle"
const HomeProducts = ({ products }) => {
    return (
        <StyledHomeProducts className="container">
            <StyledTitle>
                <h4>What's new ?</h4>
                <div className="d-flex justify-content-between">
                    <h3>Take A Look At Some Of Our Products</h3>
                    <button>View More -</button>
                </div>
            </StyledTitle>
            <div className="row">
                {
                    [...products].slice(0, 8).map(product => (
                        <Link key={product.id} className="toPageLink col-lg-3" to={`/products/${product.id}`}>
                            <ProductCard product={product} />

                        </Link>
                    ))
                }
            </div>
        </StyledHomeProducts>
    )
}

HomeProducts.propTypes = {
    products: PropTypes.array.isRequired
}


export default HomeProducts