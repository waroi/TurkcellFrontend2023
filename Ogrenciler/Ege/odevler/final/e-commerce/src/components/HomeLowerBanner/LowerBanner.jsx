import ButtonOutline from "../../styledComponents/ButtonOutline"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import StyledLowerBanner from "./StyledLowerBanner"
import bannerImg from "../../assets/Adoption_Banner.png"
const LowerBanner = () => {
    return (
        <div className="container d-none d-lg-flex my-5">
            <StyledLowerBanner >
                <div className="row align-items-center z-2">
                    <div className="col-lg-6">
                        <div className="d-flex flex-column justify-content-center align-item-center text-center h-100">
                            <h2>One More Friend</h2>
                            <h3>Thousands More Fun!</h3>
                            <div>
                                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                            </div>
                            <div className="d-flex justify-content-center gap-3">
                                <ButtonOutline>View Intro</ButtonOutline>
                                <ButtonPrimary>Explore Now</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="w-100" src={bannerImg} alt="bannerimage" />
                    </div>
                </div>

                <div className="rectangleOne z-1" />
                <div className="rectangleTwo z-1" />
            </StyledLowerBanner>
        </div>
    )
}

export default LowerBanner