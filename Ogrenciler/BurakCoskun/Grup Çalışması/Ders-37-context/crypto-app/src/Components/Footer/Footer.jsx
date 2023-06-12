import { useCustomContext } from "../../context/Context";

const Footer = () => {
  const { theme } = useCustomContext();
  return (
    <footer
      className={`${
        theme === "dark" ? "bg-dark" : "bg-white"
      } text-center text-lg-start text-muted py-5 mt-5 px-3`}
    >
      <section
        className={`container d-flex justify-content-center justify-content-lg-between p-4 border-bottom ${
          theme === "dark" ? " text-white" : "text-dark"
        } `}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <div
        className={`${
          theme === "dark" ? "text-white" : "text-dark"
        } container text-center text-md-start mt-5`}
      >
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>
              Coin
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, suscipit?
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="/list" className="text-reset">
                List of Coins
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-2"></i>
              New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
