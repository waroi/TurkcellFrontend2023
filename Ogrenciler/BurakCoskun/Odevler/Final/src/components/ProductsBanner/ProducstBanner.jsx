import Button from "../Button/Button";

const ProductsBanner = () => {
  return (
    <div className="productsBanner position-relative my-5">
      <div className="row flex-lg-row-reverse">
        <div className="col-12 col-lg-6 text-lg-center position-relative mt-5">
          <div className="rectangle-1 position-absolute"></div>
          <div className="bannerContent ">
            <h1 className="fw-bold mb-1 ">One Step</h1>
            <h2 className="fw-bold mb-5 ">To Get Your Dream Product</h2>
            <p className="mb-5 fs-6 fw-bold text-lg-end">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum quisquam, quo nesciunt quam quibusdam beatae officiis
              quaerat dolor vero eveniet odio non tempora provident, natus eius
              cumque sunt doloribus.
            </p>
            <Button
              text={[
                "View Intro",
                <img
                  src="icons/Play_Circle-white.png"
                  className="ms-2 d-none d-lg-inline-block"
                  alt="Play Circle"
                  key="whiteImage"
                />,
                <img
                  src="icons/Play_Circle.png"
                  className="ms-2 d-lg-none"
                  alt="Play Circle"
                  key="image"
                />,
              ]}
              onClick={() => {}}
              bgColor="outline-light"
            />

            <Button text="Explore Now" onClick={() => {}} bgColor="light" />
          </div>
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <img
            className="bannerImage img-fluid"
            src="./productsBannerImage.png"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
