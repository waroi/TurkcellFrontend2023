import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    position: sticky;
    top: 0;
    z-index: 999;
    a{
        text-decoration: none;
        color: #000;
        font-weight: 600;
        font-size: 16px;
        &:hover{
            color: #152848;
        }
    }
    `;

export const LogoImg = styled.img`
width: 300px;
height: auto;
`

export const CategoryWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;`


export const LogoNav = styled.div`
      display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: transparent;
    position: sticky;
    top: 0;
    z-index: 999;
`