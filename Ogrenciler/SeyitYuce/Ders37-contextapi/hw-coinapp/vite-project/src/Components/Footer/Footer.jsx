import React from "react";

const Footer = () => {
  return (
    <footer className="text-white mt-5 py-2 bg-dark">
      <h5 className="text-center py-4">
        C4 Coin Market -Yatırım Tavsiyesi Değildir
      </h5>
      <div className="container my-2">
        <div className="row mx-auto">
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bolder">Contact Us</h6>
            <ul className="list-unstyled ms-2">
              <li>
                Phone:
                <a href="tel:1-800-CRYPTO-4U" className="text-white">
                  1-800-CRYPTO-4U
                </a>
              </li>
              <li>
                Email:
                <a
                  href="mailto:info@cryptoworld.com"
                  target="_blank"
                  className="text-white"
                >
                  info@cryptoworld.com
                </a>
              </li>
              <li>
                Address:
                <a
                  href="mailto:info@cryptoworld.com"
                  target="_blank"
                  className="text-white"
                >
                  Decentralized 
                </a>
              </li>

            </ul>
          </div><div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bolder">Customer Service</h6>
            <ul className="list-unstyled ms-2">
              <li>
                <a href="#" className="text-white">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="./faqs.html" className="text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bolder">About C4 Coin Market</h6>
            <ul className="list-unstyled ms-2">
              <li>
                <a href="./about-us.html" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Blog
                </a>
              </li>

            </ul>
          </div><div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bolder">Explore Cryptocurrencies</h6>
            <ul className="list-unstyled ms-2">
              <li>
                <a href="#" className="text-white">
                  All Cryptocurrencies
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  New Coins
                </a>
              </li>

              <li>
                <a href="#" className="text-white">
                  Popular Coins
                </a>
              </li>

            </ul>
          </div>
        </div>

      </div>
      <p className="text-center border-top pt-3 mt-3 border-light">
        &copy; {new Date().getFullYear()} C4 Coin Market. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
