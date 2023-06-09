import logo from '../../assets/logo.svg'
import { FooterContainer, FooterLogo } from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="logo" />
      <h4>Tüm Hakları Saklıdır @2023</h4>
    </FooterContainer>
  )
}

export default Footer