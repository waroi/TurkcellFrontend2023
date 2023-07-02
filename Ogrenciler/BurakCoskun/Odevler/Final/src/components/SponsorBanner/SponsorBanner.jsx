import Button from "../Button/Button";

const SponsorBanner = () => {
  return (
    <div className="container sponsorBanner my-5 position-relative d-none d-lg-block">
      <div className="row px-5 ">
        <div className="col-12 col-lg-6 text-primary position-relative ">
          <div className="rectangle-1 position-absolute"></div>
          <div className="rectangle-2 position-absolute"></div>
          <div className="bannerContent ">
            <h1 className="fw-bold display-5 mt-4 text-primary">The Biggest</h1>
            <h2 className="fw-bold mb-3 text-primary">Online Store</h2>
            <p className="text-dark mb-3">
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
          <img src="./bannerImage2.png" alt="Banner" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;
