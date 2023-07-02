import styled from 'styled-components'

export const ProductCard = styled.div` 
    background-color:#FDFDFD;
    color:#00171F;
    border-radius: 12px;
    border:none;
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
    display: inline-flex;
    padding: 8px 0;
    margin:0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
   
`

export const ProductImg = styled.img`
    // width: 100%;
    aspect-ratio:1;
    flex-shrink: 0;

    background:cover no-repeat;
`

export const ProductTitle = styled.p`
max-width:200px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color:#00171F;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden
`
export const ProductSpecsTitle = styled.p`
    color:#667479;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin: 5px 0;
    padding: 0
`
export const ProductSpecs = styled.p`
    color:#667479;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    margin: 5px 0;
    padding: 0
`
export const ProductPrice = styled.p`
    color: #00171F;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
`

//MAINBANNER
export const MainBannerSection = styled.section`
border-radius: 0px 0px 40px 40px;
border-radius: 0px 0px 20px 20px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
overflow: hidden;
position: relative;
`
export const MainBannerRow = styled.div`
margin-top:20px;
height:100vh;
`
export const MainBannerLeft = styled.div`
position:relative;
z-index:10;
display:flex;
justify-content:center;
align-items:start;
flex-direction:column;
@media screen and (max-width:992px){
    align-items:start;
    
}
`
export const MainBannerLeftTopSquare = styled.div`
position:absolute;
z-index:-9;
top:-38rem;
left:-20rem;
width: 635px;
height: 635px;
transform: rotate(25.23deg);
flex-shrink: 0;
border-radius: 99px;
background: #F7DBA7;
`
export const MainBannerLeftBottomSquare = styled.div`
position:absolute;
z-index:-9;
bottom:-38rem;
left:-5rem;
width: 635px;
height: 635px;
transform: rotate(56.47deg);
flex-shrink: 0;
border-radius: 99px;
opacity: 0.4000000059604645;
background: #F7DBA7;
@media screen and (max-width:992px){
    display:none
}

`
export const MainBannerTitle = styled.h1`
position:relative;
z-index:10;
color: #002A48;
font-size:  60px;
font-style: normal;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
@media screen and (max-width:992px){
    font-size: 40px;
    line-height: 60px;
}
`
export const MainBannerTitleSquare = styled.div`
position:absolute;
z-index:-10;
left:-0.5rem;
width: 67.103px;
height: 67.103px;
transform: rotate(25.23deg);
flex-shrink: 0;
border-radius: 20px;
background: #F7DBA7;

`
export const MainBannerSubtitle = styled.h2`
color: #002A48;
font-size: 46px;
font-style: normal;
font-weight: 700;
line-height: 60px;
text-transform: capitalize;
@media screen and (max-width:992px){
    font-size: 28px;
    line-height: 38px;
}
`
export const MainBannerText = styled.p`
color: #242B33;
font-size: 16px;
font-style: normal;
font-weight: 500;

line-height: 24px;
@media screen and (max-width:992px){
    font-size: 12px;
    line-height: 18px;
}
`
export const MainBannerRight = styled.div`
position:relative;

margin:0 auto;
`
export const MainBannerRightDarkSquare = styled.div`
bottom:-22rem;
left:-4rem;
position:absolute;
z-index:1;
width: 635px;
height: 635px;
transform: rotate(9.355deg);
flex-shrink: 0;
border-radius: 99px;
background: #003459;
@media screen and (max-width:992px){
    width: 528.983px;
    height: 528.983px;
    transform: rotate(5.367deg);
    border-radius: 48px;
    left:3rem;
    bottom:-17rem;
}
`
export const MainBannerRightLightSquare = styled.div`
bottom:-18rem;
left:-1rem;
position:absolute;
z-index:1;

width: 635px;
height: 635px;
transform: rotate(25.23deg);
flex-shrink: 0;
border-radius: 99px;
background: #F7DBA7;
@media screen and (max-width:992px){
    width: 528.983px;
    height: 528.983px;
    border-radius: 48px;
    left:5rem;
    bottom:-17rem;
}
`
export const MainBannerImg = styled.img`
position:absolute;
z-index:1;
left:-10rem;
bottom:0;
// width: 944px;
// height: 693px;
flex-shrink: 0;
@media screen and (max-width:992px){
    width: 414px;
    height: 386px;
    left:0;
}
`
//HOMEPAGE PRODUCT H1
export const AllProductShadowTitle = styled.div`
color: #000;
text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
margin:0;
padding:0;
@media screen and (max-width:992px){
    font-size: 14px;
    line-height: 16px;
}
`
export const AllProductBlueTitle = styled.div`
color: var(--primary-color-dark-blue, #003459);
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 25px;
text-transform: capitalize;
margin:0;
padding:0;
@media screen and (max-width:992px){
    font-size: 17px;
    line-height: 32px;
}
`
//AFTER BANNER ONE PRODUCTS
export const TempHomepageProducts = styled.div`
@media screen and (max-width:992px){
    display:none
}
`

//PET kNOWLEDGE
export const PetImg = styled.img`
width: 364px;
height: 243px;
flex-shrink: 0;
background: lightgray 50% / cover no-repeat;
`
export const PetTitle = styled.div`
color: #00171F;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24px;
`
export const PetText = styled.p`
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;

`
export const PetKnow = styled.div`
display: flex;
padding: 3px 9px;
align-items: center;
justify-content:center;
gap: 10px;
border-radius: 28px;
background:  #00A7E7;
color:  #FDFDFD;
width:100px;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 16px;

text-align:center;
`
//BANNER ONE

export const BannerOneSection = styled.section`
    position:relative;
    overflow:hidden;
    border-radius: 20px;
    background: #003459;
    width:100%;
`
export const BannerOneRow = styled.div`
display:flex;
@media screen and (max-width:992px){
    flex-direction:column-reverse
    
}
`
export const BannerOneLeftSquare = styled.div`
left:-12rem;
bottom:-37rem;
position:absolute;
width: 787.54px;
height: 787.54px;
transform: rotate(28.251deg);
flex-shrink: 0;
border-radius: 99px;
background: #002A48;
@media screen and (max-width:992px){
    bottom:-44rem;
    left:-11rem;
}
`
export const BannerOneLeft = styled.div`
    padding-top:36px;
    position:relative;
    z-index:10;
    @media screen and (max-width:992px){
        left:-4rem;

    }
`
export const BannerOneRight = styled.div`
display:flex;
justify-content:center;
align-items:end;
flex-direction:column;
padding:0 50px 0 0;
@media screen and (max-width:992px){
    margin-top:50px;
    padding:0;

}
`
export const BannerOneRightTitle = styled.h1`
color: var(--primary-color-dark-blue, #003459);
font-size: 52px;
font-style: normal;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
@media screen and (max-width:992px){
    color: var(--primary-color-dark-blue-80, #002A48);
    text-align: center;
    font-size: 36px;
    line-height: 54px;

}

`
export const BannerOneRightSubTitle = styled.h2`
color: var(--primary-color-dark-blue, #003459);
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 54px;
text-transform: capitalize;
@media screen and (max-width:992px){
    color: var(--primary-color-dark-blue-80, #002A48);
    text-align: center;
    font-size: 24px;
    line-height: 36px;

}
`
export const BannerOneRightText = styled.p`
color: var(--neutral-color-80, #242B33);
text-align: right;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px;
padding:0 0 0 120px;
@media screen and (max-width:992px){
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    padding:0 27px;
}
`
export const BannerOneRightSquare = styled.div`
position:absolute;
right:-15rem;
top:-15rem;
width: 782.292px;
height: 635px;
transform: rotate(25.23deg);
flex-shrink: 0;
border-radius: 99px;
background: #FCEED5;
@media screen and (max-width:992px){
    left:-10rem;
    top:-20rem;
    width: 605.027px;
    height: 635px;
    transform: rotate(11.41deg);
    border-radius: 75px;
}
`

export const BannerOnebuttonGroup = styled.div`
display:flex;
justify-content:end;
@media screen and (max-width:992px){
    justify-content:center;
}
`

//BANNER TWO
export const BannerTwoSection = styled.div`
position:relative;
overflow:hidden;
border-radius: 20px;
background: #FFB775;
width:100%;
@media screen and (max-width:992px){
    display:none
}
`
export const BannerTwoLeft = styled.div`
display:flex;
justify-content:center;
align-items:end;
flex-direction:column;
padding:0 0px 0 50px;

`
export const BannerTwoLeftSquare = styled.div`
position:absolute;
left:-15rem;
top:-15rem;
width: 782.292px;
height: 635px;
transform: rotate(-25.23deg);
flex-shrink: 0;
border-radius: 99px;
background: #FCEED5;
`
export const BannerTwoRight=styled.div`
position:relative;
z-index:10;
`
export const BannerTwoRightSquare=styled.div`
position:absolute;
z-index:-1;
bottom:-36rem;
width: 787.54px;
height: 787.54px;
transform: rotate(-28.251deg);
flex-shrink: 0;
border-radius: 99px;
opacity: 0.30000001192092896;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
`
export const BannerTwoLeftText = styled.p`
color: var(--neutral-color-80, #242B33);
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px;
padding
`
export const BannerTwoButtonGroup = styled.div`
display:flex;
justify-content:start;
`

//Petseller
export const PetSellerContainer = styled.div`
    padding:40px 0;
    @media screen and (max-width:992px){
        display:none;
    }
`
export const PetSellerTitle = styled.h1`
color: #000;
font-size: 16px;
font-weight: 500;
line-height: 31px;
text-align:left
`
export const PetSellerSubTitle = styled.span`
color: #003459;
font-size: 24px;
font-weight: 700;
line-height: 36px;
text-transform: capitalize;
`

