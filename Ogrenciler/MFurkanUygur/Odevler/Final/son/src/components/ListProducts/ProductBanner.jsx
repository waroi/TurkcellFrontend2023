import { PBannerLeft, PBannerRight, PBannerRightSquare, PBannerRightSubtitle, PBannerRightText, PBannerRightTitle, PBannerRow, PBannerSection, PbannerImg } from "./producsStyle";
import { DarkBorderButton, DarkButtonForMobile, WhiteBorderButtonForMobile, WhiteButton } from "../buttons/buttonStyle";
import playwhite from "../../assets/playwhite.png";
import playDark from "../../assets/playDark.png";
import group from "../../assets/group.png";

const ProductBanner = () => {
    return (
        <PBannerSection>
            <div className="container">
                <PBannerRow className="row">
                    <PBannerLeft className="col-lg-6">
                        <PbannerImg src={group} alt="" />
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
                            <WhiteBorderButtonForMobile>
                                View Intro
                                <img src={playDark} alt="" />

                            </WhiteBorderButtonForMobile>
                            <WhiteButton>
                                Explore Now
                            </WhiteButton>
                            <DarkButtonForMobile>
                            Explore Now

                            </DarkButtonForMobile>
                        </div>
                        <PBannerRightSquare></PBannerRightSquare>
                    </PBannerRight>
                </PBannerRow>
            </div>

        </PBannerSection>
    );
};

export default ProductBanner;
