import PropTypes from "prop-types"
import StyledProductInfo from "./StyledProductInfo"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../../styledComponents/ButtonOutline"
const ProductInfo = ({ product, handleCartClick }) => {
    return (
        <StyledProductInfo>

            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <ButtonPrimary onClick={handleCartClick}>Add To Cart</ButtonPrimary>
                <ButtonOutline> - Chat with Monito</ButtonOutline>
            </div>

            <div className="row infoWrap">
                <div className="col-6 infoBox">
                    <h4>Category</h4>
                </div>
                <div className="col-6 infoBox">
                    <h4>{product.category}</h4>
                </div>
            </div>
            <div className="row infoWrap">
                <div className="col-6 infoBox">
                    <h4>Rating</h4>
                </div>
                <div className="col-6 infoBox">
                    <h4>{product.rating?.rate} / 5</h4>
                </div>
            </div>
            <div className="row infoWrap">
                <div className="col-6 infoBox">
                    <h4>Stock</h4>
                </div>
                <div className="col-6 infoBox">
                    <h4>{product.rating?.count}</h4>
                </div>
            </div>
            <div className="row infoWrap">
                <div className="col-6 infoBox">
                    <h4>Description</h4>
                </div>
                <div className="col-6 infoBox">
                    <h4>{product.description}</h4>
                </div>
            </div>



        </StyledProductInfo>
    )
}

ProductInfo.propTypes = {
    product: PropTypes.object.isRequired,
    handleCartClick: PropTypes.func.isRequired
}

export default ProductInfo