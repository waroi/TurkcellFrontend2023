import PropTypes from "prop-types"
import StyledProductInfo from "./StyledProductInfo"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../../styledComponents/ButtonOutline"
import Guarantees from "../Guarantees/Guarantees"
import StyledTextShare from "../../../styledComponents/StyledTextShare"
import shareAndroid from "../../../assets/Share_Android.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import Share from "../Share/Share"
import UpdateProduct from "../UpdateProduct/UpdateProduct"
import Breadcrumbs from "../../../styledComponents/Breadcrumbs"
import chatDots from "../../../assets/Chat_Dots.png"
import star from "../../../assets/Star.svg"

const ProductInfo = ({ product, handleCartClick, isAdmin, setProduct, toast }) => {

    const [isShareOn, setIsShareOn] = useState(false)


    const handleShare = () => {
        setIsShareOn(!isShareOn)
    }

    return (
        <StyledProductInfo className="my-5">
            <Breadcrumbs className="d-flex gap-2">
                <Link to={"/"}>Home</Link>/
                <Link to={"/products"}>Products</Link>/
                <span>{product.title}</span>
            </Breadcrumbs>
            <h4 className="productId">ID: {product.id}</h4>
            <h2 className="productTitle">{product.title}</h2>
            <h3 className="productPrice">{product.price}$</h3>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                <ButtonPrimary disabled={product.rating?.count <= 0} onClick={handleCartClick} className={`fw-bold ${product.rating?.count <= 0 ? "disabled" : ""}`}>Add To Cart</ButtonPrimary>
                <ButtonOutline className="fw-bold"> <img src={chatDots} alt="chat" /> Chat with Monito</ButtonOutline>
                {(isAdmin && product) && <UpdateProduct product={product} setProduct={setProduct} toast={toast} />}

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
                    <div className="col-6 infoBox d-flex">
                        <p>: {product.rating?.rate}/5 <img className="star" src={star} alt="star" /> </p>
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
    setProduct: PropTypes.func.isRequired,
    toast: PropTypes.func.isRequired
}

export default ProductInfo