import {HeaderWrapper} from "./styled"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderWrapper>
        <Link to="/technology">Teknoloji</Link>
      <Link to="/sport">Spor</Link>
      <Link to="/magazine">Magazin</Link>
      <Link to="/economy">Ekonomi</Link>
    </HeaderWrapper>
  )
}

export default Header