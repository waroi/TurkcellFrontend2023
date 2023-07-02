import styled from "styled-components";

export const FooterNav = styled.div`
display: flex;
width: 100%;
height: 440px;
padding: 80px 130px 40px 130px;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 40px;
flex-shrink: 0;
border-radius: 40px 40px 0px 0px;
background: linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%);
`;

export const Col1 = styled.div`
display: flex;
padding: 32px;
align-items: flex-start;
gap: 20px;
border-radius: 16px;
background: var(--primary-color-dark-blue, #003459);
`;

export const P1 = styled.p`
display: flex;
width: 389px;
flex-direction: column;
color: var(--neutral-color-00, #FDFDFD);
font-size: 24px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 36px;
text-transform: capitalize;
`;

export const FormInput = styled.div`
display: flex;
width: 707px;
padding: 12px;
align-items: center;
gap: 12px;
border-radius: 14px;
background: #FFF;
`;

export const FormControl = styled.div`
display: flex;
width: 500px;
padding: 14px 28px;
align-items: center;
gap: 10px;
flex: 1 0 0;
border-radius: 8px;
border: 1px solid var(--neutral-color-40, #99A2A5);
background: #FFF;
`;

export const ButtonForm = styled.button`
display: flex;
width: 163px;
padding: 14px 28px 10px 28px;
justify-content: center;
align-items: center;
gap: 10px;
border:none;
text-decoration: none;
flex-shrink: 0;
border-radius: 8px;
background: var(--primary-color-dark-blue, #003459);
color: var(--neutral-color-00, #FDFDFD);
/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const Col2 = styled.div`
display: flex;
align-items: flex-start;
gap: 880px;
margin:15px;

`;

export const ListFooter = styled.ul`
display: flex;
align-items: flex-start;
gap: 60px;
color: var(--neutral-color-100, #00171F);
/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 24px;
text-decoration: none;
`;

export const SocialIcon = styled.li`
display: flex;
align-items: flex-end;
gap: 40px;
`;

export const Section1 = styled.div`
display: flex;
padding-bottom: 0px;
flex-direction: column;
// align-items: flex-start;
gap: 40px;
border-bottom: 1px solid var(--neutral-color-20, #CCD1D2);
`;

export const LinkList = styled.a`
text-decoration: none;
color: var(--neutral-color-100, #00171F);
/* Body/16px Medium */
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const Context = styled.p`
color: var(--neutral-color-60, #667479);
/* Body/14px Medium */
font-size: 14px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 500;
line-height: 20px;
`;

export const Col3 = styled.div`
display:flex;
justify-content: space-between;
margin:10px;
`;