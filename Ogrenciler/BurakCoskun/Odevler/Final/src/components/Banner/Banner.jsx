import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="container bg-primary rounded banner position-relative">
      <div className="row text-center flex-lg-row-reverse">
        <div className="col-12 col-lg-6 text-primary position-relative ">
          <div className="rectangle-1 position-absolute"></div>
          <div className="rectangle-2 position-absolute"></div>
          <div className="bannerContent ">
            <h1 className="fw-bold display-5 mb-1 text-primary">
              One More Step
            </h1>
            <h2 className="fw-bold mb-5 text-primary">
              To Get Your Dream Product
            </h2>
            <p className="text-dark mb-5">
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
        <div className="col-12 col-lg-6">
          <img src="./bannerImage.png" alt="Banner" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
