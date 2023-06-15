import styled from "styled-components";

export const HomeContainer = styled.div`
margin: 0 auto;
    overflow: hidden;
    max-width: 1024px;
    width: 100%;
    background-color: #fff;
    background-size: 100% 1px;
    padding-top:25px;
    background: transparent url("https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png");
`;


export const BannerPurple = styled.div`
    background-color: #734BB2;
    color: #212121;
    padding-bottom: 1.5em;
    padding-top: 0.5em;
`;

export const BannerRed = styled(BannerPurple)`
background-color: #E3350D;
`;

export const BannerBlackGray = styled(BannerPurple)`
background-color: #282828;
color: #fff;
height: 100%;
`;

export const BannerGray = styled(BannerPurple)`
background-color: #a4a4a4;
color: #212121 ;
`;

export const BannerBlue = styled(BannerPurple)`
background-color: #1B82B1;

`;

export const BannerDarkBlue = styled(BannerPurple)`
background-color: #1847D7;
`;

