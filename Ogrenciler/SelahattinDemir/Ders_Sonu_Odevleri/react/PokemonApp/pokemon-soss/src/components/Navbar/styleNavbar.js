import styled from "styled-components";

export const NavbarUl = styled.ul`
  height: 62px;
  text-align: center;
`;

export const NavbarA = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const NavbarSpan = styled.span`
  color: #919191;
`;

export const Navbarİmg = styled.img`
  max-height: 50px;
`;

export const NavbarAniİmg = styled(Navbarİmg)`
  transition: all 200ms linear;
  width: 80px;
  &:hover {
    animation-name: gus-bounce;
    animation-duration: 475ms;
    animation-fill-mode: both;
  }

  @keyframes gus-bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(6px);
    }

    60% {
      transform: translateY(1px);
    }
  }
`;

export const NavbarAdsİmg = styled.img`
  max-height: 50px;
`;

export const NavbarBackground = styled.div`
  background-color: #f5f5f5;
  height: 62px;
  border-bottom: 3px solid #dedede;
`;

export const NavbarLi = styled.li`
  padding: 9px 10px 8px;
`;

export const LiActive = styled.li`
  padding: 0 10px;
  box-shadow: 0 0 7px 1px #666666;
  margin: 0 10px;
  background-color: #fff;
`;

export const İconLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.28%;
  height: 87px;
  margin: 0;
  cursor: pointer;
  position: relative;
  border-bottom: 6px solid ${(props) => props.hovercolor};
  &:first-child {
    background-color: #919191;
  }
  &:hover {
    background-color: ${(props) => props.hovercolor};
    span {
      color: white;
    }
  }
`;

export const İconAtag = styled.a``;
