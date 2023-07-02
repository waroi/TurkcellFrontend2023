import seller1 from "../../assets/seller-1.svg";

export function Sellers() {
  return (
    <div className="row d-flex align-items-center justify-content-center mt-3 mb-4 sellers">
      <div className="col-3 text-center">
        <img src={seller1} alt="logo" />
      </div>
      <div className="col-3 text-center">
        <img src={seller1} alt="logo" />
      </div>
      <div className="col-3 text-center">
        <img src={seller1} alt="logo" />
      </div>
      <div className="col-3 text-center">
        <img src={seller1} alt="logo" />
      </div>
    </div>
  );
}
