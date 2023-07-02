/* eslint-disable react/no-unescaped-entities */
import './orangeBannerStyle.scss'
import CatDog from "../../../assets/bannerImg/CatDog.png"
import '../../../style/style.scss'

const OrangeBanner = () => {
  return (
    <div className='container section-bg-orange rounded-4 mt-5'>
      <div className="row">
        <div className="col-md-6 py-4">
          <div className="d-flex flex-column  text-dark text-start ms-4">
            <h1 className='fw-bold banner-sec-header mb-0'>Animal Friends !</h1>
            <h4 className='banner-text-two '>Don't forget your animal friends</h4>
            <p className='banner-section-text'>Did you know that every time you shop, you give food to street animals as a gift with the sponsorship of whiskas?</p>
            <div className="d-flex mb-5 ms-5">
              <button className="btn border-button ms-5">View Intro</button>
              <button className="btn darkButton ms-3">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-end text-center justify-content-center">
          <img src={CatDog} className="bannerGirlImg " alt="" />
        </div>

      </div>
    </div>
  )
}

export default OrangeBanner
