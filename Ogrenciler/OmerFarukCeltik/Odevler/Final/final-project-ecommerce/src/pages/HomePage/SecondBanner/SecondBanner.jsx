import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
const SecondBanner = () => {
  return (
    <div className='container mt-6 d-none d-lg-block'>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-end py-4 mt-3">
          <div className='d-flex align-items-center'>
            <h6 className="h6">Proud Be Part Of</h6>
            <h4 className="h4 text-capitalize fw-semibold ms-2">Sellers</h4>
          </div>
          <div>
            <Link to="/products" className='btn btn-outline-primary rounded-pill py-2  px-175'><span className=' fw-semibold'>
              View all our sellers</span> <i className="fa-solid fa-chevron-right ms-1 fa-2xs"></i></Link>
          </div>
        </div>
        <div className=" col-12 pb-36 mb-1">
          <div className='row align-items-center'>
            <div className='col-2'>
              <img src="../../../images/image-4.png" className='mx-auto d-flex' alt="" />
            </div>
            <div className='col-2'>
              <img src="../../../images/image 6.png" className='mx-auto d-flex' alt="" />
            </div>
            <div className='col-2'>
              <img src="../../../images/image 7.png" className='mx-auto d-flex' alt="" />
            </div>
            <div className='col-2'>
              <img src="../../../images/image 8.png" className='mx-auto d-flex' alt="" />
            </div>
            <div className='col-2'>
              <img src="../../../images/image 9.png" className='mx-auto d-flex' alt="" />
            </div>
            <div className='col-2'>
              <img src="../../../images/image 10.png" className='mx-auto d-flex' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={`row flex-column-reverse position-relative flex-lg-row ${styles.bannerArea} overflow-hidden`}>
        <div className={`col-12 col-lg-6 position-relative text-start pt-36 ps-6 `}>
          <div className={`${styles.textArea} z-1`}>
            <div className='mt-36'>
              <span className={`h1 fw-bolder display-52 text-primary ${styles.textContent}`}>One More Friend</span>
            </div>
            <div className={`h1 fw-bold display-36 text-primary position-relative ${styles.textContent}`}>Thousand More Fun!</div>
            <p className={`text-primary display-10 mt-4 ${styles.textContent}`}>
              Adopt a pet and give it a home, <br />
              it will be love you back unconditionally.
            </p>
            <div className='mt-34'>
              <Link to="/login" className={`btn btn-primary rounded-pill py-2 px-175 ${styles.textContent}`}>Explore Now</Link>
              <Link to="/login" className={`${styles.textContent} btn btn-outline-primary rounded-pill py-2 ms-3 px-175`}>View Intro <i className="fa-regular fa-circle-play ms-1"></i></Link>
            </div>
          </div>
        </div>
        <div className={`col-12 col-lg-6 ${styles.imgArea}`}>
          <div className='d-flex justify-content-center'>
            <img src="../../../images/bannerpng.png" alt="" className={` img-fluid ${styles}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondBanner