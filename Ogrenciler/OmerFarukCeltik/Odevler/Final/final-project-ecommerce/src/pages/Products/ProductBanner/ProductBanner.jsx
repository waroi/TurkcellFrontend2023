import styles from "./style.module.css"
import { Link } from 'react-router-dom'
const ProductBanner = () => {
  return (
    <div className='container mt-6'>
      <div className={`row flex-column-reverse position-relative flex-lg-row bg-secondary ${styles.bannerArea} overflow-hidden`}>
        <div className={`col-12 col-lg-7 align-self-end`}>
          <div className='d-flex justify-content-center'>
          <img src="../../../images/png3.png" className={`mt-0 mt-lg-36 ps-xxl-100 ${styles.imgContent}`} />
          </div>
        </div>
        <div className={`col-12 col-lg-5 position-relative text-lg-end text-lg-end ps-3 pe-lg-6 pb-lg-6`}>
          <div className={`${styles.textArea} z-1` }>
          <div className='mt-6'>
            <span className={`h1 fw-bolder ${styles.headerContent}`}>One More Friend</span>
          </div>
          <div className={`h1 fw-bold display-36  position-relative ${styles.textContent}`}>Thousand More Fun!</div>
          <p className={ ` mt-4 ps-lg-4 display-10 ${styles.paragraphContent}`}>
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className='mt-34'>
            <Link to="/login" className={`${styles.textContent} ${styles.btnOutline}  btn rounded-pill py-2 me-3 px-175`}>View Intro <i className="fa-regular fa-circle-play ms-1"></i></Link>
            <Link to="/login" className={`btn rounded-pill py-2 px-175 ${styles.btnNormal}`}>Explore Now</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductBanner