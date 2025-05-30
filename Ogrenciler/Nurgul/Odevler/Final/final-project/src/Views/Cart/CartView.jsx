import { useEffect, useState } from "react";
import { Container, Toast, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showRemoveToast, setShowRemoveToast] = useState(false);

  useEffect(() => {
    const cartLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const userId = cartLoggedInUser ? cartLoggedInUser.id : null;

    if (userId) {
      const userIndex = users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        setCartData(users[userIndex].cart);
      }
    }
  }, []);

  const updateCartData = (updatedCartData) => {
    const cartLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const userId = cartLoggedInUser ? cartLoggedInUser.id : null;

    if (userId) {
      const userIndex = users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        users[userIndex].cart = updatedCartData;
        setCartData(updatedCartData);
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  const handleUpdateDemand = (productId, demand) => {
    const product = cartData.find((item) => item.id === productId);

    if (product) {
      const updatedDemand = parseInt(demand, 10) || 0;
      const maxDemand = product.rating.count;

      if (updatedDemand === 0) {
        const updatedCartData = cartData.filter(
          (item) => item.id !== productId
        );
        updateCartData(updatedCartData);
      } else {
        const updatedCartData = cartData.map((item) =>
          item.id === productId
            ? { ...item, demand: Math.min(updatedDemand, maxDemand) }
            : item
        );
        updateCartData(updatedCartData);
      }
    }
  };

  const handleRemoveProduct = (productId) => {
    const updatedCartData = cartData.filter((item) => item.id !== productId);

    setShowRemoveToast(true);
    setToastMessage("Succesfully deleted item from cart");

    setTimeout(() => {
      setShowRemoveToast(false);
    }, 3000);

    updateCartData(updatedCartData);
  };

  const handleBuyAll = () => {
    const updatedCartData = cartData.filter((item) => item.demand > 0);
    const productsToUpdate = updatedCartData.map((item) => ({
      id: item.id,
      rating: { ...item.rating, count: item.rating.count - item.demand },
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
    }));
    setShowToast(true);
    setToastMessage("Succesfully bought all products in the cart!");

    Promise.all(
      productsToUpdate.map((product) =>
        fetch(`http://localhost:3000/products/${product.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
      )
    )
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((updatedProducts) => {
        fetch(`http://localhost:3000/carts/${userId}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            setCartData([]);
          })
          .catch((error) => {});
      })
      .catch((error) => {});
  };

  return (
    <>
      <Container>
        <h1 className="text-center">Cart</h1>
        <h2>Product Amount: {cartData.length}</h2>
        {cartData.length > 0 ? (
          <div className="d-flex flex-column">
            {cartData.map((item) => (
              <div
                className="d-flex mt-3 border p-3 rounded-3 bg-white"
                key={item.id}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="m-2"
                    style={{ width: "100px" }}
                  />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Stock Count: {item.rating.count}</p>
                    <input
                      style={{ width: "200px" }}
                      type="number"
                      min="0"
                      max={item.rating.count}
                      value={item.demand}
                      onChange={(e) =>
                        handleUpdateDemand(item.id, e.target.value)
                      }
                    />
                    {item.demand > 0 ? (
                      <Button
                        className="d-flex mt-3"
                        variant="danger"
                        onClick={() => handleRemoveProduct(item.id)}
                      >
                        Remove
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center">
              <Button
                onClick={handleBuyAll}
                className="w-25 mt-5"
                variant="primary"
              >
                Buy All
              </Button>
            </div>
          </div>
        ) : (
          <p>No items in the cart</p>
        )}
      </Container>
      <div className="d-flex justify-content-center">
        <Toast
          className="bg-success"
          show={showToast}
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </div>
      <div className="d-flex justify-content-center  mt-5">
        <Toast
          className="bg-danger"
          show={showRemoveToast}
          onClose={() => setShowRemoveToast(false)}
        >
          <Toast.Header>
            <strong className="me-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default Cart;
