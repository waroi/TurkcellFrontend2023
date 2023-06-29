import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/slice/productsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Request from "../utils/Request";

function CartsView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const request = new Request(`http://localhost:3004/users/${id}`);
  const [data, setData] = useState([]);

  useEffect(() => {
    request.get().then((res) => setData(res));
  }, []);

  const handleBuy = () => {
    if (data.carts && data.carts.length > 0) {
      // Check if all items have sufficient quantity
      const insufficientItems = data.carts.filter(
        (item) => item.quantity > item.rating?.count
      );

      if (insufficientItems.length > 0) {
        // Display error message for insufficient quantity
        toast.error(
          "Some items are out of stock. Remove or update the quantity."
        );
      } else {
        // Reduce the stock of each item in the cart
        const updatedProducts = data.carts.map((item) => {
          const updatedItem = {
            ...item,
            rating: {
              ...item.rating,
              count: item.rating?.count - item.quantity,
            },
          };
          return updatedItem;
        });

        console.log(updatedProducts);

        // Update the stock in the database
        updatedProducts.forEach((product) => {
          console.log(product);
          dispatch(updateProduct(product));
        });

        // Update the stock in localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        user.carts.forEach((cartItem) => {
          const productIndex = updatedProducts.findIndex(
            (product) => product.id === cartItem.id
          );
          if (productIndex !== -1) {
            cartItem.rating.count = updatedProducts[productIndex].rating?.count;
          }
        });
        localStorage.setItem("user", JSON.stringify(user));

        // Clear the carts array
        const updatedUser = {
          ...data,
          carts: [],
        };
        request.put("", updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Update the state
        setData(updatedUser);

        // Display success message
        toast.success("Items purchased successfully.");
      }
    } else {
      // Display error message for empty cart
      toast.error("Your cart is empty. Add some items.");
    }
  };

  const handleRemove = (itemId) => {
    const updatedCarts = data.carts.filter((item) => item.id !== itemId);

    // API'yi güncelle
    request.put("", { ...data, carts: updatedCarts });

    // localStorage'ı güncelle
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...data,
        carts: updatedCarts,
      })
    );

    // State'i güncelle
    setData({ ...data, carts: updatedCarts });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemove(itemId); // Call handleRemove function if quantity is less than 1
      return;
    }

    const item = data.carts.find((item) => item.id === itemId);
    if (item && newQuantity > item.rating?.count) {
      toast.error(
        "Insufficient quantity. Please update the quantity or remove the item."
      );
      return;
    }

    const updatedCarts = data.carts.map((item) => {
      if (item.id === itemId) {
        const updatedItem = { ...item, quantity: newQuantity };
        updatedItem.totalPrice = updatedItem.price * updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });

    // Verileri API'ye güncelle
    request.put("", { ...data, carts: updatedCarts });

    // Verileri localStorage'a güncelle
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...data,
        carts: updatedCarts,
      })
    );

    // State'i güncelle
    setData({ ...data, carts: updatedCarts });
  };

  const calculateTotalPrice = (carts) => {
    let totalPrice = 0;
    carts?.forEach((item) => {
      totalPrice += item.totalPrice || item.price * item.quantity || 0;
    });
    return totalPrice;
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div
            className="card card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">
                        {data.carts?.length} items
                      </h6>
                    </div>
                    <hr className="my-4" />

                    {data.carts && data.carts.length > 0 ? (
                      data.carts.map((item) => (
                        <div
                          key={item.id}
                          className="row mb-4 d-flex justify-content-between align-items-center"
                        >
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{item.category}</h6>
                            <h6 className="text-black mb-0">{item.title}</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
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
                              value={item.quantity}
                              type="number"
                              className="form-control form-control-sm px-1"
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value)
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
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">
                              € {item.totalPrice || item.price * item.quantity}
                            </h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button
                              className="text-muted bg-transparent border-0"
                              onClick={() => handleRemove(item.id)}
                            >
                              <i className="bi bi-x fs-3"></i>
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center">Sepetiniz boş.</div>
                    )}

                    <hr className="my-4" />

                    <div className="pt-5">
                      <h6 className="mb-0">
                        <Link to="/" className="text-body">
                          <i className="bi bi-arrow-left me-2"></i>
                          Back to shop
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 bg-grey">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">
                        items {data.carts?.length}
                      </h5>
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
                          className="form-control form-control-lg"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CartsView;
