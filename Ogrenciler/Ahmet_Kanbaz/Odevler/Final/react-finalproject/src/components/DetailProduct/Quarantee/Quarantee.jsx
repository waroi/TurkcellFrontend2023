import detailPageOne from "../../../assets/detailPage/detailPageOne.svg";
import detailPageTwo from "../../../assets/detailPage/detailPageTwo.svg";
const Quarantee = () => {
  return (
    <div className="my-3 d-flex flex-wrap justify-content-between quarantee">
      <div>
        <img src={detailPageOne} alt="" />
        <span className="ps-2 fw-bold lh-sm">
          100% health guarantee for pets
        </span>
      </div>
      <div>
        <img src={detailPageTwo} alt="" />
        <span className="fw-bold ps-2 lh-sm">
          100% guarantee of pet identification
        </span>
      </div>
    </div>
  );
};

export default Quarantee;
