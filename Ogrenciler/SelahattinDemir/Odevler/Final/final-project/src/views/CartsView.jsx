import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/slice/productsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Request from "../utils/Request";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import SummaryCart from "../components/SummaryCart/SummaryCart";

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

        updatedProducts.forEach((product) => {
          dispatch(updateProduct(product));
        });

        const updatedUser = {
          ...data,
          carts: [],
        };
        request.put("", updatedUser);
        setData(updatedUser);
        toast.success("Items purchased successfully.");
      }
    } else {
      toast.error("Your cart is empty. Add some items.");
    }
  };

  const handleRemove = (itemId) => {
    const updatedCarts = data.carts.filter((item) => item.id !== itemId);

    request.put("", { ...data, carts: updatedCarts });
    setData({ ...data, carts: updatedCarts });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 0) {
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
        updatedItem.totalPrice = parseFloat(
          (updatedItem.price * updatedItem.quantity).toFixed(2)
        );
        return updatedItem;
      }
      return item;
    });

    request.put("", { ...data, carts: updatedCarts });
    setData({ ...data, carts: updatedCarts });
  };

  const calculateTotalPrice = (carts) => {
    let totalPrice = 0;
    carts?.forEach((item) => {
      totalPrice += parseFloat(
        item.totalPrice || item.price * item.quantity || 0
      );
    });
    return totalPrice.toFixed(2);
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
                <ShoppingCart
                  data={data}
                  handleRemove={handleRemove}
                  handleQuantityChange={handleQuantityChange}
                />
                <SummaryCart
                  data={data}
                  calculateTotalPrice={calculateTotalPrice}
                  handleBuy={handleBuy}
                />
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
