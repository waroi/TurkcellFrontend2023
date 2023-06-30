import StyledHeroBanner from "./StyledHeroBanner"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import womanWithDog from "../../assets/Woman_Holds_Dog.png"
const HeroBanner = () => {
    return (
        <StyledHeroBanner>
            <div className="container d-flex align-items-end">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="text">
                            <h2>
                                One More Friend
                            </h2>
                            <h3>Thousands More Fun!</h3>
                            <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        </div>
                        <div className="buttons d-flex gap-5">
                            <ButtonOutline>View Intro -</ButtonOutline>
                            <ButtonPrimary>Explore Now</ButtonPrimary>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <img src={womanWithDog} alt="womanwithdog" />
                    </div>
                </div>
            </div>
            <div className="rectangle1" />
            <div className="rectangle2" />
            <div className="rectangle3" />
            <div className="rectangle4" />
            <div className="rectangle5" />
            <div className="rectangle6" />
            <div className="rectangle7" />
            <div className="rectangle8" />
        </StyledHeroBanner>
    )
}

export default HeroBanner