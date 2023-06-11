import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mt-4">
            <h5 className="text-white fw-bold">Bireysel</h5>
            <h6 className="text-white fst-italic fw-light">M.Furkan UYGUR</h6>
            <ul className="list p-0 mt-4">
              <li className="list-group-item text-white mt-2">
                <a
                  href="https://github.com/mfurkanuygur"
                  className="text-decoration-none"
                >
                  <i className="fa-brands fa-github fa-xl me-3"></i>Github
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a
                  href="https://mfurkanuygur.github.io"
                  className="text-decoration-none"
                >
                  <i className="fa-solid fa-user fa-xl me-3"></i>Hakkımda
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a
                  href="https://www.instagram.com/mfrknu/"
                  className="text-decoration-none"
                >
                  <i className="fa-brands fa-instagram fa-xl me-3"></i>Instagram
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a
                  href="https://www.linkedin.com/in/mfurkanuygur1"
                  className="text-decoration-none"
                >
                  <i className="fa-brands fa-linkedin fa-xl me-3"></i>Linkedin
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a
                  href="mailto: u.fe.uygur@gmail.com"
                  className="text-decoration-none"
                >
                  <i className="fa-brands fa-google fa-xl me-3"></i>
                  u.fe.uygur@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mt-4">
            <h5 className="text-white">Kurumsal</h5>
            <ul className="list p-0 mt-3">
              <li className="list-group-item text-white mt-2">
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-info-circle fa-xl me-3"></i>Biz
                  Kimiz?
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-mug-hot fa-xl me-3"></i>Resmi
                  Tatiller 2023
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-shield-halved fa-xl me-3"></i>Kalite
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-file-pen fa-xl me-3"></i>KVKK
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a href="#" className="text-decoration-none">
                  <i className="fa-solid fa-book fa-xl me-3"></i>İşlem Rehberi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mt-4">
            <h5 className="text-white">Diğer Hizmetlerimiz</h5>
            <ul className="list p-0 mt-3">
              <li className="list-group-item text-white mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-ship fa-xl me-3"></i>Gemi Turları
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-plane fa-xl me-3"></i>Yurtdışı
                  Turları
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-car fa-xl me-3"></i>Araç Kiralama
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-money-bill-transfer fa-xl me-2"></i>
                  Şirketlere Özel Transfer
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a href="" className="text-decoration-none fw-bold">
                  <i className="fa-solid fa-turkish-lira fa-xl me-3 ms-2"></i>
                  <span className="text-danger fw-bold">fu</span>para
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 mt-4">
            <h5 className="text-white">Diğer Hizmetlerimiz</h5>
            <ul className="list p-0 mt-3">
              <li className="list-group-item text-white mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-phone fa-xl me-2 ms-1"></i>(123) 456
                  78 90
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-brands fa-google fa-xl me-3"></i>e-Mail
                </a>
              </li>
              <li className="list-group-item text-white mt-2">
                <a
                  href="mailto:u.fe.uygur@gmail.com"
                  className="text-decoration-none"
                >
                  <i className="fa-solid fa-location fa-xl me-3"></i>
                  Sivas/Biryer
                </a>
              </li>
              <li className="list-group-item text-white  mt-2">
                <a href="" className="text-decoration-none">
                  <i className="fa-solid fa-highlighter fa-lg me-3 "></i>Öneri
                  Formu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center mt-5">
          <p className="text-white fst-italic fs-2">
            Turkcell Frontend Bootcamp Vize 1 Projesidir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
