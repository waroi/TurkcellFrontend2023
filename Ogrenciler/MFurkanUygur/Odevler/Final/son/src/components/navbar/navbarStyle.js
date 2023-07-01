import styled from 'styled-components'

export const NavBarComp = styled.nav`
    position:relative;
    overflow:hidden;
    background-color:#F7DBA7;
    color:#003459;
    font-size: 16px;
    padding: 28px 130px;
    font-weight: 700;
    line-height: 24px;
    gap: 48px;
    z-index:1;
`

export const Navbarul = styled.ul`
width:100%;
display:flex;
justify-content: space-between ;
align-items:center;
`
export const NavbarSquare = styled.div`
    position:absolute;
    top:-38rem;
    left:-15rem;
    width: 635px;
    height: 635px;
    transform: rotate(25.23deg);
    flex-shrink: 0;
    border-radius: 99px;
    background: red;
`
export const NavbarLogo = styled.img`
    // width: 115px;
    // height: 40px;
    
`
export const NavUl = styled.ul`
    gap: 48px;
    margin:0;
    padding:0;

`