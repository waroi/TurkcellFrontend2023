import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../Slider/Slider";
import ProductInfo from "../ProductInformatıon/ProductInformation";
import RandomProducts from "../RandomProduct/RandomProduct";
import Container from "../Container/Container";
import ProductDetailStyle from "./ProductDetailStyle";
import Guarantee from "../../../assets/dog-guarantee.png";
import GuaranteeMobile from "../../../assets/guarenteeMobile.png";
import Share from "../../../assets/Share.svg";
import Facebook from "../../../assets/Facebook - Negative.png";
import Instagram from "../../../assets/Instagram - Negative.png";
import Twitter from "../../../assets/Twitter - Negative.png";
import Youtube from "../../../assets/Youtube - Negative.png";
import EmocanSlider from "../EmocanSlider/EmocanSlider";
import { ToastContainer, toast } from "react-toastify";
import { setCartLength } from "../../redux/slices/cartLengthSlice";

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState({});
  const user = useSelector((state) => state.user.user);
  const [randomProducts, setRandomProducts] = useState([]);
  const cartLength = useSelector((state) => state.cartLength);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log("Error fetching product data:", err));
  }, [id]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((response) => {
      setRandomProducts(
        response.data
          .filter((responseProduct) => responseProduct.id != product.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 8)
      );
    });
  }, [product.id]);

  const handleCartClick = () => {
    if (product.rating?.count > 0) {
      toast.success("Added to cart");
      axios.get(`http://localhost:3000/carts/${user.id}`).then((response) => {
        const inCart = response.data.cart.find(
          (cartItem) => cartItem.productId == product.id
        );
        if (inCart) {
          if (inCart.count < product.rating?.count) {
            const newProduct = {
              productId: inCart.productId,
              title: inCart.title,
              price: inCart.price,
              image: inCart.image,
              count: inCart.count + 1,
            };
            const newCart = response.data.cart.map((cartItem) => {
              if (newProduct.productId == cartItem.productId) return newProduct;
              return cartItem;
            });
            axios.put(`http://localhost:3000/carts/${user.id}`, {
              id: user.id,
              cart: newCart,
            });
          } else console.log("You have hit the stock limit");
        } else {
          dispatch(setCartLength(cartLength + 1));
          const newProduct = {
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            count: 1,
          };
          axios.put(`http://localhost:3000/carts/${user.id}`, {
            id: user.id,
            cart: [...response.data.cart, newProduct],
          });
        }
      });
    } else {
      toast.error("This item is out of stock");
    }
  };

  return (
    <Container>
      <ProductDetailStyle>
        <div className="row justify-content-center mt-5 frame">
          <div className="col-lg-6 position-relative">
            <Slider img={product.image} />
            {product.rating?.count === 0 ? (
              <div className="out-of-stock">OUT OF STOCK</div>
            ) : (
              ""
            )}
            <img src={Guarantee} className="guarantee d-none d-lg-block" />
            <div className="d-none d-lg-flex gap-4 socials">
              <div className="d-flex share">
                <img src={Share} />
                Share:
              </div>
              <div className="d-flex gap-3">
                <div>
                  <img src={Facebook} />
                </div>
                <div>
                  <img src={Twitter} />
                </div>
                <div>
                  <img src={Instagram} />
                </div>
                <div>
                  <img src={Youtube} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 information">
            <ProductInfo
              product={product}
              handleCartClick={handleCartClick}
              isAdmin={user.isAdmin}
              setProduct={setProduct}
              toast={toast}
            />
          </div>
          <img src={GuaranteeMobile} alt="" className="d-lg-none guarantee" />
        </div>
        <EmocanSlider />
        <RandomProducts randomProducts={randomProducts} />
        <ToastContainer />
      </ProductDetailStyle>
    </Container>
  );
};

export default ProductDetail;
