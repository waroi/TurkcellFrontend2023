import imgone from "../../assets/banner1img.png";
import play from "../../assets/play.png";

import {  DarkButton, WhiteBorderButton } from "../buttons/buttonStyle";
import { BannerOneLeft, BannerOneLeftSquare, BannerOneRight, BannerOneRightSquare, BannerOneRightSubTitle, BannerOneRightText, BannerOneRightTitle, BannerOneRow, BannerOneSection, BannerOnebuttonGroup } from "./styledOneProduct";
const BannerOne = () => {
    return (

        <BannerOneSection className=" my-4">
            <div className="container">
                <BannerOneLeftSquare></BannerOneLeftSquare>
                <BannerOneRow className="row">
                    <BannerOneLeft className="col-lg-6">
                        <img src={imgone} alt="" />
                    </BannerOneLeft>
                    <BannerOneRight className="col-lg-6">
                        <BannerOneRightSquare></BannerOneRightSquare>
                        <div className="position-relative text-end">
                            <BannerOneRightTitle>One more friend</BannerOneRightTitle>
                            <BannerOneRightSubTitle>Thousands more fun!</BannerOneRightSubTitle>
                            <BannerOneRightText>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</BannerOneRightText>
                            <BannerOnebuttonGroup >
                                <WhiteBorderButton>
                                    View Intro
                                    <img src={play} alt="" />
                                </WhiteBorderButton>
                                <DarkButton>
                                    Explore Now
                                </DarkButton>
                            </BannerOnebuttonGroup>
                        </div>
                    </BannerOneRight>
                </BannerOneRow>
            </div>
        </BannerOneSection>
    );
};

export default BannerOne;
