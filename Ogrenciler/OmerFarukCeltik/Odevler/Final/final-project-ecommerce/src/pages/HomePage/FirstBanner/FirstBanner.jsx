import React from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom'
const FirstBanner = () => {
  return (
    <div className='container mt-6'>
      <div className={`row flex-column-reverse position-relative flex-lg-row bg-primary ${styles.bannerArea} overflow-hidden`}>
        <div className={`col-12 col-lg-6 ${styles.imgArea}`}>
          <div className='d-flex justify-content-center'>
            <img src="../../../images/png2.png" alt="" className={`mt-36 ${styles}`} />
          </div>
        </div>
        <div className={`col-12 col-lg-6 position-relative text-center text-lg-end pt-2 pe-6`}>
          <div className={`${styles.textArea} z-1`}>
            <div className='mt-36 mb-2'>
              <span className={`h1 fw-bolder display-52 text-primary  ${styles.textContent}`}>One More Friend</span>
            </div>
            <div className={`h1 fw-bold display-36 text-primary position-relative ${styles.textContent}`}>Thousand More Fun!</div>
            <p className={`text-primary mt-4 ps-lg-4 ${styles.textContent}`}>
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className='mt-34'>
              <Link to="/login" className={`${styles.textContent} btn btn-outline-primary rounded-pill py-2 me-3 px-175`}>View Intro <i className="fa-regular fa-circle-play ms-1"></i></Link>
              <Link to="/products" className={`btn btn-primary rounded-pill py-2 px-175 ${styles.textContent}`}>Explore Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstBanner