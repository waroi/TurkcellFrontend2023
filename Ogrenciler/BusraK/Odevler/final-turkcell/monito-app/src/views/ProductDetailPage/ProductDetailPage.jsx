import React, { useEffect, useState } from "react";
import { setUsername, setLoginStatus } from "../../redux/slices/mainSlice";
import { addToCart, updateCart } from "../../redux/slices/cartSlice";

import CategoryFilter from "../../components/Filters/CategoryFilter";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products/Products";
import StButton from "../../components/Button/Button";
import { Container, Div, P, H1 } from "./ProductDetailPageStyle";
import dots from "../../assets/Icon/Chat_Dots.png";
import frameDog from "../../assets/Icon/FrameDog.png";
import frameCat from "../../assets/Icon/FrameCat.png";
import facebook from "../../assets/Icon/FacebookNegative.png";
import instagram from "../../assets/Icon/InstagramNegative.png";
import twitter from "../../assets/Icon/TwitterNegative.png";
import youtube from "../../assets/Icon/YoutubeNegative.png";
import share from "../../assets/Icon/Share_Android.png";
import { toast } from "react-toastify";
const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const { username } = useParams();
  const isLoggedIn = useSelector((state) => state.root.isLogin);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleAddToCart = async (product) => {
    if (!isLoggedIn) {
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.username,
      price: product.price,
      quantity: 1,
      stock: product.rating.count,
      image: product.image,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const cartItems = await response.json();
      const existingCart = cartItems.find((cart) => cart.userId === username);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (item) => item.id === cartItem.id
        );

        if (existingItem) {
          const updatedItems = existingCart.items.map((item) => {
            if (item.id === cartItem.id) {
              if (item.quantity < cartItem.stock) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                alert("Stock is not enough");
              }
            }

            return item;
          });

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
        } else {
          const updatedItems = [...existingCart.items, cartItem];

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
        }
      } else {
        const createResponse = await fetch("http://localhost:3000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: username,
            items: [cartItem],
          }),
        });

        if (!createResponse.ok) {
          throw new Error("Failed to create cart on the server.");
        }

        dispatch(addToCart({ userId: username, items: [cartItem] }));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setTimeout(async () => {
        try {
          const response = await fetch(`http://localhost:3000/products/${id}`);
          const productData = await response.json();
          setProduct(productData);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }, 500);
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const productsData = await response.json();
        shuffleArray(productsData);
        const limitedProducts = productsData.slice(0, 8);
        setProducts(limitedProducts);
        const uniqueCategories = [
          ...new Set(limitedProducts.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(user.isLogin));
          }
        } else {
          throw new Error("Failed to fetch user information");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    const checkUserSession = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?isLogin=true`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(true));
          }
        } else {
          throw new Error("Failed to check user session");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (isLoggedIn && username === "") {
      fetchUser();
    } else if (!isLoggedIn) {
      checkUserSession();
    }
  }, [isLoggedIn, username, dispatch]);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Error loading product details.</div>;
  }

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <Container className="container mx-auto">
      <div className="d-flex justify-content-center align-items-center row mx-2 border rounded mb-5 pt-5 ">
        <div className="col-md-7 p-3  ">
          <div>
            <div
              id="carouselIndicators"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner mb-5">
                <div className="carousel-item active">
                  <img
                    src={product.image}
                    className="d-block  w-50 h-25 mx-auto rounded"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.image}
                    className="d-block w-50 h-25 mx-auto rounded"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.image}
                    className="d-block w-50 h-25 mx-auto rounded"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark rounded-circle  "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden ">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark rounded-circle me-5"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>

              <div
                className="carousel-indicators"
                style={{ marginBottom: "-20px" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  style={{ width: "100px" }}
                >
                  <img
                    className="d-block w-100 object-fit-sm-contain rounded-3 object-fit-cover"
                    src={product.image}
                    alt="Thumbnail 1"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  style={{ width: "100px", borderRadius: "50%" }}
                >
                  <img
                    className="d-block w-100 object-fit-sm-contain rounded-3 object-fit-cover"
                    src={product.image}
                    alt="Thumbnail 2"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  style={{ width: "100px", borderRadius: "50%" }}
                >
                  <img
                    className="d-block w-100 object-fit-sm-contain rounded-3 object-fit-cover"
                    src={product.image}
                    alt="Thumbnail 3"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  style={{ width: "100px", borderRadius: "50%" }}
                >
                  <img
                    className="d-block w-100 object-fit-sm-contain rounded-3 object-fit-cover"
                    src={product.image}
                    alt="Thumbnail 3"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  style={{ width: "100px", borderRadius: "50%" }}
                >
                  <img
                    className="d-block w-100 object-fit-sm-contain rounded-3 object-fit-cover"
                    src={product.image}
                    alt="Thumbnail 3"
                    style={{
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </button>
                <div className="d-flex justify-content-center align-items-center"></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center row  ">
            <div className="d-flex align-items-center w-75 ms-5  mt-5   info-text">
              <div className="d-flex  col-md-6 gap-2 ">
                <img src={frameDog} />
                <p>100% health guarantee for pets</p>
              </div>
              <div className="d-flex  col-md-6 gap-2">
                <img src={frameCat} />
                <p>100% health guarantee for pets</p>
              </div>
            </div>
            <div className="d-flex gap-3 icons ms-5 mt-4 ">
              <img src={share} />
              <p>Share:</p>
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
              <img src={youtube} />
            </div>
            <div></div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-left text-start row gap-2  col-md-4 table-text">
          <div className="d-flex row gap-3">
            <div className="d-flex">Home Dogs Large Dog Shiba Inu Sepia</div>
            <div className="d-flex">SKU #1000078</div>
            <div className="d-flex">Shiba Inu Sepia</div>
            <div>34.000.000 VND</div>
            <div className="d-flex gap-2 col">
              <StButton type="dark-blue" text="Contact Us" />
              <StButton
                image={dots}
                type="no-color-icon"
                text="Chat with Monito"
              />
            </div>
            <Products />
          </div>

          <table className="table mt-5">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <td>SKU</td>
                <td> :#1000078</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:Female</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:2 Months</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>:Small</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>: Appricot & Tan</td>
              </tr>
              <tr>
                <td>Vaccinated</td>
                <td>:Yes</td>
              </tr>
              <tr>
                <td>Dewormed</td>
                <td>:Yes</td>
              </tr>
              <tr>
                <td>Cert</td>
                <td>: Yes (MKA)</td>
              </tr>
              <tr>
                <td>Microchip</td>
                <td>: Yes</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>: Vietnam</td>
              </tr>
              <tr>
                <td>Published Date</td>
                <td>: 12-Oct-2022</td>
              </tr>
              <tr>
                <td>Additional Information</td>
                <td>
                  :Pure breed Shih Tzu.
                  <br /> Good body structure. <br /> With MKA cert and
                  Microchip. <br /> Father from champion lineage.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Div className="text-start d-flex row gap-3">
        <div>
          <H1>Our lovely customer</H1>
          <CategoryFilter
            limit={4}
            categories={categories}
            products={otherProducts}
            sort=""
            priceMin=""
            priceMax=""
            handleAddToCart={handleAddToCart}
            username={username}
            className="mt-5 "
          />
        </div>
        <div className="mt-5 mb-5 ">
          <P>What's New</P>
          <H1>See more puppies</H1>
          <CategoryFilter
            limit={4}
            categories={categories}
            products={otherProducts}
            sort=""
            priceMin=""
            priceMax=""
            handleAddToCart={handleAddToCart}
            username={username}
          />
        </div>
      </Div>
    </Container>
  );
};

export default ProductDetailPage;
