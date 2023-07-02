import BasicInput from '../Elements/inputs/BasicInput'
import BasicButton from '../Elements/buttons/BasicButton'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Logo from '../../assets/computer_logo.png'
import Toast from '../Elements/toast/Toast'
import ToastText from '../Elements/toast/ToastText'
import { Link } from 'react-router-dom'
import { FooterBG, Container, Cta, CtaSection } from './style'
import { useEffect, useState } from 'react'

const Footer = () => {
 const [toast, setToast] = useState(false)
 useEffect(() => {
  if (toast) {
   setTimeout(() => {
    setToast(false)
   }, 2000)
  }
 }, [toast])
 return (
  <FooterBG>
   <Container>
    <Cta>
     <h3>
      Register Now So You Don&lsquo;t Miss Our Programs
     </h3>
     <CtaSection>
      <BasicInput >
       <input type="text" placeholder="Enter Your Email" />
      </BasicInput>
      <div className='ctaButton' onClick={() => {
       setToast(true)
      }}>
       <BasicButton width={"107px"} >
        Subscribe Now
       </BasicButton>
      </div>
     </CtaSection>
    </Cta>
    <div className='navigateSection'>
     <div className='menu'>
      <Link to="/">
       Home
      </Link>
      <Link to="/category">
       Category
      </Link>
      <Link to="/about">
       About
      </Link>
      <Link to="/contact">
       Contact
      </Link>
     </div>
     <div className='socials'>
      <img src={Facebook} alt="social icon" />
      <img src={Twitter} alt="social icon" />
      <img src={Instagram} alt="social icon" />
      <img src={Youtube} alt="social icon" />
     </div>
    </div>
    <div className='footerGrid'>
     <img src={Logo} alt="" />
     <div className='policy'>
      <p>
       Terms of Service
      </p>
      <p>
       Privacy Policy
      </p>
     </div>
     <p className='copy'>
      &copy; 2022 Monito. All rights reserved.
     </p>
    </div>
   </Container>
   {
    toast && (
     <Toast bcolor={"green"}>
      <ToastText color={"green"}>
       Subscribed
      </ToastText>
     </Toast>
    )
   }
  </FooterBG>
 )
}
export default Footer