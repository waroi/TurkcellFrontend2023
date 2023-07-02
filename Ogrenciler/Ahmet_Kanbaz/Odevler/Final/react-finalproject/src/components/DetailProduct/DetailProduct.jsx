/* eslint-disable no-undef */
import { Link, useParams } from "react-router-dom";
import Button from "../../common/Button/Button";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { DetailProductContainer } from "./DetailProductStyle";
import { FiShare2 } from "react-icons/fi";
import ProductSlider from "./ProductSlider/ProductSlider";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import RandomProducts from "./RandomProducts/RandomProducts";
import DetailTable from "./DetailTable/DetailTable";
import { fetchDetailProduct } from "../../utils/request";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateProduct from "./UpdateProduct/UpdateProduct";
import { AiOutlineEdit } from "react-icons/ai";
import { handleProductAdd2Cart } from "../../helpers/addCartHelper";
import Toast from "../../common/Toast/Toast";
import Quarantee from "./Quarantee/Quarantee";
const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const detailProduct = useSelector(
    (state) => state.detailProduct.detailProduct
  );
  const loading = useSelector((state) => state.detailProduct.loading);
  const error = useSelector((state) => state.detailProduct.error);
  const loginUser = useSelector((state) => state.user.user);
  const loginUserCart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [id]);

  const productImages = [
    detailProduct.image,
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];

  const handleAdd2Cart = () => {
    handleProductAdd2Cart(detailProduct, loginUser, loginUserCart, dispatch);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <DetailProductContainer>
      <div className="container">
        <div className="detailContainerWrapper p-3">
          <div className="row">
            <div className="col-lg-6 col-12">
              <ProductSlider images={productImages} />
              <div className="d-none d-lg-block">
                <Quarantee />
              </div>
              <div className="align-items-center gap-4 d-none d-lg-flex">
                <div className="d-flex gap-1 align-items-center">
                  <FiShare2 size="1.25rem" cursor="pointer" />
                  <h6 className="fw-bold align-items-center pt-2">Share:</h6>
                </div>
                <div className="d-flex gap-3 opacity-50">
                  <BsFacebook size="1.25rem" cursor="pointer" />
                  <BsTwitter size="1.25rem" cursor="pointer" />
                  <BsInstagram size="1.25rem" cursor="pointer" />
                  <BsYoutube size="1.25rem" cursor="pointer" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <nav
                style={{
                  "--bs-breadcrumb-divider": "'>'",
                }}
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"} className="text-decoration-none text-black">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to={"/products"}
                      className="text-decoration-none text-black"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Product Detail</li>
                </ol>
              </nav>
              <h4 className="fw-bold">{detailProduct.title}</h4>
              <h5 className="fw-bold lh-lg">{detailProduct.price} VND</h5>
              <div className="d-flex gap-3 pb-md-3 pb-0">
                <Button
                  padding="0.875rem 1.75rem"
                  buttonText="Contact us"
                  color="#FDFDFD"
                  backgroundcolor="#003459"
                  fontSize="1rem"
                  className="fw-bold"
                />
                <Button
                  padding="0.875rem 1.75rem"
                  buttonText="Chat with Monito"
                  color="#002A48"
                  backgroundcolor="transparent"
                  icon={<LiaCommentDotsSolid size="1.5rem" color="#002A48" />}
                  iconPosition="left"
                  fontSize="1rem"
                  className="fw-bold"
                />
              </div>
              <div className="d-flex d-md-none justify-content-between align-items-center">
                <h4 className="fw-bold">Information</h4>
                <div className="d-flex gap-1 py-3">
                  <FiShare2 size="1.5rem" />
                  <h5 className="fw-bold align-items-center share">Share</h5>
                </div>
              </div>
              <DetailTable detailProduct={detailProduct} />
              {detailProduct.rating?.count == 0 &&
                loginUser.isAdmin != true &&
                text -
                  black(
                    <div className="d-flex justify-content-center">
                      <Button
                        buttonText="Let me know when it arrives"
                        padding=".33rem 1rem"
                        color="#FDFDFD"
                        className="bg-danger fw-bold"
                        fontSize=".9rem"
                        onClick={() =>
                          Toast({
                            message:
                              "Ürün stoklara geldiğinde size haber vereceğiz.",
                            type: "success",
                          })
                        }
                      />
                    </div>
                  )}
              <div className="d-flex d-lg-none">
                <Quarantee />
              </div>
              <div className="d-flex justify-content-evenly">
                {detailProduct.rating?.count > 0 && (
                  <Button
                    buttonText="Add to cart"
                    padding=".325rem 1rem"
                    color="#FDFDFD"
                    backgroundcolor="#003459"
                    fontSize=".9rem"
                    className="fw-bold"
                    onClick={handleAdd2Cart}
                    disabled={detailProduct.rating?.count == 0}
                  />
                )}

                {loginUser.isAdmin == true && (
                  <div className="d-flex justify-content-lg-end justify-content-center">
                    <Button
                      onClick={handleShow}
                      padding=".325rem 1rem"
                      buttonText="Update Product"
                      color="#FDFDFD"
                      backgroundcolor="#003459"
                      fontSize=".9rem"
                      icon={<AiOutlineEdit />}
                      iconPosition="left"
                      className="fw-bold"
                    />
                  </div>
                )}
              </div>
              {show == true && (
                <UpdateProduct
                  detailProduct={detailProduct}
                  show={show}
                  handleClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
        <RandomProducts id={id} />
      </div>
    </DetailProductContainer>
  );
};

export default DetailProduct;
