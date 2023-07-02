const FooterCopyright = () => {
  return (
    <div className="container py-4">
      <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 order-2 order-lg-0 ">
          <p>All Rights Reserved</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 order-0 order-lg-1">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="col-lg-4 col-md-12 align-self-center order-1 order-lg-2">
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
