import StyledProductsBanner from "./StyledProductsBanner"
import bannerImg from "../../../assets/Puppies.png"
import ButtonOutline from "../../../styledComponents/ButtonOutline"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import ButtonOutlineSecondary from "../../../styledComponents/ButtonOutlineSecondary"
import ButtonSecondary from "../../../styledComponents/ButtonSecondary"
import playButtonLight from "../../../assets/Play_Circle_Light.png"
import playButtonDark from "../../../assets/Play_Circle_Dark.png"
const ProductsBanner = () => {
    return (
        <div className="container">
            <StyledProductsBanner className="mt-5">
                <div className="row flex-column-reverse flex-lg-row align-items-center z-2">
                    <div className="col-lg-6">
                        <img className="w-100 bannerImg" src={bannerImg} alt="bannerimage" />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column justify-content-center align-item-center text-center h-100">
                            <h2>One More Friend</h2>
                            <h3>Thousands More Fun!</h3>
                            <div>
                                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                            </div>
                            <div className="d-flex justify-content-center gap-3">
                                <ButtonOutlineSecondary className="d-none d-lg-block">View Intro <img src={playButtonLight} alt="playlight" /></ButtonOutlineSecondary>
                                <ButtonSecondary className="d-none d-lg-block">Explore Now</ButtonSecondary>
                                <ButtonOutline className="d-lg-none">View Intro <img src={playButtonDark} alt="playdark" /></ButtonOutline>
                                <ButtonPrimary className="d-lg-none">Explore Now</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rectangleOne z-1" />
            </StyledProductsBanner>
        </div>
    )
}

export default ProductsBanner