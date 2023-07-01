import vector from "../../assets/Vector.png"
import pati from "../../assets/pati.png"
import play from "../../assets/play.png";

import { DarkButton, WhiteBorderButton } from "../buttons/buttonStyle"
import { BannerOneRightSubTitle, BannerOneRightTitle, BannerTwoButtonGroup, BannerTwoLeft, BannerTwoLeftSquare, BannerTwoLeftText, BannerTwoRight, BannerTwoRightSquare, BannerTwoSection } from "./styledOneProduct";
const BannerTwo = () => {
    return (
        <BannerTwoSection className="mb-4" >
            <div className="container">
                <div className="row">
                    <BannerTwoLeft className="col-lg-6">
                        <BannerTwoLeftSquare></BannerTwoLeftSquare>
                        <div className="position-relative text-start">
                            <div className="d-flex align-items-center p-0 m-0">
                                <BannerOneRightTitle>Adoption</BannerOneRightTitle>
                                <img src={vector} className="" alt="" />
                            </div>
                            <BannerOneRightSubTitle>We need help. so do they.</BannerOneRightSubTitle>
                            <BannerTwoLeftText>Adopt a pet and give it a home,
                                it will be love you back unconditionally.</BannerTwoLeftText>
                            <BannerTwoButtonGroup >
                                <DarkButton>
                                    Explore Now
                                </DarkButton>
                                <WhiteBorderButton>
                                    View Intro
                                    <img src={play} alt="" />
                                </WhiteBorderButton>
                            </BannerTwoButtonGroup>
                        </div>
                    </BannerTwoLeft>
                    <BannerTwoRight className="col-lg-6">
                        <BannerTwoRightSquare></BannerTwoRightSquare>
                        <img src={pati} alt="" />
                    </BannerTwoRight>
                </div>
            </div>
        </BannerTwoSection>
    )
}

export default BannerTwo