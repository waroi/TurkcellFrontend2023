import  { useState,useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { deleteCurrProduct, updateProducts } from "../../redux/slices/productSlice";
import style from "./style.module.css";
import DetailPageCard from "../../components/detailPageCard/DetailPageCard";
import { SearchSchema } from "../../schemas";
import { getData } from "../../redux/helpers";
import { handleCard } from "../../redux/slices/cardSlice";
const ProductDetail = () => {
  const params = useParams();
  const data = useSelector((state) => state.products).products;
  const userData = useSelector((state) => state.users).currentlyLoggedIn;
  const findedProduct = data.find((item) => item.id == params.id);
  const [editted, setEditted] = useState(false);
  const [currData,setCurrData] = useState(findedProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsArray = Array.from(data);
  const shuffledData = productsArray?.sort(() => Math.random() - 0.5);
  const cardData = {
    "userid": userData.id,
    "itemid": findedProduct.id,
    "count": 1,
    "image": findedProduct.image,
    "title":findedProduct.title,
    "price": findedProduct.price
  }
  async function handleClick(){
    await dispatch(handleCard(cardData));
    const data = await getData();
    toast.success("Products Added To Card", {
      autoClose: 2000,
    });
    await dispatch(getProducts(data));
  }
  async function deleteProducts(id) {
    await dispatch(deleteCurrProduct(id));
    await toast.error("Product deleted", {
      autoClose: 2000,
    });
    await navigate("/");
    const data = await getData();
    await dispatch(getProducts(data));
  }
  async function onSubmit(values, actions) {
    await dispatch(updateProducts(values));
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    actions.resetForm();
    await setTimeout(() => {
      setEditted(false);
      toast.success("Products Updated", {
        autoClose: 2000,
      });
    }, 500)
    await setCurrData(values);
  };



  const formik = useFormik({
    initialValues: {
      id: `${currData.id}`,
      title: `${currData.title}`,
      price: `${currData.price}`,
      description: `${currData.description}`,
      category: `${currData.category}`,
      image: `${currData.image}`,
      rate: `${currData.rating?.rate || currData.rate}`,
      count: `${currData.rating?.count || currData.count}`,

    },

    onSubmit
  });
  return (
    <div className=" position-relative">
      <ToastContainer />
      <div className="container">
        <div className="d-flex ">
          <div className={`mt-100`}>
            <div className="row">
              <div className={`col-12 p-lg-20 mt-lg-20 ${style.productArea}`}>
                <div className="row">
                  <div className="col-lg-6 pe-lg-34">
                    <div id="productCarousel" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src={currData.image}
                            className="d-block w-100 px-5"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={`https://picsum.photos/id/${Math.floor(
                              Math.random() * 1000
                            )}/900/900`}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={`https://picsum.photos/id/${Math.floor(
                              Math.random() * 1000
                            )}/900/900`}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#productCarousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#productCarousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="bg-secondary rounded-2 mt-3 px-14 py-2">
                      <div className="row">
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                          <img src="../../../images/Frame1.svg" alt="" />
                          <div className="display-14 text-primary fw-semibold ms-2">
                            100% health guarantee for users
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center text-start">
                          <img src="../../../images/Frame2.png" alt="" />
                          <div className="display-14 text-primary fw-semibold ms-2">
                            100% guarantee of products
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-start d-none d-lg-flex gap-3  align-items-center mt-4">
                      <div className="d-flex align-items-center">
                        <img src="../../../images/Share_Android.png" alt="" />
                        <p className="m-0 p-0 ms-1 text-primary">Share:</p>
                      </div>
                      <a href="">
                        <i
                          className={`fa-brands fa-facebook fa-lg ${style.iconColored}`}
                        ></i>
                      </a>
                      <a href="">
                        <i
                          className={`fa-brands fa-instagram fa-lg ${style.iconColored}`}
                        ></i>
                      </a>
                      <a href="">
                        <i
                          className={`fa-brands fa-twitter fa-lg ${style.iconColored}`}
                        ></i>
                      </a>
                      <a href="">
                        <i
                          className={`fa-brands fa-linkedin fa-lg ${style.iconColored}`}
                        ></i>
                      </a>
                    </div>
                  </div>
              <form onSubmit={formik.handleSubmit} className="col-lg-6 ps-lg-0">
                    <div className={`d-flex align-items-center ${style.iconColored}`}>
                      <p className={`${editted ? "d-none" : "d-block"}`}>
                        PRO #{currData.id}
                      </p>
                      <input
                        disabled={formik.isSubmitting}
                        id="id"
                        name="id"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        placeholder="Please Enter title"
                        className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mb-3 shadow-sm `}
                      />
                      {formik.errors.id && <div className='text-danger error'>{formik.errors.id}</div>}
                    </div>

                    <div className="fs-3 fw-semibold text-primary mb-1">
                      <label htmlFor="title" className={`${editted ? "d-none" : "d-block"}`}>
                        {" "}
                        {currData.title}
                      </label>
                      <input
                        disabled={formik.isSubmitting}
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder="Please Enter title"
                        className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-2 mb-3 shadow-sm`}
                      />
                      {formik.errors.title && <div className='text-danger error'>{formik.errors.title}</div>}

                    </div>
                    <div className="fs-4 fw-semibold text-primary">
                      <label htmlFor="price" className={`${editted ? "d-none" : "d-block"}`}>
                        {" "}
                        {currData.price} $
                      </label>
                      <input
                        disabled={formik.isSubmitting}
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder="Please Enter  price"
                        className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-3 shadow-sm`}
                      />
                      {formik.errors.price && <div className='text-danger error'>{formik.errors.price}</div>}

                    </div>
                    <div className="d-flex">
                      <div
                        className={`btn btn-primary mt-3 rounded-pill px-175 py-2`}
                        onClick={() => handleClick()}
                      >
                        Add To Card
                      </div>
                      <div
                        className={`btn btn-outline-primary mt-3 ms-3 rounded-pill px-175 py-2`}
                      >
                        <img
                          src="../../../images/Chat_Dots.png"
                          alt=""
                          className="me-2"
                        />
                        Contact With Seller
                      </div>
                    </div>
                    <div>
                      <table className={`${style} mt-3`}>
                        <tbody>
                          <tr>
                            <td className={style.smallWidth}><label htmlFor="category">Category</label></td>
                            <td>
                              <span
                                className={`${editted ? "d-none" : "d-block"}`}
                              >
                                : {currData.category}
                              </span>

                              <input
                                disabled={formik.isSubmitting}
                                id="category"
                                name="category"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.category}
                                placeholder="Please Enter category"
                                className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-2 shadow-sm`}
                              />
                              {formik.errors.category && <div className='text-danger error'>{formik.errors.category}</div>}

                            </td>
                          </tr>
                          <tr>
                            <td className={style.smallWidth}>Description</td>
                            <td>
                              <span
                                className={`${editted ? "d-none" : "d-block"}`}
                              >
                                : {currData.description}
                              </span>
                              <textarea
                                disabled={formik.isSubmitting}
                                id="description"
                                name="description"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                placeholder="Please Enter description"
                                className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 mt-2 shadow-sm `}
                              />
                              {formik.errors.description && <div className='text-danger error'>{formik.errors.description}</div>}

                            </td>
                          </tr>
                          <tr>
                            <td className={style.smallWidth}><label htmlFor="rate">Rating</label></td>
                            <td>
                              <span
                                className={`${editted ? "d-none" : "d-block"}`}
                              >
                                : {currData.rating?.rate || currData.rate}
                              </span>
                              <input
                                disabled={formik.isSubmitting}
                                id="rate"
                                name="rate"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.rate}
                                className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-2 shadow-sm`}
                              />
                              {formik.errors.rate && <div className='text-danger error'>{formik.errors.rate}</div>}

                            </td>
                          </tr>
                          <tr>
                            <td className={style.smallWidth}><label htmlFor="count">Count</label></td>
                            <td>
                              <span
                                className={`${editted ? "d-none" : "d-block"}`}
                              >
                                : {currData.rating?.count || currData.count}
                              </span>
                              <input
                                disabled={formik.isSubmitting}
                                id="count"
                                name="count"
                                type="number"
                                onChange={formik.handleChange}
                                value={formik.values.count}
                                placeholder="Please Enter count"
                                className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-2 shadow-sm`}
                              />
                              {formik.errors.count && <div className='text-danger error'>{formik.errors.count}</div>}

                            </td>
                          </tr>
                          <tr className={`${editted ? "d-block" : "d-none"}`}>
                            <td className={style.smallWidth}><label htmlFor="image">image Url</label></td>
                            <td>
                              <input
                                disabled={formik.isSubmitting}
                                id="image"
                                name="image"
                                type="url"
                                onChange={formik.handleChange}
                                value={currData.image}
                                placeholder="Please Enter a Username..."
                                className={`${editted ? "d-block" : "d-none"} ${style.editInput} w-100 rounded-pill mt-2 shadow-sm`}
                              />
                              {formik.errors.image && <div className='text-danger error'>{formik.errors.image}</div>}

                            </td>
                          </tr>
                          <tr>
                            <td className={style.smallWidth}>Comments</td>
                            <td>: {currData.rating?.count || currData.count}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {userData && (
                      <div className={` gap-3 ${userData.isAdmin ? "d-flex" : "d-none" }`}>
                        <div
                          disabled={formik.isSubmitting}
                          onClick={() => deleteProducts(currData.id)}
                          className={`btn btn-danger mt-3 rounded-pill px-175 py-2 text-white`}
                        
                        >
                          Delete
                        </div>
                        <div
                          onClick={() => setEditted(true)}
                          className={`btn btn-secondary mt-3 rounded-pill px-175 py-2 ${editted ? "d-none" : "d-block"
                            }`}
                        >
                          Edit Product
                        </div>
                        <button onClick={() => setEditted(false)} disabled={formik.isSubmitting} className={`btn btn-secondary mt-3 rounded-pill px-175 py-2 ${editted ? "d-block" : "d-none"
                          }`} type="submit">
                          {formik.isSubmitting ?
                            <div className="spinner-border text-primary spinner-border-sm" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div> : "Submit"
                          }
                        </button>
                      </div>
                    )}

                  </form>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-4 pb-80 mt-2 pt-36">
                  <div className="col-12">
                    <h6 className="h6 d-none d-lg-block">Whats New?</h6>
                    <h4 className="h4 text-capitalize fw-semibold text-primary">
                      Take a look at some of our products.{" "}
                    </h4>
                  </div>

                  {shuffledData &&
                    shuffledData
                      .slice(0, 8)
                      .map((item) => (
                        <DetailPageCard key={item.id} item={item} />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
