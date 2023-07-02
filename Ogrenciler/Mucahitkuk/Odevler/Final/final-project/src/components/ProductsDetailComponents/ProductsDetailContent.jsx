/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Container, Toast } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { SliderImage } from "./styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { productScheme } from "../../schema/index";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import detailFrame from "../../assets/detailframe.svg";
import detailFrame2 from "../../assets/detailframe2.svg";
import communication from "../../assets/communication.png";
import detailFacebook from "../../assets/detailFacebook.svg";
import detailInstagram from "../../assets/detailInstagram.svg";
import detailTwitter from "../../assets/detailTwitter.svg";
import detailYoutube from "../../assets/detailYoutube.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import {
  PageButton,
  PageButtonTwo,
} from "../HomeComponents/HeaderContent/styled";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import CustomerComponent from "./CustomerComponent/CustomerComponent";
import ProductsMore from "./ProductsMore/ProductsMore";

export const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [show, setShow] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const productCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const addToUserCart = (userId, productId, cart) => {
    // Fetch the selected product from the database based on the productId
    fetch(`http://localhost:3000/products?id=${productId}`)
      .then((response) => response.json())
      .then((productData) => {
        const product = productData[0];
  
        // Check if the product is already in the user's cart
        const existingProductIndex = cart.cart.findIndex(
          (item) => item.id === Number(productId)
        );
  
        if (existingProductIndex !== -1) {
          cart.cart[existingProductIndex];
          setShowToast(true);
    setToastMessage("Product already exist in cart");
    setTimeout(() => {
      setShowToast(false);
    }, 3000)
          return;
        }
  

      
      const productWithDemand = {
        ...product,
        demand: "1", 
      }
 
        const updatedCart = {
          ...cart,
          cart: [...cart.cart, productWithDemand],
        };
  
        fetch(`http://localhost:3000/carts/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCart),
        })
          .then((response) => response.json())
          .catch((error) => {
            console.error("Error updating user's cart:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };
  
  const addToCart = () => {
 
    if (!productId) {
      console.error("No product selected");
      return;
    }
  
    
    const loggedInUserInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    const userId = loggedInUserInfo.id;
  
  
    fetch(`http://localhost:3000/carts?id=${userId}`)
      .then((response) => response.json())
      .then((cartData) => {
  
        let cart;
        if (cartData.length === 0) {
    
          cart = {
            id: userId,
            cart: [],
          };
  
          fetch(`http://localhost:3000/carts?id=${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
          })
            .then((response) => response.json())
            .then((createdCart) => {
              console.log("User's cart created:", createdCart);
              addToUserCart(userId, productId, createdCart);
            })
            .catch((error) => {
              console.error("Error creating user's cart:", error);
            });
        } else {
          cart = cartData[0];
          setShowToast(true);
    setToastMessage("Product added to cart");
    setTimeout(() => {
      setShowToast(false);
    }, 3000)
          addToUserCart(userId, productId, cart);
        }
      })
      .catch((error) => {
        console.error("Error fetching user's cart:", error);
      });
  };
  
  
  const handleAddToCart = () => {
    addToCart();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setEditedProduct(product);
  };

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "rate" || name === "count") {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        rating: {
          ...prevProduct.rating,
          [name]: parseFloat(value),
        },
      }));
    } else {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = () => {
    fetch(`http://localhost:3000/products/${editedProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setShow(false);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };


  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <>
    <Container className="rounded-3 border p-4">
      <div className="d-flex row">
        <div className="col-md-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              marginBottom: "10px",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <SliderImage src={product.image} className="rounded-3" />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
          </Swiper>
          <div
            style={{ background: "#FCEED5" }}
            className="d-flex row rounded-4 mt-3 justify-content-between p-1"
          >
            <div className="col-md-6 text-center">
              <img src={detailFrame} className="m-2" />
              <span>100% health guarantee for pets</span>
            </div>
            <div className="col-md-6 text-center ">
              <img src={detailFrame2} className="m-2" />
              <span>100% health guarantee for pets</span>
            </div>
          </div>
          <div className="d-flex row mt-3">
            <div className="d-flex gap-3">
              <img src={communication} />
              <span>Share: </span>
              <img src={detailFacebook} />
              <img src={detailTwitter} />
              <img src={detailInstagram} />
              <img src={detailYoutube} />
            </div>
          </div>
        </div>
        <div className="d-flex col-md-6 flex-column">
          <div>
            <Link className="text-secondary" to="/">
              Home &nbsp;
            </Link>
            <span className="text-secondary">&gt;</span>
            <Link className="text-secondary" to="/Product">
              &nbsp; Products &nbsp;
            </Link>
            <span className="text-secondary">&gt;</span>
            <span className="text-secondary">&nbsp; {product.title}</span>
          </div>
          <div className="d-flex flex-column mt-4">
            <span className="text-secondary">Product Id: #{product.id}</span>
            <p style={{ fontSize: "24px" }}>{product.title}</p>
            <p style={{ color: "#002A48", fontSize: "20px" }}>
              {product.price} Dolars
            </p>
          </div>
          <div className="d-flex flex-row gap-3 mt-1">
            {!currentUser ? (
              <Link to="/login">
                <PageButtonTwo>Login to buy</PageButtonTwo>
              </Link>
            ) : (
              <PageButtonTwo onClick={handleAddToCart} disabled={product.rating.count === 0}>
                Add to cart
              </PageButtonTwo>
            )}
            <PageButton>Chat with Monito</PageButton>
            {currentUser?.name === "admin" && (
              <PageButtonTwo onClick={handleShow}>Edit Product</PageButtonTwo>
            )}
          </div>
          <div className="d-flex mt-3 justify-content-center">
          <Toast className='bg-success' show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{toastMessage}</Toast.Body>
        </Toast>
        </div>
          <div className="d-flex flex-row mt-4">
            
            <div className="d-flex col-md-6">
              <span className="text-secondary">ID: &nbsp;</span>
            </div>
            <div className="d-flex col-md-6">
              <span className="text-secondary">#{product.id}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span className="text-secondary">Category: &nbsp;</span>
            </div>
            <div className="d-flex col-md-6">
              <span className="text-secondary">{product.category}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span className="text-secondary">Rating: &nbsp;</span>
            </div>
            <div className="d-flex col-md-6">
              <span className="text-secondary">{product.rating.rate}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span className="text-secondary">Stock Amount: &nbsp;</span>
            </div>
            <div className="d-flex col-md-6">
              <span className="text-secondary">{product.rating.count}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span className="text-secondary">Description: &nbsp;</span>
            </div>
            <div className="d-flex col-md-6">
              <span className="text-secondary">{product.description}</span>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editedProduct && (
            <Formik
              initialValues={editedProduct}
              validationSchema={productScheme}
              onSubmit={handleSaveChanges}
            >
              {({ handleSubmit, handleChange, values, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                      Id
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <Field
                      type="text"
                      className={`form-control ${
                        errors.image ? "is-invalid" : ""
                      }`}
                      id="image"
                      name="image"
                      value={values.image}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="image"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <Field
                      type="text"
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      id="title"
                      name="title"
                      value={values.title}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <Field
                      as="select"
                      className={`form-control ${
                        errors.category ? "is-invalid" : ""
                      }`}
                      id="category"
                      name="category"
                      value={values.category}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    >
                      {productCategories.map((category, index) => (
                        <option key={index}>{category}</option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rate" className="form-label">
                    Rating
                    </label>
                    <Field
                      type="number"
                      className={`form-control ${
                        errors.rate  ? "is-invalid" : ""
                      }`}
                      id="rate"
                      name="rate"
                      
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="rate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Set Price
                    </label>
                    <Field
                      type="number"
                      className={`form-control ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      id="price"
                      name="price"
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="count" className="form-label">
                      Stock Amount
                    </label>
                    <Field
                      type="number"
                      className={`form-control ${
                        errors.count ? "is-invalid" : ""
                      }`}
                      id="count"
                      name="count"
                  
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="count"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <Field
                      as="textarea"
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={(event) => {
                        handleChange(event);
                        handleInputChange(event);
                      }}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          )}
        </Modal.Body>
      </Modal>
    </Container>
    <Container className="mt-5">
      <h2>Our Lovely Customers</h2>
      <div className="d-flex mt-3">
      <CustomerComponent />
      </div>
    </Container>
    <Container className="mt-5">
      <p>Whats new?</p>
      <h2 style={{fontSize: "24px", color:"#003459"}}>See More Products</h2>
      <ProductsMore />
    </Container>
    </>
  );
};

export default ProductDetail;
