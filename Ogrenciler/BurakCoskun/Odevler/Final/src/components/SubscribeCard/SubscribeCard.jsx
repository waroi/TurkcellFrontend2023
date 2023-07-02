/* eslint-disable react/no-unescaped-entities */
import Button from "../Button/Button";

const SubscribeCard = () => {
  return (
    <div className="subscribeCard bg-primary">
      <div className="container py-3 px-4">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h5 className="text-white fw-bold">
              Register Now So You Don't Miss Our Programs
            </h5>
          </div>
          <div className="col-lg-7 bg-white inputCard py-2">
            <div className="d-flex flex-column flex-lg-row">
              <input
                type="text"
                className="flex-grow-1 mb-2 mb-lg-0 py-3 px-4 me-lg-2"
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <Button text="Subscribe" bgColor="primary" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
