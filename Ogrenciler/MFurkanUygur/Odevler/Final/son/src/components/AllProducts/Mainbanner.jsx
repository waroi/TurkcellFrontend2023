import img from "../../assets/mainbanner.png";
import play from "../../assets/play.png";
import { ButtonGroup, DarkButton, WhiteBorderButton } from "../buttons/buttonStyle";
import { MainBannerImg, MainBannerLeft, MainBannerLeftBottomSquare, MainBannerLeftTopSquare, MainBannerRight, MainBannerRightDarkSquare, MainBannerRightLightSquare, MainBannerRow, MainBannerSection, MainBannerSubtitle, MainBannerText, MainBannerTitle, MainBannerTitleSquare } from "./styledOneProduct";

const Mainbanner = () => {
    return (
        // <div className="main-banner-section">
        //     <div className="container">
        //         <div className="row ">
        //             <div className="col-lg-6 main-banner-title position-relative" >
        //                 <div></div>
        //                 <h1>
        //                     <div></div>
        //                     One more friend</h1>
        //                 <h2>Thousands more fun!</h2>
        //                 <p>
        //                     Having a pet means you have more joy, a new friend, a happy person
        //                     who will always be with you to have fun. We have 200+ different
        //                     pets that can meet your needs!
        //                 </p>
        //                 {/* <ButtonGroup> */}
        //                 <WhiteBorderButton>
        //                     View Intro
        //                     <img src={play} alt="" />
        //                 </WhiteBorderButton>
        //                 <DarkButton>
        //                     Explore Now
        //                 </DarkButton>
        //                 {/* </ButtonGroup> */}
        //             </div>
        //             <div className="col-lg-6 main-banner-img position-relative">
        //                 <div className="s1"></div>
        //                 <div className="s2"></div>
        //                 <img src={img} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <MainBannerSection>
            <div className="container">
                <MainBannerRow className="row">
                    <MainBannerLeft className="col-lg-6" >
                        <MainBannerLeftTopSquare></MainBannerLeftTopSquare>
                        <MainBannerLeftBottomSquare></MainBannerLeftBottomSquare>
                        <MainBannerTitle >
                            <MainBannerTitleSquare></MainBannerTitleSquare>
                            One more friend
                        </MainBannerTitle>
                        <MainBannerSubtitle>Thousands more fun!</MainBannerSubtitle>
                        <MainBannerText>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</MainBannerText>
                        <ButtonGroup>
                            <WhiteBorderButton className="me-2">
                                View Intro
                                <img src={play} alt="" />
                            </WhiteBorderButton>
                            <DarkButton>
                                Explore Now
                            </DarkButton>
                        </ButtonGroup>
                    </MainBannerLeft>
                    <MainBannerRight className="col-lg-6">
                        <MainBannerRightDarkSquare></MainBannerRightDarkSquare>
                        <MainBannerRightLightSquare></MainBannerRightLightSquare>
                        <MainBannerImg src={img} alt=""/>
                    </MainBannerRight>
                </MainBannerRow>
            </div>

        </MainBannerSection>
    );
};

export default Mainbanner;
