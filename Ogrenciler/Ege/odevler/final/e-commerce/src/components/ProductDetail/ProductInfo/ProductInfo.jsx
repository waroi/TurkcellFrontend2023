import PropTypes from "prop-types"
import StyledProductInfo from "./StyledProductInfo"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../../styledComponents/ButtonOutline"
import Guarantees from "../Guarantees/Guarantees"
import StyledTextShare from "../../../styledComponents/StyledTextShare"
import shareAndroid from "../../../assets/Share_Android.svg"
import { useState } from "react"
import Share from "../Share/Share"
import UpdateProduct from "../UpdateProduct/UpdateProduct"
const ProductInfo = ({ product, handleCartClick, isAdmin, setProduct }) => {

    const [isShareOn, setIsShareOn] = useState(false)

    const handleShare = () => {
        setIsShareOn(!isShareOn)
    }

    return (
        <StyledProductInfo className="my-5">
            <p>Breadcrumbs</p>
            <p>ID: {product.id}</p>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <ButtonPrimary onClick={handleCartClick}>Add To Cart</ButtonPrimary>
                <ButtonOutline> - Chat with Monito</ButtonOutline>
                {(isAdmin && product) && <UpdateProduct product={product} setProduct={setProduct} />}

            </div>

            <div className="infoPre d-lg-none d-flex justify-content-between align-items-center">
                <h4>Information</h4>
                <div className="d-flex">
                    <StyledTextShare onClick={handleShare}>
                        <img src={shareAndroid} alt="share" />
                        Share
                    </StyledTextShare>
                </div>
            </div>
            {
                isShareOn && <div className="d-flex justify-content-center my-5"><Share /></div>
            }
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
    handleCartClick: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    setProduct: PropTypes.func.isRequired
}

export default ProductInfo