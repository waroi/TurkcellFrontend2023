import Cards from "./Cards/Cards";
import Button from "../Button/Button";

const UsefulKnowledges = () => {
  return (
    <div className="container py-5 knowledge">
      <div className="row">
        <div className="col-lg-9">
          <p>You Already know ?</p>
          <h4 className="text-primary fw-bold">Useful Knowledge</h4>
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
      <div className="row my-4 gy-5">
        {[1, 2, 3].map((item, index) => (
          <div className="col-lg-4 " key={index}>
            <Cards />
          </div>
        ))}
      </div>
      <div className="d-block d-lg-none">
        <div className="mobileViewMore">
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
            width="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default UsefulKnowledges;
