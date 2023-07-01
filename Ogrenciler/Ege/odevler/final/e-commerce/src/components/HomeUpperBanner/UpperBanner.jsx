import StyledUpperBanner from "./StyledUpperBanner"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import bannerImg from "../../assets/Woman_Holds_Dog_Two.png"
import playButton from "../../assets/Play_Circle_Dark.png"

const UpperBanner = () => {
    return (
        <div className="container my-5">
            <StyledUpperBanner >
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
                                <ButtonOutline>View Intro <img src={playButton} alt="play" /> </ButtonOutline>
                                <ButtonPrimary>Explore Now</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rectangleOne z-1" />
                <div className="rectangleTwo z-1" />
            </StyledUpperBanner>
        </div>
    )
}

export default UpperBanner