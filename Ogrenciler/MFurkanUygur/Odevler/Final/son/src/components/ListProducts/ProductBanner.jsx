import group from "../../assets/group.png";
import playwhite from "../../assets/playwhite.png";

import { DarkBorderButton, DarkButton, WhiteBorderButton, WhiteButton } from "../buttons/buttonStyle";
import { PBannerLeft, PBannerRight, PBannerRightSquare, PBannerRightSubtitle, PBannerRightText, PBannerRightTitle, PBannerRow, PBannerSection, PbannerImg } from "./producsStyle";
const ProductBanner = () => {
    return (
        // <div className="product-banner-section">
        //     <div className="container">
        //         <div className="row pbanner-main">
        //             <div className="col-lg-6 pbanner-img">
        //                 <img src={group} alt="" className="img-fluid" />
        //             </div>
        //             <div className="col-lg-6 pbanner-title ">
        //                 <div></div>
        //                 <h1>One more friend</h1>
        //                 <h2>Thousands more fun!</h2>
        //                 <p>
        //                     Having a pet means you have more joy, a new friend, a happy person
        //                     who will always be with you to have fun. We have 200+ different
        //                     pets that can meet your needs!
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <PBannerSection>
            <div className="container">
                <PBannerRow className="row">
                    <PBannerLeft className="col-lg-6">
                        <PbannerImg src={group} alt=""  />
                    </PBannerLeft>
                    <PBannerRight className="col-lg-6">
                        <PBannerRightTitle>One more friend</PBannerRightTitle>
                        <PBannerRightSubtitle>Thousands more fun!</PBannerRightSubtitle>
                        <PBannerRightText>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</PBannerRightText>
                        <div className="d-flex">
                            <DarkBorderButton className="me-2">
                                View Intro
                                <img src={playwhite} alt="" />
                            </DarkBorderButton>
               
                            <WhiteButton>
                                Explore Now
                            </WhiteButton>
                        </div>
                        <PBannerRightSquare></PBannerRightSquare>
                    </PBannerRight>
                </PBannerRow>
            </div>

        </PBannerSection>
    );
};

export default ProductBanner;
