import Proptypes from "prop-types";

function SummaryCart({ data, calculateTotalPrice, handleBuy }) {
  return (
    <div className="col-lg-4 bg-grey">
      <div className="p-5">
        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-4">
          <h5 className="text-uppercase">items {data.carts?.length}</h5>
          <h5>€ {calculateTotalPrice(data.carts)}</h5>
        </div>

        <h5 className="text-uppercase mb-3">Shipping</h5>

        <div className="mb-4 pb-2">
          <select className="select">
            <option value="1">Standard-Delivery- €5.00</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </div>

        <h5 className="text-uppercase mb-3">Give code</h5>

        <div className="mb-5">
          <div className="form-outline">
            <input
              type="text"
              id="form3Examplea2"
              className="form-control  form-control-lg"
              placeholder="Enter a discount code"
            />
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between mb-5">
          <h5 className="text-uppercase">Total price</h5>
          <h5>€ {calculateTotalPrice(data.carts)}</h5>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn-nav "
            data-mdb-ripple-color="dark"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

SummaryCart.propTypes = {
  data: Proptypes.object.isRequired,
  calculateTotalPrice: Proptypes.func.isRequired,
  handleBuy: Proptypes.func.isRequired,
};

export default SummaryCart;
