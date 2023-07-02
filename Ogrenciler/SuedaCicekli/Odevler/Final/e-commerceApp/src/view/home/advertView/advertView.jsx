import '../../../style/style.scss'
import ArrowRight from '../../../assets/icon/ArrowRight.png'
import './advertStyle.scss'

const AdvertView = () => {
  return (
    <div className='advert-view'>
      <div className="container">
        <div className='d-flex justify-content-between'>
          <p className="text-dark">Proud to be part of <span className="fw-bold text-dark fs-4 ms-2">TrendFit</span></p>
          <button className="btn border-button ms-5 bg-white ">View all our sellers <img className="arrow-right" src={ArrowRight} alt="arrowRight" /></button>
        </div>
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <div className="col-lg-2 col-md-4 mt-3"><img className="advertBrandLogo" src="https://files.sikayetvar.com/lg/cmp/23/230126.png?1637239020" alt="pasaj" /></div>
          <div className="col-lg-2 col-md-4 mt-3"> <img className="advertBrandLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="h&M" /></div>
          <div className="col-lg-2 col-md-4 mt-3 "> <img className="advertBrandLogo cat-food" src="https://logospng.org/download/whiskas/whiskas-4096.png" alt="Skechers" /></div>
          <div className="col-lg-2 col-md-4 mt-3 "> <img className="advertBrandLogo" src="https://1000logos.net/wp-content/uploads/2017/03/Levis-symbol.jpg" alt="levis" /></div>
          <div className="col-lg-2 col-md-4 mt-3 "><img className="advertBrandLogo" src="https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png" alt="calvinKlein" /></div>
          <div className="col-lg-2 col-md-4 mt-3">   <img className="advertBrandLogo" src="https://cdn.webrazzi.com/uploads/2022/01/atmosware-logo-528.jpg" alt="atmosware" /></div>
        </div>

      </div>
    </div>
  )
}

export default AdvertView
