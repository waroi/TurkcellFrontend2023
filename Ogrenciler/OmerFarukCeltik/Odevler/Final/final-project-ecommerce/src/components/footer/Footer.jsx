import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className={`py-36 pt-lg-80 ${style.footerBody}`}>
        <div className="container">
          <div className="row bg-primary p-3 rounded-4">
            <div className="col-12 col-lg-4">
              <div className="fs-5 text-white fw-semibold text-start pb-3">
                Register now so you don't miss our programs
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className={`row ${style.inputArea}`}>
                <div className="col-12 col-lg-9">
                  <input type="text" className={`mb-14 mb-lg-0 ${style.inputStyle}`} placeholder='Enter Your E-mail' />
                </div>
                <div className="col-12 col-lg-3">
                  <div className='btn btn-primary w-100 px-175 px-lg-2 rounded-3 py-14'>Subcribe Now</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-column flex-lg-row justify-content-lg-between py-36">
            <div className="col-12 col-lg-4 d-flex justify-content-between fw-semibold text-primary">
              <Link className='text-decoration-none' to="/">Home</Link>
              <Link className='text-decoration-none' to="/category">Category</Link>
              <Link className='text-decoration-none' to="/about">About</Link>
              <Link className='text-decoration-none' to="/contact">Contact</Link>
            </div>
            <div className="col-12 col-lg-3 text-black mt-4 mt-lg-0 d-flex gap-5 justify-content-center justify-content-lg-end">
              <a href=""><i className="fa-brands fa-facebook fa-lg"></i></a>
              <a href=""><i className="fa-brands fa-instagram fa-lg"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
              <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="row flex-column flex-lg-row align-items-lg-center pt-36 border-1 border-top">
            <div className="col-12 col-lg-4 order-2 order-lg-first text-decoration-none text-center text-lg-start">
              <a href="" className='text-decoration-none display-10 me-3 '>Terms of Service</a>
              <a href="" className='text-decoration-none display-10 '>Privacy Policy</a>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              <img src="../../../images/Frame.svg" className='order-1 mb-4 mb-lg-0 order-lg-2' alt="" />
            </div>
            <div className="col-12 col-lg-4 mt-2 mt-lg-0  order-3 order-lg-3 ">
            <p className='display-10 text-center mb-lg-0 text-lg-end'>© 2022 Monito. All rights reserved.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer