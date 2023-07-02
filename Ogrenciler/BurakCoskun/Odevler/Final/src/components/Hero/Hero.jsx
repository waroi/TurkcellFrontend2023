import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="row align-items-center gy-5 gx-0 p-5 p-lg-0">
        <div className="col-12 col-lg-6 text-primary position-relative">
          <div className="rectangle-1 position-absolute"></div>
          <div className="rectangle-2 position-absolute"></div>
          <div className="rectangle-3 position-absolute"></div>
          <div className="hero-content">
            <h1 className="fw-bold display-5 mb-1">One More Step</h1>
            <h2 className="fw-bold mb-5">Get Your Dream Product</h2>
            <p className="text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              laborum quisquam, quo nesciunt quam quibusdam beatae officiis
              quaerat dolor vero eveniet odio non tempora provident, natus eius
              cumque sunt doloribus.
            </p>
            <Button
              text={[
                "View Intro",
                <img
                  src="icons/Play_Circle.png"
                  className="ms-2"
                  alt="Play Circle"
                  key="image"
                />,
              ]}
              onClick={() => {}}
              bgColor="outline-primary"
            />

            <Button text="Explore Now" onClick={() => {}} bgColor="primary" />
          </div>
        </div>
        <div className="col-12 col-lg-6 position-relative">
          <img
            src="./heroImage.png"
            alt="Hero"
            className="img-fluid position-relative z-2"
          />
          <div className="rectangle-4 position-absolute"></div>
          <div className="rectangle-5 position-absolute"></div>
          <div className="rectangle-6 position-absolute"></div>
          <div className="rectangle-7 position-absolute"></div>
          <div className="rectangle-8 position-absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
