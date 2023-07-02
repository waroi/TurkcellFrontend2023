import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function ShoppingCart({ data, handleRemove, handleQuantityChange }) {
  return (
    <div className="col-lg-8">
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
          <h6 className="mb-0 text-muted">{data.carts?.length} items</h6>
        </div>
        <hr className="my-4" />

        {data.carts && data.carts.length > 0 ? (
          data.carts.map((item) => (
            <div
              key={item.id}
              className="row mb-4 d-flex justify-content-between align-items-center"
            >
              <div className="col-lg-2">
                <img
                  src={item.image}
                  className="img-fluid rounded-3"
                  alt="Cotton T-shirt"
                />
              </div>
              <div className="col-lg-3 my-3 my-lg-0 text-center">
                <h6 className="text-muted">{item.category}</h6>
                <h6 className="text-black mb-0">{item.title}</h6>
              </div>
              <div className="col-lg-3 d-none d-lg-flex">
                <button
                  className="btn btn-link px-2"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  <i className="bi bi-dash"></i>
                </button>

                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  value={item.quantity === 0 ? "" : item.quantity}
                  type="number"
                  className="form-control px-1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                  }
                />

                <button
                  className="btn btn-link px-2"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 offset-lg-1 d-none d-lg-flex">
                <h6 className="mb-0">
                  €{item.totalPrice || item.price * item.quantity || 0}
                </h6>
              </div>
              <div className="col-lg-1 text-end d-none d-lg-flex">
                <button
                  className="text-muted bg-transparent border-0"
                  onClick={() => handleRemove(item.id)}
                >
                  <i className="bi bi-x fs-3"></i>
                </button>
              </div>
              <div className="d-flex d-lg-none justify-content-between align-items-center">
                <div className="d-flex me-0 pe-0">
                  <button
                    className="btn btn-link px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    <i className="bi bi-dash"></i>
                  </button>

                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    value={item.quantity === 0 ? "" : item.quantity}
                    type="number"
                    className="form-control shopping-input px-1"
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 0
                      )
                    }
                  />

                  <button
                    className="btn btn-link px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <div className="d-flex w-75 ms-3">
                  <h6 className="mb-0">
                    €{item.totalPrice || item.price * item.quantity || 0}
                  </h6>
                </div>
                <div className="text-end d-flex">
                  <button
                    className="text-muted bg-transparent border-0"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="bi bi-x fs-3"></i>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Sepetiniz boş.</div>
        )}

        <hr className="my-4" />

        <div className="pt-0 pt-lg-5">
          <h6 className="mb-0">
            <Link to="/" className="text-body">
              <i className="bi bi-arrow-left me-2"></i>
              Back to shop
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  data: Proptypes.object.isRequired,
  handleRemove: Proptypes.func.isRequired,
  handleQuantityChange: Proptypes.func.isRequired,
};

export default ShoppingCart;
