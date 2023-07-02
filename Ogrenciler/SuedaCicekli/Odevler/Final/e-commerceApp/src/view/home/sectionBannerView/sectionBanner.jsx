import './sectionBannerStyle.scss'
import BannerImg from "../../../assets/bannerImg/BannerImg.png"
import '../../../style/style.scss'


const sectionBanner = () => {
  return (
    <div className='container section-bg section-mobile-bg rounded-4'>
      <div className="row flex-wrap">
        <div className="col-12 col-md-7 d-flex align-items-end text-center justify-content-center order-2 order-md-1">
          <img src={BannerImg} className="bannerGirlImg" alt="" />
        </div>
        <div className="col-12 col-md-5 py-4 order-1 order-md-2">
          <div className="d-flex flex-column text-dark text-end me-3">
            <h1 className='fw-bold banner-sec-header mb-0'>One More Friend</h1>
            <h4 className='banner-text-two'>Thousands!</h4>
            <p className='banner-section-text'>Lorem ipsum dolor sit amet consectetur elit. Atque architecto pariatur similique itaque delectus! Quas eligendi earum ut temporibus architecto.</p>
            <div className="d-flex mb-5 ms-5">
              <button className="btn border-button ms-5">View Intro</button>
              <button className="btn darkButton ms-3">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sectionBanner;
