const FooterSocial = () => {
  return (
    <div className="container socials py-4 mt-3">
      <div className="row">
        <div className="col-lg-10">
          <div className="footerNav">
            <ul className="list-unstyled d-flex justify-content-between justify-content-lg-start  ">
              <li className="me-lg-5">
                <a href="/">Home</a>
              </li>
              <li className="me-lg-5">
                <a href="/">Category</a>
              </li>
              <li className="me-lg-5">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 ">
          <div className="footerSocial d-flex justify-content-center">
            <a href="#" className="me-3 me-lg-4">
              <img src="/icons/Facebook - Negative.svg" alt="" />
            </a>
            <a href="#" className="me-3 me-lg-4">
              <img src="/icons/Twitter - Negative.svg" alt="" />
            </a>
            <a href="#" className="me-3 me-lg-4">
              <img src="/icons/Instagram - Negative.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/YouTube - Negative.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
