import styled from 'styled-components'

export const PBannerSection = styled.section`
margin-top:100px;
position:relative;
overflow:hidden;
z-index:0;
width: 100%;
// height: 378px;
flex-shrink: 0;
border-radius: 20px;
background:  linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
`
export const PBannerRow = styled.div`
@media screen and (max-width:992px){
    flex-direction:column-reverse;
}
`
export const PBannerLeft = styled.div`
    position:relative;
    display:flex;
    justify-content:start;
    bottom:0;
    @media screen and (max-width:992px){
        left:-3rem;
        width: 460px;
        height: 213px;
        flex-shrink: 0;
    }
`
export const PbannerImg = styled.img`

@media screen and (max-width:992px){
    width: 460px;
    height: 213px;
    flex-shrink: 0;
}
`
export const PBannerRight = styled.div`
position:relative;
    margin:50px 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:end;
    padding:0 60px 0 0 ;
    @media screen and (max-width:992px){
        justify-content:center;
        align-items:center;
        padding:0;

    }
`
export const PBannerRightTitle = styled.h1`
color: var(--neutral-color-00, #FDFDFD);
font-size: 52px;
font-style: normal;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
@media screen and (max-width:992px){
    color: var(--primary-color-dark-blue-80, #002A48);
    font-size: 38px;
    line-height: 60px;
}
`
export const PBannerRightSubtitle = styled.h2`
color: var(--neutral-color-00, #FDFDFD);
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 54px;
text-transform: capitalize;
@media screen and (max-width:992px){
    color: var(--primary-color-dark-blue-80, #002A48);
    font-size: 26px;
    line-height: 38px;
}
`
export const PBannerRightText = styled.p`
color: var(--neutral-color-20, #CCD1D2);
text-align: right;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px;
padding:0 0 0 120px;
@media screen and (max-width:992px){
    color: var(--neutral-color-80, #242B33);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-align:center;
    padding:0 20px;
}
`

export const PBannerRightSquare = styled.div`
position:absolute;
z-index:-2;
bottom:-28rem;
right:-10rem;
width: 816.401px;
height: 799.52px;
transform: rotate(160.219deg);
flex-shrink: 0;
border-radius: 99px;
background: var(--primary-color-dark-blue-80, #002A48);
@media screen and (max-width:992px){
    transform: rotate(-175.16deg);
    bottom:-60rem;
}

`