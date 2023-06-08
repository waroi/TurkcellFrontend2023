import {HeaderWrapper, LogoImg, CategoryWrapper, LogoNav} from "./styled"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <>
    <LogoNav>
       <Link to="/">
        <LogoImg src={logo} alt="logo" />
       </Link>
    </LogoNav>
    <HeaderWrapper>
      <CategoryWrapper>
      <Link to="/technology">Teknoloji</Link>
      <Link to="/sport">Spor</Link>
      <Link to="/magazine">Magazin</Link>
      <Link to="/economy">Ekonomi</Link>
      </CategoryWrapper>
    </HeaderWrapper>
    </>
  )
}

export default Header