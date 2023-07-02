/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../../services/requests";
import styles from "./productDetailView.module.css";
import SwiperCard from "../../components/Swiper/SwiperCard";
import Button from "../../components/Shared/Button";
import Magnifier from "react-magnifier";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../services/requests";
import { addItemToBasket, getBasketLenght } from "../../services/basket";
import { toast,ToastContainer  } from 'react-toastify';
import { setBasketCount } from "../../redux/slices/basketCountSlice";

const ProductDetailView = () => {
  const [product, setProduct] = useState();
  const [editableProduct, setEditableProduct] = useState(product);
  const [products, setProducts] = useState();
  const [count, setCount] = useState(1);
  const [changesMade, setChangesMade] = useState(false);

  const { id } = useParams();

  const user = useSelector((state) => state.userInfo.userInfo);
  const dispatch = useDispatch();

  const role = user?.payload?.role;

  const starRating = (stars) => "★★★★★✩✩✩✩✩".slice(5 - stars, 10 - stars);

  useEffect(() => {
    getProductById(id).then((res) => {
      setProduct(res);
      setEditableProduct({ ...res });
    });
    getAllProducts().then((res) => {
      const sortedProducts = res.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      setProducts(sortedProducts);
    });
  }, [id]);

  const handleInputChange = (field, value) => {
    setEditableProduct((prev) => ({ ...prev, [field]: value }));
    if (!changesMade) {
      setChangesMade(true);
    }
  };

  const handleNestedInputChange = (field, subfield, value) => {
    setEditableProduct((prev) => ({
      ...prev,
      [field]: { ...prev[field], [subfield]: value },
    }));
    if (!changesMade) {
      setChangesMade(true);
    }
  };

  const handleSave = async () => {
    await updateProduct(id, editableProduct);
    setProduct(editableProduct);
    setChangesMade(false);
  }
  
  const addToBasket = async() => {
    const add =await addItemToBasket(user?.payload?.id, {productId:product.id,quantity:count})
    typeof add === "string" ? toast.error(add):toast.success("Product added to basket")
    getBasketLenght(user?.payload?.id).then((res) => {
      dispatch(setBasketCount(res));
    }
    );
  };

  return (
    <>
      {product && (
        <div className={`row mt-lg-3 mt-0 ${styles.detailWrap} p-0 p-lg-5`}>
          <ToastContainer/>
          <div
            className="col-lg-6 col-sm-12 px-1 px-lg-5"
            style={{ maxHeight: "500px" }}
          >
            <Magnifier
              src={product.image}
              width="100%"
              style={{ maxHeight: "500px" }}
              className="img-fluid rounded-0 rounded-lg-3 px-0 px-lg-5"
            />
          </div>
          <div className="d-flex flex-column justify-content-between col-lg-6 col-sm-12 py-2 py-lg-0 gap-3 gap-lg-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item ">
                  <Link to="/products">Category</Link>
                </li>
                <li
                  className="breadcrumb-item active text-capitalize"
                  aria-current="page"
                >
                  {product.category}
                </li>
              </ol>
            </nav>
            <textarea
              value={editableProduct.title}
              className={styles.title}
              disabled={role !== "admin"}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            <textarea
              value={editableProduct.category}
              className={styles.category}
              disabled={role !== "admin"}
              onChange={(e) => handleInputChange("category", e.target.value)}
            />
            <textarea
              value={editableProduct.description}
              className={styles.description}
              disabled={role !== "admin"}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <p className="m-0 text-warning">
                  {starRating(Math.round(product.rating.rate))}
                </p>{" "}
                <p className="m-0 text-black">{product.rating.rate}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <input
                  value={editableProduct.rating.count}
                  className={styles.stock}
                  disabled={role !== "admin"}
                  onChange={(e) =>
                    handleNestedInputChange("rating", "count", e.target.value)
                  }
                />
                <p className={`m-0 ${editableProduct.rating.count===0&&"text-danger"}`}>{editableProduct.rating.count===0&&"Out of"} Stock</p>
              </div>
              <div className="d-flex align-items-center text-success">
                <p className="m-0">$</p>
                <input
                  value={editableProduct.price}
                  className={styles.price}
                  disabled={role !== "admin"}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                />
              </div>
            </div>
            <div className={styles["counter-wrapper"]}>
              <div className={styles.counter}>
                <button
                  className={`${styles["count-button"]} ${styles.dec}`}
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                  disabled={count <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={count}
                  className={styles.input}
                  onChange={(e) => setCount(Number(e.target.value))}
                  onBlur={() => {
                    count <= 1 && setCount(1);
                    count >= product.rating.count &&
                      setCount(product.rating.count);
                  }}
                />
                <button
                  className={`${styles["count-button"]} ${styles.inc}`}
                  onClick={() => {
                    if (count < product.rating.count) {
                      setCount(count + 1);
                    }
                  }}
                  disabled={count >= product.rating.count}
                >
                  +
                </button>
              </div>
              <Button handleClick={addToBasket} disabled={product.rating.count === 0 || count > product.rating.count }>Add to Basket</Button>
              {changesMade && (
                <button className={styles.save} onClick={handleSave}>
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="my-5">
        <h4>Popular products based on this item</h4>
        {products && (
          <SwiperCard cards={products.slice(0, 10)} setWindow={true} />
        )}
      </div>
    </>
  );
};

export default ProductDetailView;
