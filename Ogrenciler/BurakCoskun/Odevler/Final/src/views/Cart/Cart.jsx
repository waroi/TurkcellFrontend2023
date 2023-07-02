import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartCard from "../../components/CartCard/CartCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { removeFromCart, clearCart } from "../../redux/slices/cartSlice";
import { Carts, Products } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  const cartDatabase = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    const updatedCartProducts = products
      .map((product) => {
        const cartProduct = cartDatabase[0]?.products.find(
          (cartProduct) => cartProduct.productId === product.id
        );
        return cartProduct
          ? { ...product, quantity: cartProduct.quantity }
          : null;
      })
      .filter((product) => product !== null);

    setCartProducts(updatedCartProducts);
  }, [products, cartDatabase]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const cartProductIds = cartProducts.map((product) => product.id);
      return !cartProductIds.includes(product.id);
    });

    const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5);

    setRandomProducts(shuffledProducts.slice(0, 4));
  }, [products]);

  useEffect(() => {
    if (cartProducts.length > 0 && cartDatabase.length > 0) {
      checkStockStatus(cartProducts);
    }
  }, [cartProducts, cartDatabase]);

  const checkStockStatus = async () => {
    for (const cartProduct of cartProducts) {
      const productStock = await fetchProductStock(cartProduct.id);
      const newStock = productStock - cartProduct.quantity;

      if (newStock < 0) {
        if (newStock === -cartProduct.quantity) {
          toast.error(`${cartProduct.title} is now out of stock!`);
        } else {
          toast.warn(`${cartProduct.title} has low stock!`);
        }
      }
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    const newCartDatabase = cartDatabase[0].products.filter(
      (product) => product.productId !== id
    );

    Carts.editOne(cartDatabase[0].id, {
      ...cartDatabase[0],
      products: newCartDatabase,
    });

    setCartProducts(cartProducts.filter((product) => product.id !== id));
  };

  const handleQuantity = async (id, quantity) => {
    const stock = await fetchProductStock(id);

    const newQuantity = Math.min(quantity, stock);
    setCartProducts((cartProducts) =>
      cartProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );

    const newCartDatabase = cartDatabase[0].products.map((product) =>
      product.productId === id ? { ...product, quantity: newQuantity } : product
    );

    Carts.editOne(cartDatabase[0].id, {
      ...cartDatabase[0],
      products: newCartDatabase,
    });

    if (quantity > stock) {
      if (stock === 0) {
        toast.error("This product is out of stock.");
      } else {
        toast.error(`You can add a maximum of ${stock} items to the cart.`);
      }
    }
  };

  const handleCheckout = async () => {
    const outOfStockProducts = [];
    const lowStockProducts = [];

    for (const cartProduct of cartProducts) {
      const productStock = await fetchProductStock(cartProduct.id);
      const newStock = productStock - cartProduct.quantity;

      if (newStock < 0) {
        if (newStock === -cartProduct.quantity) {
          outOfStockProducts.push(cartProduct.title);
        } else {
          lowStockProducts.push(cartProduct.title);
        }
      } else {
        delete cartProduct.quantity;
        Products.editOne(cartProduct.id, {
          ...cartProduct,
          rating: {
            ...cartProduct.rating,
            count: newStock,
          },
        });

        if (newStock < 0) {
          toast.warn(`${cartProduct.title} is now out of stock!`);
        }
      }
    }

    if (outOfStockProducts.length > 0) {
      const outOfStockMessage = outOfStockProducts.join(", ");
      toast.error(
        `The following products are out of stock: \n${outOfStockMessage}`
      );
      return;
    }

    if (lowStockProducts.length > 0) {
      const lowStockMessage = lowStockProducts.join(", ");
      toast.warn(`The following products have low stock: \n${lowStockMessage}`);
    }

    if (cartProducts.some((product) => product.quantity > 0)) {
      toast.info(
        "Some quantities exceed the available stock. Please adjust the quantities before proceeding to checkout."
      );
    } else {
      toast.error(
        "Cart is empty or all quantities are zero. Cannot proceed to checkout."
      );
    }
  };

  const emptyCart = () => {
    Carts.removeCart(cartDatabase[0].id);
    dispatch(clearCart());
  };

  const fetchProductStock = async (productId) => {
    const product = await Products.getOne(productId);
    return product.rating.count;
  };

  const handleClearCart = () => {
    if (cartProducts.length === 0) {
      toast.error("Cart is already empty.");
      return;
    }

    emptyCart();
    toast.success("Cart cleared successfully.");
  };

  const total = cartProducts
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className="container p-5 mt-5">
      <div className="row mt-5">
        <div className="col-6">
          <h1>Cart</h1>
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger text-white float-end"
            disabled={cartProducts.length === 0}
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <hr />
      </div>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <CartCard
            product={product}
            key={product.id}
            handleRemove={handleRemove}
            handleQuantity={handleQuantity}
          />
        ))
      ) : (
        <div className="row">
          <div className="col-12">
            <h3>Cart is empty</h3>
          </div>
        </div>
      )}
      <div className="row mt-5">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-between">
            <h3>Total: ${total}</h3>
            <button
              className="btn btn-success text-white"
              onClick={handleCheckout}
              disabled={cartProducts.length === 0 || total <= 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h3>You might also like</h3>
        </div>
        <div className="col-12">
          <div className="row">
            {randomProducts.map((product) => (
              <div className="col-lg-3 col-12" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
