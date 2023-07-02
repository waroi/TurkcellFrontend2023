import {MenuContainer} from '../HeaderStyle'
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <MenuContainer>
        <Link to={'/contact'}>İletişim</Link>
        <Link to={'/aboutus'}>Hakkımızda</Link>
        <Link to={'/help'}>Yardım</Link>
    </MenuContainer>
  )
}

export default Menu
