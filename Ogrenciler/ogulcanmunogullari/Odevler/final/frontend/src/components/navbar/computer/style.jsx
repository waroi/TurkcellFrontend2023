import styled from 'styled-components';

export const Nav = styled.nav`
width: 100%;
position: absolute;
top: 0;
z-index: 50;
  
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 992px;
  margin: 0 auto;
  padding: 1em 1em; 
  position: relative;
  .searchDIVC{
    display: flex;
    align-items: center;
    width: 244px;
    .searchLogo{
      background: #fff;
      height: 44px;
      width: 34px;
      display: flex;
      align-items: center;
      padding-left: 12px;
      border-radius: 48px 0 0 48px;
    }
    input{
     margin-left: auto;
      width: 210px;
      padding: 12px 20px 12px 10px;
      height: 44px;
      font-size: 14px;
      border: none;
      outline: none; 
      border-radius: 0 48px 48px 0;
    }
  }
  .profileDIV{
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 57px;
   overflow: hidden;
   width: 44px;
   height: 44px;
   img{
    height: 150%;
   }
  }
  @media screen and (max-width: 768px) {
  display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 2em;
  font-weight: 600;
  li {
   a{
    color: #003459;
   }
  }
`
export const ProfileAside = styled.aside`
  background: #F7DBA7;
  position: absolute;
  top: 65px;
  right: 3em;
  width: 120px;
  padding: 1em 0;
  border-radius: 28px 0 28px 28px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  .profileName{
    p{
      padding: 0 1em;
      font-size: 14px;
    }
   }
`