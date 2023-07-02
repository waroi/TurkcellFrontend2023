import BannerMan from '../../../assets/bannerImg/bannerMan.png'
import "./ProductBannerStyle.scss"

const ProductBannerView = () => {
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-3">
            <li className="breadcrumb-item "><a href="/">Home</a></li>
            <li className="breadcrumb-item "><a href="/product">Product</a></li>

          </ol>
        </nav>
        <div className="banner-area">
          <div className="d-flex content-area flex-wrap">
            <div className="col-12 col-md-6 d-flex align-items-end justify-content-center">
              <img src={BannerMan} alt="banner-man" className='banner-man' />
            </div>
            <div className="col-12 col-md-6 my-5">
              <div className='text-light text-end me-5'>
                <h1 className='text-light fw-bold banner-header m-0'>Trending Products</h1>
                <h2 className='text-light fw-bold banner-title'>To be trending !</h2>
                <p className='banner-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus velit omnis quae,
                  vel unde, ex placeat illum deserunt sequi provident excepturi ipsam. Sunt et blanditiis
                  atque, enim ipsa est culpa?</p></div>
              <div className="d-flex justify-content-center w-100 mt-4">
                <button className="btn border-button me-5 bg-dark text-light border-light">View Intro</button>
                <button className="btn darkButton ms-2 bg-light text-dark">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBannerView
