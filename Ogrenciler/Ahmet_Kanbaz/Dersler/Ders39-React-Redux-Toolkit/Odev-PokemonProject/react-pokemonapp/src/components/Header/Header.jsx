import { HeaderContainer } from './HeaderStyle'
import { Container } from '../../components/ContainerStyle'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <div className='headerSection'>
          <Link to={'/'}>
            <img src='images/pokemonLogo.png' alt="" />
          </Link>
          <Menu />
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header
