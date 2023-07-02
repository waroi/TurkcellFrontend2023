/* eslint-disable react/no-unescaped-entities */
import './footerStyle.scss'
import '../../style/style.scss'
import Facebook from '../../assets/icon/facebook.png'
import Twitter from '../../assets/icon/twitter.png'
import Instagram from '../../assets/icon/instagram.png'
import Youtube from '../../assets/icon/youtube.png'
import TrendfitLogo from '../../assets/logo/Trendfit.png'


const Footer = () => {
  return (
    <div className="bg-secondary rounded-top ">
      <div className="container  p-sm-bootom pt-lg-3 pb-lg-3">
        <div className="col-md-12 row bg-dark justify-content-center align-items-center p-4 rounded-4 ">
          <div className="col-md-4 col-sm-12 "><h5 className='text-light subscribe-text'>Subscribe now so you don't miss our campaigns</h5></div>
          <div className="col-md-8 col-sm-12 d-flex bg-light p-2 rounded-4">
            <input type="text" placeholder='Enter Your Email' className='subscribe-input me-3 w-75 ' />
            <button className="btn btn-dark subscribe-button">Subscribe</button>
          </div>
        </div>
        <div className="row justify-content-between align-items-center my-4">
          <div className='menu col-md-4 col-sm-12 '>
            <ul className=' d-flex justify-content-between m-0 mt-2'>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-12 social-media d-flex justify-content-center mt-2  ">
            <img className='me-2' src={Facebook} alt="facebook" />
            <img className='me-2' src={Twitter} alt="twitter" />
            <img className='me-2' src={Instagram} alt="instagram" />
            <img src={Youtube} alt="youtube" />
          </div>
        </div>
        <hr className='hr-bottom' />
        <div className="row  justify-content-between align-items-center">
          <div className="col-md-4 col-sm-12 text-center ">
            <p className='text-footer'>© 2023 TrendFit. All rights reserved.</p>
          </div>
          <div className="col-md-4 col-sm-12  text-center ">
            <img src={TrendfitLogo} className="trend-logo" alt="TrendfitLogo" />
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center order-sm-1">
            <p className='me-5 text-footer'>Terms of Service</p>
            <p className='text-footer'>Privacy Policy</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer
