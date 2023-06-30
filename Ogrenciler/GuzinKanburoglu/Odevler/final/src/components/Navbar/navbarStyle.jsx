import styled from "styled-components";
import image from "../../images/img1.png"
export const Nav = styled.div`
   padding: 28px 130px;
   display: flex;
   justify-content: space-around;
   align-items:center;
   gap: 25px;
`

export const Item = styled.div`
   color: var(--primary-color-dark-blue, #003459);
/* Body/16px Bold */
font-size: 16px;
font-family: SVN-Gilroy;
font-weight: 700;
line-height: 24px;
`

export const Input = styled.input`
display: flex;
width: 280px;
padding: 12px 20px 12px 16px;
align-items: center;
gap: 12px;
border-radius: 46px;
background: var(--neutral-color-00, #FDFDFD);
`

export const Button = styled.button`
display: flex;
height: 44px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
color: #FDFDFD;
border-radius: 57px;
background: var(--primary-color-dark-blue, #003459);
`
export const FriendParagraph= styled.p`
   color: var(--primary-color-dark-blue-80, #002A48);
font-size: 60px;
font-family: SVN-Gilroy;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
`
export const FunParagraph= styled.p`
   color: var(--primary-color-dark-blue-80, #002A48);
font-size: 46px;
font-family: SVN-Gilroy;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
`
export const HavingParagraph= styled.p`
  display: flex;
width: 480px;
flex-direction: column;
flex-shrink: 0;
color: var(--neutral-color-80, #242B33);

/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-weight: 500;
line-height: 24px;
`
export const Slide = styled.div`
   border-radius: 0px 0px 40px 40px;
background: var(--linear, linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%));
`

export const LeftSide = styled.div`

`
export const RightSide = styled.div`
width: 200px;
height: 693px;
flex-shrink: 0;
background-image: url("../../images/img1.png");
`