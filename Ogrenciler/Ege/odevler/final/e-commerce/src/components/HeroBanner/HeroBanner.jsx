import StyledHeroBanner from "./StyledHeroBanner"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import womanWithDog from "../../assets/Woman_Holds_Dog.png"
import playButton from "../../assets/Play_Circle_Dark.png"
const HeroBanner = () => {
    return (
        <StyledHeroBanner>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row ">
                    <div className="d-flex flex-column col-lg-5 float-lg-start align-items-center ">
                        <h2 className="title">One More Friend</h2>
                        <h3 className="subtitle">Thousands More Fun!</h3>
                        <div>
                            <p>
                                Having a pept means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                            </p>
                        </div>
                        <div className="d-flex gap-3">
                            <ButtonOutline>View Intro <img src={playButton} alt="play" /></ButtonOutline>
                            <ButtonPrimary>Explore Now</ButtonPrimary>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img className="bannerImg" src={womanWithDog} alt="womanwithdog" />
                    </div>
                </div>
            </div>
            < div className="rectangleOne" />
            < div className="rectangleTwo" />
            < div className="rectangleThree" />
            < div className="rectangleFour" />
            < div className="rectangleFive" />
            < div className="rectangleSix" />
            < div className="rectangleSeven" />
            < div className="rectangleEight" />
            < div className="rectangleNine" />
        </StyledHeroBanner>
    )
}

export default HeroBanner