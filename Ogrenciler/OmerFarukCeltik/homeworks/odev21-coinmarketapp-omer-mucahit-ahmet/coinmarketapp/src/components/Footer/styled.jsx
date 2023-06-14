import styled from 'styled-components';

  export const StyledFooter = styled.footer`
    background-color: #1a1a1d;
    margin: 0 auto;
  `;
  export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    padding: 48px 0;
  `;
 export const FooterTop = styled.div`
    display: inherit;
    justify-content: space-between;
  `;
  export const FooterImgContainer = styled.div`
    display: flex;
    align-items: start;
  `;
 export const FooterImg = styled.img``;
 export const FooterTopRight = styled.div`
    display: flex;
  `;
 export const FooterUl = styled.ul`
    color: #fff;
    list-style: none;
    padding: 0 10px 0 0;
  `;
export  const FooterH = styled.h4`
    font-size: 16px;
    margin: 0;
    padding: 5px 0 18px;
    font-weight: 700;
  `;
 export const FooterLi = styled.li`
    color: #a0a0a0;
    font-size: 14px;
    line-height: 24px;
    padding: 0 0 8px;
    width: 161px;
  `;
 export const FooterLink = styled.a`
    color: #a0a0a0;
    font-size: 14px;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      color: #98caff;
    }
  `;

 export const FooterSpan = styled.div`
    background-color: rgb(56, 97, 251);

    padding: 4px 8px;
    border-radius: 10px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: inline;
    margin: 0 0 0 5px;
  `;
 export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 600;
    padding: 66px 0 0;
  `;
 export const FooterBottomImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    gap: 5px;
  `;
 export const FooterBottomLink = styled.img`
    max-height: 42px;
  `;