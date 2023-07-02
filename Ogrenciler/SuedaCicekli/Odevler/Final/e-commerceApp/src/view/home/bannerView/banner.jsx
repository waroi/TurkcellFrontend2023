import '../../../style/style.scss';
import './bannerStyle.scss';
import bannerGirl from '../../../assets/bannerImg/BannerGirl.png';

const BannerView = () => {
  return (
    <div className="banner-bg py-5  ">
      <div className="container py-5 ">
        <div className="row py-5 flex-wrap ">
          <div className="col-12 col-md-6 banner-left d-flex align-items-center flex-column ">
            <div>
              <h1 className='text-dark fw-bold banner-header'>One More Friend</h1>
              <h2 className='text-dark fw-bold'>Thousands More Fun!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus velit omnis quae,
                vel unde, ex placeat illum deserunt sequi provident excepturi ipsam. Sunt et blanditiis
                atque, enim ipsa est culpa?
              </p>
            </div>
            <div className="d-flex justify-content-start w-100 mt-4">
              <button className="btn border-button me-5">View Intro</button>
              <button className="btn darkButton ms-2">Explore Now</button>
            </div>
          </div>
          <div className="col-12 col-md-6 banner-right d-flex justify-content-center align-items-end  ">
            <img src={bannerGirl} alt="" className=" banner-girl-image " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerView;
