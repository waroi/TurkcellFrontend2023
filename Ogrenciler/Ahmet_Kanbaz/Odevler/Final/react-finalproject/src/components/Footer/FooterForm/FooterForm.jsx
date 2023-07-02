/* eslint-disable react/no-unescaped-entities */
const FooterForm = () => {
  return (
    <div className="container footerForm">
      <div className="row align-items-center">
        <div className="col-lg-4 col-12">
          <h4 className="fw-bold text-capitalize">
            Register now so you don't miss our programs
          </h4>
        </div>
        <div className="col-lg-8 col-12 bg-white formWrapper">
          <div className="row gap-2 gap-lg-0">
            <div className="col-lg-9">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email"
                />
              </form>
            </div>
            <div className="col-lg-3">
              <button className="btn" type="submit">
                Subcribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
