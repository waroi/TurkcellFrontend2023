import PropTypes from "prop-types"
import StyledProductInfo from "./StyledProductInfo"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../../styledComponents/ButtonOutline"
import Guarantees from "../Guarantees/Guarantees"
const ProductInfo = ({ product, handleCartClick }) => {
    return (
        <StyledProductInfo className="my-5">
            <p>Breadcrumbs</p>
            <p>ID: {product.id}</p>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <div className="d-flex justify-content-center align-items-center gap-3 my-p">
                <ButtonPrimary onClick={handleCartClick}>Add To Cart</ButtonPrimary>
                <ButtonOutline> - Chat with Monito</ButtonOutline>
            </div>

            <div className="infoContainer">
                <div className="row infoWrap">
                    <div className="col-6 infoBox">
                        <p>Category</p>
                    </div>
                    <div className="col-6 infoBox">
                        <p>: {product.category}</p>
                    </div>
                </div>
                <div className="row infoWrap">
                    <div className="col-6 infoBox">
                        <p>Rating</p>
                    </div>
                    <div className="col-6 infoBox">
                        <p>: {product.rating?.rate} / 5</p>
                    </div>
                </div>
                <div className="row infoWrap">
                    <div className="col-6 infoBox">
                        <p>Stock</p>
                    </div>
                    <div className="col-6 infoBox">
                        <p>: {product.rating?.count}</p>
                    </div>
                </div>
                <div className="row infoWrap">
                    <div className="col-6 infoBox">
                        <p>Description</p>
                    </div>
                    <div className="col-6 infoBox">
                        <p>: {product.description}</p>
                    </div>
                </div>
            </div>
            <div className="d-lg-none">
                <Guarantees />
            </div>


        </StyledProductInfo>
    )
}

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
    handleCartClick: PropTypes.func.isRequired
}

export default ProductInfo