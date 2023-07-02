import ButtonOutline from "../../styledComponents/ButtonOutline"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import StyledLowerBanner from "./StyledLowerBanner"
import bannerImg from "../../assets/Adoption_Banner.png"
import playButton from "../../assets/Play_Circle_Dark.png"
import paw from "../../assets/Paw.svg"
const LowerBanner = () => {
    return (
        <div className="container d-none d-lg-flex my-5">
            <StyledLowerBanner className="w-100" >
                <div className="row w-100 align-items-center z-2">
                    <div className="col-lg-6">
                        <div className="d-flex flex-column justify-content-center align-item-center text-center h-100">
                            <h2>Adoption <img src={paw} alt="paw" /></h2>
                            <h3>We Need Help. So Do They.</h3>
                            <div>
                                <p>Adopt a pet and give it a home, <br /> it will be love you back unconditionally.</p>
                            </div>
                            <div className="d-flex justify-content-center gap-3">
                                <ButtonOutline>View Intro <img src={playButton} alt="play" /></ButtonOutline>
                                <ButtonPrimary>Explore Now</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-100 bannerImg" src={bannerImg} alt="bannerimage" />
                    </div>
                </div>

                <div className="rectangleOne z-1" />
                <div className="rectangleTwo z-1" />
            </StyledLowerBanner>
        </div>
    )
}

export default LowerBanner