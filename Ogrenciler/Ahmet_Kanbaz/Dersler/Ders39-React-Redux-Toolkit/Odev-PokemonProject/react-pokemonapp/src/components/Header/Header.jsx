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
            <img src='https://freepngimg.com/download/pokemon/37475-6-pikachu-transparent-image.png' alt="" />
          </Link>
          <Menu />
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header
