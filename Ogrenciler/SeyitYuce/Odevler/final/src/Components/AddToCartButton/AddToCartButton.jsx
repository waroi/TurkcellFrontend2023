import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const AddToCartButton = ({ product }) => {
  const user = useSelector((state) => state.user);
  // const userId = useSelector((state) => state.user[0].id);
  const userId = user && user[0]?.id;

  // console.log(user);
  // console.log(userId);

  const handleAddToCart = () => {
    fetch(`http://localhost:3000/users?id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data[0];

        const newItem = {
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          rating: product.rating.rate,
          stock: product.stock,
          quantity: 1,
        };

        const existingItemIndex = user.cart.findIndex(
          (item) => item.id === newItem.id
        );

        if (existingItemIndex !== -1) {
          const existingItem = user.cart[existingItemIndex];
          if (existingItem.quantity < existingItem.stock) {
            existingItem.quantity += 1;
            toast.success("Item quantity increased", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          } else {
            toast.error("Maximum stock reached for this item", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            return;
          }
        } else {
          newItem.quantity = 1;
          user.cart.push(newItem);
          toast.success("Item added to cart", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }

        fetch(`http://localhost:3000/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((updatedData) => {
            console.log(updatedData.cart);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
  };

  return (
    <div>
      {user && userId ? (
        <>
          <h3>{product.name}</h3>
          <button className="btn btn-danger" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <ToastContainer />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddToCartButton;
