import styled from 'styled-components';

export const Button = styled.button`
display: flex;
height: 44px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 57px;
background: var(--primary-color-dark-blue, #003459);
color: white;
text-decoration: none;
border: none;
`;

export const Buttons = styled.div`
display:flex;
gap:10px;
`;

export const Button1 = styled.button`
display: inline-flex;
height: 44px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 57px;
border: 1.5px solid var(--primary-color-dark-blue, #003459);
`;

export const Section = styled.div`
background: var(--neutral-color-00, #FFDFDFD);
// height: 4884px;
margin:25px;
`;

export const Content = styled.div`
display:flex;
flex-direction:column;
`;

export const Picture = styled.div`
// height: 693px;
flex-shrink: 0;
`;

export const Title1 = styled.h1`
color: var(--primary-color-dark-blue-80, #002A48);
font-size: 60px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 800;
line-height: 68px;
text-transform: capitalize;
`;

export const Title2 = styled.h3`
color: var(--primary-color-dark-blue-80, #002A48);
font-size: 46px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 60px;
text-transform: capitalize;
`;

export const Minip = styled.p`
display: flex;
width: 480px;
flex-direction: column;
flex-shrink: 0;
color: var(--neutral-color-80, #242B33);
/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const P1 = styled.p`
color: #000;
/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const P2 = styled.p`
color: var(--primary-color-dark-blue, #003459);
font-size: 24px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 36px;
text-transform: capitalize;
`;

export const Div = styled.div`
display: flex;
justify-content: space-between
`;

export const Pict = styled.img`
width: 300px;
height: 300px;
transform: rotate(-90.071deg);
flex-shrink: 0;
`;

export const Pictures = styled.div`
display:flex;
justify-content: space-around;
`;

export const NavButtons = styled.div`
display:flex;
justify-content: space-around;
gap:5px;
`;
