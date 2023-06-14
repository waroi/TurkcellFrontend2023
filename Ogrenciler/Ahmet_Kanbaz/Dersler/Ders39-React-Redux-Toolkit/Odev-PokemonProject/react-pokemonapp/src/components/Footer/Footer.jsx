import { ContainerStyle, Container } from '../ContainerStyle'
import { FooterContainer } from './FooterStyle'
import FooterFirstComponent from './FooterFirstComponent/FooterFirstComponent'
import FooterSocials from './FooterSocials/FooterSocials'
import FooterEndComponent from './FooterEndComponent/FooterEndComponent'
const Footer = () => {
  return (
    <ContainerStyle>
      <FooterContainer>
        <Container>
          <div className='footer'>
            <FooterFirstComponent />
            <FooterSocials />
            <FooterEndComponent />
          </div>
          <div className='bottomFooter'>
            <p>&copy; 2023 Your Website | Referans: <a href="https://www.pokemon.com/us" target='_blank' rel="noreferrer">Pokemon</a></p>
          </div>

        </Container>
      </FooterContainer>
    </ContainerStyle>
  )
}

export default Footer
