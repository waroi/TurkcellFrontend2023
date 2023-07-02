import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style.module.css"
const UsefulArea = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-end pt-6 pb-4">
          <div>
            <h6 className="h6">You already know ?</h6>
            <h4 className="h4 text-capitalize fw-semibold">Useful pet knowledge</h4>
          </div>
          <div>
            <Link to="/products" className='btn btn-outline-primary rounded-pill py-2 px-175'>View More <i className="fa-solid fa-chevron-right ms-1 fa-2xs"></i></Link>
          </div>
        </div>
      </div>
      <div className="row gy-4 pb-6">
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow p-2 rounded-3 h-100">
            <img src="../../../images/cardimg1.jpg" className="card-img-top img-fluid rounded-3" alt="..." />
            <div className="card-body">
              <span className={`rounded-pill text-white ${style.usefulCardText} `}>Knowledge</span>
              <h5 className="card-title fs-6 fw-semibold mt-2">What is a Pomeranian? How to Identify Pomeranian Dogs</h5>
              <p className="card-text fs-6">The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow p-2 rounded-3 h-100">
            <img src="../../../images/cardimg3.jpg" className="card-img-top img-fluid rounded-3" alt="..." />
            <div className="card-body">
              <span className={`rounded-pill text-white ${style.usefulCardText} `}>Knowledge</span>
              <h5 className="card-title fs-6 fw-semibold mt-2">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h5>
              <p className="card-text fs-6">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog..</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow p-2 rounded-3 h-100">
            <img src="../../../images/cardimg2.jpg" className="card-img-top img-fluid rounded-3" alt="..." />
            <div className="card-body">
              <span className={`rounded-pill text-white ${style.usefulCardText} `}>Knowledge</span>
              <h5 className="card-title fs-6 fw-semibold mt-2">Dog Diet You Need To Know</h5>
              <p className="card-text fs-6">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsefulArea