import styled from 'styled-components';

export const Nav = styled.nav`
  display: grid;
  width: 100%;
  grid-template-columns:${props => props.$searchIcon ? "1fr 1fr 2fr" : "1fr 1fr 1fr"};
  position: absolute;
  top: 0;
  z-index: 50;
  padding: 1em 1em;
  transition: all 0.5s ease-in-out;
  .searchDIV{
    display: flex;
    align-items: center;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
  `;

export const Hamburger = styled.div`
width: 32px;
height: 32px;
flex-shrink: 0;
cursor: pointer;
`
export const Closeburger = styled.div`
width: 32px;
height: 32px;
flex-shrink: 0;
cursor: pointer;
`
export const Logo = styled.div`
  height: 32px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  color: #103559;
  `
export const AsideMenu = styled.aside`
  background-color: #F7DBA7;
  position: absolute;
  color: #003459;
  font-weight: 600;
  top: 0;
  left: 0;
  transition: all .5s ease-in-out;
  display: flex;
  overflow: hidden;
  width: ${props => (props.$show && props.$searchIcon) ? "50%" : (props.$show && !props.$searchIcon) ? "60%" : "0%"};
  height: 100vh;
  z-index: 100;
  ul{
    a{
      color: #003459;
    }
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1em 0 1em 1em;
    gap: 1rem;
  }
  .profileIMG{
    width: 48px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .profileSection{
    display: flex;
    align-items: center;
    gap: .5em;
  }
  .asideHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`
export const AsideLogo = styled.div`
  height: 32px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: #fff;
`


export const SearchMobile = styled.input`
  width: 0%;
  opacity: 0;
  margin-left: auto;
  transition: width 0.5s ease-in-out;
  height:100%;
  font-size: 0.75rem;
  outline: none;
  border: 1px solid #99A2A5;
  border-radius: 5px;
  padding: 0.5em;
  &::placeholder {
    font-size: 0.75rem;
  }
  width: ${props => props.$searchIcon ? "100%" : "0%"};
  opacity: ${props => props.$searchIcon ? "1" : "0"};
`
export const SearchMobileIcon = styled.label`
 cursor: pointer;
 display: ${props => props.$searchIcon ? "none" : "flex"};
`