import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='position-relative overflow-hidden'>
      <div className="container">
        <div className="row">
          <div className={`col-12 col-lg-5 mt-180`}>
            <div className={style.textContainer}></div>
            <div className='position-relative'>
              <div className={`z-1 ${style.textBox}`}></div>
               <span className={`h1 fw-bolder text-primary  z-3 ${style.headerText} ${style.littleBox1}`}>One More Friend</span></div>
            <div className={`h1 fw-bold display-46 text-primary ${style.headerText} ${style.littleBox2}`}>Thousand More Fun!</div>
            <p className=' text-primary mt-4 pe-lg-4'>
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className='mt-34'>
              <Link to="/login" className='btn btn-outline-primary rounded-pill py-2 me-3 px-175'>View Intro <i className="fa-regular fa-circle-play ms-1"></i></Link>
              <Link to="/products" className='btn btn-primary rounded-pill py-2 px-175'>Explore Now</Link>
            </div>
          </div>
          <div className="col-12 col-lg-7 position-relative d-flex justify-content-center">
            <div className={`${style.imageBox} z-1`}>
            <img src="../../../images/png1.png" className={`mt-100 ${style.imageContent}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header