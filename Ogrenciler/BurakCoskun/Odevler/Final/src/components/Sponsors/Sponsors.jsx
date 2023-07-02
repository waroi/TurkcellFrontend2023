import Button from "../Button/Button";

const Sponsors = () => {
  return (
    <div className="container py-5 d-none d-lg-block">
      <div className="row">
        <div className="col-lg-9">
          <p>
            Proud to be part of{" "}
            <strong className="text-primary fs-4">Product Sellers</strong>
          </p>
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <Button
            text={[
              "View more",
              <img
                src="icons/Chevron_Right_MD.png"
                className="ms-2"
                alt="Right Arrow"
                key="image"
              />,
            ]}
            onClick={() => {}}
            bgColor="outline-primary"
          />
        </div>
      </div>
      <div className="d-flex mt-5 justify-content-between sponsor-image">
        <img src="/Sponsor-1.png" alt="Sponsor-1" />
        <img src="/Sponsor-2.png" alt="Sponsor-2" />
        <img src="/Sponsor-3.png" alt="Sponsor-3" />
        <img src="/Sponsor-4.png" alt="Sponsor-4" />
        <img src="/Sponsor-5.png" alt="Sponsor-5" />
        <img src="/Sponsor-6.png" alt="Sponsor-6" />
        <img src="/Sponsor-7.png" alt="Sponsor-7" />
      </div>
    </div>
  );
};

export default Sponsors;
