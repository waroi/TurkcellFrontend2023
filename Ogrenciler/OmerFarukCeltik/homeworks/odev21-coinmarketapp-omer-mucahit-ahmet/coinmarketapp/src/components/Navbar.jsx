import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        <div className="container-fluid">
          <div className="row w-100 justify-content-between">
            <div className="col-9 text-start">
              <Link className="navbar-brand" to="/">Navbar</Link>
            </div>
            <button class="navbar-toggler col-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarToggler" className="col-3 collapse navbar-collapse">
              <div className='navbar-nav d-flex w-100 justify-content-end'>
              <Link className="nav-item nav-link" to="/coinpage">CoinPage</Link>
              <Link className="nav-item nav-link" to="/aboutus">About Us</Link>
              <Link className="nav-item nav-link" to="/faq">F.A.Q</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar