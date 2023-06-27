import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartButton = ({ product }) => {
  const user = useSelector((state) => state.user);
  const userId = user[0].id;

  const [cartExists, setCartExists] = useState(false);

  const addToCart = () => {
    if (cartExists) {
      addProductToExistingCart();
    } else {
      createCartAndAddProduct();
    }
  };

  const addProductToExistingCart = () => {
    fetch(`http://localhost:5000/carts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        let cartId;
        let existingCartItems;

        // Check if cart exists for the user
        if (data.length > 0) {
          cartId = data[0].id;
          existingCartItems = data[0].items;
        } else {
          // If cart doesn't exist, create a new cart for the user
          cartId = data.length + 1; // Assign a new cartId
          existingCartItems = [];
        }

        const existingUserIndex = existingCartItems.findIndex(
          (user) => user.userId === userId
        );

        if (existingUserIndex !== -1) {
          // If the user already exists, find the user's items array
          const existingUser = existingCartItems[existingUserIndex];
          const existingItemIndex = existingUser.items.findIndex(
            (item) => item.productId === product.id
          );

          if (existingItemIndex !== -1) {
            // If the product already exists, update the quantity if it's less than the stock
            const existingItem = existingUser.items[existingItemIndex];
            const updatedQuantity = existingItem.quantity + 1;
            const stock = existingItem.stock;

            if (updatedQuantity <= stock) {
              existingItem.quantity = updatedQuantity;
            } else {
              console.log("Cannot add more than the available stock");
              return;
            }
          } else {
            // If the product doesn't exist, add it to the user's items
            const newItem = {
              productId: product.id,
              quantity: 1,
              stock: product.stock,
            };

            existingUser.items.push(newItem);
          }
        } else {
          // If the user doesn't exist, create a new user with the product as the item
          const newUser = {
            userId: userId,
            items: [
              {
                productId: product.id,
                quantity: 1,
                stock: product.stock,
              },
            ],
          };

          existingCartItems.push(newUser);
        }

        const updatedCartData = {
          id: cartId,
          userId: userId,
          items: existingCartItems,
        };

        fetch(`http://localhost:5000/carts/${cartId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCartData),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Product added to cart");
              toast.success("Product added to cart", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
              });
            } else {
              console.error(
                "Error adding product to cart:",
                response.statusText
              );
            }
          })
          .catch((error) => {
            console.error("Error adding product to cart:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
      });
  };

  const createCartAndAddProduct = () => {
    const cartData = {
      userId: userId,
      items: [
        {
          productId: product.id,
          quantity: 1,
          stock: product.stock,
        },
      ],
    };

    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Cart created");
          setCartExists(true);
        } else {
          console.error("Error creating cart:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error creating cart:", error);
      });
  };

  return (
    <>
      <button className="btn btn-danger" onClick={addToCart}>
        Add to cart
      </button>
      <ToastContainer />
    </>
  );
};

export default AddToCartButton;
