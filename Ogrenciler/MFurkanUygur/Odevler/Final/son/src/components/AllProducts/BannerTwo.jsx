import vector from "../../assets/Vector.png"
import pati from "../../assets/pati.png"
import play from "../../assets/play.png";

import { ButtonGroup, DarkButton, WhiteBorderButton } from "../buttons/buttonStyle"
import { BannerOneLeft, BannerOneLeftSquare, BannerOneRight, BannerOneRightSquare, BannerOneRightSubTitle, BannerOneRightText, BannerOneRightTitle, BannerOneRow, BannerOnebuttonGroup, BannerTwoButtonGroup, BannerTwoLeft, BannerTwoLeftSquare, BannerTwoLeftText, BannerTwoRight, BannerTwoRightSquare, BannerTwoSection } from "./styledOneProduct";
const BannerTwo = () => {
    return (
        // <div className="banner-two-section">
        //     <div className="container">
        //         <div className="two-sq-one"></div>
        //         <div className="two-sq-two"></div>
        //         <div className="row">
        //             <div className="col-lg-6 banner-two-title">
        //                 <div className="d-flex">
        //                     <h1>Adoption</h1>
        //                     <img src={vector} className="img-fluid" alt="" />
        //                 </div>
        //                 <h2>We Need Help. So Do They.</h2>
        //                 <p>Adopt a pet and give it a home,</p>
        //                 <p> it will be love you back unconditionally.</p>
        //                 <ButtonGroup className="d-flex justify-content-start">
        //                     <DarkButton>
        //                         Explore Now
        //                     </DarkButton>
        //                     <WhiteBorderButton>
        //                         View Intro
        //                         <img src={play} className="img-fluid" alt="" />
        //                     </WhiteBorderButton>
        //                 </ButtonGroup>
        //             </div>
        //             <div className="col-lg-6 banner-two-img">
        //                 <img src={pati} alt="" />

        //             </div>

        //         </div>


        //     </div>
        // </div>
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