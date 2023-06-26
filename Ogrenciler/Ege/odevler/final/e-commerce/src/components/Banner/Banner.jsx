import PropTypes from "prop-types"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import stuff from "../../assets/Adoption_Banner.png"
import StyledBanner from "./StyledBanner"
const Banner = ({ img, title, subtitle, text, imgOnLeft }) => {
    return (
        <StyledBanner className="container">
            <div className={`banner d-flex flex-column ${imgOnLeft ? "flex-lg-row" : "flex-lg-row-reverse"}`}>
                <img src={stuff} alt={title} />
                <div className="bannerText">
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{text}</p>
                    {
                        imgOnLeft && (
                            <div className="buttons">
                                <button>View Intro -</button>
                                <ButtonPrimary>Explore Now</ButtonPrimary>
                            </div>
                        )
                    }
                    {
                        !imgOnLeft && (
                            <div className="buttons">
                                <ButtonPrimary>Explore Now</ButtonPrimary>
                                <button>View Intro -</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </StyledBanner>
    )
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgOnLeft: PropTypes.bool.isRequired
}

export default Banner