import FooterBottom from './FooterBottom/FooterBottom'
import FooterForm from './FooterForm/FooterForm'
import FooterMenu from './FooterMenu/FooterMenu'
import {FooterContainer} from './FooterStyle'
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container py-5 footerBody">
        <FooterForm />
        <FooterMenu />
        <FooterBottom />
      </div>
    </FooterContainer>
  )
}

export default Footer